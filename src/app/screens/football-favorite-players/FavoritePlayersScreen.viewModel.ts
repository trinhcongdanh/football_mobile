/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-shadow */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { useMount } from '@football/app/utils/hooks/useMount';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { PlayerModel, PlayersModelResponse } from '@football/core/models/PlayerModelResponse';
import { TeamModel } from '@football/core/models/TeamModelResponse';
import { Players, TeamPersonnelModel } from '@football/core/models/TeamPersonnelResponse';
import { get, isEmpty, isNil, pick } from 'lodash';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
    setAllFavPlayers,
    pushAllFavPlayers,
    setGroupFavPlayer,
    pushGroupFavPlayer,
    searchFavPlayers,
    pushSearchFavPlayers,
    resetAllFavPlayers,
    resetGroupFavPlayer,
    resetSearchFavPlayer,
    selectedFavPlayersAsMapSelector,
    SelectedPlayer,
} from 'src/store/FavPlayer.slice';
import { RootState } from 'src/store/store';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { ACTION, TOKEN } from '@football/core/api/auth/config';
import { loginUser } from 'src/store/user/Login.slice';
import { createProfileUser } from 'src/store/user/CreateProfile.slice';
import { IFavoritePlayerScreenProps } from './FavoritePlayersScreen.type';

