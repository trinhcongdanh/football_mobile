/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useState, useCallback } from 'react';
import { PlayerModel } from '@football/core/models/PlayerResponse';
import PlayerService from '@football/core/services/Player.service';
import { useMount } from '@football/app/utils/hooks/useMount';
import { IDataPlayerScreenProps } from './DataPlayerScreen.type';

const useViewState = () => {
    const [player, setPlayer] = useState<PlayerModel>();
    const [onSelect, setOnSelect] = useState(0);

    return {
        player,
        setPlayer,
        onSelect,
        setOnSelect,
    };
};

const useViewCallback = (route: any, viewState: any) => {
    const { setPlayer } = viewState;

    const getPlayerData = useCallback(async () => {
        const [error, res] = await PlayerService.findByOId(route?.params?.playerId);
        if (error) {
            return;
        }

        if (res?.data?.documents[0]) {
            setPlayer(res.data.documents[0]);
        }
    }, []);

    return {
        getPlayerData,
    };
};

export const useViewModel = ({ navigation, route }: IDataPlayerScreenProps) => {
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

    return { ...state, t, onGoBack };
};
