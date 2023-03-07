import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { serializeParams } from '@football/app/utils/functions/quick-functions';
import { useMount } from '@football/app/utils/hooks/useMount';
import { ACTION, TOKEN } from '@football/core/api/auth/config';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { PlayerModel, PlayersModelResponse } from '@football/core/models/PlayerModelResponse';
import { TeamModel } from '@football/core/models/TeamModelResponse';
import {
    Players,
    TeamPersonnelModel,
    TeamPersonnelModelResponse,
} from '@football/core/models/TeamPersonnelResponse';
import PlayerService from '@football/core/services/Player.service';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { isEmpty, isNil, pick } from 'lodash';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
    pushAllFavPlayers,
    pushAllFavPlayersProfile,
    pushGroupFavPlayer,
    resetAllFavPlayers,
    resetGroupFavPlayer,
    resetSearchFavPlayer,
    searchFavPlayers,
    selectedFavPlayersAsMapSelector,
    selectedFavPlayersProfileAsMapSelector,
    SelectedPlayer,
    setAllFavPlayers,
    setGroupFavPlayer,
} from 'src/store/FavPlayer.slice';
import { setSettingFavPlayer } from 'src/store/SettingSelected.slice';
import { RootState } from 'src/store/store';
import { createProfileUser } from 'src/store/user/CreateProfile.slice';
import { loginUser } from 'src/store/user/Login.slice';
import { IFavoritePlayerScreenProps } from './FavoritePlayersScreen.type';

