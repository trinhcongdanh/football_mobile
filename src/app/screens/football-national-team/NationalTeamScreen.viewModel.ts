/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Dimensions } from 'react-native';
import { AppImages } from '@football/app/assets/images';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { TopTeamModel, TopTeamModelResponse } from '@football/core/models/TopTeamModelResponse';
import { INationalTeamScreenProps } from './NationalTeamScreen.type';

export const useViewModel = ({ navigation, route }: INationalTeamScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const [topTeam, setTopTeam] = useState<TopTeamModel>();
    const getTopTeamData = async () => {
        try {
            const { data }: TopTeamModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
                dataSource: DATA_SOURCE,
                database: DB,
                collection: 'top_team',
                filter: {
                    _id: { $oid: route?.params?.topTeamId },
                },
            });

            if (data.documents?.length) {
                setTopTeam(data.documents[0]);
            }
        } catch (error: any) {
            Alert.alert(error);
        }
    };

    useEffect(() => {
        getTopTeamData();
    }, []);

    const [display, setDisplay] = useState(false);
    const [sourceVideo, setSourceVideo] = useState();
    const [autoPlay, setAutoPlay] = useState(true);

    const handlePlayVideo = (video: any) => {
        setDisplay(true);
        setSourceVideo(video);
        setAutoPlay(false);
    };

    const handleEndVideo = () => {
        setAutoPlay(true);
        setDisplay(false);
    };

    const { width } = Dimensions.get('window');

    const handleDetailMatch = (gameId: any) => {
        navigate(ScreenName.MatchPage, { gameId });
    };

    const handleStadium = (stadiumId: string) => {
        navigate(ScreenName.PitchPage, { stadiumId });
    };

    const handleNavigation = () => {
        navigate(ScreenName.PreviousCampaignsPage);
    };

    const onNavigateConquerors = () => {
        navigate(ScreenName.ConquerorsPage);
    };

    const onNavigatePlayerData = () => {
        navigate(ScreenName.DataPlayerPage);
    };

    const options = [
        t('national_team.list_game.home_away'),
        t('national_team.list_game.house'),
        t('national_team.list_game.outside'),
    ];

    const [select, setSelect] = useState(0);
    const selectOption = (index: any) => {
        setSelect(index);
    };

    const teamSquads = [
        { id: 1, name: t('team_squad.title'), screen: ScreenName.TeamSquadPage },
        { id: 2, name: t('team_squad.option.officials'), screen: ScreenName.TeamStaffPage },
    ];

    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);

    const handleDetails = () => {
        navigate(ScreenName.ListGamePage);
    };

    return {
        t,
        onGoBack,
        handlePlayVideo,
        setDisplay,
        setAutoPlay,
        handleDetailMatch,
        handleNavigation,
        selectOption,
        display,
        width,
        sourceVideo,
        autoPlay,
        options,
        select,
        teamSquads,
        activeIndexNumber,
        setActiveIndexNumber,
        handleDetails,
        handleStadium,
        onNavigateConquerors,
        onNavigatePlayerData,
        navigate,
        topTeam,
    };
};
