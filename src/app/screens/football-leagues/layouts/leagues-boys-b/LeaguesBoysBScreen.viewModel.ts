import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ILeaguesBoysBScreenProps } from './LeaguesBoysBScreen.type';

export const useViewModel = ({ navigation, route }: ILeaguesBoysBScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    return { t, onGoBack };
};
