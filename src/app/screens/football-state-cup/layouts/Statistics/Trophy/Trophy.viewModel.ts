import { useTranslation } from 'react-i18next';
import React from 'react';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AppImages } from '@football/app/assets/images';
import { ScreenName } from '@football/app/utils/constants/enum';

export const useViewModel = () => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const seasonsTrophy = [
        {
            id: 1,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            season: '2021/2022',
        },
        {
            id: 2,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            season: '2021/2022',
        },
        {
            id: 3,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            season: '2021/2022',
        },
        {
            id: 4,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            season: '2021/2022',
        },
        {
            id: 5,
            name_club: 'מכבי ע. פ״ת',
            avt_club: AppImages.img_israel,
            season: '2021/2022',
        },
    ];

    const handleCupAround = () => {
        navigate(ScreenName.CupsPage);
    };

    return {
        t,
        seasonsTrophy,
        handleCupAround,
    };
};
