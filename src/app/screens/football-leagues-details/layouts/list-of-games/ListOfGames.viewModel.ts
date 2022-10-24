import { useTranslation } from 'react-i18next';
import React from 'react';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AppImages } from '@football/app/assets/images';
import { IListOfGamesProps } from './ListOfGames.type';

export const useViewModel = ({}: IListOfGamesProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const listGames = [
        {
            id: 1,
            logoHome: AppImages.img_israel,
            logoAway: AppImages.img_albania,
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            location: 'בלומפילד',
            date: '15.09.22',
            result: '3:1',
            schedule: '11:00',
            details: 'הרכב',
            completed: false,
        },
        {
            id: 2,
            logoHome: AppImages.img_israel,
            logoAway: AppImages.img_albania,
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            location: 'בלומפילד',
            date: '10.09.22',
            result: '3:1',
            schedule: '11:00',
            details: 'פרטי משחק',
            completed: true,
        },
        {
            id: 3,
            logoHome: AppImages.img_israel,
            logoAway: AppImages.img_albania,
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            location: 'בלומפילד',
            date: '01.09.22',
            result: '3:1',
            schedule: '11:00',
            details: 'פרטי משחק',
            completed: true,
        },
    ];
    return {
        t,
        listGames,
    };
};
