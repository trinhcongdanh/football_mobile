import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useState } from 'react';
import { INationalCupProps } from '@football/app/screens/football-home/layouts/NationalCup/NationalCup.type';
import { ScreenName } from '@football/app/utils/constants/enum';

export const useViewModel = ({ homePage }: INationalCupProps) => {
    const { navigate } = useAppNavigator();
    const { t } = useTranslation();
    const pages = Array(2).fill('');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);

    const onClickCup = (cupId?: string) => {
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
