/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-shadow */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useMount } from '@football/app/utils/hooks/useMount';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { PlayerModel, PlayersModelResponse } from '@football/core/models/PlayerModelResponse';
import { TeamModel } from '@football/core/models/TeamModelResponse';
import { Position, TeamPersonnelModel } from '@football/core/models/TeamPersonnelResponse';
import { isEmpty, isNil } from 'lodash';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
    setAllFavPlayers,
    pushAllFavPlayers,
    setGroupFavPlayer,
    pushGroupFavPlayer,
    resetAllFavPlayers,
    resetGroupFavPlayer,
} from 'src/store/FavPlayer.slice';
import { IFavoritePlayerScreenProps } from './FavoritePlayersScreen.type';

export const useViewModel = ({ navigation, route }: IFavoritePlayerScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');
    const [group, setGroup] = useState('');

    const favSelectedTeams = useSelector(
        (state: any) =>
            state.favTeams.favTeams.filter((v: TeamModel) => v.isSelected) as TeamModel[]
    );
    // get all player
    const favPlayers = useSelector((state: any) =>
        !isEmpty(favSelectedTeams)
            ? (state.favPlayers.groupsPlayer as Position[])
            : (state.favPlayers.favPlayers as PlayerModel[])
    ) as (Position | PlayerModel)[];
    const favSelectedPlayers = useSelector((state: any) =>
        !isEmpty(favSelectedTeams)
            ? (state.favPlayers.groupsPlayer.filter((v: Position) => v.isSelected) as Position[])
            : (state.favPlayers.favPlayers.filter(
                  (v: PlayerModel) => v.isSelected
              ) as PlayerModel[])
    );
    // get player from team_personnel

    useEffect(() => {
        if (!isEmpty(favSelectedTeams)) {
            favSelectedTeams.map((favTeam: TeamModel, index: number) => {
                if (index === 0) {
                    setGroup(favTeam.name_he);
                }
            });
        } else {
            setGroup(t('favorite_player.group'));
        }
    }, []);

    const getPlayersData = useCallback(async () => {
        if (isEmpty(favPlayers) || isNil(favPlayers)) {
            try {
                const { data }: PlayersModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
                    dataSource: DATA_SOURCE,
                    database: DB,
                    collection: 'player',
                });

                if (!isEmpty(data.documents)) {
                    dispatch(setAllFavPlayers(data.documents));
                }
            } catch (error: any) {
                Alert.alert(error);
            }
        }
    }, []);

    const getTeamPersonnel = useCallback(async () => {
        if (isEmpty(favPlayers) || isNil(favPlayers)) {
            try {
                const { data }: any = await axiosClient.post(`${BASE_URL}/find`, {
                    dataSource: DATA_SOURCE,
                    database: DB,
                    collection: 'team_personnel',
                });

                if (!isEmpty(data.documents)) {
                    favSelectedTeams.map((favTeam: TeamModel, index: number) => {
                        data.documents.map((team_personnel: TeamPersonnelModel) => {
                            if (favTeam.team_personnel_id === team_personnel._id && index === 0) {
                                dispatch(setGroupFavPlayer(team_personnel.players.attack));
                                dispatch(setGroupFavPlayer(team_personnel.players.midfield));
                                dispatch(setGroupFavPlayer(team_personnel.players.defence));
                                dispatch(setGroupFavPlayer(team_personnel.players.goalkeepers));
                            }
                        });
                    });
                }
            } catch (error: any) {
                Alert.alert(error);
            }
        }
    }, []);
    const handleSelected = (player: Position | PlayerModel) => {
        if (!isEmpty(favSelectedTeams)) {
            dispatch(pushGroupFavPlayer(player));
        } else {
            dispatch(pushAllFavPlayers(player));
        }
    };

    const filteredPlayers = useMemo(
        () => favPlayers.filter((v: Position | PlayerModel) => v.name_he.includes(searchText)),

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
        if (!isEmpty(favSelectedTeams)) {
            getTeamPersonnel();
            dispatch(resetAllFavPlayers(favPlayers));
        } else {
            getPlayersData();
            dispatch(resetGroupFavPlayer(favPlayers));
        }
    });

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
