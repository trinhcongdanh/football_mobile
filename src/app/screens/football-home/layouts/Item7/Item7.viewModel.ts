import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useState } from 'react';
import { IItem6Props } from '@football/app/screens/football-home/layouts/Item6/Item6.type';
import { AppImages } from '@football/app/assets/images';
export const useViewModel = ({}: IItem6Props) => {
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
