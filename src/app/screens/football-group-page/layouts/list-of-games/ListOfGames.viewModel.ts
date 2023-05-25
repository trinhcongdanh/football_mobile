import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IListOfGamesProps } from '@football/app/screens/football-group-page/layouts/list-of-games/ListOfGames.type';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useGame } from '@football/app/utils/hooks/useGame';
import { Game, TeamModel } from '@football/core/models/TeamModelResponse';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useViewModel = ({ teamDetail }: IListOfGamesProps) => {
    const { navigate, goBack } = useAppNavigator();
    const [newGames, setNewGames] = useState<Game[]>([]);
    const { t } = useTranslation();
    const { getGame } = useGame();
    console.log('teamDetail', teamDetail);

    const handleDetailMatch = (gameId: string) => {
        navigate(ScreenName.MatchPage, { gameId });
    };

    const handleStadium = (stadiumId: string) => {
        navigate(ScreenName.PitchPage, { stadiumId });
    };

    const onNavigateGameLive = () => {
        navigate(ScreenName.GameLivePage);
    };

    const onNavigateGameList = (team: TeamModel) => {
        navigate(ScreenName.FullListGamePage, { team });
    };

    useEffect(() => {
        const newTeamGame = getGame({ listGames: teamDetail?.homepage_info?.games });
        setNewGames(newTeamGame);
    }, [teamDetail]);
    return {
        t,
        handleDetailMatch,
        handleStadium,
        onNavigateGameList,
        newGames,
        onNavigateGameLive,
    };
};
