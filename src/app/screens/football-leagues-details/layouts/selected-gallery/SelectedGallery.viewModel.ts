import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AppImages } from '@football/app/assets/images';
import { ISelectedGalleryProps } from './SelectedGallery.type';

export const useViewModel = ({}: ISelectedGalleryProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const data = [
        {
            image: AppImages.img_gallery,
            minutes: '25:11',
            content: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית...',
        },
        {
            image: AppImages.img_gallery,
            minutes: '25:11',
            content: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית...',
        },
        {
            image: AppImages.img_gallery,
            minutes: '25:11',
            content: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית...',
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
