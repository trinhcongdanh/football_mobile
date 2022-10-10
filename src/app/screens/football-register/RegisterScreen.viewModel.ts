import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Keyboard } from 'react-native';
import { IRegisterScreenProps } from './RegisterScreen.type';

export const useViewModel = ({ navigation, route }: IRegisterScreenProps) => {
    const { t } = useTranslation();
    const { goBack, navigate } = useAppNavigator();

    const [inputs, setInputs] = useState({
        numberPhone: '',
    });

    const [errors, setErrors] = useState({
        numberPhone: '',
    });

    const handleOnChange = (text: string, input: string) => {
        setInputs(prevState => ({ ...prevState, [input]: text }));
    };

    const handleError = (errorMessage: string, input: string) => {
        setErrors(prevState => ({ ...prevState, [input]: errorMessage }));
    };
    const connect = () => {
        Keyboard.dismiss();
        navigate(ScreenName.VerifyPage);
        if (!inputs.numberPhone) {
            handleError(t('register.invalid'), 'numberPhone');
        }
    };

    const onGoBack = () => {
        goBack();
    };

    const onNavigateConnect = () => {
        navigate(ScreenName.ConnectPage);
    };

    return {
        inputs,
        errors,
        handleOnChange,
        handleError,
        connect,
        onGoBack,
        onNavigateConnect,
    };
};
