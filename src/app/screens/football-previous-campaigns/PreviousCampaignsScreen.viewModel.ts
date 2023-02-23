/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useMount } from '@football/app/utils/hooks/useMount';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { Campaign } from '@football/core/models/CampaignsResponse';
import CampaignService from '@football/core/services/Campaign.service';
import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { IPreviousCampaignsScreenProps } from './PreviousCampaignsScreen.type';

const useViewState = () => {
    const [campaigns, setCampaigns] = useState<Campaign[]>();

    return {
        campaigns,
        setCampaigns,
    };
};

const useViewCallback = (viewState: any) => {
    const { setCampaigns } = viewState;

    const getCampaignsData = useCallback(async () => {
        const [error, res] = await CampaignService.findAll();
        if (error) {
            return;
        }

        console.log('res.data.documents', res.data.documents);
        setCampaigns(res.data.documents);
    }, []);

    return {
        getCampaignsData,
    };
};

export const useViewModel = ({ navigation, route }: IPreviousCampaignsScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const state = useViewState();

    const { getCampaignsData } = useViewCallback(state);

    const onGoBack = (): void => {
        goBack();
    };

    const getPreCampaign = useCallback(async () => {
        try {
            const { data } = await axiosClient.post(`${BASE_URL}/find`, {
                dataSource: DATA_SOURCE,
                database: DB,
                collection: 'campaign',
                // top_team_id: '636027f8a1c4cf43fdff2a67',
            });
            console.log(data);

        } catch (error: any) {
        }
    }, []);

    // const preCampaigns = [
    //     {
    //         id: 1,
    //         title: 'ליגת האומות של אופ"א 2022/23',
    //         year: '2022/23',
    //     },
    //     {
    //         id: 2,
    //         title: 'ליגת האומות של אופ"א 2022/23',
    //         year: '2022/23',
    //     },
    //     {
    //         id: 3,
    //         title: 'ליגת האומות של אופ"א 2022/23',
    //         year: '2022/23',
    //     },
    //     {
    //         id: 4,
    //         title: 'ליגת האומות של אופ"א 2022/23',
    //         year: '2022/23',
    //     },
    //     {
    //         id: 5,
    //         title: 'ליגת האומות של אופ"א 2022/23',
    //         year: '2022/23',
    //     },
    // ];

    const handleCampaignPage = () => {
        // for (let i = 0; i < preCampaigns.length; i++) {
        //     navigate(ScreenName.CampaignPage, {
        //         campaign: preCampaigns[i],
        //     });
        // }
    };

    useMount(() => {
        getCampaignsData();
        getPreCampaign();
    });

    return {
        t,
        onGoBack,
        handleCampaignPage,
        getCampaignsData,
        ...state,
    };
};
