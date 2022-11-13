import { useTranslation } from 'react-i18next';
import React from 'react';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ILeaguesAverageProps } from './LeaguesAverage.type';

export const useViewModel = ({}: ILeaguesAverageProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const listAverages = [
        {
            id: 1,
            category: 'ממוצע שערים',
            average_game: 3.5,
            average_cycle: 3.5,
        },
        {
            id: 2,
            category: 'ממוצע שערים',
            average_game: 3.5,
            average_cycle: 3.5,
        },
        {
            id: 3,
            category: 'ממוצע שערים',
            average_game: 3.5,
            average_cycle: 3.5,
        },
        {
            id: 4,
            category: 'ממוצע שערים',
            average_game: 3.5,
            average_cycle: 3.5,
        },
        {
            id: 5,
            category: 'ממוצע שערים',
            average_game: 3.5,
            average_cycle: 3.5,
        },
    ];

    return {
        t,
        listAverages,
    };
};
