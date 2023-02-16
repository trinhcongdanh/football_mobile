import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Dimensions } from 'react-native';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ISelectedMagazineProps } from './SelectedMagazine.type';

export const useViewModel = ({ galleries }: ISelectedMagazineProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const data = galleries;
    // const data = [
    //     {
    //         image_url: AppImages.img_gallery,
    //         length: '11/8/22',
    //         caption_he: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
    //     },
    //     {
    //         image_url: AppImages.img_gallery,
    //         length: '11/8/22',
    //         caption_he: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
    //     },
    //     {
    //         image_url: AppImages.img_gallery,
    //         length: '11/8/22',
    //         caption_he: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
    //     },
    //     {
    //         image_url: AppImages.img_gallery,
    //         length: '11/8/22',
    //         caption_he: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
    //     },
    //     {
    //         image_url: AppImages.img_gallery,
    //         length: '11/8/22',
    //         caption_he: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
    //     },
    // ];
    const { width } = Dimensions.get('window');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);
    const dots = Array(activeIndexNumber).fill('');
    return {
        t,
        data,
        width,
        activeIndexNumber,
        setActiveIndexNumber,
        dots,
    };
};
