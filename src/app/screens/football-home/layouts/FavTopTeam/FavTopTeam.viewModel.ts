import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IFavTopTeamProps } from '@football/app/screens/football-home/layouts/FavTopTeam/FavTopTeam.type';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useGame } from '@football/app/utils/hooks/useGame';
import { Game, TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useViewModel = ({ topTeam, color }: IFavTopTeamProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const pages = Array(2).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);
    const [newTopGames, setNewTopGames] = useState<Game[]>([]);
    const { getGame } = useGame();

    const onClickTopTeam = (topTeamId: string) => {
        navigate(ScreenName.NationalTeamPage, { topTeamId });
    };

    const handleStadium = (stadiumId: string) => {
        navigate(ScreenName.PitchPage, { stadiumId });
    };

    const handleDetailMatch = (gameId: any, topTeam: boolean) => {
        navigate(ScreenName.MatchPage, { gameId, topTeam });
    };

    const onNavigateGameLive = () => {
        navigate(ScreenName.GameLivePage);
    };

    const onNavigateGameList = (topTeam: TopTeamModel) => {
        navigate(ScreenName.ListGamePage, { topTeam });
    };

    useEffect(() => {
        const newTeamTopGame = getGame({ listGames: topTeam?.homepage_info?.games });
        setNewTopGames(newTeamTopGame);
    }, [topTeam]);

    return {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        onClickTopTeam,
        handleStadium,
        handleDetailMatch,
        onNavigateGameList,
        newTopGames,
        onNavigateGameLive,
    };
};
