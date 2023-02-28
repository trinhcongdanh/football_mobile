import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useTranslation } from 'react-i18next';
import { IDataPlayerNationalScreenProps } from './DataPlayerNationalScreen.type';

export const useViewModel = ({ player }: IDataPlayerNationalScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onNavigateGoalTopTeam = (playerId: string) => {
        navigate(ScreenName.GoalsNationalTeamPage, { playerId });
    };

    return {
        t,
        onNavigateGoalTopTeam,
    };
};
