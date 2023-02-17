import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IHomeScreenProps } from '@football/app/screens/football-home/HomeScreen.type';
import { AppImages } from '@football/app/assets/images';

export const useViewModel = ({ navigation, route }: IHomeScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const data_header = [
        { id: 1, name: 'רועי אזוט', avt: AppImages.img_avt_player },
        { id: 2, name: 'רועי אזוט', avt: AppImages.img_avt_player },
        { id: 3, name: 'רועי אזוט', avt: AppImages.img_avt_player },
        { id: 4, name: 'רועי אזוט', avt: AppImages.img_avt_player },
        { id: 5, name: 'רועי אזוט', avt: AppImages.img_avt_player },
    ];

    return { t, onGoBack, data_header };
};
