import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { clearFavoriteData } from '@football/app/utils/functions/clearFavoriteData';
import { serializeParams } from '@football/app/utils/functions/quick-functions';
import { useMount } from '@football/app/utils/hooks/useMount';
import { ACTION, TOKEN } from '@football/core/api/auth/config';
import { PlayerModel } from '@football/core/models/PlayerModelResponse';
import PlayerService from '@football/core/services/Player.service';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { isEmpty, isNil } from 'lodash';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, BackHandler, I18nManager, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectedFavPlayersAsMapSelector,
    setFavPlayers,
    resetFavPlayer,
    pushFavPlayer,
    resetSelectedFavPlayer,
} from 'src/store/FavPlayer.slice';

import { RootState } from 'src/store/store';
import { createProfileUser } from 'src/store/user/CreateProfile.slice';
import { loginUser } from 'src/store/user/Login.slice';
import { IFavoritePlayerScreenProps } from './FavoritePlayersScreen.type';
import sortBy from 'lodash/sortBy';
import _ from 'lodash';
import { resetSelectedFavTopTeams, resetTopTeams } from 'src/store/FavTopTeam.slice';
import { MAX_FAVORITES_PLAYER } from '@football/core/api/configs/config';

const useViewState = () => {
    const { t } = useTranslation();
    const { navigate, goBack, pop } = useAppNavigator();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useDispatch<any>();
    const [searchText, setSearchText] = useState('');
    const getProfile = useSelector((state: RootState) => state.getProfile);
    const profile = useSelector((state: RootState) => state.createProfile);
    // eslint-disable-next-line no-new-object
    const sortByName: any = new Object();
    const selectedFavPlayersMap = useSelector(selectedFavPlayersAsMapSelector);
    const favPlayers = useSelector((state: RootState) => state.favPlayers.favPlayers);

    const selectedPlayers = useSelector((state: RootState) => state.favPlayers.selectedPlayers);

    const array = selectedFavPlayersMap.size
        ? Array.from(selectedFavPlayersMap, ([name, value]) => ({ ...value }))
        : selectedPlayers;

    const [selectedFavPlayers, setSelectedFavPlayers] = useState<PlayerModel[]>(array);
    const [players, setPlayers] = useState<PlayerModel[]>();

    const [focusSearch, setFocusSearch] = useState(false);
    const searchTextRef = useRef<any>(null);

    return {
        isLoading,
        setIsLoading,
        t,
        dispatch,
        searchText,
        setSearchText,
        getProfile,
        profile,
        sortByName,
        selectedFavPlayersMap,
        favPlayers,
        selectedFavPlayers,
        focusSearch,
        setFocusSearch,
        navigate,
        goBack,
        searchTextRef,
        setSelectedFavPlayers,
        players,
        setPlayers,
        pop,
    };
};

/**
 * States use event handler
 * @param state
 * @returns
 */
