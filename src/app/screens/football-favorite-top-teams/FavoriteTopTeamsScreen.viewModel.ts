import { useCallback, useEffect, useMemo, useState } from 'react';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import { Alert, BackHandler } from 'react-native';
import { isEmpty, isNil } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from '@football/app/utils/hooks/useMount';
import { useIsFocused } from '@react-navigation/native';
import {
    setFavTopTeams,
    pushFavTopTeam,
    selectedFavTopTeamsAsMapSelector,
    resetTopTeams,
    resetSelectedFavTopTeams,
} from 'src/store/FavTopTeam.slice';
import { IFavoriteTopTeamsScreenProps } from './FavoriteTopTeamsScreen.type';
import { RootState } from 'src/store/store';
import TopTeamService from '@football/core/services/TopTeam.service';
import { resetFavPlayer } from 'src/store/FavPlayer.slice';
import { MAX_FAVORITES_TOPTEAM } from '@football/core/api/configs/config';

/**
 * view settings variables
 * @returns
 */
const useViewState = (route: any) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();
    const { navigate, goBack, replace, pop } = useAppNavigator();
    const getProfile = useSelector((state: RootState) => state.getProfile);
    const selectedFavTopTeamsMap = useSelector(selectedFavTopTeamsAsMapSelector);
    const selectedTopTeams = useSelector((state: RootState) => state.favTopTeams.selectedTopTeams);
    const array = selectedFavTopTeamsMap.size
        ? Array.from(selectedFavTopTeamsMap, ([name, value]) => ({ ...value }))
        : selectedTopTeams;

    const [selectedFavTopTeams, setSelectedFavTopTeams] = useState<TopTeamModel[]>(array);
    const [topTeams, setTopTeams] = useState<TopTeamModel[]>();

    const login = useSelector((state: RootState) => state.login);
    const profile = useSelector((state: RootState) => state.createProfile);
    const guestId = useSelector((state: RootState) => state.guestId.guestId);
    const isFocused = useIsFocused();
    const previous_screen = route?.params?.previous_screen;

    return {
        t,
        dispatch,
        navigate,
        goBack,
        getProfile,
        selectedFavTopTeamsMap,
        selectedTopTeams,
        selectedFavTopTeams,
        setSelectedFavTopTeams,
        login,
        profile,
        guestId,
        isFocused,
        previous_screen,
        topTeams,
        setTopTeams,
        replace,
        pop,
    };
};

/**
 * Routes use view callback
 * @param route
 * @param state
 * @returns
 */
const useViewCallback = (route: any, state: any, navigation: any) => {
    const { setTopTeams } = state;

    const getTopTeamsData = useCallback(async () => {
        try {
            const [error, res] = await TopTeamService.findAllFavTopTeam();
            if (error) {
                return;
            }
            // const sortByName = sortBy(res.data.documents, ['name_he']);

            setTopTeams(res.data.documents);
        } catch (error: any) {
            Alert.alert(error);
        }
    }, []);

    return {
        getTopTeamsData,
    };
};

/**
 * States use event handler
 * @param state
 * @param callback
 * @param navigation
 * @param route
 * @returns
 */
const useEventHandler = (state: any, callback: any, navigation: any, route: any) => {
    const {
        dispatch,
        navigate,
        goBack,
        selectedFavTopTeams,
        profile,
        previous_screen,
        setSelectedFavTopTeams,
        replace,
        pop,
    } = state;

    const handleSelected = (topTeam: TopTeamModel) => {
        let newSelectedFavTopTeams = [...selectedFavTopTeams];
        const existFavTopTeam = newSelectedFavTopTeams.find(
            (t: TopTeamModel) => t._id === topTeam._id
        );
        if (existFavTopTeam) {
            newSelectedFavTopTeams = selectedFavTopTeams.filter(
                (selectedFavTeam: TopTeamModel) => selectedFavTeam._id !== topTeam._id
            );
        } else if (newSelectedFavTopTeams.length < MAX_FAVORITES_TOPTEAM) {
            newSelectedFavTopTeams.push(topTeam);
        }

        setSelectedFavTopTeams(newSelectedFavTopTeams);
    };

    const onGoBack = () => {
        goBack();
        return true;
    };

    const onGoSkip = () => {
        if (previous_screen === ScreenName.SettingsPage) {
            goBack();
        } else if (previous_screen === ScreenName.FavSummaryPage) {
            goBack();
        } else {
            dispatch(resetSelectedFavTopTeams([]));
            navigate(ScreenName.FavSummaryPage);
        }
    };

    const handleContinue = () => {
        if (previous_screen === ScreenName.SettingsPage) {
            dispatch(resetSelectedFavTopTeams([]));
            selectedFavTopTeams.map((topTeam: TopTeamModel) => {
                dispatch(pushFavTopTeam(topTeam));
            });
            route.params?.handleAfterSelectTopTeams(selectedFavTopTeams);
            goBack();
        } else if (previous_screen === ScreenName.HomePage) {
            if (profile.saveFavorite) {
                navigate(ScreenName.SideBar);
                navigation.reset({
                    index: 0,
                    routes: [{ name: ScreenName.SideBar as never }],
                });
            } else {
                navigate(ScreenName.FavSummaryPage, {
                    previous_screen: ScreenName.HomePage,
                });
            }
        } else if (previous_screen === ScreenName.FavSummaryPage) {
            pop();
            navigate(ScreenName.FavSummaryPage, {
                editFav: true,
            });
            dispatch(resetSelectedFavTopTeams([]));
            selectedFavTopTeams.map((topTeam: TopTeamModel) => {
                dispatch(pushFavTopTeam(topTeam));
            });
        } else {
            navigate(ScreenName.FavSummaryPage);
            selectedFavTopTeams.map((topTeam: TopTeamModel) => {
                dispatch(pushFavTopTeam(topTeam));
            });
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
 * Handle effect to listening variables change here.
 * @param state
 * @param callback
 */
const useEffectHandler = (state: any, callback: any) => {
    const { onGoBack } = callback;
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onGoBack);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onGoBack);
        };
    }, []);
};

export const useViewModel = ({ navigation, route }: IFavoriteTopTeamsScreenProps) => {
    const state = useViewState(route);
    const callback = useViewCallback(route, state, navigation);
    const eventHandler = useEventHandler(state, callback, navigation, route);
    useEffectHandler(state, callback);

    useMount(() => {
        callback.getTopTeamsData();
    });

    return {
        ...eventHandler,
        ...state,
        ...callback,
    };
};
