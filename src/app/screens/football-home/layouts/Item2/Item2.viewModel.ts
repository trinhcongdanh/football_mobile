import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';

import { IItem1Props } from '@football/app/screens/football-home/layouts/Item1/Item1.type';
import { useState } from 'react';
import { AppImages } from '@football/app/assets/images';
export const useViewModel = () => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const pages = Array(2).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);
    const data_stats = [

    ];
    const data = [
        {
            id: 1,
            name_away: 'ישראל',
            name_home: 'ישראל',
            avt_away: AppImages.img_albania,
            avt_home: AppImages.img_albania,
            result: '3 : 1',
            schedule: '17:57',
            isLive: true,
            date: '15.09.22',
            location: 'בלומפילד',
            minute: "'45",
        },
        {
            id: 2,
            name_away: 'ישראל',
            name_home: 'ישראל',
            avt_away: AppImages.img_albania,
            avt_home: AppImages.img_albania,
            result: null,
            schedule: '17:57',
            isLive: false,
            date: '15.09.22',
            location: 'בלומפילד',
            minute: null,
        },
        {
            id: 3,
            name_away: 'ישראל',
            name_home: 'ישראל',
            avt_away: AppImages.img_albania,
            avt_home: AppImages.img_albania,
            result: '3 : 1',
            schedule: '17:57',
            isLive: false,
            date: '15.09.22',
            location: 'בלומפילד',
            minute: "'90",
        },
    ];
    return {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        data_stats,
        data,
    };
};
