import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { Alert } from 'react-native';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { isEmpty } from 'lodash';
import { useMount } from '@football/app/utils/hooks/useMount';
import { Campaign, CampaignsResponse } from '@football/core/models/CampaignsResponse';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IPreviousCampaignsScreenProps } from './PreviousCampaignsScreen.type';

export const useViewModel = ({ navigation, route }: IPreviousCampaignsScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const [preCampaigns, setPreCampaigns] = useState<Campaign[]>([]);
    const onGoBack = (): void => {
        goBack();
    };

    const getPreCampaign = useCallback(async () => {
        try {
            const { data }: CampaignsResponse = await axiosClient.post(`${BASE_URL}/find`, {
                dataSource: DATA_SOURCE,
                database: DB,
                collection: 'campaign',
                // top_team_id: '636027f8a1c4cf43fdff2a67',
            });
            if (!isEmpty(data)) {
                console.log(data);
                setPreCampaigns(data.documents);
            }
        } catch (error: any) {
            Alert.alert(error);
        }
    }, []);

    const handleCampaignPage = () => {
        for (let i = 0; i < preCampaigns.length; i++) {
            navigate(ScreenName.CampaignPage, {
                campaign: preCampaigns[i],
            });
        }
    };

    useMount(() => {
        getPreCampaign();
    });

    return {
        t,
        onGoBack,
        handleCampaignPage,
        preCampaigns,
    };
};
