import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IStatisticsLeaguesScreenProps } from './StatisticsLeaguesScreen.type';

export const useViewModel = ({ navigation, route }: IStatisticsLeaguesScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    return { t, onGoBack };
};
