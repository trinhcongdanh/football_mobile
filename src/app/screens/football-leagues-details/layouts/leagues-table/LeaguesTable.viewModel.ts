import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { ILeaguesTableProps } from './LeaguesTable.type';

export const useViewModel = ({ leaderBoards }: ILeaguesTableProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const listTeams = leaderBoards;
    return {
        t,
        listTeams,
    };
};
