import { useTranslation } from 'react-i18next';
import { Animated } from 'react-native';
import React, { useRef } from 'react';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IAboutLeagueProps } from './AboutLeague.type';

export const useViewModel = ({}: IAboutLeagueProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const aboutGames = [
        { id: 1, title: t('leagues_details.about.cycles'), content: '32' },
        { id: 2, title: t('leagues_details.about.cycles'), content: '3' },
        { id: 3, title: t('leagues_details.about.cycles'), content: '2021/2022' },
        { id: 4, title: t('leagues_details.about.cycles'), content: '0' },
        { id: 5, title: t('leagues_details.about.cycles'), content: '14' },
        { id: 6, title: t('leagues_details.about.cycles'), content: 'בוגרים' },
        { id: 7, title: t('leagues_details.about.cycles'), content: '5' },
        { id: 8, title: t('leagues_details.about.cycles'), content: '15 דקות' },
        { id: 9, title: t('leagues_details.about.cycles'), content: '2' },
    ];
    const dots = Array(5).fill('');
    const scrollX = useRef(new Animated.Value(0)).current;

    return {
        t,
        aboutGames,
        dots,
        scrollX,
    };
};
