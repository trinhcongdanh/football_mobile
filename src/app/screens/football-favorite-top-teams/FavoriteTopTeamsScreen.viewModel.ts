import { useCallback, useEffect, useMemo, useState } from 'react';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { TopTeamModel, TopTeamModelResponse } from '@football/core/models/TopTeamModelResponse';
import { Alert } from 'react-native';
import { isEmpty, isNil } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from '@football/app/utils/hooks/useMount';
import { ACTION, TOKEN } from '@football/core/api/auth/config';
import { useIsFocused } from '@react-navigation/native';
import { loginUser } from 'src/store/user/Login.slice';
import { createProfileUser } from 'src/store/user/CreateProfile.slice';
import {
    setFavTopTeams,
    pushFavTopTeam,
    resetTopTeams,
    selectedFavTopTeamsAsMapSelector,
    selectedFavTopTeamsProfileAsMapSelector,
    pushFavTopTeamProfile,
} from 'src/store/FavTopTeam.slice';
import { IFavoriteTopTeamsScreenProps } from './FavoriteTopTeamsScreen.type';
import { RootState } from 'src/store/store';
import { setSettingFavTopTeam } from 'src/store/SettingSelected.slice';
import TopTeamService from '@football/core/services/TopTeam.service';

export const useViewModel = ({ navigation, route }: IFavoriteTopTeamsScreenProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();
    const { navigate, goBack } = useAppNavigator();
    const getProfile = useSelector((state: RootState) => state.getProfile);

    const selectedFavTopTeamsMap = useSelector(selectedFavTopTeamsAsMapSelector);
    const selectedFavTopTeamsProfileMap = useSelector(selectedFavTopTeamsProfileAsMapSelector);

    const favTopTeams = useSelector((state: RootState) => state.favTopTeams.favTopTeams);

    const formattedFavTopTeams = useMemo(() => {
        return favTopTeams.map(topTeam => ({
            ...topTeam,
            isSelected: selectedFavTopTeamsMap.has(topTeam._id),
        }));
    }, [favTopTeams, selectedFavTopTeamsMap]);

    const formattedFavTopTeamsProfile = useMemo(() => {
        return favTopTeams.map(topTeam => ({
            ...topTeam,
            isSelected: selectedFavTopTeamsProfileMap.has(topTeam._id),
        }));
    }, [favTopTeams, selectedFavTopTeamsProfileMap]);

    const selectedFavTopTeams = useSelector(
        (state: RootState) => state.favTopTeams.selectedTopTeams
    );

    const selectedFavTopTeamsProfile = useSelector(
        (state: RootState) => state.favTopTeams.selectedTopTeamsProfile
    );

    const [favSelectedTopTeam, setFavSelectedTopTeam] = useState<TopTeamModel[]>([]);
    const changeTopTeams = route.params?.changeTopTeams;

    useEffect(() => {
        if (getProfile.success === true) {
            const fetchFavTopTeam = async () => {
                const fetchTopTeam = await Promise.all(
                    getProfile.getProfile.item.favorite_national_teams.map(async (item: string) => {
                        const [err, res] = await TopTeamService.findByOId<TopTeamModelResponse>(
                            item
                        );
                        if (err) return;
                        return res.data.documents[0];
                    })
                );
                // console.log(fetchTeam.filter(Boolean));
                if (changeTopTeams) {
                    setFavSelectedTopTeam(selectedFavTopTeamsProfile);
                } else {
                    setFavSelectedTopTeam(fetchTopTeam.filter(Boolean));
                }
            };
            fetchFavTopTeam();
        }
    }, [getProfile.success]);

    const login = useSelector((state: RootState) => state.login);
    const profile = useSelector((state: RootState) => state.createProfile);
    const guestId = useSelector((state: RootState) => state.guestId.guestId);

    function serializeParams(obj: any) {
        let str = [];
        for (let p in obj) {
            if (obj.hasOwnProperty(p)) {
                str.push(p + '=' + encodeURIComponent(obj[p]));
            }
        }
        return str.join('&');
    }

    const getTopTeamsData = useCallback(async () => {
        if (isEmpty(favTopTeams) || isNil(favTopTeams)) {
            try {
                const { data }: TopTeamModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
                    dataSource: DATA_SOURCE,
                    database: DB,
                    collection: 'top_team',
                });
                if (!isEmpty(data.documents)) {
                    dispatch(setFavTopTeams(data.documents));
                }
            } catch (error: any) {
                Alert.alert(error);
            }
        }
    }, []);

    const handleSelected = (topTeam: TopTeamModel) => {
        if (!getProfile.success) {
            dispatch(pushFavTopTeam(topTeam));
        }
        dispatch(pushFavTopTeamProfile(topTeam));
    };

    useEffect(() => {
        if (isEmpty(selectedFavTopTeamsProfile)) {
            favSelectedTopTeam.map((item: TopTeamModel) => {
                dispatch(pushFavTopTeamProfile(item));
            });
        }
    }, [favSelectedTopTeam]);

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
        if (previous_screen === ScreenName.SettingsPage) {
            navigate(ScreenName.SettingsPage, {
                previous_screen: ScreenName.FavTopTeamPage,
                center: true,
                scrollBottom: false,
                selectedPlayers: true,
                selectedTeams: true,
                selectedTopTeams: true,
            });
            dispatch(setSettingFavTopTeam(selectedFavTopTeamsProfile));
            // pop(ScreenName.FavTeamPage);
        } else {
            navigate(ScreenName.FavSummaryPage);
        }
    };
    useMount(() => {
        getTopTeamsData();
    });

    return {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        favTopTeams,
        formattedFavTopTeams,
        selectedFavTopTeams,
        profile,
        formattedFavTopTeamsProfile,
        selectedFavTopTeamsProfile,
        getProfile,
    };
};
