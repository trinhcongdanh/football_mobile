import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useState } from 'react';
import { IItem12Props } from '@football/app/screens/football-home/layouts/Item12/Item12.type';
import { AppImages } from '@football/app/assets/images';
export const useViewModel = ({}: IItem12Props) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const pages = Array(2).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);

    const data = [
        {
            image_url: AppImages.img_gallery,
            length: '11/8/22',
            caption_he: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
        },
        {
            image_url: AppImages.img_gallery,
            length: '11/8/22',
            caption_he: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
        },
        {
            image_url: AppImages.img_gallery,
            length: '11/8/22',
            caption_he: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
        },
        {
            image_url: AppImages.img_gallery,
            length: '11/8/22',
            caption_he: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
        },
        {
            image_url: AppImages.img_gallery,
            length: '11/8/22',
            caption_he: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
        },
    ];
    const dots = Array(data.length).fill('');

    return {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        data,
        dots,
    };
};
