import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IRegisterScreenProps } from './RegisterScreen.type';
// import { AccessToken, LoginManager, Profile } from 'react-native-fbsdk-next';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { numberPhoneUser } from 'src/store/user/RegisterNumberPhone';
import { ACTION, TOKEN } from '@football/core/api/auth/config';
import qs from 'qs';

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

    const connect = () => {
        Keyboard.dismiss();
        // if (phoneNumber === '') {
        //     handleError(t('register.invalid'), 'numberPhone');
        // navigate(ScreenName.VerifyPage);
        dispatch(
            numberPhoneUser(
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
        if (numberPhone.success === true) {
            navigate(ScreenName.VerifyPage);
        }
    };

    const connectFacebook = useCallback(async () => {
        // LoginManager.logInWithPermissions(['public_profile', 'email']).then((result: any) => {
        //     if (result.isCancelled) {
        //     } else {
        //         Profile.getCurrentProfile().then(currentProfile => {
        //             if (currentProfile) {
        //                 console.log(currentProfile);
        //             }
        //         });
        //         AccessToken.getCurrentAccessToken().then((data: any) => {
        //             console.log(data.accessToken.toString());
        //         });
        //     }
        // });
        // try {
        //     const { data }: any = await axiosAuth.post(
        //         `${AUTH_URL}`,
        //         serializeParams({
        //             action: ACTION,
        //             token: tokenLogin,
        //             call: AuthData.REGISTER,
        //             guest_id: profile.tc_user,
        //             guest_guid: guestId[0],
        //             'item[facebook_app_id]': env.FACEBOOK_APPID,
        //             'item[facebook_app_secret]': env.FACEBOOK_SECRET_KEY,
        //         }),
        //         {
        //             headers: {},
        //         }
        //     );
        //     if (!isEmpty(data)) {
        //         console.log(data);
        //     }
        // } catch (error: any) {
        //     Alert.alert(error);
        // }
    }, []);

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '476796468470-2e0e3qgmfo76l4c2juqiu3gvgmts0v32.apps.googleusercontent.com',
            offlineAccess: true,
        });
    }, []);

    const connectGoogle = useCallback(async () => {
        // try {
        //     await GoogleSignin.hasPlayServices();
        //     await GoogleSignin.signIn().then((result: any) => {
        //         console.log(result);
        //     });
        // } catch (error: any) {
        //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        //         // user cancelled the login flow
        //         Alert.alert('User cancelled the login flow !');
        //     } else if (error.code === statusCodes.IN_PROGRESS) {
        //         Alert.alert('Signin in progress');
        //         // operation (f.e. sign in) is in progress already
        //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        //         Alert.alert('Google play services not available or outdated !');
        //         // play services not available or outdated
        //     } else {
        //         console.log(error);
        //     }
        // }
    }, []);
    const onGoBack = () => {
        goBack();
    };

    const onNavigateConnect = () => {
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
    };
};
