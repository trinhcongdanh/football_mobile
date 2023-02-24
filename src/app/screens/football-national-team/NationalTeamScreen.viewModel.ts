/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName, TopTeamPlayerType } from '@football/app/utils/constants/enum';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import TopTeamService from '@football/core/services/TopTeam.service';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions } from 'react-native';
import { INationalTeamScreenProps } from './NationalTeamScreen.type';

const useViewState = () => {
    const [topTeam, setTopTeam] = useState<TopTeamModel>();
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);
    const [display, setDisplay] = useState(false);
    const [sourceVideo, setSourceVideo] = useState();
    const [autoPlay, setAutoPlay] = useState(true);
    const [select, setSelect] = useState(0);

    return {
        topTeam,
        setTopTeam,
        activeIndexNumber,
        setActiveIndexNumber,
        display,
        setDisplay,
        sourceVideo,
        setSourceVideo,
        autoPlay,
        setAutoPlay,
        select,
        setSelect,
    };
};

const useViewCallback = (route: any, viewState: any) => {
    const { setTopTeam } = viewState;

    const getTopTeamData = useCallback(async () => {
        const [error, res] = await TopTeamService.findByOId(route?.params?.topTeamId);
        if (error) {
            return;
        }

        if (res.data.documents?.length) {
            setTopTeam(res.data.documents[0]);
        }
    }, []);

    return {
        getTopTeamData,
    };
};
export const useViewModel = ({ navigation, route }: INationalTeamScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };
    const state = useViewState();

    const { getTopTeamData } = useViewCallback(route, state);
    useEffect(() => {
        getTopTeamData();
    }, []);

    const handlePlayVideo = (video: any) => {
        state.setDisplay(true);
        state.setSourceVideo(video);
        state.setAutoPlay(false);
    };

    const handleEndVideo = () => {
        state.setAutoPlay(true);
        state.setDisplay(false);
    };

    const { width } = Dimensions.get('window');

    const handleDetailMatch = (gameId: any) => {
        navigate(ScreenName.MatchPage, { gameId });
    };

    const handleStadium = (stadiumId: string) => {
        navigate(ScreenName.PitchPage, { stadiumId });
    };

    const handleNavigation = () => {
        navigate(ScreenName.PreviousCampaignsPage, { topTeam: state.topTeam });
    };

    const onNavigateGoalKickers = () => {
        navigate(ScreenName.ConquerorsPage, {
            topTeam: state.topTeam,
            type: TopTeamPlayerType.GoalKickers,
        });
    };

    const onNavigateAppearances = () => {
        navigate(ScreenName.ConquerorsPage, {
            topTeam: state.topTeam,
            type: TopTeamPlayerType.Appearances,
        });
    };

    const onNavigatePlayerData = () => {
        navigate(ScreenName.DataPlayerPage);
    };

    const options = [
        t('national_team.list_game.home_away'),
        t('national_team.list_game.house'),
        t('national_team.list_game.outside'),
    ];

    const selectOption = (index: any) => {
        state.setSelect(index);
    };

    const teamSquads = [
        { id: 1, name: t('team_squad.title'), screen: ScreenName.TeamSquadPage },
        { id: 2, name: t('team_squad.option.officials'), screen: ScreenName.TeamStaffPage },
    ];

    const handleDetails = () => {
        navigate(ScreenName.ListGamePage, { topTeam: state.topTeam });
    };

    return {
        t,
        onGoBack,
        handlePlayVideo,
        handleDetailMatch,
        handleNavigation,
        selectOption,
        width,
        options,
        handleDetails,
        handleStadium,
        onNavigateGoalKickers,
        onNavigateAppearances,
        onNavigatePlayerData,
        navigate,
        ...state,
        teamSquads,
    };
};
