import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Keyboard } from 'react-native';
import { IRegisterScreenProps } from './RegisterScreen.type';
import { useSelector } from 'react-redux';
import { AccessToken, LoginManager, Profile } from 'react-native-fbsdk-next';
import { axiosAuth } from '@football/core/api/auth/axiosAuth';
import { ACTION, AUTH_URL } from '@football/core/api/auth/config';
import { env } from 'src/config';
import { isEmpty } from 'lodash';

export const useViewModel = ({ navigation, route }: IRegisterScreenProps) => {
    const { t } = useTranslation();
    const { goBack, navigate } = useAppNavigator();

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
    };

    const connect = () => {
        Keyboard.dismiss();
        // if (phoneNumber === '') {
        //     handleError(t('register.invalid'), 'numberPhone');
        navigate(ScreenName.VerifyPage);
        // } else {
        // }
    };

    const guestId = useSelector((state: any) => state.guestId.guestId);
    const profile = useSelector((state: any) => state.createProfile.profile);
    const tokenLogin = useSelector((state: any) => state.login.login);

    function serializeParams(obj: any) {
        let str = [];
        for (let p in obj) {
            if (obj.hasOwnProperty(p)) {
                str.push(p + '=' + encodeURIComponent(obj[p]));
            }
        }
        return str.join('&');
    }

    const connectFacebook = useCallback(async () => {
        LoginManager.logInWithPermissions(['public_profile', 'email']).then((result: any) => {
            if (result.isCancelled) {
            } else {
                Profile.getCurrentProfile().then(currentProfile => {
                    if (currentProfile) {
                        console.log(currentProfile);
                    }
                });
                AccessToken.getCurrentAccessToken().then((data: any) => {
                    console.log(data.accessToken.toString());
                });
            }
        });
        try {
            const { data }: any = await axiosAuth.post(
                `${AUTH_URL}`,
                serializeParams({
                    action: ACTION,
                    token: tokenLogin[0].token,
                    call: AuthData.REGISTER,
                    guest_id: profile[0].tc_user,
                    guest_guid: guestId[0],
                    'item[facebook_app_id]': env.FACEBOOK_APPID,
                    'item[facebook_app_secret]': env.FACEBOOK_SECRET_KEY,
                }),
                {
                    headers: {},
                }
            );
            if (!isEmpty(data)) {
                console.log(data);
            }
        } catch (error: any) {
            Alert.alert(error);
        }
    }, []);

    const connectGoogle = () => {};
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
