import { useTranslation } from 'react-i18next';
import React from 'react';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AppImages } from '@football/app/assets/images';
import { IAccumulationYellowsProps } from './AccumulationYellows.type';

export const useViewModel = ({}: IAccumulationYellowsProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const listTickets = [
        {
            id: 1,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            name_player: 'איאד אבו עוביד',
            avt_player: AppImages.img_avt_player,
            amount: 2,
        },
        {
            id: 2,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            name_player: 'איאד אבו עוביד',
            avt_player: AppImages.img_avt_player,
            amount: 2,
        },
        {
            id: 3,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            name_player: 'איאד אבו עוביד',
            avt_player: AppImages.img_avt_player,
            amount: 2,
        },
        {
            id: 4,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            name_player: 'איאד אבו עוביד',
            avt_player: AppImages.img_avt_player,
            amount: 2,
        },
        {
            id: 5,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            name_player: 'איאד אבו עוביד',
            avt_player: AppImages.img_avt_player,
            amount: 2,
        },
    ];

    return {
        t,
        listTickets,
    };
};
