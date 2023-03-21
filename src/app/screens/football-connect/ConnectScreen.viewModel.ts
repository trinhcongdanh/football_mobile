import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { ACTION, TOKEN } from '@football/core/api/auth/config';
import { appleAuth, appleAuthAndroid } from '@invertase/react-native-apple-authentication';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Keyboard, Platform } from 'react-native';
// import { AccessToken, LoginManager, Profile } from 'react-native-fbsdk-next';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { useIsFocused } from '@react-navigation/native';
import { loginNumberPhoneUser } from 'src/store/user/RegisterNumberPhone.slice';
import { v4 as uuid } from 'uuid';
import 'react-native-get-random-values';

import jwt_decode from 'jwt-decode';
import { IConnectScreenProps } from './ConnectScreen.type';

export const useViewModel = ({ navigation, route }: IConnectScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();
    const dispatch = useDispatch<any>();
    const [credentialStateForUser, updateCredentialStateForUser] = useState(-1);
    const user = null;
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

    const fetchAndUpdateCredentialState = async updateCredentialStateForUser => {
        if (user === null) {
            updateCredentialStateForUser('N/A');
        } else {
            const credentialState = await appleAuth.getCredentialStateForUser(user);
            if (credentialState === appleAuth.State.AUTHORIZED) {
                updateCredentialStateForUser('AUTHORIZED');
            } else {
                updateCredentialStateForUser(credentialState);
            }
        }
    };

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
            const { email, sub, code } = jwt_decode(response.id_token);
            console.log('email', email);
            console.log('subject', sub);
            console.log('code', response.code);
        } else {
            // try {
            //     const appleAuthRequestResponse = await appleAuth.performRequest({
            //         requestedOperation: appleAuth.Operation.LOGIN,
            //         requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
            //     });

            //     console.log('appleAuthRequestResponse', appleAuthRequestResponse);

            //     const {
            //         user: newUser,
            //         email,
            //         nonce,
            //         identityToken,
            //         realUserStatus /* etc */,
            //     } = appleAuthRequestResponse;

            //     user = newUser;

            //     fetchAndUpdateCredentialState(updateCredentialStateForUser).catch(error =>
            //         updateCredentialStateForUser(`Error: ${error.code}`)
            //     );

            //     if (identityToken) {
            //         // e.g. sign in with Firebase Auth using `nonce` & `identityToken`
            //         console.log(nonce, identityToken);
            //     } else {
            //         // no token - failed sign-in?
            //     }

            //     if (realUserStatus === appleAuth.UserStatus.LIKELY_REAL) {
            //         console.log("I'm a real person!");
            //     }

            //     console.warn(`Apple Authentication Completed, ${user}, ${email}`);
            // } catch (error) {
            //     if (error?.code === appleAuth.Error.CANCELED) {
            //         console.warn('User canceled Apple Sign in.');
            //     } else {
            //         console.error(error);
            //     }
            // }

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

            // use credentialState response to ensure the user is authenticated
            if (credentialState === appleAuth.State.AUTHORIZED) {
                // user is authenticated
            }
        }
    };

    const onGoBack = (): void => {
        goBack();
    };

    const phoneNumberRef = useRef<any>(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errors, setErrors] = useState({
        numberPhone: '',
    });
    const numberPhone = useSelector((state: any) => state.numberPhoneUser);
    const guestId = useSelector((state: any) => state.guestId.guestId);
    const profile = useSelector((state: any) => state.createProfile);
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

    const isFocused = useIsFocused();

    useEffect(() => {
        if (!isFocused) return;
        if (numberPhone.successLogin === true) {
            navigate(ScreenName.VerifyPage, {
                number: phoneNumber,
                previous_screen: ScreenName.ConnectPage,
            });
        }
    }, [numberPhone.successLogin, isFocused]);

    useEffect(() => {
        if (numberPhone.successLogin === false && numberPhone.loadingLogin === false) {
            handleError(t('register.invalid'), 'numberPhone');
        }
    }, [numberPhone.successLogin, numberPhone.loadingLogin]);

    const onNavigateSignUp = () => {
        navigate(ScreenName.FavTeamPage);
    };

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
        numberPhone,
    };
};
