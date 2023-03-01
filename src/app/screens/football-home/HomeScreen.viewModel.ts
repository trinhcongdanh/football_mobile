import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IHomeScreenProps } from '@football/app/screens/football-home/HomeScreen.type';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useMount } from '@football/app/utils/hooks/useMount';
import { HomePageModel, HomeLayoutModel } from '@football/core/models/HomePageModelResponse';
import { PlayerModel } from '@football/core/models/PlayerResponse';
import { TeamModel } from '@football/core/models/TeamModelResponse';
import HomeLayoutService from '@football/core/services/HomeLayout.service';
import HomePageService from '@football/core/services/HomePage.service';
import PlayerService from '@football/core/services/Player.service';
import TeamService from '@football/core/services/Team.service';
import { useCallback, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TopTeamService from '@football/core/services/TopTeam.service';
import { LeagueModel } from '@football/core/models/LeagueModelResponse';
import leaguesService from '@football/core/services/League.service';
import { GeneralVodModel } from '@football/core/models/GeneralVodResponse';
import GeneralVodService from '@football/core/services/GeneralVod.service';
import { useDispatch } from 'react-redux';
import { addVideo, setShowVideo } from 'src/store/video/Video.slice';

const useViewState = () => {
    const [homePage, setHomePage] = useState<HomePageModel>();
    const [homeLayout, setHomeLayout] = useState<HomeLayoutModel>();
    const [players, setPlayers] = useState<PlayerModel[]>();
    const [teams, setTeams] = useState<TeamModel[]>();
    const [topTeams, setTopTeams] = useState<TopTeamModel[]>();
    const [league, setLeague] = useState<LeagueModel>();
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
        league,
        setLeague,
        generalVod,
        setGeneralVod,
        sourceVideo,
        setSourceVideo,
        autoPlay,
        setAutoPlay,
        display,
        setDisplay,
    };
};

const useViewCallback = (route: any, viewState: any) => {
    const {
        setPlayers,
        setHomePage,
        setHomeLayout,
        setTeams,
        setTopTeams,
        setLeague,
        setGeneralVod,
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
        const [error, res] = await PlayerService.findAll();
        if (error) {
            return;
        }

        setPlayers(res.data.documents);
    }, []);

    const getTeamsData = useCallback(async () => {
        const [error, res] = await TeamService.findAll();
        if (error) {
            return;
        }

        setTeams(res.data.documents?.slice(0, 2));
    }, []);

    const getTopTeamsData = useCallback(async () => {
        const [error, res] = await TopTeamService.findAll();
        if (error) {
            return;
        }

        setTopTeams(res.data.documents?.slice(0, 2));
    }, []);

    const getDefaultLeagueData = useCallback(async (id: string) => {
        const [error, res] = await leaguesService.findByOId(id);
        if (error) {
            return;
        }

        if (res?.data?.documents[0]) {
            setLeague(res.data.documents[0]);
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
        getTeamsData,
        getTopTeamsData,
        getDefaultLeagueData,
        getGeneralVodData,
    };
};

const eventHandler = (navigate: any) => {
    const onClickPlayer = (playerId: string) => {
        navigate(ScreenName.DataPlayerPage, { playerId });
    };

    return {
        onClickPlayer,
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
        getPlayersData,
        getTeamsData,
        getTopTeamsData,
        getDefaultLeagueData,
        getGeneralVodData,
    } = useViewCallback(route, state);

    const { onClickPlayer } = eventHandler(navigate);

    useMount(() => {
        getHomeLayoutData();
        getHomePageData();
        getPlayersData();
        getTeamsData();
        getTopTeamsData();
        getGeneralVodData();
    });

    useEffect(() => {
        if (state.homePage) {
            getDefaultLeagueData(state.homePage.default_league_id);
        }
    }, [state.homePage]);

    const onShowSideMenu = () => {
        navigation.openDrawer();
    };

    const dispatch = useDispatch();

    const handlePlayVideo = (item: any) => {
        console.log('item',item);
        
        state.setDisplay(true);
        state.setSourceVideo(item);
        state.setAutoPlay(true);
        dispatch(setShowVideo(true));
        dispatch(addVideo(item));
    };

    return { t, onGoBack, ...state, onShowSideMenu, onClickPlayer, handlePlayVideo };
};
