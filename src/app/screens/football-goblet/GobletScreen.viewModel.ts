import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { IGobletScreenProps } from './GobletScreen.type';

export const useViewModel = ({ navigation, route }: IGobletScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onShowSideMenu = () => {
        navigation.openDrawer();
    };

    const [onSelect, setOnSelect] = useState(0);

    const stateCups = [
        { id: 1, state: 'גביע המדינה' },
        { id: 2, state: 'גביע וותיקים' },
        { id: 3, state: 'גביע אתנה' },
        { id: 4, state: 'גביע מדינה נשים' },
        { id: 5, state: 'גביע לנוער על שם אבי רן ז״ל' },
        { id: 6, state: 'גביע אתנה' },
        { id: 7, state: 'גביע נערות' },
        { id: 8, state: 'גביע נערים א׳ ע״ש חיים הברפלד ז״ל' },
        { id: 9, state: 'גביע המדינה לנערות' },
    ];

    const handleStateCup = () => {
        navigate(ScreenName.StateCupPage);
    };

    return { t, onShowSideMenu, setOnSelect, handleStateCup, onSelect, stateCups };
};
