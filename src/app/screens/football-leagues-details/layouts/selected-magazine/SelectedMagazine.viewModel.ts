import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AppImages } from '@football/app/assets/images';
import { ISelectedMagazineProps } from './SelectedMagazine.type';

export const useViewModel = ({}: ISelectedMagazineProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const data = [
        {
            image: AppImages.img_gallery,
            date: '11/8/22',
            content: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
        },
        {
            image: AppImages.img_gallery,
            date: '11/8/22',
            content: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
        },
        {
            image: AppImages.img_gallery,
            date: '11/8/22',
            content: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
        },
        {
            image: AppImages.img_gallery,
            date: '11/8/22',
            content: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
        },
        {
            image: AppImages.img_gallery,
            date: '11/8/22',
            content: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
        },
    ];
    const width = Dimensions.get('window').width;
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);
    return {
        t,
        data,
        width,
        activeIndexNumber,
        setActiveIndexNumber,
    };
};
