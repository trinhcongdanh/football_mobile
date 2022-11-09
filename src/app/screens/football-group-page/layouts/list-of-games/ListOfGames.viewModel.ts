import { useTranslation } from 'react-i18next';
import React from 'react';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
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
            tournament: 'פלייאוף לאליפות אירופה',
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
            tournament: 'פלייאוף לאליפות אירופה',
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
            tournament: 'פלייאוף לאליפות אירופה',
            completed: true,
        },
    ];
    const handleDetailMatch = () => {
        navigate(ScreenName.GameCompositionPage);
    };
    return {
        t,
        listGames,
        handleDetailMatch,
    };
};
