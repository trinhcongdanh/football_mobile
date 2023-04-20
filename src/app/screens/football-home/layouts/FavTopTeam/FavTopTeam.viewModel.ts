import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useViewModel = () => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const pages = Array(2).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);

    const onClickTopTeam = (topTeamId: string) => {
        navigate(ScreenName.NationalTeamPage, { topTeamId });
    };

    const handleStadium = (stadiumId: string) => {
        navigate(ScreenName.PitchPage, { stadiumId });
    };

    const handleDetailMatch = (gameId: any) => {
        navigate(ScreenName.MatchPage, { gameId });
    };

    const onNavigateGameList = (topTeam: TopTeamModel) => {
        navigate(ScreenName.ListGamePage, { topTeam });
    };

    return {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        onClickTopTeam,
        handleStadium,
        handleDetailMatch,
        onNavigateGameList,
    };
};
