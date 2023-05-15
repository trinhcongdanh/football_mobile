import { TeamModel } from '@football/core/models/TeamModelResponse';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IFavTeamProps } from '@football/app/screens/football-home/layouts/FavTeam/FavTeam.type';
import moment from 'moment';
import { Game } from '@football/core/models/TeamModelResponse';
import { useGame } from '@football/app/utils/hooks/useGame';

export const useViewModel = ({ team, color }: IFavTeamProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const pages = Array(2).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);
    const [newGames, setNewGames] = useState<Game[]>([]);
    const { getGame } = useGame();

    const handleStadium = (stadiumId: string) => {
        navigate(ScreenName.PitchPage, { stadiumId });
    };

    const handleDetailMatch = (gameId: any) => {
        navigate(ScreenName.MatchPage, { gameId });
    };

    const onNavigateTeamDetails = (team: TeamModel) => {
        navigate(ScreenName.GroupPagePage, { team });
    };

    const onNavigateGameList = (teamData: TeamModel) => {
        navigate(ScreenName.FullListGamePage, { team: teamData });
    };

    const onNavigateStatistics = (teamData: TeamModel) => {
        const teamSeasonId = teamData?.seasons?.length ? teamData?.seasons[0].team_season_id : null;
        // eslint-disable-next-line no-underscore-dangle
        navigate(ScreenName.StatisticsGroupPage, { teamSeasonId });
    };

    useEffect(() => {
        const newTeamGame = getGame({ listGames: team?.homepage_info?.games });
        setNewGames(newTeamGame);
    }, [team]);

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
        newGames,
    };
};
