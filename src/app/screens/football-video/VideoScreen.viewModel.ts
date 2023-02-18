import React, { useState } from 'react';
import { AppImages } from '@football/app/assets/images';
import { Dimensions } from 'react-native';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { IVideoScreenProps } from './VideoScreen.type';

export const useViewModel = ({ navigation, route }: IVideoScreenProps) => {
    const { navigate, goBack } = useAppNavigator();

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

    const width = Dimensions.get('window').width;

    const [showSideMenu, setShowSideMenu] = useState(false);

    const onShowSideMenu = () => {
        navigation.openDrawer();
    };

    const closeSideMenu = () => {
        setShowSideMenu(false);
    };

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
    };
};
