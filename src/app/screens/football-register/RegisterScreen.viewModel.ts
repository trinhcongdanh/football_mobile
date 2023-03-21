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
import { RouteProp, useIsFocused } from '@react-navigation/native';
import { clearAllData } from '@football/app/utils/functions/clearAllData';
import { clearUserData } from '@football/app/utils/functions/clearUserData';
import { otpUser, setInfoSocial } from 'src/store/user/OTP.slice';
import { env } from 'src/config';
import { setProfileUser, statusSetProfile } from 'src/store/user/setProfile.slice';
import { serializeParams } from '@football/app/utils/functions/quick-functions';
import { ISettingsScreenProps } from '@football/app/screens/football-settings/SettingsScreen.type';

interface RegisterProps {
    phoneNumber: string;
}

/**
 * view settings variables
 * @returns
 */

const useViewState = (route: any) => {
    const { t } = useTranslation();
    const [errors, setErrors] = useState({
        numberPhone: '',
    });
    const phoneNumberRef = useRef<any>(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const guestId = useSelector((state: any) => state.guestId.guestId);
    const profile = useSelector((state: any) => state.createProfile.profile);
    const login = useSelector((state: any) => state.login);
    const numberPhone = useSelector((state: any) => state.numberPhoneUser);
    const otp = useSelector((state: any) => state.otpUser);
    const isFocused = useIsFocused();
    const { goBack, navigate } = useAppNavigator();
    const isLogin = route?.params?.isLogin;
    const dispatch = useDispatch<any>();
    return {
        t,
        errors,
        setErrors,
        phoneNumberRef,
        guestId,
        profile,
        login,
        numberPhone,
        otp,
        isFocused,
        goBack,
        navigate,
        setPhoneNumber,
        phoneNumber,
        isLogin,
        dispatch,
    };
};

/**
 * State use event handler
 * @param state
 * @returns
 */

const useEventHandler = (state: any) => {
    const {
        t,
        errors,
        setErrors,
        phoneNumberRef,
        guestId,
        profile,
        login,
        numberPhone,
        otp,
        isFocused,
        goBack,
        navigate,
        setPhoneNumber,
        phoneNumber,
        isLogin,
        dispatch,
    } = state;

    /**
     * Handle changing phone number
     * @param e
     */
    const handleOnChange = (e: string) => {
        setPhoneNumber(e);
        // console.log(e);
    };

    // Handle error response when phone number is wrong
    const handleError = (errorMessage: string, input: string) => {
        state.setErrors((prevState: RegisterProps) => ({ ...prevState, [input]: errorMessage }));
    };
    // Go back previous screen

    const onGoBack = () => {
        if (!isLogin) {
            clearUserData(dispatch);
        }

        goBack();
        return true;
    };

    // Navigate Connect Screen
    const onNavigateConnect = () => {
        clearAllData(dispatch);
        navigate(ScreenName.ConnectPage);
    };

    // Register with phone number
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

    /**
     * Handle token to get profile in facebook account
     * @param token
     */
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
    // register with facebook
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

    // Register with Google

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

    return {
        onGoBack,
        handleOnChange,
        connectFacebook,
        connectGoogle,
        handleError,
        connect,
        onNavigateConnect,
    };
};

/**
 * Handle effect to listening variables change here.
 * @param state
 * @param eventHandler
 */
const useEffectHandler = (state: any, eventHandler: any) => {
    const { handleError, onGoBack } = eventHandler;

    useEffect(() => {
        if (!state.isFocused) return;
        if (state.numberPhone.successRegister === true) {
            state.navigate(ScreenName.VerifyPage, {
                number: state.phoneNumber,
                previous_screen: ScreenName.RegisterPage,
            });
        }
        if (
            state.numberPhone.successRegister === false &&
            state.numberPhone.loadingRegister === false
        ) {
            handleError(state.t('register.invalid'), 'numberPhone');
        }
    }, [state.numberPhone.successRegister, state.isFocused, state.numberPhone.loadingRegister]);

    useEffect(() => {
        if (state.otp.success) {
            state.dispatch(statusSetProfile(null));
            state.navigate(ScreenName.RegPage);
        }
    }, [state.otp.success]);

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '476796468470-2e0e3qgmfo76l4c2juqiu3gvgmts0v32.apps.googleusercontent.com',
            offlineAccess: true,
        });
    }, []);

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onGoBack);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onGoBack);
        };
    }, []);
};

export const useViewModel = ({ navigation, route }: IRegisterScreenProps) => {
    const state = useViewState(route);
    const eventHandler = useEventHandler(state);

    useEffectHandler(state, eventHandler);

    return {
        ...eventHandler,
        ...state,
    };
};
