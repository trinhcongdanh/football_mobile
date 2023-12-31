import { useEffect, useState } from 'react';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useSelector, useDispatch } from 'react-redux';
import { TeamModel } from '@football/core/models/TeamModelResponse';
import { PlayerModel } from '@football/core/models/PlayerModelResponse';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import { useTranslation } from 'react-i18next';
import { axiosAuth } from '@football/core/api/auth/axiosAuth';
import { ACTION, AUTH_URL, TOKEN } from '@football/core/api/auth/config';
import { Alert } from 'react-native';
import { isEmpty, isNil } from 'lodash';
import { loginUser } from 'src/store/user/Login.slice';
import { setProfileUser } from 'src/store/user/setProfile.slice';
import { createProfileUser } from 'src/store/user/CreateProfile.slice';
import { IFavoriteSummaryScreenProps } from './FavoriteSummaryScreen.type';
import { RootState } from 'src/store/store';
import { useIsFocused } from '@react-navigation/native';
import { resetSearchFavPlayer, SelectedPlayer } from 'src/store/FavPlayer.slice';
import { resetFavTeam } from 'src/store/FavTeam.slice';
import { resetTopTeams } from 'src/store/FavTopTeam.slice';
import qs from 'qs';

export const useViewModel = ({ navigation, route }: IFavoriteSummaryScreenProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();
    const { navigate, goBack } = useAppNavigator();
    const [onCheck, setonCheck] = useState(false);
    // team
    const [firstTeams, setFirstTeams] = useState<TeamModel>();
    const [secondTeams, setSecondTeams] = useState<TeamModel>();
    const [thirdTeams, setThirdTeams] = useState<TeamModel>();
    const teams = [firstTeams, secondTeams, thirdTeams];
    useEffect(() => {
        if (selectedFavTeams.length === 3) {
            setFirstTeams(selectedFavTeams[0]);
            setSecondTeams(selectedFavTeams[1]);
            setThirdTeams(selectedFavTeams[2]);
        } else if (selectedFavTeams.length === 2) {
            setFirstTeams(selectedFavTeams[0]);
            setSecondTeams(selectedFavTeams[1]);
        } else if (selectedFavTeams.length === 1) {
            setFirstTeams(selectedFavTeams[0]);
        }
    }, []);

    // player
    const [firstPlayers, setFirstPlayers] = useState<SelectedPlayer>();
    const [secondPlayers, setSecondPlayers] = useState<SelectedPlayer>();
    const [thirdPlayers, setThirdPlayers] = useState<SelectedPlayer>();
    const players = [firstPlayers, secondPlayers, thirdPlayers];
    useEffect(() => {
        if (selectedFavPlayers.length === 3) {
            setFirstPlayers(selectedFavPlayers[0]);
            setSecondPlayers(selectedFavPlayers[1]);
            setThirdPlayers(selectedFavPlayers[2]);
        } else if (selectedFavPlayers.length === 2) {
            setFirstPlayers(selectedFavPlayers[0]);
            setSecondPlayers(selectedFavPlayers[1]);
        } else if (selectedFavPlayers.length === 1) {
            setFirstPlayers(selectedFavPlayers[0]);
        }
    }, []);

    // top team
    const [firstTopTeams, setFirstTopTeams] = useState<TopTeamModel>();
    const [secondTopTeams, setSecondTopTeams] = useState<TopTeamModel>();
    const topTeams = [firstTopTeams, secondTopTeams];
    useEffect(() => {
        if (selectedFavTopTeams.length === 2) {
            setFirstTopTeams(selectedFavTopTeams[0]);
            setSecondTopTeams(selectedFavTopTeams[1]);
        } else if (selectedFavTopTeams.length === 1) {
            setFirstTopTeams(selectedFavTopTeams[0]);
        }
    }, []);

    const selectedFavTeams = useSelector((state: RootState) => state.favTeams.selectedTeams);
    const selectedFavPlayers = useSelector((state: RootState) => state.favPlayers.selectedPlayers);
    const selectedFavTopTeams = useSelector(
        (state: RootState) => state.favTopTeams.selectedTopTeams
    );
    const login = useSelector((state: RootState) => state.login);
    const profile = useSelector((state: RootState) => state.createProfile);
    const guestId = useSelector((state: any) => state.guestId.guestId);
    const profileUser = useSelector((state: RootState) => state.setProfile);

    function serializeParams(obj: any) {
        const a = qs.stringify(obj, { encode: false, arrayFormat: 'brackets' });
        console.log(a);
        return a;
    }

    const onGoBack = (): void => {
        goBack();
    };

    const addFavTeam = (index: number) => {
        dispatch(resetFavTeam([]));
        navigate(ScreenName.FavTeamPage, {
            previous_screen: ScreenName.FavSummaryPage,
        });
    };

    const changeFavTeam = (index: string) => {
        dispatch(resetFavTeam([]));
        navigate(ScreenName.FavTeamPage, {
            previous_screen: ScreenName.FavSummaryPage,
        });
    };

    const addFavPlayer = (index: number) => {
        dispatch(resetSearchFavPlayer({ id: '', label: '', listFavPlayers: [] }));
        navigate(ScreenName.FavPlayerPage, {
            previous_screen: ScreenName.FavSummaryPage,
        });
    };

    const changeFavPlayer = (index: number) => {
        dispatch(resetSearchFavPlayer({ id: '', label: '', listFavPlayers: [] }));
        navigate(ScreenName.FavPlayerPage, {
            previous_screen: ScreenName.FavSummaryPage,
        });
    };

    const addFavTopTeam = (index: number) => {
        dispatch(resetTopTeams([]));
        navigate(ScreenName.FavTopTeamPage, {
            previous_screen: ScreenName.FavSummaryPage,
        });
    };

    const changeFavTopTeam = (index: string) => {
        dispatch(resetTopTeams([]));
        navigate(ScreenName.FavTopTeamPage, {
            previous_screen: ScreenName.FavSummaryPage,
        });
    };

    const backFavTeam = () => {
        navigate(ScreenName.FavTeamPage, {
            previous_screen: ScreenName.FavSummaryPage,
        });
    };
    const backFavPlayer = () => {
        navigate(ScreenName.FavPlayerPage, {
            previous_screen: ScreenName.FavSummaryPage,
        });
    };
    const backFavTopTeam = () => {
        navigate(ScreenName.FavTopTeamPage, {
            previous_screen: ScreenName.FavSummaryPage,
        });
    };

    const [screenName, setScreenName] = useState<any>(null);

    const toggleOnCheck = () => {
        setonCheck(!onCheck);
    };

    const [setProfile, setSetProfile] = useState(false);

    const navigationHomePage = () => {
        setSetProfile(false);
        if (isEmpty(profile.profile) || isNil(profile.profile)) {
            setScreenName(ScreenName.SideBar);

            dispatch(
                createProfileUser(
                    serializeParams({
                        action: ACTION,
                        token: TOKEN,
                        call: AuthData.CREATE_PROFILE,
                        item: {
                            guest_guid: guestId[0],
                        },
                    })
                )
            );
        } else {
            navigate(ScreenName.SideBar);
        }
    };

    const navigationSaveHomePage = () => {
        setSetProfile(true);
        if (isEmpty(profile.profile) || isNil(profile.profile)) {
            setScreenName(ScreenName.SideBar);

            dispatch(
                createProfileUser(
                    serializeParams({
                        action: ACTION,
                        token: TOKEN,
                        call: AuthData.CREATE_PROFILE,
                        item: {
                            guest_guid: guestId[0],
                        },
                    })
                )
            );
        } else {
            navigate(ScreenName.SideBar);
        }
    };

    const navigationMethodRegister = () => {
        setSetProfile(false);
        if (isEmpty(profile.profile) || isNil(profile.profile)) {
            setScreenName(ScreenName.RegisterPage);

            dispatch(
                createProfileUser(
                    serializeParams({
                        action: ACTION,
                        token: TOKEN,
                        call: AuthData.CREATE_PROFILE,
                        item: {
                            guest_guid: guestId[0],
                        },
                    })
                )
            );
        } else {
            navigate(ScreenName.RegisterPage);
        }
    };
    const isFocused = useIsFocused();
    useEffect(() => {
        if (!isFocused) return;
        if (!isEmpty(login.login)) {
            navigate(screenName);
            if (screenName === ScreenName.SideBar) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: ScreenName.SideBar as never }],
                });
            }
        } else {
            if (profile.success === true && setProfile === false) {
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

                navigate(screenName);
                if (screenName === ScreenName.SideBar) {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: ScreenName.SideBar as never }],
                    });
                }
            } else if (profile.success === true && setProfile === true) {
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
            }
        }
    }, [profile.success]);

    useEffect(() => {
        if (login.success === true && setProfile === true) {
            let fav_team: any = [];
            selectedFavTeams.map(item => {
                fav_team.push(item._id);
            });
            let player_team: any = [];
            selectedFavPlayers.map(item => {
                player_team.push(item._id);
            });
            let fav_top_team: any = [];
            selectedFavTopTeams.map(item => {
                fav_top_team.push(item._id);
            });
            dispatch(
                setProfileUser(
                    serializeParams({
                        action: ACTION,
                        token: login.login.token,
                        call: AuthData.SET_PROFILE,
                        item_id: profile.profile.item_id,
                        item: {
                            FAVORITE_ISRAEL_TEAMS: fav_team,
                            FAVORITE_PLAYERS: player_team,
                            FAVORITE_NATIONAL_TEAMS: fav_top_team,
                        },
                    })
                )
            );
            navigate(screenName);
            if (screenName === ScreenName.SideBar) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: ScreenName.SideBar as never }],
                });
            }
        }
    }, [login.success === true]);
    return {
        t,
        onGoBack,
        toggleOnCheck,
        onCheck,
        addFavTeam,
        changeFavTeam,
        addFavPlayer,
        changeFavPlayer,
        addFavTopTeam,
        changeFavTopTeam,
        backFavTeam,
        backFavPlayer,
        backFavTopTeam,
        navigationHomePage,
        teams,
        players,
        topTeams,
        navigationMethodRegister,
        profile,
        navigationSaveHomePage,
        login,
        setProfile,
        profileUser,
    };
};
