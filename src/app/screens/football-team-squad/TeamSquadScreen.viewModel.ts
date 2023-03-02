/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useMount } from '@football/app/utils/hooks/useMount';
import { TeamPersonnelModel } from '@football/core/models/TeamPersonnelResponse';
import { TopTeamPersonnelModel } from '@football/core/models/TopTeamPersonnelResponse';
import TeamPersonnelService from '@football/core/services/TeamPersonnel.service';
import TopTeamPersonnelService from '@football/core/services/TopTeamPersonnel.service';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ITeamGroupScreenProps } from './TeamSquadScreen.type';

const useViewState = (route: any) => {
    const [topTeamPersonnel, setTopTeamPersonnel] = useState<TopTeamPersonnelModel>();
    const [teamPersonnel, seTeamPersonnel] = useState<TeamPersonnelModel>();
    const [onSelect, setOnSelect] = useState(route?.params.selectedTab);
    return {
        topTeamPersonnel,
        setTopTeamPersonnel,
        teamPersonnel,
        seTeamPersonnel,
        onSelect,
        setOnSelect,
    };
};

const useViewCallback = (route: any, viewState: any) => {
    const { setTopTeamPersonnel, seTeamPersonnel } = viewState;

    const getTopTeamPersonnelData = useCallback(async () => {
        const [error, res] = await TopTeamPersonnelService.findByOId(
            route?.params?.topTeamPersonnelId
        );
        if (error) {
            return;
        }
        if (res.data.documents.length) {
            setTopTeamPersonnel(res.data.documents[0]);
        }
    }, []);

    const getTeamPersonnelData = useCallback(async () => {
        const [error, res] = await TeamPersonnelService.findByOId(
            route?.params?.topTeamPersonnelId
        );
        if (error) {
            return;
        }
        if (res.data.documents.length) {
            seTeamPersonnel(res.data.documents[0]);
        }
    }, []);

    return {
        getTopTeamPersonnelData,
        getTeamPersonnelData,
    };
};

export const useViewModel = ({ navigation, route }: ITeamGroupScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const fromTopTeam = route?.params?.fromTopTeam as boolean;

    const onGoBack = (): void => {
        goBack();
    };

    const state = useViewState(route);

    const { getTopTeamPersonnelData, getTeamPersonnelData } = useViewCallback(route, state);

    const onNavigateDataCoach = (coachId: string | undefined) => {
        if (!coachId) return;
        navigate(ScreenName.DataCoachPage, { coachId });
    };

    const onNavigateDataPlayer = (playerId: string | undefined) => {
        if (!playerId) return;
        navigate(ScreenName.DataPlayerPage, { playerId, player_page: 1 });
    };

    useMount(() => {
        if (fromTopTeam) {
            getTopTeamPersonnelData();
        } else {
            getTeamPersonnelData();
        }
    });

    return { onGoBack, t, ...state, onNavigateDataCoach, fromTopTeam, onNavigateDataPlayer };
};
