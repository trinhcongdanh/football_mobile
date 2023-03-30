import { TeamModel } from '@football/core/models/TeamModelResponse';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useViewModel = () => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const pages = Array(2).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);

    const handleStadium = (stadiumId: string) => {
        navigate(ScreenName.PitchPage, { stadiumId });
    };

    const handleDetailMatch = (gameId: any) => {
        navigate(ScreenName.MatchPage, { gameId });
    };

    const onNavigateTeamDetails = (teamId: string) => {
        navigate(ScreenName.GroupPagePage, { teamId });
    };

    const onNavigateGameList = (team: TeamModel) => {
        navigate(ScreenName.FullListGamePage, { team });
    };

    const onNavigateStatistics = (team: TeamModel) => {
        const teamSeasonId = team?.seasons?.length ? team?.seasons[0].team_season_id : null;

        // eslint-disable-next-line no-underscore-dangle
        navigate(ScreenName.StatisticsGroupPage, { teamSeasonId, teamId: team._id });
    };

    return {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        handleStadium,
        handleDetailMatch,
        onNavigateTeamDetails,
        onNavigateStatistics,
        onNavigateGameList,
    };
};
