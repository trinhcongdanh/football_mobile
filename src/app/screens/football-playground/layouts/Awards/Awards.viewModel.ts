import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AppImages } from '@football/app/assets/images';
import { IAwardsProps } from '@football/app/screens/football-playground/layouts/Awards/Awards.type';
import { useSelector } from 'react-redux';
import { isEmpty, isNil } from 'lodash';
import { ScreenName } from '@football/app/utils/constants/enum';

export const useViewModel = ({}: IAwardsProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const awards = [
        { id: 1, name: 'כדורגל ADIDAS מונדיאל 2022', image: AppImages.img_big_ball, coin: 820 },
        { id: 2, name: 'נעלי פקק דגם 266', image: AppImages.img_boots, coin: 1.258 },
        { id: 3, name: 'כדורגל ADIDAS מונדיאל 2022', image: AppImages.img_scarf, coin: 820 },
        { id: 4, name: 'כדורגל ADIDAS מונדיאל 2022', image: AppImages.img_shirt, coin: 820 },
    ];

    const registerFacebook = useSelector((state: any) => state.registerFacebook.registerFacebook);

    const handleAward = () => {
        if (!isEmpty(registerFacebook) && !isNil(registerFacebook)) {
            console.log('Go award');
        } else {
            navigate(ScreenName.ConnectPage);
        }
    };

    return {
        t,
        onGoBack,
        awards,
        handleAward,
    };
};
