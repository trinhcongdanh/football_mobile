import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, BackHandler, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IRegisterScreenProps } from './RegisterScreen.type';
import {
    AccessToken,
    GraphRequest,
    GraphRequestManager,
    LoginManager,
    Profile,
} from 'react-native-fbsdk-next';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { registerNumberPhoneUser } from 'src/store/user/RegisterNumberPhone.slice';
import { ACTION, TOKEN } from '@football/core/api/auth/config';
import qs from 'qs';
import { useIsFocused } from '@react-navigation/native';
import { clearAllData } from '@football/app/utils/functions/clearAllData';
import { clearUserData } from '@football/app/utils/functions/clearUserData';
import { otpUser, setInfoSocial } from 'src/store/user/OTP.slice';
import { env } from 'src/config';
import { setProfileUser, statusSetProfile } from 'src/store/user/setProfile.slice';

export const useViewModel = ({ navigation, route }: IRegisterScreenProps) => {
    const { t } = useTranslation();
    const { goBack, navigate } = useAppNavigator();
    const dispatch = useDispatch<any>();
    function serializeParams(obj: any) {
        const a = qs.stringify(obj, { encode: false, arrayFormat: 'brackets' });
        return a;
    }

    const [errors, setErrors] = useState({
        numberPhone: '',
    });
    const handleError = (errorMessage: string, input: string) => {
        setErrors(prevState => ({ ...prevState, [input]: errorMessage }));
    };
    const phoneNumberRef = useRef<any>(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const handleOnChange = (e: string) => {
        setPhoneNumber(e);
        // console.log(e);
    };

    const guestId = useSelector((state: any) => state.guestId.guestId);
    const profile = useSelector((state: any) => state.createProfile.profile);
    const login = useSelector((state: any) => state.login);
    const numberPhone = useSelector((state: any) => state.numberPhoneUser);
    const otp = useSelector((state: any) => state.otpUser);

    const connect = () => {
        Keyboard.dismiss();
        dispatch(
            registerNumberPhoneUser(
                serializeParams({
                    action: ACTION,
                    token: login.login.token,
                    call: AuthData.REGISTER_SMS,
                    guest_guid: guestId[0],
                    guest_id: login.login.user.item_id,
                    item: {
                        sms_phone: encodeURIComponent(phoneNumber),
                        // sms_phone: ''.
                    },
                })
            )
        );
    };
    const isFocused = useIsFocused();
    useEffect(() => {
        if (!isFocused) return;
        if (numberPhone.successRegister === true) {
            navigate(ScreenName.VerifyPage, {
                number: phoneNumber,
                previous_screen: ScreenName.RegisterPage,
            });
        }
        if (numberPhone.successRegister === false && numberPhone.loadingRegister === false) {
            handleError(t('register.invalid'), 'numberPhone');
        }
    }, [numberPhone.successRegister, isFocused, numberPhone.loadingRegister]);

    const [imgUrl, setImgUrl] = useState<string>();
    const [name, setName] = useState<string>();
    const [date, setDate] = useState<string>();
    const [gender, setGender] = useState<string>();

    const getInfoFromToken = useCallback((token: string) => {
        const PROFILE_REQUEST_PARAMS = {
            fields: {
                string: 'id, name, first_name, last_name, email, picture, birthday, gender, link',
            },
        };
        // getProfile
        const profileRequest = new GraphRequest(
            '/me',
            { token, parameters: PROFILE_REQUEST_PARAMS },
            (error, result: any) => {
                if (error) {
                    console.log('Login Info has an error:', error);
                } else {
                    console.log('result:', result);
                    dispatch(setInfoSocial(result));
                    // setImgUrl(result.picture.data.url);
                    // setName(result.name);
                    // setDate(result.birthday);
                    // setGender(result.gender);
                }
            }
        );
        new GraphRequestManager().addRequest(profileRequest).start();
    }, []);

    const connectFacebook = useCallback(async () => {
        await LoginManager.logInWithPermissions(['public_profile', 'email']).then(
            async (result: any) => {
                console.log('login is progressing.');
                if (result.isCancelled) {
                    console.log('login is cancelled.');
                } else {
                    await Profile.getCurrentProfile().then(currentProfile => {
                        if (currentProfile) {
                            console.log(currentProfile);
                        }
                    });
                    await AccessToken.getCurrentAccessToken().then((data: any) => {
                        console.log(data);
                        getInfoFromToken(data?.accessToken.toString());
                        if (data) {
                            dispatch(
                                otpUser(
                                    serializeParams({
                                        action: ACTION,
                                        token: login.login.token,
                                        guest_guid: guestId[0],
                                        guest_id: login.login.user.item_id,
                                        call: AuthData.REGISTER,
                                        item: {
                                            facebook_app_id: env.FACEBOOK_APPID,
                                            facebook_app_secret: env.FACEBOOK_SECRET_KEY,
                                        },
                                    })
                                )
                            );
                        }
                    });
                }
            }
        );
    }, [getInfoFromToken]);

    useEffect(() => {
        if (otp.success) {
            dispatch(statusSetProfile(null));
            navigate(ScreenName.RegPage);
        }
    }, [otp.success]);

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '476796468470-2e0e3qgmfo76l4c2juqiu3gvgmts0v32.apps.googleusercontent.com',
            offlineAccess: true,
        });
    }, []);

    const connectGoogle = useCallback(async () => {
        try {
            await GoogleSignin.hasPlayServices();
            await GoogleSignin.signIn().then((result: any) => {
                console.log(result);
            });
        } catch (error: any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                Alert.alert('User cancelled the login flow !');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                Alert.alert('Signin in progress');
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                Alert.alert('Google play services not available or outdated !');
                // play services not available or outdated
            } else {
                console.log(error);
            }
        }
    }, []);
    const isLogin = route?.params?.isLogin;

    console.log(isLogin);
    const onGoBack = () => {
        if (!isLogin) {
            clearUserData(dispatch);
        }

        goBack();
        return true;
    };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onGoBack);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onGoBack);
        };
    }, []);

    const onNavigateConnect = () => {
        clearAllData(dispatch);
        navigate(ScreenName.ConnectPage);
    };

    return {
        errors,
        phoneNumberRef,
        phoneNumber,
        handleOnChange,
        handleError,
        connect,
        onGoBack,
        onNavigateConnect,
        connectFacebook,
        connectGoogle,
        numberPhone,
    };
};
