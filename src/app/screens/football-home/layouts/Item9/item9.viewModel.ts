import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IItem9Props } from '@football/app/screens/football-home/layouts/Item9/Item9.type';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useViewModel = ({ homePage }: IItem9Props) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const pages = Array(2).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);
    const dots = Array(homePage.magazine.length).fill('');
    return {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        dots,
    };
};
