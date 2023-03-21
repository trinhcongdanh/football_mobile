import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { ACTION, TOKEN } from '@football/core/api/auth/config';
import { appleAuth, appleAuthAndroid } from '@invertase/react-native-apple-authentication';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Keyboard, Platform } from 'react-native';
// import { AccessToken, LoginManager, Profile } from 'react-native-fbsdk-next';
import { useIsFocused } from '@react-navigation/native';
import {
    AccessToken,
    GraphRequest,
    GraphRequestManager,
    LoginManager,
    Profile
} from 'react-native-fbsdk-next';
import 'react-native-get-random-values';
import { useDispatch, useSelector } from 'react-redux';
import { env } from 'src/config';
import { loginNumberPhoneUser } from 'src/store/user/RegisterNumberPhone.slice';
import { v4 as uuid } from 'uuid';
import { IConnectScreenProps } from './ConnectScreen.type';

import { serializeParams } from '@football/app/utils/functions/quick-functions';
import jwt_decode from 'jwt-decode';
import { RootState } from 'src/store/store';
import { otpUser } from 'src/store/user/OTP.slice';

interface LoginProps {
    phoneNumber: string;
}

/**
 * view settings variables
 * @returns
 */

const useViewState = () => {
    const { t } = useTranslation();
    const numberPhone = useSelector((state: RootState) => state.numberPhoneUser);
    const guestId = useSelector((state: RootState) => state.guestId.guestId);
    const profile = useSelector((state: RootState) => state.createProfile);
    const login = useSelector((state: RootState) => state.login);
    const socialLogin = useSelector((state: RootState) => state.otpUser);
    const [imgUrl, setImgUrl] = useState<string>();
    const phoneNumberRef = useRef<string>(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errors, setErrors] = useState({
        numberPhone: '',
    });
    const { navigate, goBack, replace } = useAppNavigator();
    const isFocused = useIsFocused();

    return {
        t,
        numberPhone,
        guestId,
        profile,
        login,
        socialLogin,
        imgUrl,
        setImgUrl,
        isFocused,
        phoneNumberRef,
        phoneNumber,
        setPhoneNumber,
        errors,
        setErrors,
        navigate,
        goBack,
        replace,
    };
};

/**
 * State use event handler
 * @param state
 * @returns
 */

