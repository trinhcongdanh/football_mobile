import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { AppImages } from '@football/app/assets/images';
import { IListOfGamesProps } from './ListOfGames.type';

export const useViewModel = ({}: IListOfGamesProps) => {
    const { navigate } = useAppNavigator();
    const { t } = useTranslation();
    const options = [
        t('campaign.list_game.home_away'),
        t('campaign.list_game.house'),
        t('campaign.list_game.outside'),
    ];

    const [select, setSelect] = useState(0);
    const selectOption = (index: any) => {
        setSelect(index);
    };

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
            details: 'פרטי משחק',
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
        navigate(ScreenName.GoalsNationalTeamPage);
    };

    return {
        t,
        options,
        select,
        listGames,
        setSelect,
        selectOption,
        handleDetailMatch,
    };
};
