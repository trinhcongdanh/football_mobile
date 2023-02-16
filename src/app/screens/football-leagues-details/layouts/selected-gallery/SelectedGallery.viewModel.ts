import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Dimensions } from 'react-native';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ISelectedGalleryProps } from './SelectedGallery.type';

export const useViewModel = ({ galleries }: ISelectedGalleryProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const data = galleries;
    const { width } = Dimensions.get('window');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);
    return {
        t,
        data,
        width,
        activeIndexNumber,
        setActiveIndexNumber,
    };
};