const useEventHandler = (state: any) => {
    const dispatch = useDispatch<any>();
    const {
        t,
        numberPhone,
        guestId,
        profile,
        login,
        socialLogin,
        imgUrl,
        setImgUrl,
        setPhoneNumber,
        errors,
        setErrors,
        phoneNumber,
        navigate,
        goBack,
        replace,
    } = state;
    // Go back previous screen
    const onGoBack = (): void => {
        goBack();
    };

    // Go back flow register
    const onNavigateSignUp = () => {
        navigate(ScreenName.FavTeamPage);
    };

    /**
     * Handle changing phone number
     * @param e
     */
    const handleOnChange = (e: string) => {
        setPhoneNumber(e);
    };

    // Login with phone number
    const Connect = () => {
        Keyboard.dismiss();
        dispatch(
            loginNumberPhoneUser(
                serializeParams({
                    action: ACTION,
                    token: TOKEN,
                    call: AuthData.LOGIN,
                    sms_phone: encodeURIComponent(phoneNumber),
                })
            )
        );
    };

    // Handle error response when phone number is wrong

    const handleError = (errorMessage: string, input: string) => {
        state.setErrors((prevState: LoginProps) => ({ ...prevState, [input]: errorMessage }));
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
                    setImgUrl(result.picture.data.url);
                }
            }
        );
        new GraphRequestManager().addRequest(profileRequest).start();
    }, []);

    // Facebook Login
    const connectFacebook = useCallback(() => {
        LoginManager.logInWithPermissions(['public_profile', 'email']).then((result: any) => {
            console.log('login is progressing.');
            if (result.isCancelled) {
                console.log('login is cancelled.');
            } else {
                Profile.getCurrentProfile().then(currentProfile => {
                    if (currentProfile) {
                        console.log(currentProfile);
                    }
                });
                AccessToken.getCurrentAccessToken().then((data: any) => {
                    console.log(data);
                    getInfoFromToken(data?.accessToken.toString());
                    dispatch(
                        otpUser(
                            serializeParams({
                                action: ACTION,
                                token: TOKEN,
                                call: AuthData.LOGIN,
                                facebook_app_id: env.FACEBOOK_APPID,
                                facebook_app_secret: env.FACEBOOK_SECRET_KEY,
                            })
                        )
                    );
                });
            }
        });
    }, [getInfoFromToken]);

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
        // const appleAuthRequestResponse = await appleAuth.performRequest({
        //     requestedOperation: appleAuth.Operation.LOGIN,
        //     requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        // });

        // console.log(appleAuthRequestResponse);

        // // get current authentication state for user
        // // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
        // const credentialState = await appleAuth.getCredentialStateForUser(
        //     appleAuthRequestResponse.user
        // );

        // console.log(credentialState);

        // // use credentialState response to ensure the user is authenticated
        // if (credentialState === appleAuth.State.AUTHORIZED) {
        //     // user is authenticated
        // }

        let subject = '';
        let code = '';
        if (Platform.OS === 'android') {
            const rawNonce = uuid();
            const state = uuid();

            // Configure the request
            appleAuthAndroid.configure({
                // The Service ID you registered with Apple
                clientId: 'il.org.football.mobile.ios.android',

                // Return URL added to your Apple dev console. We intercept this redirect, but it must still match
                // the URL you provided to Apple. It can be an empty route on your backend as it's never called.
                redirectUri: 'https://www.football.org.il/',

                // The type of response requested - code, id_token, or both.
                responseType: appleAuthAndroid.ResponseType.ALL,

                // The amount of user information requested from Apple.
                scope: appleAuthAndroid.Scope.NAME,

                // Random nonce value that will be SHA256 hashed before sending to Apple.
                nonce: rawNonce,

                // Unique state value used to prevent CSRF attacks. A UUID will be generated if nothing is provided.
                state,
            });

            // Open the browser window for user sign in
            const response = await appleAuthAndroid.signIn();

            console.log('response', response);
            // const { email, sub, code } = jwt_decode(response.id_token);
            // console.log('email', email);
            // console.log('subject', sub);
            // console.log('code', response.code);
            const decode = jwt_decode(`${response.id_token}`);
            code = decode.code;
            subject = decode.sub;
        } else {
            const appleAuthRequestResponse = await appleAuth.performRequest({
                requestedOperation: appleAuth.Operation.LOGIN,
                // Note: it appears putting FULL_NAME first is important, see issue #293
                requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
            });

            // get current authentication state for user
            // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
            const credentialState = await appleAuth.getCredentialStateForUser(
                appleAuthRequestResponse.user
            );

            console.log('credentialState', credentialState);
            // use credentialState response to ensure the user is authenticated
            if (credentialState === appleAuth.State.AUTHORIZED) {
                // user is authenticated
                console.log('appleAuthRequestResponse', appleAuthRequestResponse);
                // const { email, sub, code } = jwt_decode(appleAuthRequestResponse.identityToken);
                // console.log('email', email);
                // console.log('subject', sub);
                // console.log('code', response.code);
                const decode = jwt_decode(`${appleAuthRequestResponse.identityToken}`);
                code = decode?.code;
                subject = decode?.sub;
            }
        }
    };

    return {
        onGoBack,
        handleOnChange,
        onNavigateSignUp,
        Connect,
        connectFacebook,
        connectGoogle,
        connectApple,
        handleError,
    };
};

/**
 * Handle effect to listening variables change here.
 * @param state
 * @param eventHandler
 */
const useEffectHandler = (state: any, eventHandler: any) => {
    const { handleError } = eventHandler;
    useEffect(() => {
        if (!state.isFocused) return;
        if (state.socialLogin.success) {
            state.replace(ScreenName.SideBar);
        }
    }, [state.socialLogin.success, state.isFocused]);

    useEffect(() => {
        if (!state.isFocused) return;
        if (state.numberPhone.successLogin === true) {
            state.navigate(ScreenName.VerifyPage, {
                number: state.phoneNumber,
                previous_screen: ScreenName.ConnectPage,
            });
        }
    }, [state.numberPhone.successLogin, state.isFocused]);

    useEffect(() => {
        if (state.numberPhone.successLogin === false && state.numberPhone.loadingLogin === false) {
            handleError(state.t('register.invalid'), 'numberPhone');
        }
    }, [state.numberPhone.successLogin, state.numberPhone.loadingLogin]);

    // Google Account
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '476796468470-2e0e3qgmfo76l4c2juqiu3gvgmts0v32.apps.googleusercontent.com',
            offlineAccess: true,
        });
    }, []);
};

export const useViewModel = ({ navigation, route }: IConnectScreenProps) => {
    const state = useViewState();
    const eventHandler = useEventHandler(state);
    useEffectHandler(state, eventHandler);

    return {
        ...eventHandler,
        ...state,
    };
};
