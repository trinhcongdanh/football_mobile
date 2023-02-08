import { useTranslation } from 'react-i18next';
import React from 'react';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';

export const useViewModel = () => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const cupsAround = [
        {
            id: 1,
            group: 'א',
            date: '03/09/2022',
        },
        {
            id: 2,
            group: "ה' - ליגות א' דרום",
            date: '03/09/2022',
        },
        {
            id: 3,
            group: "ה' - ליגות א' צפון",
            date: '03/09/2022',
        },
        {
            id: 4,
            group: 'ב',
            date: '03/09/2022',
        },
        {
            id: 5,
            group: 'ג',
            date: '03/09/2022',
        },
    ];

    const handleStatisticDetailsScreen = () => {
        navigate(ScreenName.CupsPage);
    };
    return {
        t,
        cupsAround,
        handleStatisticDetailsScreen,
    };
};
