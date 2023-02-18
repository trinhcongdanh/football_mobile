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
            logoHome:
                'https://upload.wikimedia.org/wikipedia/he/thumb/0/0e/MaacabiSymbol.svg/1200px-MaacabiSymbol.svg.png',
            logoAway:
                'https://upload.wikimedia.org/wikipedia/he/thumb/0/0e/MaacabiSymbol.svg/1200px-MaacabiSymbol.svg.png',
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            location: 'בלומפילד',
            date: '15/09/22',
            result: null,
            schedule: null,
            details: 'פרטי משחק',
            tournament: 'פלייאוף לאליפות אירופה',
            completed: false,
            isLive: true,
        },
        {
            id: 2,
            logoHome:
                'https://upload.wikimedia.org/wikipedia/he/thumb/0/0e/MaacabiSymbol.svg/1200px-MaacabiSymbol.svg.png',
            logoAway:
                'https://upload.wikimedia.org/wikipedia/he/thumb/0/0e/MaacabiSymbol.svg/1200px-MaacabiSymbol.svg.png',
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            location: 'בלומפילד',
            date: '10/09/22',
            result: '3:1',
            schedule: '11:00',
            details: 'פרטי משחק',
            tournament: 'פלייאוף לאליפות אירופה',
            completed: true,
            isLive: false,
        },
        {
            id: 3,
            logoHome:
                'https://upload.wikimedia.org/wikipedia/he/thumb/0/0e/MaacabiSymbol.svg/1200px-MaacabiSymbol.svg.png',
            logoAway:
                'https://upload.wikimedia.org/wikipedia/he/thumb/0/0e/MaacabiSymbol.svg/1200px-MaacabiSymbol.svg.png',
            nameHome: 'ישראל',
            nameAway: 'אלבניה',
            location: 'בלומפילד',
            date: '01.09.22',
            result: '3:1',
            schedule: '11:00',
            details: 'פרטי משחק',
            tournament: 'פלייאוף לאליפות אירופה',
            completed: true,
            isLive: false,
        },
    ];
    const handleDetailMatch = () => {
        navigate(ScreenName.MatchPage);
    };

    const handleStadium = () => {
        navigate(ScreenName.PitchPage);
    };

    return {
        t,
        options,
        select,
        listGames,
        setSelect,
        selectOption,
        handleDetailMatch,
        handleStadium,
    };
};
