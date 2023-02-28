import { AppImages } from '@football/app/assets/images';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useProfileUser } from '@football/core/services/auth.service';
import { usePlayers, useTeams, useTopTeams } from '@football/core/services/Video.service';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import { addVideo, setShowVideo } from 'src/store/video/Video.slice';
import { IVideoScreenProps } from './VideoScreen.type';

export const useViewModel = ({ navigation, route }: IVideoScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { data: teamsData } = useTeams();
    const { data: topTeamsData } = useTopTeams();
    const { data: playersData } = usePlayers();

    const [favoriteTeamsVideo, setFavoriteTeamsVideo] = useState<any[]>([]);
    const [favoriteTopTeamsVideo, setFavoriteTopTeamsVideo] = useState<any[]>([]);
    const [favoritePlayersVideo, setFavoritePlayersVideo] = useState<any[]>([]);

    const { t } = useTranslation();
    const [profileUser, setProfileUser] = useState();
    const { profile } = useSelector((state: RootState) => state.createProfile);
    const { login } = useSelector((state: RootState) => state.login);
    const { data: profileData } = useProfileUser({ token: login.token, item_id: profile.item_id });

    useEffect(() => {
        if (!profileData) {
            return;
        }
        const [error, res] = profileData;
        if (error) {
            return;
        }
        console.log(res, profile);

        setProfileUser(res.data.item);
    }, [profileData]);

    const dispatch = useDispatch();

    const [display, setDisplay] = useState(false);
    const [sourceVideo, setSourceVideo] = useState();
    const [autoPlay, setAutoPlay] = useState(true);

    const handlePlayVideo = (item: any) => {
        setDisplay(true);
        setSourceVideo(item);
        setAutoPlay(false);
        dispatch(setShowVideo(true));
        dispatch(addVideo(item));
    };

    const handleEndVideo = () => {
        setAutoPlay(true);
        setDisplay(false);
    };

    const width = Dimensions.get('window').width;

    const [showSideMenu, setShowSideMenu] = useState(false);

    const onShowSideMenu = () => {
        navigation.openDrawer();
    };

    const closeSideMenu = () => {
        setShowSideMenu(false);
    };

    useEffect(() => {
        if (!teamsData) {
            return;
        }

        const [error, res] = teamsData;

        if (!error) {
            // const teams = res.data.documents.filter(e => {
            // });
            setFavoriteTeamsVideo(res.data.documents[0] ? res.data.documents[0].video_gallery : []);
        }
    }, [teamsData]);

    useEffect(() => {
        if (!topTeamsData) {
            return;
        }

        const [error, res] = topTeamsData;

        if (!error) {
            setFavoriteTopTeamsVideo(
                res.data.documents[2] ? res.data.documents[2].video_gallery : []
            );
        }
    }, [topTeamsData]);

    useEffect(() => {
        if (!playersData) {
            return;
        }

        const [error, res] = playersData;

        if (!error) {
            setFavoritePlayersVideo(
                res.data.documents[3] ? res.data.documents[3].video_gallery : []
            );
        }
    }, [playersData]);

    return {
        t,
        onShowSideMenu,
        handlePlayVideo,
        setDisplay,
        sourceVideo,
        display,
        width,
        autoPlay,
        setAutoPlay,
        handleEndVideo,
        showSideMenu,
        closeSideMenu,
        favoriteTeamsVideo,
        favoriteTopTeamsVideo,
        favoritePlayersVideo,
    };
};
