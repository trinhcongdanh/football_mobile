import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IFutureEventsProps } from '@football/app/screens/football-national-team/layout/future-events/FutureEvents.type';
import { IGamesListProps } from '@football/app/screens/football-national-team/layout/games-list/GamesList.type';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * view settings variables
 * @returns
 */
const useViewState = () => {
    const { getTranslationText } = useTranslationText();
    const { t } = useTranslation();
    const [select, setSelect] = useState(0);
    const options = [
        t('national_team.list_game.home_away'),
        t('national_team.list_game.house'),
        t('national_team.list_game.outside'),
    ];

    return {
        getTranslationText,
        t,
        options,
        setSelect,
        select,
    };
};

/**
 * States use event handler
 * @param state
 * @returns
 */
const useEventHandler = (state: any) => {
    const { navigate } = useAppNavigator();
    const { setSelect } = state;
    /**
     * Handle detail game
     * @param gameId
     */
    const handleDetailMatch = (gameId: any) => {
        navigate(ScreenName.MatchPage, { gameId });
    };

    /**
     * Handle Stadium detail
     * @param stadiumId
     */
    const handleStadium = (stadiumId: string) => {
        navigate(ScreenName.PitchPage, { stadiumId });
    };

    /**
     * Navigate to all game
     * @param topTeam
     */
    const navigateToDetailsGame = (topTeam?: TopTeamModel) => {
        navigate(ScreenName.ListGamePage, { topTeam: topTeam });
    };

    /**
     * select option button
     * @param index
     */
    const selectOption = (index: any) => {
        setSelect(index);
    };

    return {
        handleDetailMatch,
        handleStadium,
        navigateToDetailsGame,
        selectOption,
    };
};

/**
 * Main model
 * @param param0
 * @returns
 */
export const useViewModel = ({ topTeam }: IGamesListProps) => {
    const state = useViewState();
    const eventHandler = useEventHandler(state);
    return {
        ...state,
        ...eventHandler,
    };
};
