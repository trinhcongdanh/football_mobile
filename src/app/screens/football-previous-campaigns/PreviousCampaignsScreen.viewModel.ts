import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { IPreviousCampaignsScreenProps } from './PreviousCampaignsScreen.type';

export const useViewModel = ({ navigation, route }: IPreviousCampaignsScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const campaigns = [
        { id: 1, name: 'ליגת האומות של אופ"א 2022/23', year: '2022/23' },
        { id: 2, name: 'ידידות', year: '2022/23' },
        { id: 3, name: 'מוקדמות מונדיאל', year: '2022/23' },
        { id: 4, name: 'ליגת האומות של אופ"א 2022/23', year: '2022/23' },
        { id: 5, name: 'ליגת האומות של אופ"א 2022/23', year: '2022/23' },
        { id: 6, name: 'ליגת האומות של אופ"א 2022/23', year: '2022/23' },
        { id: 7, name: 'ליגת האומות של אופ"א 2022/23', year: '2022/23' },
        { id: 8, name: 'ליגת האומות של אופ"א 2022/23', year: '2022/23' },
    ];

    const handleCampaignPage = () => {
        navigate(ScreenName.CampaignPage);
    };

    return {
        t,
        onGoBack,
        handleCampaignPage,
        campaigns,
    };
};