const useEventHandler = (state: any, route: any) => {
    const {
        dispatch,
        sortByName,
        selectedFavPlayers,
        navigate,
        goBack,
        setSelectedFavPlayers,
        pop,
    } = state;

    const { params } = route;

    if (I18nManager.isRTL) {
        sortByName.name_he = 1;
    } else {
        sortByName.name_en = 1;
    }

    /**
     * Choose favorites player
     * @param player
     */
    const handleSelected = (player: PlayerModel) => {
        let newSelectedFavPlayers = [...selectedFavPlayers];
        const existFavPlayer = newSelectedFavPlayers.find((t: PlayerModel) => t._id === player._id);
        if (existFavPlayer) {
            newSelectedFavPlayers = newSelectedFavPlayers.filter(
                (selectedFavPlayers: PlayerModel) => selectedFavPlayers._id !== player._id
            );
        } else if (newSelectedFavPlayers.length < MAX_FAVORITES_PLAYER) {
            newSelectedFavPlayers.push(player);
        }
        setSelectedFavPlayers(newSelectedFavPlayers);
    };

    /**
     * Back to previous screen
     */
    const onGoBack = () => {
        if (params?.previous_screen === ScreenName.SettingsPage) {
            goBack();
        } else if (params?.previous_screen === ScreenName.FavSummaryPage) {
            pop();
            navigate(ScreenName.FavSummaryPage);
        } else {
            goBack();
        }
        return true;
    };

    /**
     * Navigate to favorites summary screen  or Setting screen
     */
    const onGoSkip = () => {
        if (params?.previous_screen === ScreenName.SettingsPage) {
            goBack();
        } else if (params?.previous_screen === ScreenName.FavSummaryPage) {
            pop();
            navigate(ScreenName.FavSummaryPage);
        } else {
            dispatch(resetSelectedFavPlayer([]));
            navigate(ScreenName.FavSummaryPage);
        }
    };

    const handleContinue = () => {
        if (!isEmpty(params)) {
            if (params.previous_screen === ScreenName.FavSummaryPage) {
                pop();
                navigate(ScreenName.FavSummaryPage, {
                    editFav: true,
                });
                dispatch(resetSelectedFavPlayer([]));
                selectedFavPlayers.map((player: PlayerModel) => {
                    dispatch(pushFavPlayer(player));
                });
            } else if (params.previous_screen === ScreenName.SettingsPage) {
                dispatch(resetSelectedFavPlayer([]));
                selectedFavPlayers.map((player: PlayerModel) => {
                    dispatch(pushFavPlayer(player));
                });
                route?.params?.handleAfterSelectPlayers(selectedFavPlayers);
                goBack();
            } else if (params.previous_screen === ScreenName.HomePage) {
                navigate(ScreenName.FavTopTeamPage, {
                    previous_screen: ScreenName.HomePage,
                });
            } else {
                navigate(ScreenName.FavTopTeamPage);
            }
        } else {
            navigate(ScreenName.FavTopTeamPage);
            dispatch(resetSelectedFavPlayer([]));
            selectedFavPlayers.map((player: PlayerModel) => {
                dispatch(pushFavPlayer(player));
            });
            dispatch(resetSelectedFavTopTeams([]));
        }
    };

    return {
        handleSelected,
        onGoBack,
        onGoSkip,
        handleContinue,
    };
};

/**
 * Routes use view callback
 * @param state
 * @returns
 */
const useViewCallback = (state: any) => {
    const { sortByName, setPlayers } = state;

    const getPlayersData = useCallback(async () => {
        state.setIsLoading(true);

        try {
            const [error, res] = await PlayerService.findAllFavPlayer({ ...sortByName });
            if (error) {
                return;
            }

            console.log('res.data.documents', res.data.documents);

            setPlayers(res.data.documents);
        } catch (error: any) {
            Alert.alert(error);
        } finally {
            state.setIsLoading(false);
        }
    }, []);

    const searchPlayers = useCallback(async (searchText: string) => {
        state.setIsLoading(true);
        try {
            const [error, res] = await PlayerService.searchFavPlayer(searchText, { ...sortByName });
            if (error) {
                return;
            }

            setPlayers(res.data.documents);
        } catch (error: any) {
            Alert.alert(error);
        } finally {
            state.setIsLoading(false);
        }
    }, []);

    const submitSearchFavPlayer = (text: string) => {
        Keyboard.dismiss();
        searchPlayers(text);
    };

    const onSearchFavPlayer = _.debounce(searchPlayers, 500);

    return {
        getPlayersData,
        submitSearchFavPlayer,
        onSearchFavPlayer,
    };
};

/**
 * Handle effect to listening variables change here.
 * @param state
 * @param callback
 * @param eventHandler
 */
