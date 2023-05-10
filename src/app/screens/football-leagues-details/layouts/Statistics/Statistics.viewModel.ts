import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IStatisticsProps } from './Statistics.type';

export const useViewModel = ({ statistics, statisticsId }: IStatisticsProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const [onSelect, setOnSelect] = useState(0);
    const externalGames = statistics?.external_games || [];
    const homeGames = statistics?.home_games || [];

    const handleMoreStatistics = (
        leagueSeasonId: string,
        leagueId: string,
        statisticsIdValue: string
    ) => {
        navigate(ScreenName.StatisticsLeaguesPage, {
            leagueSeasonId,
            leagueId,
            statisticsId: statisticsIdValue,
        });
    };

    const onNavigateTeamDetails = (teamId: string) => {
        navigate(ScreenName.GroupPagePage, { teamId });
    };

    return {
        t,
        setOnSelect,
        handleMoreStatistics,
        onSelect,
        externalGames,
        homeGames,
        onNavigateTeamDetails,
    };
};
