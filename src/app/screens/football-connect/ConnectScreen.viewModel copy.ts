import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { ACTION, TOKEN } from '@football/core/api/auth/config';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Keyboard } from 'react-native';
// import { AccessToken, LoginManager, Profile } from 'react-native-fbsdk-next';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { useIsFocused } from '@react-navigation/native';
import { loginNumberPhoneUser } from 'src/store/user/RegisterNumberPhone.slice';
import { IConnectScreenProps } from './ConnectScreen.type';

export const useViewModel = ({ navigation, route }: IConnectScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();
    const dispatch = useDispatch<any>();
    const user = null;
    const [credentialStateForUser, updateCredentialStateForUser] = useState(-1);
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

        // console.log('credentialState', credentialState);

        // // use credentialState response to ensure the user is authenticated
        // if (credentialState === appleAuth.State.AUTHORIZED) {
        //     // user is authenticated
        //     console.log('uath ne');

        // }

        try {
            const appleAuthRequestResponse = await appleAuth.performRequest({
                requestedOperation: appleAuth.Operation.LOGIN,
                requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
            });

            console.log('appleAuthRequestResponse', appleAuthRequestResponse);

            const {
                user: newUser,
                email,
                nonce,
                identityToken,
                realUserStatus /* etc */,
            } = appleAuthRequestResponse;

            user = newUser;

            fetchAndUpdateCredentialState(updateCredentialStateForUser).catch(error =>
                updateCredentialStateForUser(`Error: ${error.code}`)
            );

            if (identityToken) {
                // e.g. sign in with Firebase Auth using `nonce` & `identityToken`
                console.log(nonce, identityToken);
            } else {
                // no token - failed sign-in?
            }

            if (realUserStatus === appleAuth.UserStatus.LIKELY_REAL) {
                console.log("I'm a real person!");
            }

            console.warn(`Apple Authentication Completed, ${user}, ${email}`);
        } catch (error) {
            if (error?.code === appleAuth.Error.CANCELED) {
                console.warn('User canceled Apple Sign in.');
            } else {
                console.error(error);
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

    useEffect(() => {
        // onCredentialRevoked returns a function that will remove the event listener. useEffect will call this function when the component unmounts
        return appleAuth.onCredentialRevoked(async () => {
            console.warn('If this function executes, User Credentials have been Revoked');
        });
    }, []); // passing in an empty array as the second argument ensures this is only ran once when component mounts initially.

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
