import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AppImages } from '@football/app/assets/images';
import { IStatisticsProps } from './Statistics.type';

export const useViewModel = ({}: IStatisticsProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const statistics = [
        {
            id: 1,
            number_game: 9,
            gates: 0,
            yellow_league_cup: 1,
            yellow_tutu: 0,
            red_card: 0,
            vehicle: 7,
            enter_replacement: 2,
            switched: 1,
            subtlety: 712,
        },
        {
            id: 2,
            number_game: 9,
            gates: 0,
            yellow_league_cup: 1,
            yellow_tutu: 0,
            red_card: 0,
            vehicle: 7,
            enter_replacement: 2,
            switched: 1,
            subtlety: 712,
        },
        {
            id: 3,
            number_game: 9,
            gates: 0,
            yellow_league_cup: 1,
            yellow_tutu: 0,
            red_card: 0,
            vehicle: 7,
            enter_replacement: 2,
            switched: 1,
            subtlety: 712,
        },
        {
            id: 4,
            number_game: 9,
            gates: 0,
            yellow_league_cup: 1,
            yellow_tutu: 0,
            red_card: 0,
            vehicle: 7,
            enter_replacement: 2,
            switched: 1,
            subtlety: 712,
        },
        {
            id: 5,
            number_game: 9,
            gates: 0,
            yellow_league_cup: 1,
            yellow_tutu: 0,
            red_card: 0,
            vehicle: 7,
            enter_replacement: 2,
            switched: 1,
            subtlety: 712,
        },
        {
            id: 6,
            number_game: 9,
            gates: 0,
            yellow_league_cup: 1,
            yellow_tutu: 0,
            red_card: 0,
            vehicle: 7,
            enter_replacement: 2,
            switched: 1,
            subtlety: 712,
        },
        {
            id: 7,
            number_game: 9,
            gates: 0,
            yellow_league_cup: 1,
            yellow_tutu: 0,
            red_card: 0,
            vehicle: 7,
            enter_replacement: 2,
            switched: 1,
            subtlety: 712,
        },
    ];
    const players = [
        {
            id: 1,
            player: 'אבו עוביד איעד',
            avt: AppImages.img_avt_player,
        },
        {
            id: 2,
            player: 'אליאס שי',
            avt: AppImages.img_avt_player,
        },
        {
            id: 3,
            player: 'אבו עוביד איעד',
            avt: AppImages.img_avt_player,
        },
        {
            id: 4,
            player: 'אבו עוביד איעד',
            avt: AppImages.img_avt_player,
        },
        {
            id: 5,
            player: 'אבו עוביד איעד',
            avt: AppImages.img_avt_player,
        },
        {
            id: 6,
            player: 'אבו עוביד איעד',
            avt: AppImages.img_avt_player,
        },
        {
            id: 7,
            player: 'אבו עוביד איעד',
            avt: AppImages.img_avt_player,
        },
    ];

    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);
    const dots = Array(3).fill('');

    const handleNextRightSlide = () => {};

    const handleNextLeftSlide = () => {};

    const onNavigateDataPlayer = () => {
        navigate(ScreenName.DataPlayerPage);
    };

    return {
        t,
        statistics,
        players,
        activeIndexNumber,
        setActiveIndexNumber,
        dots,
        handleNextRightSlide,
        handleNextLeftSlide,
        onNavigateDataPlayer,
    };
};
