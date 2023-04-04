/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { TeamSquadScreenType } from '@football/app/screens/football-team-squad';
import { ScreenName, TopTeamPlayerType } from '@football/app/utils/constants/enum';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import TopTeamService from '@football/core/services/TopTeam.service';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { addVideo, setShowVideo } from 'src/store/video/Video.slice';
import { INationalTeamScreenProps } from './NationalTeamScreen.type';

const useViewState = () => {
    const [topTeam, setTopTeam] = useState<TopTeamModel>();

    return {
        topTeam,
        setTopTeam,
    };
};

const useViewCallback = (route: any, viewState: any) => {
    const { setTopTeam } = viewState;

    const getTopTeamData = useCallback(async () => {
        const [error, res] = await TopTeamService.findByOId(route?.params?.topTeamId);
        if (error) {
            return;
        }

        if (res.data.documents?.length) {
            setTopTeam(res.data.documents[0]);
        }
    }, []);

    return {
        getTopTeamData,
    };
};
export const useViewModel = ({ navigation, route }: INationalTeamScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };
    const state = useViewState();

    const { getTopTeamData } = useViewCallback(route, state);
    useEffect(() => {
        getTopTeamData();
    }, []);

    const { width } = Dimensions.get('window');

    const handleNavigation = () => {
        navigate(ScreenName.PreviousCampaignsPage, { topTeam: state.topTeam });
    };

    return {
        t,
        onGoBack,
        handleNavigation,
        width,
        navigate,
        ...state,
    };
};
