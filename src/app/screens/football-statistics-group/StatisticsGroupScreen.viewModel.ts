import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IStatisticsGroupScreenProps } from './StatisticsGroupScreen.type';

export const useViewModel = ({ navigation, route }: IStatisticsGroupScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    return { t, onGoBack };
};
