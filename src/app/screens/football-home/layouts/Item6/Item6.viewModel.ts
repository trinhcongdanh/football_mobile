import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useState } from 'react';
import { IItem6Props } from '@football/app/screens/football-home/layouts/Item6/Item6.type';
import { AppImages } from '@football/app/assets/images';
export const useViewModel = ({}: IItem6Props) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const pages = Array(2).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);

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
            tournaments: 'ליגת האומות',
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
            tournaments: 'ליגת האומות',
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
            tournaments: 'ליגת האומות',
            minute: "'90",
        },
    ];

    return {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        data,
    };
};
