import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IStatisticsProps } from './Statistics.type';

export const useViewModel = ({}: IStatisticsProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const statistics = [
        { id: 1, player: 'מאור בוזגלו', showDetail: false },
        { id: 2, player: 'מאור בוזגלו', showDetail: false },
        { id: 3, player: 'מאור בוזגלו', showDetail: false },
        { id: 4, player: 'מאור בוזגלו', showDetail: false },
        { id: 5, player: 'מאור בוזגלו', showDetail: false },
    ];

    const [statisticsPlayer, setStatisticsPlayer] = useState<any[]>([]);

    const handleShowDetail = (item: any) => {
        setStatisticsPlayer([...statisticsPlayer, item]);
    };

    const handleCloseDetail = (item: any) => {
        const index = statisticsPlayer.findIndex(elm => item.id === elm.id);
        if (index !== -1) {
            const newStatisticsPlayer = statisticsPlayer.filter(e => e.id !== item.id);
            setStatisticsPlayer(newStatisticsPlayer);
        }
    };

    const newStatistics = statistics.map(e => {
        const i = statisticsPlayer.findIndex(t => t.id === e.id);
        return { ...e, showDetail: i !== -1 };
    });

    const handleMoreStatistics = () => {};
    return {
        t,
        handleShowDetail,
        handleMoreStatistics,
        handleCloseDetail,
        newStatistics,
    };
};
