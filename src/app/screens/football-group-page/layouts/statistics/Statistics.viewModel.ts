import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IStatisticsProps } from './Statistics.type';

export const useViewModel = ({}: IStatisticsProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const [showDetail, setShowDetail] = useState(false);

    const statistics = [
        { id: 1, player: 'מאור בוזגלו' },
        { id: 2, player: 'מאור בוזגלו' },
        { id: 3, player: 'מאור בוזגלו' },
        { id: 4, player: 'מאור בוזגלו' },
        { id: 5, player: 'מאור בוזגלו' },
    ];

    const handleShowDetail = () => {
        setShowDetail(true);
    };

    const handleCloseDetail = () => {
        setShowDetail(false);
    };
    const handleMoreStatistics = () => {};
    return {
        t,
        statistics,
        showDetail,
        handleShowDetail,
        handleMoreStatistics,
        handleCloseDetail,
    };
};
