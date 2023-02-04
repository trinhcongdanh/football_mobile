import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IRankingTableProps } from './RankingTable.type';

export const useViewModel = ({}: IRankingTableProps) => {
    const { navigate } = useAppNavigator();
    const { t } = useTranslation();
    const rankingTable = [
        {
            id: 1,
            place: 1,
            place_change: 'up',
            logo_url:
                'https://cdn0.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality-/283/iceland-512.png',
            name_he: 'איסלנד',
            games: '6',
            ties: '1',
            difference: '2',
            goals: '6 -4',
            score: '12',
        },
        {
            id: 2,
            place: 2,
            place_change: 'down',
            logo_url:
                'https://cdn0.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality-/283/iceland-512.png',
            name_he: 'איסלנד',
            games: '6',
            ties: '1',
            difference: '2',
            goals: '6 -4',
            score: '12',
        },
        {
            id: 3,
            place: 3,
            place_change: 'up',
            logo_url:
                'https://cdn0.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality-/283/iceland-512.png',
            name_he: 'איסלנד',
            games: '6',
            ties: '1',
            difference: '2',
            goals: '6 -4',
            score: '12',
        },
    ];
    return {
        t,
        rankingTable,
    };
};
