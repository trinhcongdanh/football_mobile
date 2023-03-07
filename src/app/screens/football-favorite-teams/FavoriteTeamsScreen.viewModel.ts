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
    resetSelectedFavTeam,
    selectedFavTeamsProfileAsMapSelector,
    pushFavTeamProfile,
} from 'src/store/FavTeam.slice';
import { IFavoriteTeamsScreenProps } from './FavoriteTeamsScreen.type';
import { resetAllFavPlayers, resetGroupFavPlayer } from 'src/store/FavPlayer.slice';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { RootState } from 'src/store/store';
import { setSettingFavTeam } from 'src/store/SettingSelected.slice';
import TeamService from '@football/core/services/Team.service';

export const useViewModel = ({ navigation, route }: IFavoriteTeamsScreenProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();
    const { navigate, goBack, pop } = useAppNavigator();
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
    useEffect(() => {
        if (getProfile.success === true) {
            const fetchFavTeam = async () => {
                const fetchTeam = await Promise.all(
                    getProfile.getProfile.item.favorite_israel_teams.map(async (item: string) => {
                        const [err, res] = await TeamService.findByOId<TeamModelResponse>(item);
                        if (err) return;
                        return res.data.documents[0];
                    })
                );
                // console.log(fetchTeam.filter(Boolean));
                if (!isEmpty(selectedTeamsProfile)) {
                    console.log('Danh');
                    setFavSelectedTeam(selectedTeamsProfile);
                } else {
                    setFavSelectedTeam(fetchTeam.filter(Boolean));
                }
            };
            fetchFavTeam();
        }
    }, [getProfile.success]);

    const login = useSelector((state: any) => state.login);
    const profile = useSelector((state: any) => state.createProfile);
    const guestId = useSelector((state: any) => state.guestId.guestId);

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
            }
        }
    }, []);

    const handleSelected = (team: TeamModel) => {
        if (!getProfile.success) {
            const params = routes.params;
            dispatch(pushFavTeam(team));
            if (!isEmpty(params)) {
                if (params.previous_screen !== ScreenName.FavSummaryPage) {
                    dispatch(resetGroupFavPlayer({ id: '', label: '', listFavPlayers: [] }));
                    dispatch(resetAllFavPlayers({ id: '', label: '', listFavPlayers: [] }));
                }
            } else {
                dispatch(resetGroupFavPlayer({ id: '', label: '', listFavPlayers: [] }));
                dispatch(resetAllFavPlayers({ id: '', label: '', listFavPlayers: [] }));
            }
        } else {
            dispatch(pushFavTeamProfile(team));
            // if (favSelectedTeam.length < 3) {
            //     setFavSelectedTeam([...favSelectedTeam, team]);
            //     // console.log(favSelectedTeam);
            // }
        }
    };
    useEffect(() => {
        // console.log(favSelectedTeam);
        // dispatch(resetSelectedFavTeam([]));
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

    const submitSearchFavTeam = async () => {
        Keyboard.dismiss();
        if (searchText !== '') {
            dispatch(resetFavTeam([]));
            const [error, res] = await TeamService.search(searchText);
            if (error) {
                return;
            }

            console.log(res.data);

            dispatch(resetFavTeam([]));
            dispatch(setFavTeams(res.data.documents));
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
            }
        }
    };

    const onGoBack = (): void => {
        dispatch(resetFavTeam([]));
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
                    previous_screen: ScreenName.FavTeamPage,
                    center: true,
                    scrollBottom: false,
                });
                dispatch(setSettingFavTeam(selectedTeamsProfile));
                // pop(ScreenName.FavTeamPage);
            } else {
                navigate(ScreenName.FavPlayerPage);
            }
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
    };
};
