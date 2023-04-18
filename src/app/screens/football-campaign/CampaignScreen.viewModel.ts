import { useEffect, useCallback, useState } from 'react';
/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useMount } from '@football/app/utils/hooks/useMount';
import { Campaign } from '@football/core/models/CampaignsResponse';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import CampaignService from '@football/core/services/Campaign.service';
import TopTeamService from '@football/core/services/TopTeam.service';
import { useTranslation } from 'react-i18next';
import { ICampaignScreenProps } from './CampaignScreen.type';

const useViewState = () => {
    const [campaign, setCampaign] = useState<Campaign>();
    const [topTeam, setTopTeam] = useState<TopTeamModel>();

    return {
        campaign,
        setCampaign,
        topTeam,
        setTopTeam,
    };
};

const useViewCallback = (route: any, viewState: any) => {
    const { setCampaign, setTopTeam } = viewState;

    const getCampaignData = useCallback(async () => {
        const [error, res] = await CampaignService.findByOId(route?.params.campaignId);
        if (error) {
            return;
        }
        if (res.data.documents?.length) {
            setCampaign(res.data.documents[0]);
        }
    }, []);

    const getTopTeam = useCallback(async (topTeamId: string) => {
        const [error, res] = await TopTeamService.findByOId(topTeamId);
        if (error) {
            return;
        }

        if (res.data.documents?.length) {
            setTopTeam(res.data.documents[0]);
        }
    }, []);

    return {
        getCampaignData,
        getTopTeam,
    };
};

export const useViewModel = ({ navigation, route }: ICampaignScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const state = useViewState();
    const { getCampaignData, getTopTeam } = useViewCallback(route, state);
    const onGoBack = (): void => {
        goBack();
    };
    useMount(() => {
        getCampaignData();
    });

    useEffect(() => {
        if (state?.campaign) {
            getTopTeam(state.campaign.top_team_id);
        }
    }, [state.campaign]);

    return {
        t,
        onGoBack,
        ...state,
    };
};
