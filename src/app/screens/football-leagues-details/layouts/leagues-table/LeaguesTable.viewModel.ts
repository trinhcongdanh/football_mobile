import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useTranslation } from 'react-i18next';
import { ILeaguesTableProps } from './LeaguesTable.type';

export const useViewModel = ({ leaderBoards }: ILeaguesTableProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const listTeams = leaderBoards;

    const onNavigateTeamDetails = () => {
        navigate(ScreenName.GroupPagePage);
    };
    return {
        t,
        listTeams,
        onNavigateTeamDetails,
    };
};
