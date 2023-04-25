/* eslint-disable import/no-extraneous-dependencies */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { clearAllData } from '@football/app/utils/functions/clearAllData';
import { clearUserData } from '@football/app/utils/functions/clearUserData';
import { serializeParams } from '@football/app/utils/functions/quick-functions';
import { ACTION, CLIENT_ID, REDIRECT_URI } from '@football/core/api/auth/config';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useIsFocused } from '@react-navigation/native';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, BackHandler, Keyboard, Platform } from 'react-native';
import {
    AccessToken,
    AuthenticationToken,
    GraphRequest,
    GraphRequestManager,
    LoginManager,
    Profile,
} from 'react-native-fbsdk-next';
import { useDispatch, useSelector } from 'react-redux';
import { env } from 'src/config';
import { otpUser, setInfoSocial } from 'src/store/user/OTP.slice';
import { registerNumberPhoneUser } from 'src/store/user/RegisterNumberPhone.slice';
import { setProfileUser, statusSetProfile } from 'src/store/user/setProfile.slice';
import { v4 as uuid } from 'uuid';
import jwt_decode from 'jwt-decode';
import { appleAuth, appleAuthAndroid } from '@invertase/react-native-apple-authentication';
import { IRegisterScreenProps } from './RegisterScreen.type';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

    const connectApple = async () => {
        let subject = '';
        let code = '';
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
                const decode = jwt_decode(`${response.id_token}`);
                code = response.code;
                subject = decode?.sub;
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
                    const decode = jwt_decode(`${appleAuthRequestResponse.identityToken}`);
                    code = appleAuthRequestResponse?.authorizationCode;
                    subject = decode?.sub;
                }
            }
        } catch (error: any) {
            Alert.alert(JSON.stringify(error));
        }
        console.log('subject', subject);
        console.log('code', code);
        dispatch(
            otpUser(
                serializeParams({
                    action: ACTION,
                    token: login.login.token,
                    guest_guid: guestId[0],
                    guest_id: login.login.user.item_id,
                    call: AuthData.REGISTER,
                    item: {
                        apple_id_subject: subject,
                        apple_id_code: code,
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
        try {
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
                        if (Platform.OS === 'ios') {
                            await AuthenticationToken.getAuthenticationTokenIOS().then(
                                (data: any) => {
                                    console.log('authenticationToken', data?.authenticationToken);
                                    getInfoFromToken(data?.authenticationToken.toString());
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
                                                        facebook_user_id: data.userID,
                                                        facebook_access_token: data.accessToken,
                                                    },
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
                                                token: login.login.token,
                                                guest_guid: guestId[0],
                                                guest_id: login.login.user.item_id,
                                                call: AuthData.REGISTER,
                                                item: {
                                                    facebook_user_id: data.userID,
                                                    facebook_access_token: data.accessToken,
                                                },
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

    // Register with Google

    const connectGoogle = useCallback(async () => {
        try {
            await GoogleSignin.hasPlayServices();
            await GoogleSignin.signIn().then((result: any) => {
                console.log(result);
                if (result) {
                    dispatch(setInfoSocial(result.user));
                    dispatch(
                        otpUser(
                            serializeParams({
                                action: ACTION,
                                token: login.login.token,
                                guest_guid: guestId[0],
                                guest_id: login.login.user.item_id,
                                call: AuthData.REGISTER,
                                item: {
                                    google_client_id: env.GOOGLE_CLIENT_ID,
                                    google_client_secret: env.GOOGLE_CLIENT_SECRET,
                                },
                            })
                        )
                    );
                }
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
        connectApple,
    };
};

/**
 * Handle effect to listening variables change here.
 * @param state
 * @param eventHandler
 */
const useEffectHandler = (state: any, eventHandler: any) => {
    const { handleError, onGoBack } = eventHandler;

    const { profile, login } = state;

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
            state.navigate(ScreenName.RegPage);
        }
        state.dispatch(statusSetProfile(null));
    }, [state.otp.success]);

    useEffect(() => {
        try {
            GoogleSignin.configure({
                webClientId: env.webClientId,
                iosClientId: env.iosClientId,
                offlineAccess: true,
            });
        } catch (error: any) {
            Alert.alert(JSON.stringify(error.message));
        }
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
