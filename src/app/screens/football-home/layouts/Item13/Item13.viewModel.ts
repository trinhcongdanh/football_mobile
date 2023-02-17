import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useState } from 'react';
import { AppImages } from '@football/app/assets/images';
import { IItem13Props } from '@football/app/screens/football-home/layouts/Item13/Item13.type';
export const useViewModel = ({}: IItem13Props) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const pages = Array(2).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);

    const data = [
        { id: 1, img: AppImages.img_squad },
        { id: 2, img: AppImages.img_squad },
        { id: 3, img: AppImages.img_squad },
        { id: 4, img: AppImages.img_squad },
    ];

    return {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        data,
    };
};
