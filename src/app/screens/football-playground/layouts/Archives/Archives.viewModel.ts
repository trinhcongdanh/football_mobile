import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AppImages } from '@football/app/assets/images';
import { IArchivesProps } from '@football/app/screens/football-playground/layouts/Archives/Archives.type';

export const useViewModel = ({}: IArchivesProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const archives = [
        {
            id: 1,
            title: 'כמה אתה מכיר את נבחרת ישראל?',
            background: AppImages.img_archive,
            image: AppImages.img_logo,
            trophy: 57,
            point: '2,000',
        },
        {
            id: 2,
            title: 'כמה אתה מכיר את נבחרת ישראל?',
            background: AppImages.img_archive,
            image: AppImages.img_logo,
            trophy: 57,
            point: '2,000',
        },
        {
            id: 3,
            title: 'כמה אתה מכיר את נבחרת ישראל?',
            background: AppImages.img_archive,
            image: AppImages.img_logo,
            trophy: 57,
            point: '2,000',
        },
        {
            id: 4,
            title: 'כמה אתה מכיר את נבחרת ישראל?',
            background: AppImages.img_archive,
            image: AppImages.img_logo,
            trophy: 57,
            point: '2,000',
        },
    ];

    return {
        t,
        onGoBack,
        archives,
    };
};
