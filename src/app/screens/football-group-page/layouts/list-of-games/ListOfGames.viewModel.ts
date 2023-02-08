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
            logoHome:
                'https://upload.wikimedia.org/wikipedia/he/thumb/5/50/HaifaCarmel.svg/800px-HaifaCarmel.svg.png',
            logoAway:
                'https://upload.wikimedia.org/wikipedia/he/thumb/5/50/HaifaCarmel.svg/800px-HaifaCarmel.svg.png',
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            location: 'בלומפילד',
            date: '15/09/22',
            result: null,
            schedule: null,
            details: 'הרכב',
            tournament: 'פלייאוף לאליפות אירופה',
            completed: false,
        },
        {
            id: 2,
            logoHome:
                'https://upload.wikimedia.org/wikipedia/he/thumb/5/50/HaifaCarmel.svg/800px-HaifaCarmel.svg.png',
            logoAway:
                'https://upload.wikimedia.org/wikipedia/he/thumb/5/50/HaifaCarmel.svg/800px-HaifaCarmel.svg.png',
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            location: 'בלומפילד',
            date: '10/09/22',
            result: '3:1',
            schedule: '11:00',
            details: 'פרטי משחק',
            tournament: 'פלייאוף לאליפות אירופה',
            completed: true,
        },
        {
            id: 3,
            logoHome:
                'https://upload.wikimedia.org/wikipedia/he/thumb/5/50/HaifaCarmel.svg/800px-HaifaCarmel.svg.png',
            logoAway:
                'https://upload.wikimedia.org/wikipedia/he/thumb/5/50/HaifaCarmel.svg/800px-HaifaCarmel.svg.png',
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            location: 'בלומפילד',
            date: '01/09/22',
            result: null,
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
