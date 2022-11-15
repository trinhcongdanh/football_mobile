import { useTranslation } from 'react-i18next';
import React from 'react';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AppImages } from '@football/app/assets/images';
import { IAverageReboundsProps } from './AverageRebounds.type';

export const useViewModel = ({}: IAverageReboundsProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const listAverages = [
        {
            id: 1,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            amount: 3.5,
        },
        {
            id: 2,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            amount: 3.5,
        },
        {
            id: 3,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            amount: 3.5,
        },
        {
            id: 4,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            amount: 3.5,
        },
        {
            id: 5,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            amount: 3.5,
        },
    ];

    return {
        t,
        listAverages,
    };
};
