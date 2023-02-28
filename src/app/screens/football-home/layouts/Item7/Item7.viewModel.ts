import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useViewModel = () => {
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
