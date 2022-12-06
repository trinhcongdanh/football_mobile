import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IRankingTableProps } from './RankingTable.type';

export const useViewModel = ({ rankingTable }: IRankingTableProps) => {
    const { navigate } = useAppNavigator();
    const { t } = useTranslation();

    return {
        t,
    };
};
