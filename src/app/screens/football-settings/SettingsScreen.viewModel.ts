import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { ISettingsScreenProps } from './SettingsScreen.type';

export const useViewModel = (props: ISettingsScreenProps) => {
    const { t } = useTranslation();
    const { goBack, navigate } = useAppNavigator();
    return {
        t,
        goBack,
        navigate,
    };
};
