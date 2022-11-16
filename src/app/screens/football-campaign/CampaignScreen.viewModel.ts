import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ICampaignScreenProps } from './CampaignScreen.type';

export const useViewModel = ({ navigation, route }: ICampaignScreenProps) => {
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
