/* eslint-disable no-underscore-dangle */
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IHomeScreenProps } from '@football/app/screens/football-home/HomeScreen.type';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { serializeParams } from '@football/app/utils/functions/quick-functions';
import { useMount } from '@football/app/utils/hooks/useMount';
import { axiosAuth } from '@football/core/api/auth/axiosAuth';
import { ACTION, AUTH_URL } from '@football/core/api/auth/config';
import { GeneralVodModel } from '@football/core/models/GeneralVodResponse';
import { HomeLayoutModel, HomePageModel } from '@football/core/models/HomePageModelResponse';
import { LeagueModel } from '@football/core/models/LeagueModelResponse';
import { PlayerModel } from '@football/core/models/PlayerModelResponse';
import { TeamModel } from '@football/core/models/TeamModelResponse';
import GeneralVodService from '@football/core/services/GeneralVod.service';
import HomeLayoutService from '@football/core/services/HomeLayout.service';
import HomePageService from '@football/core/services/HomePage.service';
import leaguesService from '@football/core/services/League.service';
import PlayerService from '@football/core/services/Player.service';
import TeamService from '@football/core/services/Team.service';
import TopTeamService from '@football/core/services/TopTeam.service';
import { isEmpty } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import { addVideo, setShowVideo } from 'src/store/video/Video.slice';

const useViewState = () => {
    const selectedFavTeams = useSelector((state: RootState) => state.favTeams.selectedTeams);
    const selectedFavPlayers = useSelector((state: RootState) => state.favPlayers.selectedPlayers);
    const selectedFavTopTeams = useSelector(
        (state: RootState) => state.favTopTeams.selectedTopTeams
    );
    const userLogin = useSelector((state: any) => state.otpUser);

    // const profileUser = useSelector((state: RootState) => state.getProfile);
    const [profileUser, setProfileUser] = useState();
    const [homePage, setHomePage] = useState<HomePageModel>();
    const [homeLayout, setHomeLayout] = useState<HomeLayoutModel>();
    const [players, setPlayers] = useState<PlayerModel[]>([]);
    const [teams, setTeams] = useState<TeamModel[]>([]);
    const [topTeams, setTopTeams] = useState<TopTeamModel[]>([]);
    const [leagues, setLeagues] = useState<LeagueModel[]>();
    const [generalVod, setGeneralVod] = useState<GeneralVodModel[]>();
    const [sourceVideo, setSourceVideo] = useState();
    const [autoPlay, setAutoPlay] = useState(true);
    const [display, setDisplay] = useState(false);

    return {
        homePage,
        setHomePage,
        homeLayout,
        setHomeLayout,
        players,
        setPlayers,
        teams,
        setTeams,
        topTeams,
        setTopTeams,
        leagues,
        setLeagues,
        generalVod,
        setGeneralVod,
        sourceVideo,
        setSourceVideo,
        autoPlay,
        setAutoPlay,
        display,
        setDisplay,
        profileUser,
        setProfileUser,
        selectedFavTeams,
        selectedFavPlayers,
        selectedFavTopTeams,
        userLogin,
    };
};

