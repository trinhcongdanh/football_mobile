import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ILeaguesBoysCScreenProps } from './LeaguesBoysCScreen.type';

export const useViewModel = ({ navigation, route }: ILeaguesBoysCScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    return { t, onGoBack };
};