export const useViewModel = ({ navigation, route }: IFavoritePlayerScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();
    const dispatch = useDispatch<any>();
    const [searchText, setSearchText] = useState('');
    const routes = useRoute();

    const selectedFavPlayersMap = useSelector(selectedFavPlayersAsMapSelector);
    const selectedFavTeams = useSelector((state: RootState) => state.favTeams.selectedTeams);
    const selectedFavPlayers = useSelector((state: RootState) => state.favPlayers.selectedPlayers);

    const favPlayers = useSelector((state: RootState) =>
        !isEmpty(selectedFavTeams) ? state.favPlayers.groupPlayers : state.favPlayers.favPlayers
    );

    const favSearchPlayers = useSelector((state: RootState) => {
        return state.favPlayers.searchPlayers;
    });

    const formattedSearchFavPlayers = useMemo(() => {
        return favSearchPlayers.map(favSearchPlayer => {
            return {
                id: 'a',
                label: '',
                listFavPlayers: favSearchPlayer.listFavPlayers.map(player => ({
                    ...player,
                    isSelected: selectedFavPlayersMap.has(player._id),
                })),
            };
        });
    }, [favSearchPlayers, selectedFavPlayersMap]);

    const formattedFavPlayers = useMemo(() => {
        return favPlayers.map(favPlayer => {
            return {
                id: id,
                label: favPlayer.label,
                listFavPlayers: favPlayer.listFavPlayers.map(player => ({
                    ...player,
                    isSelected: selectedFavPlayersMap.has(player._id),
                })) as PlayerModel[] | Players[],
            };
        });
    }, [favPlayers, selectedFavPlayersMap]);

    const favSelectedSearchPlayers = useSelector((state: RootState) =>
        state.favPlayers.searchPlayers
            .map(e => {
                return e.listFavPlayers.filter(v => v.isSelected);
            })
            .flat()
    );

    const favSelectedPlayers = useSelector((state: RootState) =>
        !isEmpty(selectedFavTeams)
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

    const login = useSelector((state: RootState) => state.login);
    const profile = useSelector((state: RootState) => state.createProfile);
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
                    selectedFavTeams.map((favTeam: TeamModel, index: number) => {
                        data.documents.map((team_personnel: TeamPersonnelModel) => {
                            if (favTeam.team_personnel_id === team_personnel._id) {
                                var temp: Players[] = [];
                                team_personnel.players.map((player_personnel: Players) => {
                                    temp.push(player_personnel);
                                });
                                dispatch(
                                    setGroupFavPlayer({
                                        id: team_personnel._id,
                                        label: favTeam.name_he,
                                        listFavPlayers: temp.map(v => ({
                                            ...v,
                                            _id: v.player_id,
                                        })),
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

    function convertToCommonPlayer(player: PlayerModel | Players): SelectedPlayer {
        return pick(player, ['name_en', 'name_he', 'image_url', '_id']);
    }
    const handleSelected = (player: PlayerModel | Players) => {
        if (!isEmpty(favSearchPlayers)) {
            dispatch(pushAllFavPlayers(convertToCommonPlayer(player)));
        } else {
            if (!isEmpty(selectedFavTeams)) {
                dispatch(pushGroupFavPlayer(convertToCommonPlayer(player)));
            } else {
                dispatch(pushAllFavPlayers(convertToCommonPlayer(player)));
            }
        }
    };

    const searchFavPlayer = (text: string) => {
        setSearchText(text);
    };

    const submitSearchFavPlayer = async () => {
        if (searchText !== '') {
            try {
                dispatch(
                    resetSearchFavPlayer({
                        id: '',
                        label: '',
                        listFavPlayers: [],
                    })
                );
                dispatch(
                    resetAllFavPlayers({
                        id: '',
                        label: '',
                        listFavPlayers: [],
                    })
                );
                dispatch(
                    resetGroupFavPlayer({
                        id: '',
                        label: '',
                        listFavPlayers: [],
                    })
                );
                const { data }: PlayersModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
                    dataSource: DATA_SOURCE,
                    database: DB,
                    collection: 'player',
                    projection: {
                        search_terms: true,
                        name_en: true,
                        image_url: true,
                        image_width: true,
                        image_height: true,
                        name_he: true,
                        team: true,
                        top_team: true,
                        date_of_birth: true,
                        citizenship_he: true,
                        citizenship_en: true,
                        citizenship_image_url: true,
                        num_of_games: true,
                        homepage_info: true,
                    },
                    filter: {
                        search_terms: { $regex: `.*${searchText}.*`, $options: 'i' },
                    },
                    limit: 100,
                });

                if (!isEmpty(data.documents)) {
                    dispatch(
                        resetSearchFavPlayer({
                            id: '',
                            label: '',
                            listFavPlayers: [],
                        })
                    );
                    dispatch(
                        searchFavPlayers({
                            id: id,
                            label: '',
                            listFavPlayers: data.documents,
                        })
                    );
                }
            } catch (error: any) {
                Alert.alert(error);
            }
        } else {
            dispatch(
                resetSearchFavPlayer({
                    id: '',
                    label: '',
                    listFavPlayers: [],
                })
            );
            if (!isEmpty(selectedFavTeams)) {
                if (isEmpty(favPlayers) || isNil(favPlayers)) {
                    try {
                        const { data }: any = await axiosClient.post(`${BASE_URL}/find`, {
                            dataSource: DATA_SOURCE,
                            database: DB,
                            collection: 'team_personnel',
                        });

                        if (!isEmpty(data.documents)) {
                            selectedFavTeams.map((favTeam: TeamModel, index: number) => {
                                data.documents.map((team_personnel: TeamPersonnelModel) => {
                                    if (favTeam.team_personnel_id === team_personnel._id) {
                                        var temp: Players[] = [];
                                        team_personnel.players.map((player_personnel: Players) => {
                                            temp.push(player_personnel);
                                        });
                                        dispatch(
                                            setGroupFavPlayer({
                                                id: team_personnel._id,
                                                label: favTeam.name_he,
                                                listFavPlayers: temp.map(v => ({
                                                    ...v,
                                                    _id: v.player_id,
                                                })),
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
            } else {
                if (isEmpty(favPlayers) || isNil(favPlayers)) {
                    try {
                        const { data }: PlayersModelResponse = await axiosClient.post(
                            `${BASE_URL}/find`,
                            {
                                dataSource: DATA_SOURCE,
                                database: DB,
                                collection: 'player',
                            }
                        );

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
            }
        }
    };

    const onGoBack = (): void => {
        goBack();
    };
    const onGoSkip = () => {
        if (isEmpty(profile.profile) || isNil(profile.profile)) {
            dispatch(
                createProfileUser(
                    serializeParams({
                        action: ACTION,
                        token: TOKEN,
                        call: AuthData.CREATE_PROFILE,
                        'item[guest_guid]': guestId[0],
                    })
                )
            );
        } else {
            navigate(ScreenName.BottomTab);
        }
    };
    const isFocused = useIsFocused();

    useEffect(() => {
        if (!isFocused) return;
        if (!isEmpty(login.login)) {
            navigate(ScreenName.BottomTab);
            navigation.reset({
                index: 0,
                routes: [{ name: ScreenName.BottomTab as never }],
            });
        } else {
            if (profile.success === true) {
                dispatch(
                    loginUser(
                        serializeParams({
                            action: ACTION,
                            token: TOKEN,
                            call: AuthData.LOGIN,
                            guest_id: profile.profile.tc_user,
                            guest_guid: guestId[0],
                        })
                    )
                );

                navigate(ScreenName.BottomTab);
                navigation.reset({
                    index: 0,
                    routes: [{ name: ScreenName.BottomTab as never }],
                });
            }
        }
    }, [profile.success, isFocused]);

    const handleContinue = () => {
        const params = routes.params;
        if (!isEmpty(params)) {
            if (params.previous_screen === ScreenName.FavSummaryPage) {
                navigate(ScreenName.FavSummaryPage);
            } else {
                navigate(ScreenName.FavTopTeamPage);
            }
        } else {
            navigate(ScreenName.FavTopTeamPage);
        }
    };

    useMount(() => {
        if (!isEmpty(selectedFavTeams)) {
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
        profile,
        favSearchPlayers,
        favSelectedSearchPlayers,
        formattedSearchFavPlayers,
        selectedFavPlayers,
        formattedFavPlayers,
        submitSearchFavPlayer,
    };
};