const useViewCallback = (route: any, viewState: any) => {
    const {
        setPlayers,
        setHomePage,
        setHomeLayout,
        setLeagues,
        setGeneralVod,
        teams,
        profileUser,
        setProfileUser,
        setTeams,
        setTopTeams,
        selectedFavPlayers,
        selectedFavTeams,
        selectedFavTopTeams,
    } = viewState;

    const getHomeLayoutData = useCallback(async () => {
        const [error, res] = await HomeLayoutService.findAll();
        if (error) {
            return;
        }

        if (res.data.documents?.length) {
            setHomeLayout(res.data.documents[0]);
        }
    }, []);

    const getHomePageData = useCallback(async () => {
        const [error, res] = await HomePageService.findAll();
        if (error) {
            return;
        }
        if (res.data.documents?.length) {
            setHomePage(res.data.documents[0]);
        }
    }, []);

    const getPlayersData = useCallback(async (user: any) => {
        setPlayers([]);
        if (!user?.favorite_players?.length) {
            return;
        }
        const playerIds = user?.favorite_players?.map((id: string) => {
            return { _id: { $oid: id } };
        });
        console.log(playerIds);

        console.log('user?.favorite_players', user?.favorite_players);
        const [error, res] = await PlayerService.findByFilter({
            $or: playerIds,
        });
        if (error) {
            return;
        }

        setPlayers(res.data.documents);
    }, []);

    const getTeamsData = useCallback(async (user: any) => {
        setTeams([]);

        if (!user?.favorite_israel_teams?.length) {
            return;
        }
        const ids = user.favorite_israel_teams.map((id: string) => {
            return { _id: { $oid: id } };
        });
        const [error, res] = await TeamService.findByFilter({
            $or: ids,
        });

        if (error) {
            return;
        }
        console.log(res.data.documents);

        setTeams(res.data.documents);
    }, []);

    const getTopTeamsData = useCallback(async (user: any) => {
        setTopTeams([]);
        if (!user?.favorite_national_teams?.length) {
            return;
        }
        const ids = user?.favorite_national_teams?.map((id: string) => {
            return { _id: { $oid: id } };
        });
        const [error, res] = await TopTeamService.findByFilter({
            $or: ids,
        });
        if (error) {
            return;
        }

        setTopTeams(res.data.documents);
    }, []);

    const getDefaultLeagueData = useCallback(async (id: string) => {
        const leagueIds = teams
            .map((team: TeamModel) => team.league_id)
            .filter((value: string, index: number, array: any) => array.indexOf(value) === index)
            .map((teamId: string) => {
                return { _id: { $oid: teamId } };
            });

        if (leagueIds?.length) {
            const [error, res] = await leaguesService.findByFilter({
                $or: leagueIds,
            });
            if (error) {
                return;
            }

            if (res?.data?.documents) {
                setLeagues(res.data.documents);
            }
        } else {
            const [error, res] = await leaguesService.findByOId(id);
            if (error) {
                return;
            }

            if (res?.data?.documents) {
                setLeagues(res.data.documents);
            }
        }
    }, []);

    const getGeneralVodData = useCallback(async () => {
        const [error, res] = await GeneralVodService.findAll();
        if (error) {
            return;
        }

        setGeneralVod(res.data.documents);
    }, []);

    const getUser = useCallback(async (userLogin: any) => {
        if (userLogin?.success) {
            const { data }: any = await axiosAuth.post(
                `${AUTH_URL}`,
                serializeParams({
                    action: ACTION,
                    token: userLogin.otp.token,
                    call: AuthData.GET_PROFILE,
                    item: userLogin.otp.user.item_id,
                }),

                {
                    headers: {},
                }
            );

            if (!isEmpty(data)) {
                setProfileUser({
                    getProfile: data,
                });
                const user = data.item;

                getTeamsData(user);
                getPlayersData(user);
                getTopTeamsData(user);
            } else {
                setPlayers(selectedFavPlayers);
                setTeams(selectedFavTeams);
                setTopTeams(selectedFavTopTeams);
            }
        }
    }, []);
    return {
        getHomeLayoutData,
        getHomePageData,
        getPlayersData,
        getTeamsData,
        getTopTeamsData,
        getDefaultLeagueData,
        getGeneralVodData,
        getUser,
    };
};

const eventHandler = (navigate: any) => {
    const onClickPlayer = (playerId: string) => {
        navigate(ScreenName.DataPlayerPage, { playerId });
    };

    const onClickTeam = (teamId: string) => {
        navigate(ScreenName.GroupPagePage, { teamId });
    };

    const onClickTopTeam = (topTeamId: string) => {
        navigate(ScreenName.NationalTeamPage, { topTeamId });
    };

    return {
        onClickPlayer,
        onClickTeam,
        onClickTopTeam,
    };
};

export const useViewModel = ({ navigation, route }: IHomeScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const state = useViewState();
    const {
        getHomeLayoutData,
        getHomePageData,
        getDefaultLeagueData,
        getGeneralVodData,
        getPlayersData,
        getTeamsData,
        getTopTeamsData,
        getUser,
    } = useViewCallback(route, state);

    const { onClickPlayer, onClickTeam, onClickTopTeam } = eventHandler(navigate);

    useMount(() => {
        if (state.userLogin.success && !state.profileUser) {
            console.log('state.userLogin', state.userLogin);
            getUser(state.userLogin);
        }
        getHomeLayoutData();
        getHomePageData();
        getGeneralVodData();
    });

    // useEffect(() => {
    //     console.log('state.profileUser', state.profileUser);

    //     if (isGuessUser(state.profileUser)) {
    //         state.setPlayers(state.selectedFavPlayers);
    //         state.setTeams(state.selectedFavTeams);
    //         state.setTopTeams(state.selectedFavTopTeams);
    //     } else if (state.profileUser) {
    //         getTeamsData();
    //         getPlayersData();
    //         getTopTeamsData();
    //     }
    // }, [state.profileUser]);

    useEffect(() => {
        if (state.homePage) {
            getDefaultLeagueData(state.homePage.default_league_id);
        }
    }, [state.homePage]);

    const onShowSideMenu = () => {
        navigation?.openDrawer();
    };

    const dispatch = useDispatch();

    const handlePlayVideo = (item: any) => {
        state.setDisplay(true);
        state.setSourceVideo(item);
        state.setAutoPlay(true);
        dispatch(setShowVideo(true));
        dispatch(addVideo(item));
    };

    return {
        t,
        onGoBack,
        ...state,
        onShowSideMenu,
        onClickPlayer,
        handlePlayVideo,
        onClickTeam,
        onClickTopTeam,
    };
};
