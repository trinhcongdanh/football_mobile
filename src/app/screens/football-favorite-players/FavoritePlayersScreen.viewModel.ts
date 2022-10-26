import React from 'react';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { IFavoritePlayerScreenProps } from './FavoritePlayersScreen.type';

export const useViewModel = ({ navigation, route }: IFavoritePlayerScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();

    const onGoBack = (): void => {
        goBack();
    };
    const onGoSkip = (): void => {
        navigate(ScreenName.BottomTab);
    };

    return {
        t,
        onGoBack,
        onGoSkip,
    };
};
