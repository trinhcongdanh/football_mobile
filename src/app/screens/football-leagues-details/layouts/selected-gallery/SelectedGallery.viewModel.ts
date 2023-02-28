import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { addVideo, setShowVideo } from 'src/store/video/Video.slice';
import { ISelectedGalleryProps } from './SelectedGallery.type';

export const useViewModel = ({ galleries }: ISelectedGalleryProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const data = galleries || [];
    const { width } = Dimensions.get('window');
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);
    // const data = [
    //     {
    //         image_url: AppImages.img_gallery,
    //         length: '11/8/22',
    //         caption_he: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
    //         video: require('../../../../assets/video/neymarSkill.mp4'),
    //     },
    //     {
    //         image_url: AppImages.img_gallery,
    //         length: '11/8/22',
    //         caption_he: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
    //         video: require('../../../../assets/video/neymarSkill.mp4'),
    //     },
    //     {
    //         image_url: AppImages.img_gallery,
    //         length: '11/8/22',
    //         caption_he: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
    //         video: require('../../../../assets/video/neymarSkill.mp4'),
    //     },
    //     {
    //         image_url: AppImages.img_gallery,
    //         length: '11/8/22',
    //         caption_he: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
    //         video: require('../../../../assets/video/neymarSkill.mp4'),
    //     },
    //     {
    //         image_url: AppImages.img_gallery,
    //         length: '11/8/22',
    //         caption_he: 'תוצאות הגרלת ליגת העל לעונת 2023-2024',
    //         video: require('../../../../assets/video/neymarSkill.mp4'),
    //     },
    // ];
    const dots = Array(data.length).fill('');

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
