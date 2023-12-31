import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useState } from 'react';
import { AppImages } from '@football/app/assets/images';
import { IItem3Props } from '@football/app/screens/football-home/layouts/Item3/Item3.type';
export const useViewModel = ({}: IItem3Props) => {
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