export const useViewModel = ({ navigation, route }: IFavoritePlayerScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();
    const dispatch = useDispatch<any>();
    const [searchText, setSearchText] = useState('');
    const routes = useRoute();
    const getProfile = useSelector((state: RootState) => state.getProfile);

    const selectedFavPlayersMap = useSelector(
        getProfile.success
            ? selectedFavPlayersProfileAsMapSelector
            : selectedFavPlayersAsMapSelector
    );
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
    const selectedPlayersProfile = useSelector(
        (state: RootState) => state.favPlayers.selectedPlayersProfile
    );
    const [favSelectedPlayer, setFavSelectedPlayer] = useState<PlayerModel[]>([]);
    useEffect(() => {
        if (getProfile.success === true) {
            const fetchFavPlayer = async () => {
                const fetchPlayer = await Promise.all(
                    getProfile.getProfile.item.favorite_players.map(async (item: string) => {
                        const [err, res] = await PlayerService.findByOId<PlayersModelResponse>(
                            item
                        );
                        if (err) return;
                        return res.data.documents[0];
                    })
                );
                // console.log(fetchTeam.filter(Boolean));
                if (!isEmpty(selectedPlayersProfile)) {
                    setFavSelectedPlayer(selectedPlayersProfile);
                } else {
                    setFavSelectedPlayer(fetchPlayer.filter(Boolean));
                }
            };
            fetchFavPlayer();
        }
    }, [getProfile.success]);

    const login = useSelector((state: RootState) => state.login);
    const profile = useSelector((state: RootState) => state.createProfile);
    const guestId = useSelector((state: any) => state.guestId.guestId);
    const uuid = require('uuid');
    let id = uuid.v4();

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
                const { data }: TeamPersonnelModelResponse = await axiosClient.post(
                    `${BASE_URL}/find`,
                    {
                        dataSource: DATA_SOURCE,
                        database: DB,
                        collection: 'team_personnel',
                    }
                );

                if (!isEmpty(data.documents)) {
                    // const team_personnel_players = (data.documents as TeamPersonnelModel[])
                    //     .map(t => t.players)
                    //     .flat();

                    selectedFavTeams
                        .map((favTeam: TeamModel) => ({
                            favTeam,
                            team_personnel: data.documents.find(
                                v => v._id === favTeam.team_personnel_id
                            ) as TeamPersonnelModel,
                        }))
                        .forEach(async ({ favTeam, team_personnel }) => {
                            const fetchedPlayers = await Promise.all(
                                team_personnel.players.map(async (player_personnel: Players) => {
                                    const [err, res] = await PlayerService.findByOId<
                                        PlayersModelResponse
                                    >(player_personnel.player_id);
                                    if (err) return;
                                    return res.data.documents[0];
                                })
                            );
                            dispatch(
                                setGroupFavPlayer({
                                    id: team_personnel._id,
                                    label: favTeam.name_he,
                                    listFavPlayers: fetchedPlayers.filter(Boolean),
                                })
                            );
                        });
                }
            } catch (error: any) {
                Alert.alert(error);
            }
        }
    }, []);

    // function convertToCommonPlayer(player: PlayerModel): SelectedPlayer {
    //     return pick(player, ['name_en', 'name_he', 'image_url', '_id']);
    // }
    const handleSelected = (player: PlayerModel) => {
        if (!getProfile.success) {
            if (!isEmpty(favSearchPlayers)) {
                dispatch(pushAllFavPlayers(player));
            } else {
                if (!isEmpty(selectedFavTeams)) {
                    dispatch(pushGroupFavPlayer(player));
                } else {
                    dispatch(pushAllFavPlayers(player));
                }
            }
        }
        dispatch(pushAllFavPlayersProfile(player));
    };

    useEffect(() => {
        if (isEmpty(selectedPlayersProfile)) {
            favSelectedPlayer.map((item: PlayerModel) => {
                dispatch(pushAllFavPlayersProfile(item));
            });
        }
    }, [favSelectedPlayer]);

    const [focusSearch, setFocusSearch] = useState(false);

    const handleFocusSearch = () => {
        setFocusSearch(true);
        if (!searchText.length && focusSearch) {
            submitSearchFavPlayer();
        }
    };

    useEffect(() => {
        if (!searchText.length && focusSearch) {
            submitSearchFavPlayer();
        }
    }, [searchText, focusSearch]);

    const submitSearchFavPlayer = async () => {
        Keyboard.dismiss();
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
            if (!isEmpty(selectedFavTeams)) {
                if (isEmpty(favPlayers) || isNil(favPlayers)) {
                    try {
                        const { data }: TeamPersonnelModelResponse = await axiosClient.post(
                            `${BASE_URL}/find`,
                            {
                                dataSource: DATA_SOURCE,
                                database: DB,
                                collection: 'team_personnel',
                            }
                        );

                        if (!isEmpty(data.documents)) {
                            dispatch(
                                resetGroupFavPlayer({
                                    id: '',
                                    label: '',
                                    listFavPlayers: [],
                                })
                            );
                            selectedFavTeams
                                .map((favTeam: TeamModel) => ({
                                    favTeam,
                                    team_personnel: data.documents.find(
                                        v => v._id === favTeam.team_personnel_id
                                    ) as TeamPersonnelModel,
                                }))
                                .forEach(async ({ favTeam, team_personnel }) => {
                                    const fetchedPlayers = await Promise.all(
                                        team_personnel.players.map(
                                            async (player_personnel: Players) => {
                                                const [err, res] = await PlayerService.findByOId<
                                                    PlayersModelResponse
                                                >(player_personnel.player_id);
                                                if (err) return;
                                                return res.data.documents[0];
                                            }
                                        )
                                    );

                                    dispatch(
                                        setGroupFavPlayer({
                                            id: team_personnel._id,
                                            label: favTeam.name_he,
                                            listFavPlayers: fetchedPlayers.filter(Boolean),
                                        })
                                    );
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
                                resetAllFavPlayers({
                                    id: '',
                                    label: '',
                                    listFavPlayers: [],
                                })
                            );
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
            navigate(ScreenName.SideBar);
        }
    };
    const isFocused = useIsFocused();
    const previous_screen = route?.params?.previous_screen;

    useEffect(() => {
        if (previous_screen !== ScreenName.SettingsPage) {
            if (!isFocused) return;
            if (!isEmpty(login.login)) {
                navigate(ScreenName.SideBar);
                navigation.reset({
                    index: 0,
                    routes: [{ name: ScreenName.SideBar as never }],
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

                    navigate(ScreenName.SideBar);
                    navigation.reset({
                        index: 0,
                        routes: [{ name: ScreenName.SideBar as never }],
                    });
                }
            }
        }
    }, [profile.success, isFocused]);

    const handleContinue = () => {
        const params = routes.params;
        if (!isEmpty(params)) {
            if (params.previous_screen === ScreenName.FavSummaryPage) {
                navigate(ScreenName.FavSummaryPage);
            } else if (previous_screen === ScreenName.SettingsPage) {
                navigate(ScreenName.SettingsPage, {
                    previous_screen: ScreenName.FavPlayerPage,
                    center: true,
                    scrollBottom: false,
                });
                dispatch(setSettingFavPlayer(selectedPlayersProfile));
                // pop(ScreenName.FavTeamPage);
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
        handleFocusSearch,
        favSelectedPlayer,
        getProfile,
        selectedPlayersProfile,
    };
};
