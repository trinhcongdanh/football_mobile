/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-shadow */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useMount } from '@football/app/utils/hooks/useMount';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { PlayerModel, PlayersModelResponse } from '@football/core/models/PlayerModelResponse';
import { TeamModel } from '@football/core/models/TeamModelResponse';
import { isEmpty, isNil } from 'lodash';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setFavPlayers, pushFavPlayer } from 'src/store/FavPlayer.slice';
import { IFavoritePlayerScreenProps } from './FavoritePlayersScreen.type';

export const useViewModel = ({ navigation, route }: IFavoritePlayerScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');

    const favPlayers = useSelector((state: any) => state.favPlayers.favPlayers as PlayerModel[]);
    const favSelectedPlayers = useSelector(
        (state: any) =>
            state.favPlayers.favPlayers.filter((v: PlayerModel) => v.isSelected) as PlayerModel[]
    );

    const getPlayersData = useCallback(async () => {
        if (isEmpty(favPlayers) || isNil(favPlayers)) {
            try {
                const { data }: PlayersModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
                    dataSource: DATA_SOURCE,
                    database: DB,
                    collection: 'player',
                });

                if (!isEmpty(data.documents)) {
                    dispatch(setFavPlayers(data.documents));
                }
            } catch (error: any) {
                Alert.alert(error);
            }
        }
    }, []);

    const handleSelected = (player: PlayerModel) => {
        dispatch(pushFavPlayer(player));
    };

    const filteredPlayers = useMemo(
        () => favPlayers.filter(v => v.name_he.includes(searchText)),

        [favPlayers, searchText]
    );

    const searchFavPlayer = (text: string) => {
        setSearchText(text);
    };

    const onGoBack = (): void => {
        goBack();
    };
    const onGoSkip = (): void => {
        navigate(ScreenName.BottomTab);
    };

    const handleContinue = () => {
        navigate(ScreenName.FavTopTeamPage);
    };

    useMount(() => {
        getPlayersData();
    });

    const favSelectedTeams = useSelector(
        (state: any) =>
            state.favTeams.favTeams.filter((v: TeamModel) => v.isSelected) as TeamModel[]
    );
    const [group, setGroup] = useState('');
    useEffect(() => {
        favSelectedTeams.map((favTeam: TeamModel, index: number) => {
            if (index === 0) {
                setGroup(favTeam.name_he);
            }
        });
    }, []);

    return {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        searchFavPlayer,
        setSearchText,
        searchText,
        group,
        favSelectedPlayers,
        filteredPlayers,
    };
};
