import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';

export const useViewModel = () => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    return {
        t,
    };
};
