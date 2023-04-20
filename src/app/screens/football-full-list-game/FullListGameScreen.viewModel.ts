import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IFullListGameScreenProps } from '@football/app/screens/football-full-list-game/FullListGameScreen.type';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useViewModel = ({ navigation, route }: IFullListGameScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const onGoBack = (): void => {
        goBack();
    };

    const onNavigateGame = (gameId: string) => {
        navigate(ScreenName.MatchPage, { gameId });
    };

    const onNavigateStadium = (stadiumId: string) => {
        navigate(ScreenName.PitchPage, { stadiumId });
    };

    return {
        t,
        onGoBack,
        onNavigateGame,
        onNavigateStadium,
    };
};
