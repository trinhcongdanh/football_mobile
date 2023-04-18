import { useMount } from '@football/app/utils/hooks/useMount';
/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { PlayerTopTeamModel } from '@football/core/models/PlayerTopTeamResponse';
import PlayerTopTeamService from '@football/core/services/PlayerTopTeamService';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IGoalsNationalTeamScreenProps } from './GoalsNationalTeamScreen.type';
import { useDateTime } from '@football/app/utils/hooks/useDateTime';

const useViewState = () => {
    const [player, setPlayer] = useState<PlayerTopTeamModel>();
    const { getDate, getTime } = useDateTime();
    return {
        player,
        setPlayer,
        getDate,
        getTime,
    };
};

const useViewCallback = (route: any, viewState: any) => {
    const { setPlayer } = viewState;

    const getPlayerData = useCallback(async () => {
        const [error, res] = await PlayerTopTeamService.findByOId(route?.params?.playerId);
        if (error) {
            return;
        }

        if (res?.data?.documents[0]) {
            console.log('res.data.documents[0]', res.data.documents[0]);
            setPlayer(res.data.documents[0]);
        }
    }, []);

    return {
        getPlayerData,
    };
};

export const useViewModel = ({ navigation, route }: IGoalsNationalTeamScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const state = useViewState();
    const { getPlayerData } = useViewCallback(route, state);

    useMount(() => {
        getPlayerData();
    });

    const handleDetailMatch = () => {
        navigate(ScreenName.PitchPage);
    };

    return {
        t,
        onGoBack,
        handleDetailMatch,
        ...state,
    };
};
