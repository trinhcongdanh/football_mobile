import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AppImages } from '@football/app/assets/images';
import { IPitchScreenProps } from './PitchScreen.type';

export const useViewModel = ({ navigation, route }: IPitchScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const listTeamFields = [
        {
            id: 1,
            name_club: 'הפועל תל אביב',
            avt_club: AppImages.img_israel,
            age: 'בוגרים',
            home_training: 'בית',
        },
        {
            id: 2,
            name_club: 'מכבי תל אביב',
            avt_club: AppImages.img_israel,
            age: 'בוגרים',
            home_training: 'בית',
        },
        {
            id: 3,
            name_club: 'הפועל תל אביב',
            avt_club: AppImages.img_israel,
            age: 'בוגרים',
            home_training: 'בית',
        },
    ];

    return {
        t,
        onGoBack,
        listTeamFields,
    };
};
