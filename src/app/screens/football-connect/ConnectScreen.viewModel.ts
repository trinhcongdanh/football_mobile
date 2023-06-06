/* eslint-disable import/no-extraneous-dependencies */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { ACTION, CLIENT_ID, REDIRECT_URI, TOKEN } from '@football/core/api/auth/config';
import { appleAuth, appleAuthAndroid } from '@invertase/react-native-apple-authentication';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Keyboard, Platform } from 'react-native';
// import { AccessToken, LoginManager, Profile } from 'react-native-fbsdk-next';
import { useIsFocused } from '@react-navigation/native';
import {
    AccessToken,
    AuthenticationToken,
    GraphRequest,
    GraphRequestManager,
    LoginManager,
    Profile,
} from 'react-native-fbsdk-next';
import 'react-native-get-random-values';
import { useDispatch, useSelector } from 'react-redux';
import { env } from 'src/config';
import { loginNumberPhoneUser } from 'src/store/user/RegisterNumberPhone.slice';
import { v4 as uuid } from 'uuid';

import { serializeParams } from '@football/app/utils/functions/quick-functions';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { RootState } from 'src/store/store';
import { otpUser } from 'src/store/user/OTP.slice';
import { IConnectScreenProps } from './ConnectScreen.type';

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

    const dispatch = useDispatch<any>();
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
        dispatch,
    };
};

/**
 * State use event handler
 * @param state
 * @returns
 */

const useEventHandler = (state: any) => {
    const { setImgUrl, setPhoneNumber, phoneNumber, navigate, goBack, dispatch } = state;
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
            { accessToken: token, parameters: PROFILE_REQUEST_PARAMS },
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
    const connectFacebook = useCallback(async () => {
        try {
            await LoginManager.logInWithPermissions(['public_profile', 'email']).then(
                async (result: any) => {
                    console.log('login is progressing.');
                    if (result.isCancelled) {
                        console.log('login is cancelled.');
                    } else {
                        let userId: string = '';
                        await Profile.getCurrentProfile().then(currentProfile => {
                            if (currentProfile) {
                                console.log('currentProfile', currentProfile);
                                userId = currentProfile?.userID ?? '';
                            }
                        });
                        if (Platform.OS === 'ios') {
                            let accessToken = '';
                            await AccessToken.getCurrentAccessToken().then((data: any) => {
                                accessToken = data?.accessToken?.toString();
                                console.log('accessToken', accessToken);
                            });
                            await AuthenticationToken.getAuthenticationTokenIOS().then(
                                (data: any) => {
                                    console.log('authenticationToken', data?.authenticationToken);

                                    getInfoFromToken(data?.authenticationToken.toString());
                                    if (data) {
                                        console.log('data', data);
                                        dispatch(
                                            otpUser(
                                                serializeParams({
                                                    action: ACTION,
                                                    token: TOKEN,
                                                    call: AuthData.LOGIN,
                                                    facebook_user_id: userId,
                                                    facebook_access_token: accessToken,
                                                })
                                            )
                                        );
                                    }
                                }
                            );
                        } else {
                            await AccessToken.getCurrentAccessToken().then((data: any) => {
                                console.log(data);
                                getInfoFromToken(data?.accessToken.toString());
                                if (data) {
                                    dispatch(
                                        otpUser(
                                            serializeParams({
                                                action: ACTION,
                                                token: TOKEN,
                                                call: AuthData.LOGIN,
                                                facebook_user_id: data.userID,
                                                facebook_access_token: data.accessToken,
                                            })
                                        )
                                    );
                                }
                            });
                        }
                    }
                }
            );
        } catch (error: any) {
            Alert.alert(JSON.stringify(error.message));
        }
    }, [getInfoFromToken]);

    const connectGoogle = useCallback(async () => {
        try {
            if ((await GoogleSignin.hasPlayServices()) === false) {
                return;
            }
            await GoogleSignin.signIn()
                .then((result: any) => {
                    console.log(result);
                    if (result) {
                        dispatch(
                            otpUser(
                                serializeParams({
                                    action: ACTION,
                                    token: TOKEN,
                                    call: AuthData.LOGIN,
                                    google_client_id: env?.GOOGLE_CLIENT_ID,
                                    google_client_secret: env?.GOOGLE_CLIENT_SECRET,
                                })
                            )
                        );
                    }
                })
                .catch(e => {
                    console.log('we', e);
                    Alert.alert('Google login is not config correctly');
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
                Alert.alert('Google login is not config correctly');
            }
        }
    }, []);

    // Apple Developer
    const connectApple = async () => {
        let subject: string = '';
        let code: string = '';
        try {
            if (Platform.OS === 'android') {
                // Configure the request
                appleAuthAndroid.configure({
                    clientId: CLIENT_ID,
                    redirectUri: REDIRECT_URI,
                    responseType: appleAuthAndroid.ResponseType.ALL,
                    scope: appleAuthAndroid.Scope.NAME,
                    nonce: uuid(),
                    state: uuid(),
                });

                // Open the browser window for user sign in
                const response = await appleAuthAndroid.signIn();

                console.log('response', response);
                const decode: JwtPayload | null = jwt_decode(`${response.id_token}`);
                code = response.code;
                subject = decode?.sub ?? '';
            } else {
                const appleAuthRequestResponse = await appleAuth.performRequest({
                    requestedOperation: appleAuth.Operation.LOGIN,
                    // Note: it appears putting FULL_NAME first is important, see issue #293
                    requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
                });

                const credentialState = await appleAuth.getCredentialStateForUser(
                    appleAuthRequestResponse.user
                );

                console.log('credentialState', credentialState);
                // use credentialState response to ensure the user is authenticated
                if (credentialState === appleAuth.State.AUTHORIZED) {
                    const decode: JwtPayload | null = jwt_decode(
                        `${appleAuthRequestResponse.identityToken}`
                    );
                    code = appleAuthRequestResponse?.authorizationCode ?? '';
                    subject = decode?.sub ?? '';
                }
            }
        } catch (error: any) {
            Alert.alert(JSON.stringify(error.message));
        }

        console.log('subject', subject);
        console.log('code', code);
        dispatch(
            otpUser(
                serializeParams({
                    action: ACTION,
                    token: TOKEN,
                    call: AuthData.LOGIN,
                    apple_id_subject: subject,
                    apple_id_code: code,
                })
            )
        );
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
    const { isFocused, socialLogin, replace, numberPhone, navigate, phoneNumber, t } = state;

    useEffect(() => {
        if (!isFocused) return;
        if (socialLogin.success) {
            replace(ScreenName.SideBar);
        }
        if (socialLogin.success === false) {
            Alert.alert('Call api wrong');
        }
    }, [socialLogin.success, isFocused]);

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

    // Google Account
    useEffect(() => {
        try {
            GoogleSignin.configure({
                webClientId: env?.webClientId || '',
                iosClientId: env?.iosClientId || '',
                offlineAccess: !!env?.webClientId,
            });
        } catch (error: any) {
            Alert.alert(JSON.stringify(error.message));
        }
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
