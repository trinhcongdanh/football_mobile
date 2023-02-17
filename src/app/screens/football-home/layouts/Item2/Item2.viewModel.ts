import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';

import { IItem1Props } from '@football/app/screens/football-home/layouts/Item1/Item1.type';
import { useState } from 'react';
import { AppImages } from '@football/app/assets/images';
export const useViewModel = ({}: IItem1Props) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const pages = Array(2).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);

    return {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
    };
};
