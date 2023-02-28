import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useTranslation } from 'react-i18next';
import { IGoalKickerListScreenProps } from './GoalKickerListScreen.type';

export const useViewModel = ({ navigation, route }: IGoalKickerListScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const onNavigateDataPlayer = (playerId: string) => {
        navigate(ScreenName.DataPlayerPage, { playerId });
    };
    return {
        t,
        onGoBack,
        onNavigateDataPlayer,
    };
};
