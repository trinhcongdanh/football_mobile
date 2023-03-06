/* eslint-disable no-underscore-dangle */
import { TopTeamModel, TopTeamModelResponse } from '@football/core/models/TopTeamModelResponse';
/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IHomeScreenProps } from '@football/app/screens/football-home/HomeScreen.type';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useMount } from '@football/app/utils/hooks/useMount';
import { HomePageModel, HomeLayoutModel } from '@football/core/models/HomePageModelResponse';
import { TeamModel, TeamModelResponse } from '@football/core/models/TeamModelResponse';
import HomeLayoutService from '@football/core/services/HomeLayout.service';
import HomePageService from '@football/core/services/HomePage.service';
import PlayerService from '@football/core/services/Player.service';
import { useCallback, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LeagueModel } from '@football/core/models/LeagueModelResponse';
import leaguesService from '@football/core/services/League.service';
import { GeneralVodModel } from '@football/core/models/GeneralVodResponse';
import GeneralVodService from '@football/core/services/GeneralVod.service';
import { useDispatch, useSelector } from 'react-redux';
import { addVideo, setShowVideo } from 'src/store/video/Video.slice';
import { RootState } from 'src/store/store';
import { PlayerModel, PlayersModelResponse } from '@football/core/models/PlayerModelResponse';
import TeamService from '@football/core/services/Team.service';
import TopTeamService from '@football/core/services/TopTeam.service';

const useViewState = () => {
    const profileUser = useSelector((state: RootState) => state.getProfile);

    useEffect(() => {
        if (profileUser.success === true) {
            const fetchFavTeam = async () => {
                const fetchTeam = await Promise.all(
                    profileUser.getProfile.item.favorite_israel_teams.map(async (item: string) => {
                        const [err, res] = await TeamService.findByOId<TeamModelResponse>(item);
                        if (err) return;
                        return res.data.documents[0];
                    })
                );
                // console.log(fetchTeam.filter(Boolean));

                setTeams(fetchTeam.filter(Boolean));
            };
            fetchFavTeam();
        }
    }, [profileUser.success]);

    useEffect(() => {
        if (profileUser.success === true) {
            const fetchFavPlayer = async () => {
                const fetchPlayer = await Promise.all(
                    profileUser.getProfile.item.favorite_players.map(async (item: string) => {
                        const [err, res] = await PlayerService.findByOId<PlayersModelResponse>(
                            item
                        );
                        if (err) return;
                        return res.data.documents[0];
                    })
                );
                // console.log(fetchTeam.filter(Boolean));

                setPlayers(fetchPlayer.filter(Boolean));
            };
            fetchFavPlayer();
        }
    }, [profileUser.success]);

    useEffect(() => {
        if (profileUser.success === true) {
            const fetchFavTopTeam = async () => {
                const fetchTopTeam = await Promise.all(
                    profileUser.getProfile.item.favorite_national_teams.map(
                        async (item: string) => {
                            const [err, res] = await TopTeamService.findByOId<TopTeamModelResponse>(
                                item
                            );
                            if (err) return;
                            return res.data.documents[0];
                        }
                    )
                );

                setTopTeams(fetchTopTeam.filter(Boolean));
            };
            fetchFavTopTeam();
        }
    }, [profileUser.success]);

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
    };
};

const useViewCallback = (route: any, viewState: any) => {
    const {
        setPlayers,
        setHomePage,
        setHomeLayout,
        setLeagues,
        setGeneralVod,
        players,
        teams,
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

    const getPlayersData = useCallback(async () => {
        const playerIds = players.map((player: PlayerModel) => {
            return { _id: { $oid: player._id } };
        });
        const [error, res] = await PlayerService.findByFilter({
            $or: playerIds,
        });
        if (error) {
            return;
        }

        setPlayers(res.data.documents);
    }, []);

    // const getTeamsData = useCallback(async () => {
    //     const [error, res] = await TeamService.findAll();
    //     if (error) {
    //         return;
    //     }

    //     setTeams(res.data.documents?.slice(0, 2));
    // }, []);

    // const getTopTeamsData = useCallback(async () => {
    //     const [error, res] = await TopTeamService.findAll();
    //     if (error) {
    //         return;
    //     }

    //     setTopTeams(res.data.documents?.slice(0, 2));
    // }, []);

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

    return {
        getHomeLayoutData,
        getHomePageData,
        getPlayersData,
        // getTeamsData,
        // getTopTeamsData,
        getDefaultLeagueData,
        getGeneralVodData,
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
    } = useViewCallback(route, state);

    const { onClickPlayer, onClickTeam, onClickTopTeam } = eventHandler(navigate);

    useMount(() => {
        getHomeLayoutData();
        getHomePageData();
        getGeneralVodData();
        getPlayersData();
    });

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
