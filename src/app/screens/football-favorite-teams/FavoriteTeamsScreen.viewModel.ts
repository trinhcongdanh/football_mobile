/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import { useRef, useCallback, useState, useEffect } from 'react';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { TeamModel } from '@football/core/models/TeamModelResponse';
import { Alert, I18nManager, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from '@football/app/utils/hooks/useMount';
import { RootState } from 'src/store/store';
import TeamService from '@football/core/services/Team.service';
import _, { isEmpty, isNil } from 'lodash';
import { createProfileUser } from 'src/store/user/CreateProfile.slice';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { ACTION, TOKEN } from '@football/core/api/auth/config';
import { pushFavTeam, resetFavTeam, selectedFavTeamsAsMapSelector } from 'src/store/FavTeam.slice';
import { setSettingFavTeam } from 'src/store/SettingSelected.slice';
import { MAX_FAVORITES_TEAM } from '@football/core/api/configs/config';
import { IFavoriteTeamsScreenProps } from './FavoriteTeamsScreen.type';
import { loginUser } from 'src/store/user/Login.slice';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import {
    resetAllFavPlayers,
    resetGroupFavPlayer,
    resetSearchFavPlayer,
    resetSelectedFavPlayer,
} from 'src/store/FavPlayer.slice';
import { clearFavoriteData } from '@football/app/utils/functions/clearFavoriteData';
import sortBy from 'lodash/sortBy';

function serializeParams(obj: any) {
    const str = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const p in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(p)) {
            str.push(`${p}=${encodeURIComponent(obj[p])}`);
        }
    }
    return str.join('&');
}

const useViewState = () => {
    const getProfile = useSelector((state: RootState) => state.getProfile);
    const profile = useSelector((state: any) => state.createProfile);
    const guestId = useSelector((state: any) => state.guestId.guestId);
    const login = useSelector((state: any) => state.login);

    const selectedFavTeamsMap = useSelector(selectedFavTeamsAsMapSelector);
    const selectedTeams = useSelector((state: RootState) => state.favTeams.selectedTeams);

    const array = selectedFavTeamsMap.size
        ? Array.from(selectedFavTeamsMap, ([name, value]) => ({ ...value }))
        : selectedTeams;

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const searchTextRef = useRef<any>(null);
    const [teams, setTeams] = useState<TeamModel[]>();
    const [selectedFavTeams, setSelectedFavTeams] = useState<TeamModel[]>(array);

    return {
        isLoading,
        setIsLoading,
        searchTextRef,
        selectedFavTeams,
        setSelectedFavTeams,
        getProfile,
        profile,
        teams,
        setTeams,
        guestId,
        login,
    };
};
/**
 * Routes use view callback
 * @param route
 * @param viewState
 * @returns
 */
const useViewCallback = (route: any, viewState: any) => {
    const {
        setTeams,
        setIsLoading,
        getProfile,
        selectedFavTeams,
        setSelectedFavTeams,
        profile,
        guestId,
        login,
    } = viewState;

    const dispatch = useDispatch<any>();
    const { navigate, goBack, pop } = useAppNavigator();

    const onGoBack = (): void => {
        dispatch(resetFavTeam([]));
        goBack();
    };

    const { params } = route;
    const isFocused = useIsFocused();
    const navigation = useNavigation();

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

    useEffect(() => {
        if (params?.previous_screen !== ScreenName.SettingsPage) {
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
        if (params?.previous_screen === ScreenName.FavSummaryPage) {
            navigate(ScreenName.FavSummaryPage, {
                editFav: true,
            });
        } else if (params?.previous_screen === ScreenName.SettingsPage) {
            navigate(ScreenName.SettingsPage, {
                previous_screen: ScreenName.FavTeamPage,
                center: true,
                scrollBottom: false,
                selectedPlayers: true,
                selectedTeams: true,
                selectedTopTeams: true,
            });
            dispatch(setSettingFavTeam(selectedFavTeams));
            // pop(ScreenName.FavTeamPage);
        } else {
            navigate(ScreenName.FavPlayerPage);
            dispatch(resetGroupFavPlayer({ id: '', label: '', listFavPlayers: [] }));
            dispatch(resetAllFavPlayers({ id: '', label: '', listFavPlayers: [] }));
            dispatch(resetSearchFavPlayer({ id: '', label: '', listFavPlayers: [] }));
            dispatch(resetSelectedFavPlayer([]));
        }
    };

    /**
     *  Handle clicking event in the team
     * @param team
     */
    const handleSelected = (team: TeamModel) => {
        let newSelectedFavTeams = [...selectedFavTeams];
        const existFavTeam = newSelectedFavTeams.find((t: TeamModel) => t._id === team._id);
        if (existFavTeam) {
            newSelectedFavTeams = newSelectedFavTeams.filter(
                (selectedFavTeam: TeamModel) => selectedFavTeam._id !== team._id
            );
            dispatch(pushFavTeam(team));
        } else if (newSelectedFavTeams.length < MAX_FAVORITES_TEAM) {
            newSelectedFavTeams.push(team);
            dispatch(pushFavTeam(team));
        }
        setSelectedFavTeams(newSelectedFavTeams);
    };

    const searchTeams = useCallback(async (searchText: string) => {
        setIsLoading(true);

        try {
            const [error, res] = await TeamService.searchFavTeam(searchText);
            if (error) {
                return;
            }
            const sortByName = sortBy(res.data.documents, [
                I18nManager.isRTL ? 'name_he' : 'name_en',
            ]);
            setTeams(sortByName);
        } catch (error: any) {
            Alert.alert(error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const getTeamsData = useCallback(async () => {
        setIsLoading(true);

        const favoriteTeamIds = getProfile.getProfile?.item?.favorite_israel_teams || [];

        try {
            const [error, res] = await TeamService.findAllFavTeam();
            if (error) {
                return;
            }
            const sortByName = sortBy(res.data.documents, [
                I18nManager.isRTL ? 'name_he' : 'name_en',
            ]);
            setTeams(sortByName);
        } catch (error: any) {
            Alert.alert(error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const submitSearchFavTeam = (text: string) => {
        Keyboard.dismiss();
        searchTeams(text);
    };

    const onSearchFavTeam = _.debounce(searchTeams, 500);

    return {
        submitSearchFavTeam,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        getTeamsData,
        onSearchFavTeam,
    };
};

export const useViewModel = ({ navigation, route }: IFavoriteTeamsScreenProps) => {
    const { t } = useTranslation();

    const state = useViewState();
    const callBack = useViewCallback(route, state);

    useMount(() => {
        callBack.getTeamsData();
    });

    return {
        t,
        ...state,
        ...callBack,
    };
};
