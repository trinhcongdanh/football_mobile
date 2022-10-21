import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ILeaguesYouthScreenProps } from './LeaguesYouthScreen.type';

export const useViewModel = ({ navigation, route }: ILeaguesYouthScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    return { t, onGoBack };
};
