import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useRef, useState } from 'react';
import { Keyboard } from 'react-native';
import { ScreenName } from '@football/app/utils/constants/enum';
import { IRegScreenProps } from './RegScreen.type';

export const useViewModel = ({ navigation, route }: IRegScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const [errors, setErrors] = useState({
        userName: '',
    });

    const [onCheck, setonCheck] = useState(false);

    const onGoBack = (): void => {
        goBack();
    };

    const toggleOnCheck = () => {
        setonCheck(!onCheck);
    };

    const handleError = (errorMessage: string, input: string) => {
        setErrors(prevState => ({ ...prevState, [input]: errorMessage }));
    };

    const user = { username: '', gender: '', date: '' };

    const userNameRef = useRef<any>(null);
    const [userName, setUserName] = useState('');
    const handleOnChange = (e: string) => {
        setUserName(e);
    };

    const handleOnDate = (e: Date) => {
        user.date = e.toString();
    };

    const createInfo = () => {
        Keyboard.dismiss();

        if (!user.username) {
            handleError(t('reg.error.error_empty'), 'userName');
            // navigate(ScreenName.SettingsPage);
            navigate(ScreenName.HomePage);
        } else if (!user.username.match(/[a-zA-Z0-9,#.-]+/)) {
            handleError(t('reg.error.error_valid'), 'userName');
        } else {
            handleError('', 'userName');
            navigate(ScreenName.TeamPage);
        }
    };

    return {
        errors,
        onCheck,
        onGoBack,
        handleOnChange,
        handleError,
        createInfo,
        handleOnDate,
        toggleOnCheck,
        userName,
        userNameRef,
    };
};
