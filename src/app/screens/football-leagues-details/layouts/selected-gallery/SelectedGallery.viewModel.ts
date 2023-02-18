import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Dimensions } from 'react-native';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ISelectedGalleryProps } from './SelectedGallery.type';
import { AppImages } from '@football/app/assets/images';

export const useViewModel = ({ galleries }: ISelectedGalleryProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    // const data = galleries || [];
    const { width } = Dimensions.get('window');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);
    const data = [
        {
            image_url: AppImages.img_gallery,
            length: '11/8/22',
            caption_he: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
            video: require('../../../../assets/video/neymarSkill.mp4'),
        },
        {
            image_url: AppImages.img_gallery,
            length: '11/8/22',
            caption_he: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
            video: require('../../../../assets/video/neymarSkill.mp4'),
        },
        {
            image_url: AppImages.img_gallery,
            length: '11/8/22',
            caption_he: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
            video: require('../../../../assets/video/neymarSkill.mp4'),
        },
        {
            image_url: AppImages.img_gallery,
            length: '11/8/22',
            caption_he: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
            video: require('../../../../assets/video/neymarSkill.mp4'),
        },
        {
            image_url: AppImages.img_gallery,
            length: '11/8/22',
            caption_he: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
            video: require('../../../../assets/video/neymarSkill.mp4'),
        },
    ];
    const dots = Array(data.length).fill('');

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

    return {
        t,
        data,
        width,
        activeIndexNumber,
        setActiveIndexNumber,
        dots,
        handlePlayVideo,
        setDisplay,
        sourceVideo,
        display,
        autoPlay,
        setAutoPlay,
        handleEndVideo,
    };
};