const useEffectHandler = (state: any, callback: any, eventHandler: any) => {
    const { searchText, focusSearch, setFocusSearch } = state;

    const { onGoBack } = eventHandler;

    const { submitSearchFavPlayer } = callback;

    useEffect(() => {
        if (searchText.length) {
            setFocusSearch(() => true);
        }
        if (!searchText.length && focusSearch) {
            submitSearchFavPlayer();
        }
    }, [searchText, focusSearch]);

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onGoBack);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onGoBack);
        };
    }, []);
};

export const useViewModel = ({ navigation, route }: IFavoritePlayerScreenProps) => {
    const state = useViewState();
    const callback = useViewCallback(state);
    const eventHandler = useEventHandler(state, route);
    useEffectHandler(state, callback, eventHandler);

    useMount(() => {
        callback.getPlayersData();
    });

    return {
        ...eventHandler,
        ...state,
        ...callback,
    };
};

// export const useViewModel = ({ navigation, route }: IFavoritePlayerScreenProps) => {
//     const { t } = useTranslation();

//     const { navigate, goBack } = useAppNavigator();
//     const { params } = route;
//     const dispatch = useDispatch<any>();
//     const [searchText, setSearchText] = useState('');
//     const state = useViewState();
//     const getProfile = useSelector((state: RootState) => state.getProfile);
//     const [favSelectedPlayer, setFavSelectedPlayer] = useState<PlayerModel[]>([]);
//     const profile = useSelector((state: RootState) => state.createProfile);
//     // eslint-disable-next-line no-new-object
//     const sortByName: any = new Object();
//     if (I18nManager.isRTL) {
//         sortByName.name_he = 1;
//     } else {
//         sortByName.name_en = 1;
//     }
//     const selectedFavPlayersMap = useSelector(selectedFavPlayersAsMapSelector);
//     const favPlayers = useSelector((state: RootState) => state.favPlayers.favPlayers);
//     const formattedFavPlayers = useMemo(() => {
//         return favPlayers.map(player => ({
//             ...player,
//             isSelected: selectedFavPlayersMap.has(player._id),
//             number: selectedFavPlayersMap.has(player._id) ? 1 : 0,
//         }));
//     }, [favPlayers, selectedFavPlayersMap]);
//     // console.log(formattedFavPlayers);

//     const selectedFavPlayers = useSelector((state: RootState) => state.favPlayers.selectedPlayers);

//     const [focusSearch, setFocusSearch] = useState(false);

//     const getPlayersData = useCallback(async () => {
//         if ((isEmpty(favPlayers) || isNil(favPlayers)) && focusSearch === false) {
//             state.setIsLoading(true);

//             try {
//                 const [error, res] = await PlayerService.findAllFavPlayer(sortByName);
//                 if (error) {
//                     return;
//                 }
//                 dispatch(setFavPlayers(res.data.documents));
//             } catch (error: any) {
//                 Alert.alert(error);
//             } finally {
//                 state.setIsLoading(false);
//             }
//         }
//     }, []);

//     const handleSelected = (player: PlayerModel) => {
//         dispatch(pushFavPlayer(player));
//     };

//     useEffect(() => {
//         if (isEmpty(selectedFavPlayers)) {
//             favSelectedPlayer.map((item: PlayerModel) => {
//                 dispatch(pushFavPlayer(item));
//             });
//         }
//     }, [favSelectedPlayer]);

//     const handleFocusSearch = () => {
//         // setFocusSearch(true);
//     };

//     useEffect(() => {
//         if (searchText.length) {
//             setFocusSearch(() => true);
//         }
//         if (!searchText.length && focusSearch) {
//             submitSearchFavPlayer();
//         }
//     }, [searchText, focusSearch]);

//     const submitSearchFavPlayer = async () => {
//         Keyboard.dismiss();
//         state.setIsLoading(true);
//         if (searchText !== '') {
//             dispatch(resetFavPlayer([]));
//             const [error, res] = await PlayerService.searchFavPlayer(searchText, sortByName);
//             if (error) {
//                 return;
//             }

//             dispatch(resetFavPlayer([]));
//             dispatch(setFavPlayers(res.data.documents));
//             state.setIsLoading(false);
//         } else {
//             dispatch(resetFavPlayer([]));

