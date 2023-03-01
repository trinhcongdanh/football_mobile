import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useViewModel = () => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);
    const dots = Array(3).fill('');

    const handleNextRightSlide = () => {};

    const handleNextLeftSlide = () => {};

    const onNavigateDataPlayer = (playerId: string) => {
        navigate(ScreenName.DataPlayerPage, {
            playerId,
            previous_screen: ScreenName.GroupPagePage,
        });
    };

    return {
        t,
        activeIndexNumber,
        setActiveIndexNumber,
        dots,
        handleNextRightSlide,
        handleNextLeftSlide,
        onNavigateDataPlayer,
    };
};
