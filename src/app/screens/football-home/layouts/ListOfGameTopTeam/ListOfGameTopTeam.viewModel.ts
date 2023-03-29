import { AppImages } from '@football/app/assets/images';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useViewModel = () => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const pages = Array(2).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);
    const [select, setSelect] = useState(0);

    const options = [
        t('national_team.list_game.home_away'),
        t('national_team.list_game.house'),
        t('national_team.list_game.outside'),
    ];

    const selectOption = (index: any) => {
        setSelect(index);
    };

    const handleStadium = (stadiumId: string) => {
        navigate(ScreenName.PitchPage, { stadiumId });
    };

    const handleDetailMatch = (gameId: any) => {
        navigate(ScreenName.MatchPage, { gameId });
    };

    return {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        options,
        select,
        setSelect,
        selectOption,
        handleStadium,
        handleDetailMatch,
    };
};
