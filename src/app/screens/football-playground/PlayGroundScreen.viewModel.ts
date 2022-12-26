import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IPlayGroundScreenProps } from '@football/app/screens/football-playground/PlayGroundScreen.type';

export const useViewModel = ({ navigation, route }: IPlayGroundScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    return {
        t,
        onGoBack,
    };
};