//             const [error, res] = await PlayerService.findAllFavPlayer(sortByName);
//             if (error) {
//                 return;
//             }

//             dispatch(setFavPlayers(res.data.documents));
//             state.setIsLoading(false);
//         }
//         state.setIsLoading(false);
//     };

//     const onGoBack = () => {
//         dispatch(resetFavPlayer([]));
//         goBack();
//         return true;
//     };

//     useEffect(() => {
//         BackHandler.addEventListener('hardwareBackPress', onGoBack);
//         return () => {
//             BackHandler.removeEventListener('hardwareBackPress', onGoBack);
//         };
//     }, []);
//     const onGoSkip = () => {
//         if (params?.previous_screen === ScreenName.SettingsPage) {
//             goBack();
//         } else {
//             navigate(ScreenName.FavSummaryPage);
//         }
//     };
//     const isFocused = useIsFocused();
//     const previous_screen = route?.params?.previous_screen;

//     // useEffect(() => {
//     //     if (previous_screen === ScreenName.HomePage) {
//     //         return;
//     //     }
//     //     if (previous_screen !== ScreenName.SettingsPage) {
//     //         if (!isFocused) return;
//     //         if (!isEmpty(login.login)) {
//     //             navigate(ScreenName.SideBar);
//     //             navigation.reset({
//     //                 index: 0,
//     //                 routes: [{ name: ScreenName.SideBar as never }],
//     //             });
//     //         } else if (profile.success === true) {
//     //             dispatch(
//     //                 loginUser(
//     //                     serializeParams({
//     //                         action: ACTION,
//     //                         token: TOKEN,
//     //                         call: AuthData.LOGIN,
//     //                         guest_id: profile.profile.tc_user,
//     //                         guest_guid: guestId[0],
//     //                     })
//     //                 )
//     //             );

//     //             navigate(ScreenName.SideBar);
//     //             navigation.reset({
//     //                 index: 0,
//     //                 routes: [{ name: ScreenName.SideBar as never }],
//     //             });
//     //         }
//     //     }
//     // }, [profile.success, isFocused]);

//     const handleContinue = () => {
//         if (!isEmpty(params)) {
//             if (params.previous_screen === ScreenName.FavSummaryPage) {
//                 navigate(ScreenName.FavSummaryPage, {
//                     editFav: true,
//                 });
//             } else if (previous_screen === ScreenName.SettingsPage) {
//                 // navigate(ScreenName.SettingsPage, {
//                 //     previous_screen: ScreenName.FavPlayerPage,
//                 //     position: route?.params?.position,
//                 //     scrollBottom: false,
//                 //     selectedPlayers: true,
//                 //     selectedTeams: true,
//                 //     selectedTopTeams: true,
//                 // });
//                 // dispatch(setSettingFavPlayer(selectedFavPlayers));
//                 route?.params?.handleAfterSelectPlayers(selectedFavPlayers);
//                 goBack();
//                 // pop(ScreenName.FavTeamPage);
//             } else if (previous_screen === ScreenName.HomePage) {
//                 navigate(ScreenName.FavTopTeamPage, {
//                     previous_screen: ScreenName.HomePage,
//                 });
//             } else {
//                 navigate(ScreenName.FavTopTeamPage);
//             }
//         } else {
//             navigate(ScreenName.FavTopTeamPage);
//         }
//     };

//     useMount(() => {
//         getPlayersData();
//     });

//     return {
//         t,
//         onGoBack,
//         onGoSkip,
//         handleContinue,
//         handleSelected,
//         setSearchText,
//         searchText,
//         favPlayers,
//         profile,
//         selectedFavPlayers,
//         formattedFavPlayers,
//         submitSearchFavPlayer,
//         handleFocusSearch,
//         favSelectedPlayer,
//         getProfile,
//         setFocusSearch,
//         ...state,
//     };
// };
