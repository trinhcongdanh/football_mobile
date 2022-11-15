import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { AppImages } from '@football/app/assets/images';
import { IStatisticsProps } from './Statistics.type';

export const useViewModel = ({}: IStatisticsProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const [onSelect, setOnSelect] = useState(0);
    const listTeams = [
        {
            id: 1,
            logo: AppImages.img_israel,
            name: 'מכבי חיפה',
            from: 34,
            nch: 22,
            draw: 9,
            the_p: 3,
            time: '37-82',
            no: 75,
        },
        {
            id: 2,
            logo: AppImages.img_israel,
            name: 'הפועל באר שבע',
            from: 34,
            nch: 22,
            draw: 9,
            the_p: 3,
            time: '37-82',
            no: 75,
        },
        {
            id: 3,
            logo: AppImages.img_israel,
            name: 'מכבי תל אביב',
            from: 34,
            nch: 22,
            draw: 9,
            the_p: 3,
            time: '37-82',
            no: 75,
        },
        {
            id: 4,
            logo: AppImages.img_israel,
            name: 'מכבי נתניה',
            from: 34,
            nch: 22,
            draw: 9,
            the_p: 3,
            time: '37-82',
            no: 75,
        },
        {
            id: 5,
            logo: AppImages.img_israel,
            name: 'מכבי נתניה',
            from: 34,
            nch: 22,
            draw: 9,
            the_p: 3,
            time: '37-82',
            no: 75,
        },
        {
            id: 6,
            logo: AppImages.img_israel,
            name: 'מכבי נתניה',
            from: 34,
            nch: 22,
            draw: 9,
            the_p: 3,
            time: '37-82',
            no: 75,
        },
    ];
    const handleMoreStatistics = () => {
        navigate(ScreenName.StatisticsLeaguesPage);
    };

    return {
        t,
        setOnSelect,
        handleMoreStatistics,
        onSelect,
        listTeams,
    };
};
