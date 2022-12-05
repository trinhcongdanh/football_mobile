/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-shadow */
import { useCallback, useState, useMemo } from 'react';
import { OfflineData, ScreenName } from '@football/app/utils/constants/enum';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { isEmpty, isNil } from 'lodash';
import { PlayerModel, PlayersModelResponse } from '@football/core/models/PlayerModelResponse';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from '@football/app/utils/hooks/useMount';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { addPlayerTeams, FavPlayerState } from '../../../store/FavPlayer.slice';
import { IFavoritePlayerScreenProps } from './FavoritePlayersScreen.type';

export const useViewModel = ({ navigation, route }: IFavoritePlayerScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();
    const favPlayerList = useSelector((state: FavPlayerState) => state.favPlayers);
    const dispatch = useDispatch();
    const [playersData, setPlayersData] = useState<PlayerModel[]>();
    const [playerSelected, setPlayerSelected] = useState<PlayerModel[]>([]);
    const { getItem, setItem } = useAsyncStorage(OfflineData.fav_players);

    const getPlayersData = useCallback(async () => {
        try {
            const offlineData = await AsyncStorage.getItem('@players_data');
            if (!isEmpty(offlineData) && !isNil(offlineData)) {
                setPlayersData(JSON.parse(offlineData));
            } else {
                const { data }: PlayersModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
                    dataSource: DATA_SOURCE,
                    database: DB,
                    collection: 'player',
                });

                if (!isEmpty(data.documents)) {
                    setPlayersData(data.documents);
                }
            }
        } catch (error: any) {
            Alert.alert(error);
        }
    }, []);

    const handleSelected = (player: PlayerModel) => {
        const index = playerSelected.findIndex(elm => player._id === elm._id);
        if (index !== -1) {
            const newTeamSelected = playerSelected.filter(e => e._id !== player._id);
            setPlayerSelected(newTeamSelected);
        } else if (playerSelected.length < 3) {
            setPlayerSelected([...playerSelected, player]);
            const action = addPlayerTeams(player);
            dispatch(action);
        }
    };

    const newPlayers = useMemo(
        () =>
            playersData?.map(e => {
                // eslint-disable-next-line @typescript-eslint/no-shadow
                const i = playerSelected.findIndex(t => t._id === e._id);
                return { ...e, isSelected: i !== -1 };
            }),
        [playersData, playerSelected]
    );

    const onGoBack = (): void => {
        goBack();
    };
    const onGoSkip = (): void => {
        navigate(ScreenName.BottomTab);
    };

    const handleContinue = async () => {
        const action = addPlayerTeams(playerSelected);
        dispatch(action);
        await AsyncStorage.setItem(OfflineData.fav_players, JSON.stringify(playerSelected));
        navigate(ScreenName.FavTopTeamPage);
    };

    useMount(() => {
        getPlayersData();
    });

    return {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        playerSelected,
        newPlayers,
        favPlayerList,
    };
};
