import { useTranslation } from 'react-i18next';
import React from 'react';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AppImages } from '@football/app/assets/images';
import { IScoresGoalsProps } from './ScoresGoals.type';

export const useViewModel = ({}: IScoresGoalsProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const listGoals = [
        {
            id: 1,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            name_player: 'איאד אבו עוביד',
            avt_player: AppImages.img_avt_player,
            gate: 5,
        },
        {
            id: 2,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            name_player: 'איאד אבו עוביד',
            avt_player: AppImages.img_avt_player,
            gate: 5,
        },
        {
            id: 3,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            name_player: 'איאד אבו עוביד',
            avt_player: AppImages.img_avt_player,
            gate: 5,
        },
        {
            id: 4,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            name_player: 'איאד אבו עוביד',
            avt_player: AppImages.img_avt_player,
            gate: 5,
        },
        {
            id: 5,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            name_player: 'איאד אבו עוביד',
            avt_player: AppImages.img_avt_player,
            gate: 5,
        },
    ];

    return {
        t,
        listGoals,
    };
};
