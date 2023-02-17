import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';

import { useState } from 'react';
import { AppImages } from '@football/app/assets/images';
import { IItem4Props } from '@football/app/screens/football-home/layouts/Item4/Item4.type';
export const useViewModel = ({}: IItem4Props) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const pages = Array(2).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);

    const datas = [
        {
            id: 1,
            date: 'יום רביעי | 13/09/22',
            name_away: 'הפועל ב״ש',
            name_home: 'הפועל ב״ש',
            result: '3 : 0',
            schedule: '11:30',
            avt_away: AppImages.img_club,
            avt_home: AppImages.img_club,
            clock: '45 דק׳',
            ticket: '3',
            score: '3',
        },
        {
            id: 2,
            date: 'יום רביעי | 14/09/22',
            name_away: 'הפועל ב״ש',
            name_home: 'הפועל ב״ש',
            result: null,
            schedule: '11:30',
            avt_away: AppImages.img_club,
            avt_home: AppImages.img_club,
            clock: null,
            ticket: null,
            score: null,
        },
    ];

    return {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        datas,
    };
};
