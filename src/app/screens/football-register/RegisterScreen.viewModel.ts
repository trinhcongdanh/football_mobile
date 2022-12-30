import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { OfflineData, ScreenName } from '@football/app/utils/constants/enum';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Keyboard } from 'react-native';
import auth from '@react-native-firebase/auth';
import { IRegisterScreenProps } from './RegisterScreen.type';
import localStorage from '@football/core/helpers/localStorage';

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

    const signInWithPhoneNumber = async (phoneNumber: string) => {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        await localStorage.setItem(OfflineData.phone_number, confirmation);
    };

    const connect = () => {
        Keyboard.dismiss();
        if (phoneNumber === '') {
            handleError(t('register.invalid'), 'numberPhone');
        } else {
            signInWithPhoneNumber(phoneNumber);
            navigate(ScreenName.VerifyPage);
        }
    };

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
    };
};
