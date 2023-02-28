import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useState } from 'react';
import { IItem11Props } from '@football/app/screens/football-home/layouts/Item11/Item11.type';
import { ScreenName } from '@football/app/utils/constants/enum';

export const useViewModel = ({ homePage }: IItem11Props) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const pages = Array(2).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);

    const onClickCup = (cupId: string) => {
        navigate(ScreenName.StateCupPage, { cupId });
    };

    return {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        onClickCup,
    };
};
