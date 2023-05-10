/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useMount } from '@football/app/utils/hooks/useMount';
import { Campaign } from '@football/core/models/CampaignsResponse';
import CampaignService from '@football/core/services/Campaign.service';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IPreviousCampaignsScreenProps } from './PreviousCampaignsScreen.type';
import { RouteProp } from '@react-navigation/native';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';

const useViewState = ({ navigation, route }: IPreviousCampaignsScreenProps) => {
    const [campaigns, setCampaigns] = useState<Campaign[]>();
    const topTeam = route?.params?.topTeam as TopTeamModel;

    return {
        campaigns,
        setCampaigns,
        topTeam,
    };
};

const useViewCallback = (viewState: any) => {
    const { setCampaigns, topTeam } = viewState;

    const getCampaignsData = useCallback(async () => {
        const [error, res] = await CampaignService.findAllCampaign(topTeam._id);
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

    const state = useViewState({ navigation, route });

    const { getCampaignsData } = useViewCallback(state);

    const onGoBack = (): void => {
        goBack();
    };

    const handleCampaignPage = (index: number) => {
        const campaign = state?.campaigns?.length ? state.campaigns[index] : null;
        navigate(ScreenName.CampaignPage, {
            // eslint-disable-next-line no-underscore-dangle
            campaignId: campaign?._id,
        });
    };

    useMount(() => {
        getCampaignsData();
    });

    return {
        t,
        onGoBack,
        handleCampaignPage,
        getCampaignsData,
        ...state,
    };
};
