import { Keyboard } from 'react-native';
import { useState } from 'react';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useTranslation } from 'react-i18next';
import { IConnectScreenProps } from './ConnectScreen.type';

export const useViewModel = ({ navigation, route }: IConnectScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();

    const [inputs, setInputs] = useState({
        numberPhone: '',
    });

    const [errors, setErrors] = useState({
        numberPhone: '',
    });

    const handleOnChange = (text: string, input: string): void => {
        setInputs(prevState => ({ ...prevState, [input]: text }));
    };

    const handleError = (errorMessage: string, input: string): void => {
        setErrors(prevState => ({ ...prevState, [input]: errorMessage }));
    };

    const Connect = (): void => {
        Keyboard.dismiss();
        if (!inputs.numberPhone) {
            handleError(t('connect.error'), 'numberPhone');
        }
    };

    const onGoBack = (): void => {
        goBack();
    };

    const onNavigateSignUp = (): void => {
        navigate(ScreenName.RegisterPage);
    };

    return {
        inputs,
        errors,
        handleError,
        handleOnChange,
        Connect,
        onNavigateSignUp,
        onGoBack,
    };
};