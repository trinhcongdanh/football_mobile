import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { axiosAuth } from '@football/core/api/auth/axiosAuth';
import { ACTION, AUTH_URL, TOKEN } from '@football/core/api/auth/config';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { isEmpty } from 'lodash';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Keyboard } from 'react-native';
// import { AccessToken, LoginManager, Profile } from 'react-native-fbsdk-next';
import { AnyIfEmpty, useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'src/store/user/Login.slice';
import { env } from 'src/config';
import { IConnectScreenProps } from './ConnectScreen.type';
import qs from 'qs';

export const useViewModel = ({ navigation, route }: IConnectScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();
    const dispatch = useDispatch<any>();

    function serializeParams(obj: any) {
        const a = qs.stringify(obj, { encode: false, arrayFormat: 'brackets' });
        console.log(a);
        return a;
    }

    // Facebook
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
        //             token: tokenLogin[0].token,
        //             call: AuthData.REGISTER,
        //             guest_id: profile[0].tc_user,
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

    // Google Account
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

    // Apple Developer
    const connectApple = async () => {
        const appleAuthRequestResponse = await appleAuth.performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });

        console.log(appleAuthRequestResponse);

        // get current authentication state for user
        // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
        const credentialState = await appleAuth.getCredentialStateForUser(
            appleAuthRequestResponse.user
        );

        console.log(credentialState);

        // use credentialState response to ensure the user is authenticated
        if (credentialState === appleAuth.State.AUTHORIZED) {
            // user is authenticated
        }
    };
    const onGoBack = (): void => {
        goBack();
    };

    const onNavigateSignUp = (): void => {
        navigate(ScreenName.RegisterPage);
    };

    const phoneNumberRef = useRef<any>(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errors, setErrors] = useState({
        numberPhone: '',
    });
    const numberPhone = useSelector((state: any) => state.numberPhoneUser);
    const guestId = useSelector((state: any) => state.guestId.guestId);
    const profile = useSelector((state: any) => state.createProfile.profile);
    const login = useSelector((state: any) => state.login);

    const handleOnChange = (e: string) => {
        setPhoneNumber(e);
    };
    // console.log(phoneNumber);

    const handleError = (errorMessage: string, input: string): void => {
        setErrors(prevState => ({ ...prevState, [input]: errorMessage }));
    };

    const Connect = () => {
        Keyboard.dismiss();
        dispatch(
            loginUser(
                serializeParams({
                    action: ACTION,
                    token: TOKEN,
                    call: AuthData.LOGIN,
                    sms_phone: encodeURIComponent(phoneNumber),
                })
            )
        );
    };
    useEffect(() => {
        if (login.success === true) {
            navigate(ScreenName.VerifyPage, { number: phoneNumber });
        } else if (login.success === false && login.loading === false) {
            handleError(t('register.invalid'), 'numberPhone');
        }
    }, [login.success]);

    return {
        errors,
        handleError,
        handleOnChange,
        Connect,
        onNavigateSignUp,
        onGoBack,
        connectFacebook,
        connectGoogle,
        connectApple,
        phoneNumberRef,
        phoneNumber,
    };
};
