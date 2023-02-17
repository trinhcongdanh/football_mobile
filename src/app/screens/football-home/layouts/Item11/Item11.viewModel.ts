import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useState } from 'react';
import { IItem11Props } from '@football/app/screens/football-home/layouts/Item11/Item11.type';
export const useViewModel = ({}: IItem11Props) => {
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
