import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AppImages } from '@football/app/assets/images';
import { IRankingTableProps } from './RankingTable.type';

export const useViewModel = ({}: IRankingTableProps) => {
    const { navigate } = useAppNavigator();
    const { t } = useTranslation();
    const listTeams = [
        {
            id: 1,
            logo: AppImages.img_israel,
            name: 'ישראל',
            mash: 6,
            nch: 4,
            draw: 0,
            the_p: 2,
            time: '6-9',
            no: 12,
        },
        {
            id: 2,
            logo: AppImages.img_israel,
            name: 'ישראל',
            mash: 6,
            nch: 4,
            draw: 0,
            the_p: 2,
            time: '6-9',
            no: 12,
        },
        {
            id: 3,
            logo: AppImages.img_israel,
            name: 'ישראל',
            mash: 6,
            nch: 4,
            draw: 0,
            the_p: 2,
            time: '6-9',
            no: 12,
        },
        {
            id: 4,
            logo: AppImages.img_israel,
            name: 'ישראל',
            mash: 6,
            nch: 4,
            draw: 0,
            the_p: 2,
            time: '6-9',
            no: 12,
        },
    ];
    return {
        t,
        listTeams,
    };
};
