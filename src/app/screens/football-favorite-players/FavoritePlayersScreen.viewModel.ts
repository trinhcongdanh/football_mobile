/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-shadow */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
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
import { axiosAuth } from '@football/core/api/auth/axiosAuth';
import { ACTION, AUTH_URL, TOKEN } from '@football/core/api/auth/config';
import { addLogin } from 'src/store/user/Login.slice';
import { addProfile } from 'src/store/user/CreateProfile.slice';
import { IFavoritePlayerScreenProps } from './FavoritePlayersScreen.type';
import { RootState } from 'src/store/store';

export const useViewModel = ({ navigation, route }: IFavoritePlayerScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');

    const favSelectedTeams = useSelector(
        (state: any) =>
            state.favTeams.favTeams.filter((v: TeamModel) => v.isSelected) as TeamModel[]
    );

    const favPlayers = useSelector((state: RootState) =>
        !isEmpty(favSelectedTeams) ? state.favPlayers.groupPlayers : state.favPlayers.favPlayers
    );

    const favSelectedPlayers = useSelector((state: RootState) =>
        !isEmpty(favSelectedTeams)
            ? state.favPlayers.groupPlayers
                  .map(e => {
                      return e.listFavPlayers.filter(v => v.isSelected);
                  })
                  .flat()
            : state.favPlayers.favPlayers
                  .map(e => {
                      return e.listFavPlayers.filter(v => v.isSelected);
                  })
                  .flat()
    );

    const login = useSelector((state: any) => state.login.login);
    const profile = useSelector((state: any) => state.createProfile.profile);
    const guestId = useSelector((state: any) => state.guestId.guestId);
    const uuid = require('uuid');
    let id = uuid.v4();

    function serializeParams(obj: any) {
        let str = [];
        for (let p in obj) {
            if (obj.hasOwnProperty(p)) {
                str.push(p + '=' + encodeURIComponent(obj[p]));
            }
        }
        return str.join('&');
    }

    const getPlayersData = useCallback(async () => {
        if (isEmpty(favPlayers) || isNil(favPlayers)) {
            try {
                const { data }: PlayersModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
                    dataSource: DATA_SOURCE,
                    database: DB,
                    collection: 'player',
                });

                if (!isEmpty(data.documents)) {
                    dispatch(
                        setAllFavPlayers({
                            id: id,
                            label: t('favorite_player.group'),
                            listFavPlayers: data.documents,
                        })
                    );
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
                            if (favTeam.team_personnel_id === team_personnel._id) {
                                let temp = [];
                                temp.push(...team_personnel.players.attack);
                                temp.push(...team_personnel.players.midfield);
                                temp.push(...team_personnel.players.defence);
                                temp.push(...team_personnel.players.goalkeepers);

                                dispatch(
                                    setGroupFavPlayer({
                                        id: team_personnel._id,
                                        label: favTeam.name_he,
                                        listFavPlayers: temp,
                                    })
                                );
                            }
                        });
                    });
                }
            } catch (error: any) {
                Alert.alert(error);
            }
        }
    }, []);
    const handleSelected = (player: PlayerModel | Position) => {
        if (!isEmpty(favSelectedTeams)) {
            dispatch(pushGroupFavPlayer(player));
        } else {
            dispatch(pushAllFavPlayers(player));
        }
    };

    // const filteredPlayers = useMemo(
    //     () =>
    //         favPlayers
    //             .map(favPlayer => {
    //                 return favPlayer.listFavPlayers.filter((v: Position | PlayerModel) =>
    //                     v.name_he.includes(searchText)
    //                 );
    //             })
    //             .flat(),

    //     [favPlayers, searchText]
    // );

    const searchFavPlayer = (text: string) => {
        setSearchText(text);
    };

    const onGoBack = (): void => {
        goBack();
    };
    const onGoSkip = async () => {
        if (isEmpty(profile) || isNil(profile)) {
            try {
                const { data }: any = await axiosAuth.post(
                    `${AUTH_URL}`,
                    serializeParams({
                        action: ACTION,
                        token: TOKEN,
                        call: AuthData.CREATE_PROFILE,
                        'item[guest_guid]': guestId[0],
                    }),

                    {
                        headers: {},
                    }
                );

                if (!isEmpty(data)) {
                    let data1 = data;
                    const action = addProfile(data1.item);
                    dispatch(action);
                    try {
                        if (!isEmpty(login) && !isNil(login)) {
                            navigate(ScreenName.BottomTab);
                        } else {
                            const { data }: any = await axiosAuth.post(
                                `${AUTH_URL}`,
                                serializeParams({
                                    action: ACTION,
                                    token: TOKEN,
                                    call: AuthData.LOGIN,
                                    guest_id: data1.item.tc_user,
                                    guest_guid: guestId[0],
                                }),
                                {
                                    headers: {},
                                }
                            );
                            if (!isEmpty(data)) {
                                const action = addLogin(data);
                                dispatch(action);
                                navigate(ScreenName.BottomTab);
                            }
                        }
                    } catch (error: any) {
                        Alert.alert(error);
                    }
                }

                // }
            } catch (error: any) {
                Alert.alert(error);
            }
        }
    };

    const handleContinue = () => {
        navigate(ScreenName.FavTopTeamPage);
    };

    useMount(() => {
        if (!isEmpty(favSelectedTeams)) {
            getTeamPersonnel();
            dispatch(resetAllFavPlayers({ id: '', label: '', listFavPlayers: [] }));
        } else {
            getPlayersData();
            dispatch(resetGroupFavPlayer({ id: '', label: '', listFavPlayers: [] }));
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
        favSelectedPlayers,
        favPlayers,
    };
};
