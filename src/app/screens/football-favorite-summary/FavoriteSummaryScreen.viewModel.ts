import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { clearFavoriteData } from '@football/app/utils/functions/clearFavoriteData';
import { ACTION, TOKEN } from '@football/core/api/auth/config';
import { PlayerModel } from '@football/core/models/PlayerModelResponse';
import { TeamModel } from '@football/core/models/TeamModelResponse';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import { useIsFocused } from '@react-navigation/native';
import { isEmpty, isNil } from 'lodash';
import qs from 'qs';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BackHandler } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { resetFavPlayer } from 'src/store/FavPlayer.slice';
import { resetFavTeam } from 'src/store/FavTeam.slice';
import { resetTopTeams } from 'src/store/FavTopTeam.slice';
import { RootState } from 'src/store/store';
import { createProfileUser, saveChooseFavorite } from 'src/store/user/CreateProfile.slice';
import { addGuestId } from 'src/store/user/GuestId.slice';
import { loginUser } from 'src/store/user/Login.slice';
import { setProfileUser } from 'src/store/user/setProfile.slice';
import { IFavoriteSummaryScreenProps } from './FavoriteSummaryScreen.type';
import { serializeParams } from '@football/app/utils/functions/quick-functions';
import {
    MAX_FAVORITES_PLAYER,
    MAX_FAVORITES_TEAM,
    MAX_FAVORITES_TOPTEAM,
} from '@football/core/api/configs/config';

/**
 * view settings variables
 * @returns
 */
const useViewState = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();
    const { navigate, goBack } = useAppNavigator();
    const [onCheck, setonCheck] = useState(false);

    const [selectedTeams, setSelectedTeams] = useState<TeamModel[]>(
        Array(MAX_FAVORITES_TEAM).fill(null)
    );

    const [selectedPlayers, setSelectedPlayers] = useState<PlayerModel[]>(
        Array(MAX_FAVORITES_PLAYER).fill(null)
    );

    const [selectedTopTeams, setSelectedTopTeams] = useState<TopTeamModel[]>(
        Array(MAX_FAVORITES_TOPTEAM).fill(null)
    );

    const selectedFavTeams = useSelector((state: RootState) => state.favTeams.selectedTeams);
    const selectedFavPlayers = useSelector((state: RootState) => state.favPlayers.selectedPlayers);
    const selectedFavTopTeams = useSelector(
        (state: RootState) => state.favTopTeams.selectedTopTeams
    );
    const login = useSelector((state: RootState) => state.login);
    const profile = useSelector((state: RootState) => state.createProfile);
    const guestId = useSelector((state: any) => state.guestId.guestId);
    const profileUser = useSelector((state: RootState) => state.setProfile);

    const uuid = require('uuid');
    const id = uuid.v4();
    const [screenName, setScreenName] = useState<any>(null);
    const [setProfile, setSetProfile] = useState(false);
    const isFocused = useIsFocused();

    return {
        t,
        dispatch,
        navigate,
        goBack,
        onCheck,
        setonCheck,
        selectedFavTeams,
        selectedFavPlayers,
        selectedFavTopTeams,
        login,
        profile,
        guestId,
        profileUser,
        id,
        screenName,
        setScreenName,
        setProfile,
        setSetProfile,
        isFocused,
        selectedTeams,
        setSelectedTeams,
        selectedPlayers,
        setSelectedPlayers,
        selectedTopTeams,
        setSelectedTopTeams,
    };
};

/**
 * States use event handler
 * @param state
 * @returns
 */

