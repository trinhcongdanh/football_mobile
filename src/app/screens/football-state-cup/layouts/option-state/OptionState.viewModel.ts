import { useTranslation } from 'react-i18next';
import React from 'react';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';

export const useViewModel = () => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const listState = [
        {
            id: 1,
            date: '15/12/22',
            play: 'מכבי נווה שאנן אלדד - איחוד בני כפר קרע',
            etch: '-',
            hour: '-',
            toch: '',
        },
        {
            id: 2,
            date: '06/09/22',
            play: 'מ.ס. הפועל לוד - הפועל אזור',
            etch: 'ירושלים עמק הארזים 1 סינטטי',
            hour: '20:00',
            toch: '2 : 2',
        },
        {
            id: 3,
            date: '06/09/22',
            play: 'מ.ס. הפועל לוד - הפועל אזור',
            etch: 'ירושלים עמק הארזים 1 סינטטי',
            hour: '20:00',
            toch: '2 : 2',
        },
        {
            id: 4,
            date: '06/09/22',
            play: 'מ.ס. הפועל לוד - הפועל אזור',
            etch: 'ירושלים עמק הארזים 1 סינטטי',
            hour: '20:00',
            toch: '2 : 2',
        },
        {
            id: 5,
            date: '06/09/22',
            play: 'מ.ס. הפועל לוד - הפועל אזור',
            etch: 'ירושלים עמק הארזים 1 סינטטי',
            hour: '20:00',
            toch: '2 : 2',
        },
    ];

    const onNavigateGame = () => {
        navigate(ScreenName.MatchPage);
    };
    return {
        t,
        listState,
        onNavigateGame,
    };
};
