import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { Campaign, CampaignsResponse } from '@football/core/models/CampaignsResponse';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { isEmpty } from 'lodash';
import { Alert } from 'react-native';
import { useMount } from '@football/app/utils/hooks/useMount';
import { ICampaignScreenProps } from './CampaignScreen.type';

export const useViewModel = ({ navigation, route }: ICampaignScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const [campaigns, setCampaigns] = useState<Campaign[]>([]);

    const getCampaign = useCallback(async () => {
        try {
            const { data }: CampaignsResponse = await axiosClient.post(`${BASE_URL}/find`, {
                dataSource: DATA_SOURCE,
                database: DB,
                collection: 'campaign',
            });
            if (!isEmpty(data.documents)) {
                setCampaigns(data.documents);
            }
        } catch (error: any) {
            Alert.alert(error);
        }
    }, []);

    const onGoBack = (): void => {
        goBack();
    };
    useMount(() => {
        getCampaign();
    });

    return {
        t,
        onGoBack,
        campaigns,
    };
};
