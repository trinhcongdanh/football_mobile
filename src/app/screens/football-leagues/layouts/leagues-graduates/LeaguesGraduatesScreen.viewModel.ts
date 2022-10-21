import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ILeaguesGraduatesScreenProps } from './LeaguesGraduatesScreen.type';

export const useViewModel = ({ navigation, route }: ILeaguesGraduatesScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    return { t, onGoBack };
};
