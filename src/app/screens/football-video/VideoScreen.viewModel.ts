import { AppImages } from '@football/app/assets/images';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { usePlayers, useTeams, useTopTeams } from '@football/core/services/Video.service';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
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

    const data = [
        {
            id: 1,
            image: AppImages.img_thumbnail,
            minute: '04:50',
            content: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
            video: require('../../assets/video/neymarSkill.mp4'),
        },
        {
            id: 2,
            image: AppImages.img_gallery,
            minute: '04:50',
            content: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
            video: require('../../assets/video/neymarSkill.mp4'),
        },
        {
            id: 3,
            image: AppImages.img_thumbnail,
            minute: '04:50',
            content: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
            video: require('../../assets/video/neymarSkill.mp4'),
        },
        {
            id: 4,
            image: AppImages.img_gallery,
            minute: '04:50',
            content: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
            video: require('../../assets/video/neymarSkill.mp4'),
        },
        {
            id: 5,
            image: AppImages.img_thumbnail,
            minute: '04:50',
            content: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
            video: require('../../assets/video/neymarSkill.mp4'),
        },
    ];

    const dispatch = useDispatch();

    const [display, setDisplay] = useState(false);
    const [sourceVideo, setSourceVideo] = useState();
    const [autoPlay, setAutoPlay] = useState(true);

    const handlePlayVideo = (video: any) => {
        setDisplay(true);
        setSourceVideo(video);
        setAutoPlay(false);
        dispatch(setShowVideo(true));
        dispatch(addVideo(video));
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
        data,
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