const useEventHandler = (state: any, route: any) => {
    const {
        t,
        dispatch,
        navigate,
        goBack,
        onCheck,
        setonCheck,
        profile,
        guestId,
        setScreenName,
        setSetProfile,
    } = state;
    let editFav = route?.params?.editFav;

    const onGoBack = () => {
        goBack();
        return true;
    };

    const backFavTeam = () => {
        dispatch(resetFavTeam([]));
        navigate(ScreenName.FavTeamPage, {
            previous_screen: ScreenName.FavSummaryPage,
        });
    };

    const backFavPlayer = () => {
        dispatch(resetFavPlayer([]));
        navigate(ScreenName.FavPlayerPage, {
            previous_screen: ScreenName.FavSummaryPage,
        });
    };
    const backFavTopTeam = () => {
        dispatch(resetTopTeams([]));
        navigate(ScreenName.FavTopTeamPage, {
            previous_screen: ScreenName.FavSummaryPage,
        });
    };

    const toggleOnCheck = () => {
        setonCheck(!onCheck);
    };

    const navigationHomePage = () => {
        setSetProfile(false);
        dispatch(saveChooseFavorite(false));
        clearFavoriteData(dispatch);

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

    const askBeforeGo = () => {
        global.props.showAlert({
            title: t('fav_summary.popUp.title'),
            subTitle: t('fav_summary.popUp.text'),
            option1: t('fav_summary.popUp.option1'),
            option2: t('fav_summary.popUp.option2'),
            onOption1: () => {
                global.props.closeAlert();
            },
            onOption2: () => {
                global.props.closeAlert();
                navigationHomePage();
            },
        });
    };

    const navigationSaveHomePage = () => {
        setSetProfile(true);
        dispatch(saveChooseFavorite(true));
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
        setSetProfile(true);
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

    return {
        onGoBack,
        backFavTeam,
        backFavPlayer,
        backFavTopTeam,
        toggleOnCheck,
        askBeforeGo,
        navigationHomePage,
        navigationSaveHomePage,
        navigationMethodRegister,
    };
};

/**
 * Handle effect to listening variables change here.
 * @param state
 * @param eventHandler
 */

const useEffectHandler = (state: any, eventHandler: any, navigation: any) => {
    const {
        dispatch,
        navigate,
        selectedFavTeams,
        selectedFavPlayers,
        selectedFavTopTeams,
        login,
        profile,
        guestId,
        id,
        screenName,
        setProfile,
        isFocused,
        setSelectedTeams,
        setSelectedPlayers,
        setSelectedTopTeams,
    } = state;

    const { onGoBack } = eventHandler;

    useEffect(() => {
        const newSelectedTeams = Array(MAX_FAVORITES_TEAM).fill(null);
        selectedFavTeams.forEach((favTeam: TeamModel, index: number) => {
            newSelectedTeams[index] = favTeam;
        });
        setSelectedTeams(newSelectedTeams);
    }, []);

    useEffect(() => {
        const newSelectedPlayers = Array(MAX_FAVORITES_PLAYER).fill(null);
        selectedFavPlayers.forEach((favPlayer: PlayerModel, index: number) => {
            newSelectedPlayers[index] = favPlayer;
        });
        setSelectedPlayers(newSelectedPlayers);
    }, []);

    useEffect(() => {
        const newSelectedTopTeams = Array(MAX_FAVORITES_TOPTEAM).fill(null);
        selectedFavTopTeams.forEach((favTopTeam: TopTeamModel, index: number) => {
            newSelectedTopTeams[index] = favTopTeam;
        });
        setSelectedTopTeams(newSelectedTopTeams);
    }, []);

    useEffect(() => {
        if (guestId.length === 0) {
            dispatch(addGuestId(id));
        }
    }, [guestId]);

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onGoBack);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onGoBack);
        };
    }, []);

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
            if (profile.success) {
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
    }, [profile.success, isFocused]);

    useEffect(() => {
        if (!isFocused) return;
        if (login.success) {
            let fav_team: any = [];
            selectedFavTeams.map((item: any) => {
                fav_team.push(item._id);
            });
            let player_team: any = [];
            selectedFavPlayers.map((item: any) => {
                player_team.push(item._id);
            });
            let fav_top_team: any = [];
            selectedFavTopTeams.map((item: any) => {
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
                            favorite_israel_teams: setProfile ? fav_team : '',
                            favorite_players: setProfile ? player_team : '',
                            favorite_national_teams: setProfile ? fav_top_team : '',
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
    }, [login.success, isFocused]);
};

/**
 * Main model
 * @param param0
 * @returns
 */
export const useViewModel = ({ navigation, route }: IFavoriteSummaryScreenProps) => {
    const state = useViewState();
    const eventHandler = useEventHandler(state, route);
    useEffectHandler(state, eventHandler, navigation);

    return {
        ...eventHandler,
        ...state,
    };
};
