import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';

export const useViewModel = (topTeam: TopTeamModel) => {
    const { navigate } = useAppNavigator();
    const { t } = useTranslation();
    const options = [
        t('campaign.list_game.home_away'),
        t('campaign.list_game.house'),
        t('campaign.list_game.outside'),
    ];

    const [select, setSelect] = useState(0);
    const selectOption = (index: any) => {
        setSelect(index);
    };

    const handleDetailMatch = (gameId: any) => {
        navigate(ScreenName.MatchPage, { gameId });
    };

    const handleStadium = (stadiumId: string) => {
        navigate(ScreenName.PitchPage, { stadiumId });
    };

    const handleSeeAll = () => {
        navigate(ScreenName.ListGamePage, { topTeam });
    };

    return {
        t,
        options,
        select,
        setSelect,
        selectOption,
        handleDetailMatch,
        handleStadium,
        handleSeeAll,
    };
};
