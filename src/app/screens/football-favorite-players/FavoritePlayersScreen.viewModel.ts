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
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, BackHandler, I18nManager, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectedFavPlayersAsMapSelector,
    setFavPlayers,
    resetFavPlayer,
    pushFavPlayer,
} from 'src/store/FavPlayer.slice';

import { RootState } from 'src/store/store';
import { createProfileUser } from 'src/store/user/CreateProfile.slice';
import { loginUser } from 'src/store/user/Login.slice';
import { IFavoritePlayerScreenProps } from './FavoritePlayersScreen.type';
import sortBy from 'lodash/sortBy';

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
    const { params } = route;
    const dispatch = useDispatch<any>();
    const [searchText, setSearchText] = useState('');
    const state = useViewState();
    const routes = useRoute();
    const getProfile = useSelector((state: RootState) => state.getProfile);
    const [favSelectedPlayer, setFavSelectedPlayer] = useState<PlayerModel[]>([]);
    const login = useSelector((state: RootState) => state.login);
    const profile = useSelector((state: RootState) => state.createProfile);
    const guestId = useSelector((state: any) => state.guestId.guestId);
    // eslint-disable-next-line no-new-object
    const sortByName: any = new Object();
    if (I18nManager.isRTL) {
        sortByName.name_he = 1;
    } else {
        sortByName.name_en = 1;
    }
    const selectedFavPlayersMap = useSelector(selectedFavPlayersAsMapSelector);
    const favPlayers = useSelector((state: RootState) => state.favPlayers.favPlayers);
    const formattedFavPlayers = useMemo(() => {
        return favPlayers.map(player => ({
            ...player,
            isSelected: selectedFavPlayersMap.has(player._id),
            number: selectedFavPlayersMap.has(player._id) ? 1 : 0,
        }));
    }, [favPlayers, selectedFavPlayersMap]);
    // console.log(formattedFavPlayers);

    const selectedFavPlayers = useSelector((state: RootState) => state.favPlayers.selectedPlayers);

    const [focusSearch, setFocusSearch] = useState(false);

    const getPlayersData = useCallback(async () => {
        if ((isEmpty(favPlayers) || isNil(favPlayers)) && focusSearch === false) {
            state.setIsLoading(true);

            try {
                const [error, res] = await PlayerService.findAllFavPlayer(sortByName);
                if (error) {
                    return;
                }
                dispatch(setFavPlayers(res.data.documents));
            } catch (error: any) {
                Alert.alert(error);
            } finally {
                state.setIsLoading(false);
            }
        }
    }, []);

    const handleSelected = (player: PlayerModel) => {
        dispatch(pushFavPlayer(player));
    };

    useEffect(() => {
        if (isEmpty(selectedFavPlayers)) {
            favSelectedPlayer.map((item: PlayerModel) => {
                dispatch(pushFavPlayer(item));
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
            dispatch(resetFavPlayer([]));
            const [error, res] = await PlayerService.searchFavPlayer(searchText, sortByName);
            if (error) {
                return;
            }

            dispatch(resetFavPlayer([]));
            dispatch(setFavPlayers(res.data.documents));
            state.setIsLoading(false);
        } else {
            dispatch(resetFavPlayer([]));

            const [error, res] = await PlayerService.findAllFavPlayer(sortByName);
            if (error) {
                return;
            }

            dispatch(setFavPlayers(res.data.documents));
            state.setIsLoading(false);
        }
        state.setIsLoading(false);
    };

    // useEffect(() => {
    //     return () => {
    //         // componentwillunmount in functional component.
    //         // Anything in here is fired on component unmount.
    //         setSearchText('');
    //     };
    // }, []);

    const onGoBack = () => {
        dispatch(resetFavPlayer([]));
        goBack();
        return true;
    };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onGoBack);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onGoBack);
        };
    }, []);
    const onGoSkip = () => {
        if (params?.previous_screen === ScreenName.SettingsPage) {
            goBack();
        } else {
            navigate(ScreenName.FavSummaryPage);
        }
    };
    const isFocused = useIsFocused();
    const previous_screen = route?.params?.previous_screen;

    // useEffect(() => {
    //     if (previous_screen === ScreenName.HomePage) {
    //         return;
    //     }
    //     if (previous_screen !== ScreenName.SettingsPage) {
    //         if (!isFocused) return;
    //         if (!isEmpty(login.login)) {
    //             navigate(ScreenName.SideBar);
    //             navigation.reset({
    //                 index: 0,
    //                 routes: [{ name: ScreenName.SideBar as never }],
    //             });
    //         } else if (profile.success === true) {
    //             dispatch(
    //                 loginUser(
    //                     serializeParams({
    //                         action: ACTION,
    //                         token: TOKEN,
    //                         call: AuthData.LOGIN,
    //                         guest_id: profile.profile.tc_user,
    //                         guest_guid: guestId[0],
    //                     })
    //                 )
    //             );

    //             navigate(ScreenName.SideBar);
    //             navigation.reset({
    //                 index: 0,
    //                 routes: [{ name: ScreenName.SideBar as never }],
    //             });
    //         }
    //     }
    // }, [profile.success, isFocused]);

    const handleContinue = () => {
        if (!isEmpty(params)) {
            if (params.previous_screen === ScreenName.FavSummaryPage) {
                navigate(ScreenName.FavSummaryPage, {
                    editFav: true,
                });
            } else if (previous_screen === ScreenName.SettingsPage) {
                // navigate(ScreenName.SettingsPage, {
                //     previous_screen: ScreenName.FavPlayerPage,
                //     position: route?.params?.position,
                //     scrollBottom: false,
                //     selectedPlayers: true,
                //     selectedTeams: true,
                //     selectedTopTeams: true,
                // });
                // dispatch(setSettingFavPlayer(selectedFavPlayers));
                route?.params?.handleAfterSelectPlayers(selectedFavPlayers);
                goBack();
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
        getPlayersData();
    });

    return {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        setSearchText,
        searchText,
        favPlayers,
        profile,
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
