import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { clearFavoriteData } from '@football/app/utils/functions/clearFavoriteData';
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
import { isEmpty, isNil } from 'lodash';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, I18nManager, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
    pushAllFavPlayers,
    pushGroupFavPlayer,
    resetAllFavPlayers,
    resetGroupFavPlayer,
    resetSearchFavPlayer,
    searchFavPlayers,
    selectedFavPlayersAsMapSelector,
    setAllFavPlayers,
    setGroupFavPlayer,
} from 'src/store/FavPlayer.slice';
import { setSettingFavPlayer } from 'src/store/SettingSelected.slice';
import { RootState } from 'src/store/store';
import { createProfileUser } from 'src/store/user/CreateProfile.slice';
import { loginUser } from 'src/store/user/Login.slice';
import { IFavoritePlayerScreenProps } from './FavoritePlayersScreen.type';
import sortBy from 'lodash/sortBy';
import TeamPersonnelService from '@football/core/services/TeamPersonnel.service';

const useViewState = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return {
        isLoading,
        setIsLoading,
    };
};

export const useViewModel = ({ navigation, route }: IFavoritePlayerScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();
    const dispatch = useDispatch<any>();
    const [searchText, setSearchText] = useState('');
    const state = useViewState();
    const routes = useRoute();
    const getProfile = useSelector((state: RootState) => state.getProfile);
    const changePlayers = route.params?.changePlayers;
    const [favSelectedPlayer, setFavSelectedPlayer] = useState<PlayerModel[]>([]);
    const login = useSelector((state: RootState) => state.login);
    const profile = useSelector((state: RootState) => state.createProfile);
    const guestId = useSelector((state: any) => state.guestId.guestId);
    const uuid = require('uuid');
    let id = uuid.v4();

    const selectedFavPlayersMap = useSelector(selectedFavPlayersAsMapSelector);
    const selectedFavTeams = useSelector((state: RootState) => state.favTeams.selectedTeams);
    const selectedFavPlayers = useSelector((state: RootState) => state.favPlayers.selectedPlayers);

    const favPlayers = useSelector((state: RootState) =>
        !isEmpty(selectedFavTeams) && !changePlayers
            ? state.favPlayers.groupPlayers
            : state.favPlayers.favPlayers
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
                id,
                label: favPlayer.label,
                listFavPlayers: favPlayer.listFavPlayers.map(player => ({
                    ...player,
                    isSelected: selectedFavPlayersMap.has(player._id),
                })) as PlayerModel[] | Players[],
            };
        });
    }, [favPlayers, selectedFavPlayersMap]);
    // console.log(formattedFavPlayers);

    const favSelectedSearchPlayers = useSelector((state: RootState) =>
        state.favPlayers.searchPlayers
            .map(e => {
                return e.listFavPlayers.filter(v => v.isSelected);
            })
            .flat()
    );

    const favSelectedPlayers = useSelector((state: RootState) =>
        !isEmpty(selectedFavTeams) && !changePlayers
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

    const [focusSearch, setFocusSearch] = useState(false);

    const getPlayersData = useCallback(async () => {
        if ((isEmpty(favPlayers) || isNil(favPlayers)) && focusSearch === false) {
            state.setIsLoading(true);

            try {
                const [error, res] = await PlayerService.findAllFavPlayer();
                if (error) {
                    return;
                }
                const sortByName = sortBy(res.data.documents, ['name_he']);

                dispatch(
                    setAllFavPlayers({
                        id,
                        label: t('favorite_player.group'),
                        listFavPlayers: sortByName,
                    })
                );
            } catch (error: any) {
                Alert.alert(error);
            } finally {
                state.setIsLoading(false);
            }
        }
    }, []);

    const getTeamPersonnel = useCallback(async () => {
        if ((isEmpty(favPlayers) || isNil(favPlayers)) && focusSearch === false) {
            state.setIsLoading(true);

            try {
                const [error, res] = await TeamPersonnelService.findAll();
                if (error) {
                    return;
                }
                const sortByName = sortBy(res.data.documents, [
                    I18nManager.isRTL ? 'name_he' : 'name_en',
                ]);

                selectedFavTeams
                    .map((favTeam: TeamModel) => ({
                        favTeam,
                        team_personnel: sortByName.find(
                            (v: TeamPersonnelModel) => v._id === favTeam.team_personnel_id
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
                                label: I18nManager.isRTL ? favTeam.name_he : favTeam.name_en,
                                listFavPlayers: fetchedPlayers.filter(Boolean),
                            })
                        );
                    });
            } catch (error: any) {
                Alert.alert(error);
            } finally {
                state.setIsLoading(false);
            }
        }
    }, []);

    const handleSelected = (player: PlayerModel) => {
        if (!isEmpty(favSearchPlayers)) {
            dispatch(pushAllFavPlayers(player));
        } else if (!isEmpty(selectedFavTeams) && !changePlayers) {
            dispatch(pushGroupFavPlayer(player));
        } else {
            dispatch(pushAllFavPlayers(player));
        }
    };

    useEffect(() => {
        if (isEmpty(selectedFavPlayers)) {
            favSelectedPlayer.map((item: PlayerModel) => {
                dispatch(pushAllFavPlayers(item));
            });
        }
    }, [favSelectedPlayer]);

    const handleFocusSearch = () => {
        // setFocusSearch(true);
    };

    useEffect(() => {
        if (searchText.length) {
            setFocusSearch(() => true);
        }
        if (!searchText.length && focusSearch) {
            submitSearchFavPlayer();
        }
    }, [searchText, focusSearch]);

    const submitSearchFavPlayer = async () => {
        Keyboard.dismiss();
        state.setIsLoading(true);
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
                const [error, res] = await PlayerService.searchFavPlayer(searchText);
                if (error) {
                    return;
                }
                const sortByName = sortBy(res.data.documents, [
                    I18nManager.isRTL ? 'name_he' : 'name_en',
                ]);

                dispatch(
                    searchFavPlayers({
                        id,
                        label: '',
                        listFavPlayers: sortByName,
                    })
                );

                state.setIsLoading(false);
            } catch (error: any) {
                Alert.alert(error);
            } finally {
                state.setIsLoading(false);
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
            if (!isEmpty(selectedFavTeams) && !changePlayers) {
                if (isEmpty(favPlayers) || isNil(favPlayers)) {
                    try {
                        const [error, res] = await TeamPersonnelService.findAll();
                        if (error) {
                            return;
                        }
                        const sortByName = sortBy(res.data.documents, [
                            I18nManager.isRTL ? 'name_he' : 'name_en',
                        ]);

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
                                team_personnel: sortByName.find(
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
                                        label: I18nManager.isRTL
                                            ? favTeam.name_he
                                            : favTeam.name_en,
                                        listFavPlayers: fetchedPlayers.filter(Boolean),
                                    })
                                );
                            });
                    } catch (error: any) {
                        Alert.alert(error);
                    } finally {
                        state.setIsLoading(false);
                    }
                }
            } else if (isEmpty(favPlayers) || isNil(favPlayers)) {
                try {
                    const [error, res] = await PlayerService.findAllFavPlayer();
                    if (error) {
                        return;
                    }
                    const sortByName = sortBy(res.data.documents, [
                        I18nManager.isRTL ? 'name_he' : 'name_en',
                    ]);

                    dispatch(
                        setAllFavPlayers({
                            id,
                            label: t('favorite_player.group'),
                            listFavPlayers: sortByName,
                        })
                    );
                } catch (error: any) {
                    Alert.alert(error);
                } finally {
                    state.setIsLoading(false);
                }
            }
            state.setIsLoading(false);
        }
    };

    // useEffect(() => {
    //     return () => {
    //         // componentwillunmount in functional component.
    //         // Anything in here is fired on component unmount.
    //         setSearchText('');
    //     };
    // }, []);

    const onGoBack = (): void => {
        goBack();
    };
    const onGoSkip = () => {
        clearFavoriteData(dispatch);
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
        if (previous_screen === ScreenName.HomePage) {
            return;
        }
        if (previous_screen !== ScreenName.SettingsPage) {
            if (!isFocused) return;
            if (!isEmpty(login.login)) {
                navigate(ScreenName.SideBar);
                navigation.reset({
                    index: 0,
                    routes: [{ name: ScreenName.SideBar as never }],
                });
            } else if (profile.success === true) {
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
    }, [profile.success, isFocused]);

    const handleContinue = () => {
        const { params } = routes;
        if (!isEmpty(params)) {
            if (params.previous_screen === ScreenName.FavSummaryPage) {
                navigate(ScreenName.FavSummaryPage, {
                    editFav: true,
                });
            } else if (previous_screen === ScreenName.SettingsPage) {
                navigate(ScreenName.SettingsPage, {
                    previous_screen: ScreenName.FavPlayerPage,
                    center: true,
                    scrollBottom: false,
                    selectedPlayers: true,
                    selectedTeams: true,
                    selectedTopTeams: true,
                });
                dispatch(setSettingFavPlayer(selectedFavPlayers));
                // pop(ScreenName.FavTeamPage);
            } else if (previous_screen === ScreenName.HomePage) {
                navigate(ScreenName.FavTopTeamPage, {
                    previous_screen: ScreenName.HomePage,
                });
            } else {
                navigate(ScreenName.FavTopTeamPage);
            }
        } else {
            navigate(ScreenName.FavTopTeamPage);
        }
    };

    useMount(() => {
        if (!isEmpty(selectedFavTeams) && !changePlayers) {
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
        setFocusSearch,
        ...state,
    };
};
