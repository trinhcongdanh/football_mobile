/* eslint-disable no-underscore-dangle */
import { useRef, useCallback, useEffect, useMemo, useState } from 'react';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { TeamModel, TeamModelResponse } from '@football/core/models/TeamModelResponse';
import { Alert } from 'react-native';
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
} from 'src/store/FavTeam.slice';
import { IFavoriteTeamsScreenProps } from './FavoriteTeamsScreen.type';
import { resetAllFavPlayers, resetGroupFavPlayer } from 'src/store/FavPlayer.slice';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { RootState } from 'src/store/store';

export const useViewModel = ({ navigation, route }: IFavoriteTeamsScreenProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();
    const { navigate, goBack } = useAppNavigator();
    const [searchText, setSearchText] = useState('');
    const routes = useRoute();
    const searchTextRef = useRef<any>(null);

    const selectedFavTeamsMap = useSelector(selectedFavTeamsAsMapSelector);

    const favTeams = useSelector((state: RootState) => state.favTeams.favTeams);

    const formattedFavTeams = useMemo(() => {
        return favTeams.map(team => ({ ...team, isSelected: selectedFavTeamsMap.has(team._id) }));
    }, [favTeams, selectedFavTeamsMap]);

    const selectedFavTeams = useSelector((state: RootState) => state.favTeams.selectedTeams);

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
    };

    const searchFavTeam = (text: string) => {
        setSearchText(text);
    };

    const submitSearchFavTeam = async () => {
        if (searchText !== '') {
            try {
                dispatch(resetFavTeam([]));
                const { data }: TeamModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
                    dataSource: DATA_SOURCE,
                    database: DB,
                    collection: 'team',
                    projection: {
                        logo_url: true,
                        name_en: true,
                        name_he: true,
                        popularity: true,
                        team_personnel_id: true,
                        search_terms: true,
                        league_name_he: true,
                        league_name_en: true,
                        seasons: true,
                        homepage_info: true,
                    },
                    filter: {
                        search_terms: { $regex: `.*${searchText}.*`, $options: 'i' },
                    },
                    limit: 100,
                });
                if (!isEmpty(data.documents)) {
                    dispatch(resetFavTeam([]));
                    dispatch(setFavTeams(data.documents));
                }
            } catch (error: any) {
                Alert.alert(error);
            }
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
        searchFavTeam,
        setSearchText,
        favTeams,
        searchText,
        profile,
        selectedFavTeams,
        formattedFavTeams,
        searchTextRef,
        submitSearchFavTeam,
    };
};
