/* eslint-disable no-underscore-dangle */
import { useRef, useCallback, useEffect, useMemo, useState } from 'react';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { TeamModel, TeamModelResponse } from '@football/core/models/TeamModelResponse';
import { Alert, Keyboard } from 'react-native';
import { isEmpty, isNil } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from '@football/app/utils/hooks/useMount';
import { ACTION, TOKEN } from '@football/core/api/auth/config';
import { loginUser } from 'src/store/user/Login.slice';
import { createProfileUser } from 'src/store/user/CreateProfile.slice';
import {
    setFavTeams,
    pushFavTeam,
    resetFavTeam,
    selectedFavTeamsAsMapSelector,
    selectedFavTeamsProfileAsMapSelector,
    pushFavTeamProfile,
} from 'src/store/FavTeam.slice';
import { IFavoriteTeamsScreenProps } from './FavoriteTeamsScreen.type';
import {
    resetAllFavPlayers,
    resetGroupFavPlayer,
    resetSearchFavPlayer,
} from 'src/store/FavPlayer.slice';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { RootState } from 'src/store/store';
import { setSettingFavTeam } from 'src/store/SettingSelected.slice';
import TeamService from '@football/core/services/Team.service';
import { addGuestId } from 'src/store/user/GuestId.slice';
import { clearFavoriteData } from '@football/app/utils/functions/clearFavoriteData';

const useViewState = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return {
        isLoading,
        setIsLoading,
    };
};

export const useViewModel = ({ navigation, route }: IFavoriteTeamsScreenProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();
    const { navigate, goBack, pop } = useAppNavigator();

    const state = useViewState();

    const [searchText, setSearchText] = useState('');
    const routes = useRoute();
    const searchTextRef = useRef<any>(null);

    const selectedFavTeamsMap = useSelector(selectedFavTeamsAsMapSelector);
    const selectedFavTeamsProfileMap = useSelector(selectedFavTeamsProfileAsMapSelector);

    const favTeams = useSelector((state: RootState) => state.favTeams.favTeams);

    const formattedFavTeams = useMemo(() => {
        return favTeams.map(team => ({ ...team, isSelected: selectedFavTeamsMap.has(team._id) }));
    }, [favTeams, selectedFavTeamsMap]);

    const formattedFavTeamsProfile = useMemo(() => {
        return favTeams.map(team => ({
            ...team,
            isSelected: selectedFavTeamsProfileMap.has(team._id),
        }));
    }, [favTeams, selectedFavTeamsProfileMap]);

    const selectedFavTeams = useSelector((state: RootState) => state.favTeams.selectedTeams);
    const selectedTeamsProfile = useSelector(
        (state: RootState) => state.favTeams.selectedTeamsProfile
    );
    const getProfile = useSelector((state: RootState) => state.getProfile);
    const [favSelectedTeam, setFavSelectedTeam] = useState<TeamModel[]>([]);
    const changeTeams = route.params?.changeTeams;
    useEffect(() => {
        if (changeTeams) {
            setFavSelectedTeam(selectedTeamsProfile);
        }
    }, [changeTeams]);

    function serializeParams(obj: any) {
        let str = [];
        for (let p in obj) {
            if (obj.hasOwnProperty(p)) {
                str.push(p + '=' + encodeURIComponent(obj[p]));
            }
        }
        return str.join('&');
    }

    const getTeamsData = useCallback(async () => {
        if (isEmpty(favTeams) || isNil(favTeams)) {
            state.setIsLoading(true);
            try {
                const { data }: TeamModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
                    dataSource: DATA_SOURCE,
                    database: DB,
                    collection: 'team',
                });
                if (!isEmpty(data.documents)) {
                    dispatch(setFavTeams(data.documents));
                }
            } catch (error: any) {
                Alert.alert(error);
            } finally {
                state.setIsLoading(false);
            }
        }
    }, []);

    const handleSelected = (team: TeamModel) => {
        if (!getProfile.success) {
            dispatch(pushFavTeam(team));
            dispatch(resetGroupFavPlayer({ id: '', label: '', listFavPlayers: [] }));
            dispatch(resetAllFavPlayers({ id: '', label: '', listFavPlayers: [] }));
            dispatch(resetSearchFavPlayer({ id: '', label: '', listFavPlayers: [] }));
        } else {
            dispatch(pushFavTeamProfile(team));
        }
    };
    useEffect(() => {
        if (isEmpty(selectedTeamsProfile)) {
            favSelectedTeam.map((item: TeamModel) => {
                dispatch(pushFavTeamProfile(item));
            });
        }
    }, [favSelectedTeam]);

    useEffect(() => {
        if (!searchText.length) {
            submitSearchFavTeam();
        }
    }, [searchText]);

    useEffect(() => {
        return () => {
            // componentwillunmount in functional component.
            // Anything in here is fired on component unmount.
            setSearchText('');
        };
    }, []);

    const submitSearchFavTeam = async () => {
        Keyboard.dismiss();
        state.setIsLoading(true);

        if (searchText !== '') {
            dispatch(resetFavTeam([]));
            const [error, res] = await TeamService.search(searchText);
            if (error) {
                return;
            }

            console.log(res.data);

            dispatch(resetFavTeam([]));
            dispatch(setFavTeams(res.data.documents));
            state.setIsLoading(false);
        } else {
            dispatch(resetFavTeam([]));
            try {
                const { data }: TeamModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
                    dataSource: DATA_SOURCE,
                    database: DB,
                    collection: 'team',
                });
                if (!isEmpty(data.documents)) {
                    dispatch(resetFavTeam([]));
                    dispatch(setFavTeams(data.documents));
                }
            } catch (error: any) {
                Alert.alert(error);
            } finally {
                state.setIsLoading(false);
            }
        }
    };

    const onGoBack = (): void => {
        dispatch(resetFavTeam([]));
        goBack();
    };

    const login = useSelector((state: any) => state.login);
    const profile = useSelector((state: any) => state.createProfile);
    const guestId = useSelector((state: any) => state.guestId.guestId);

    const uuid = require('uuid');
    const id = uuid.v4();
    useEffect(() => {
        if (guestId.length === 0) {
            dispatch(addGuestId(id));
        }
    }, []);

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
        if (previous_screen === ScreenName.FavSummaryPage) {
            navigate(ScreenName.FavSummaryPage);
        } else if (previous_screen === ScreenName.SettingsPage) {
            navigate(ScreenName.SettingsPage, {
                previous_screen: ScreenName.FavTeamPage,
                center: true,
                scrollBottom: false,
                selectedPlayers: true,
                selectedTeams: true,
                selectedTopTeams: true,
            });
            dispatch(setSettingFavTeam(selectedTeamsProfile));
            // pop(ScreenName.FavTeamPage);
        } else {
            navigate(ScreenName.FavPlayerPage);
        }
    };

    useMount(() => {
        getTeamsData();
    });

    return {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        dispatch,
        // searchFavTeam,
        setSearchText,
        favTeams,
        searchText,
        profile,
        selectedFavTeams,
        formattedFavTeams,
        searchTextRef,
        submitSearchFavTeam,
        favSelectedTeam,
        getProfile,
        formattedFavTeamsProfile,
        selectedTeamsProfile,
        ...state,
    };
};
