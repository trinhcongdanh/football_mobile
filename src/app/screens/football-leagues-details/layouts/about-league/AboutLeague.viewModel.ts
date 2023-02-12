import { useTranslation } from 'react-i18next';
import { Animated } from 'react-native';
import React, { useRef, useState } from 'react';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IAboutLeagueProps } from './AboutLeague.type';
import { AppImages } from '@football/app/assets/images';
import { getSize } from '@football/app/utils/responsive/scale';

export const useViewModel = ({}: IAboutLeagueProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const aboutGames = [
        {
            id: 1,
            title: t('leagues_details.about.cycles'),
            content: '32',
            img: AppImages.img_goal_net_blue,
            width: getSize.m(15),
            height: getSize.m(12),
        },
        {
            id: 2,
            title: t('leagues_details.about.cycles'),
            content: '3',
            img: AppImages.img_ball,
            width: getSize.m(12),
            height: getSize.m(12),
        },
        {
            id: 3,
            title: t('leagues_details.about.cycles'),
            content: '2021/2022',
            img: AppImages.img_calendar_week,
            width: getSize.m(11),
            height: getSize.m(12),
        },
        {
            id: 4,
            title: t('leagues_details.about.cycles'),
            content: '0',
            img: AppImages.img_up_right,
            width: getSize.m(9),
            height: getSize.m(12),
        },
        {
            id: 5,
            title: t('leagues_details.about.cycles'),
            content: '14',
            img: AppImages.img_users,
            width: getSize.m(15),
            height: getSize.m(12),
        },
        {
            id: 6,
            title: t('leagues_details.about.cycles'),
            content: 'בוגרים',
            img: AppImages.img_user,
            width: getSize.m(11),
            height: getSize.m(12),
        },
        {
            id: 7,
            title: t('leagues_details.about.cycles'),
            content: '5',
            img: AppImages.img_down_left_up_right,
            width: getSize.m(12),
            height: getSize.m(12),
        },
        {
            id: 8,
            title: t('leagues_details.about.cycles'),
            content: '15 דקות',
            img: AppImages.img_clock,
            width: getSize.m(12),
            height: getSize.m(12),
        },
        {
            id: 9,
            title: t('leagues_details.about.cycles'),
            content: '2',
            img: AppImages.img_down_right,
            width: getSize.m(9),
            height: getSize.m(12),
        },
    ];
    const dots = Array(4).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);

    return {
        t,
        aboutGames,
        dots,
        activeIndexNumber,
        setActiveIndexNumber,
    };
};
