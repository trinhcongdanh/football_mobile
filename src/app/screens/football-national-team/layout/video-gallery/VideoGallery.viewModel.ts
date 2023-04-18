import { IVideoGalleryProps } from '@football/app/screens/football-national-team/layout/video-gallery/VideoGallery.type';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { MainVideo, VideoGallery } from '@football/core/models/TopTeamModelResponse';
import { useDispatch } from 'react-redux';
import { addVideo, setShowVideo } from 'src/store/video/Video.slice';

/**
 * view settings variables
 * @returns
 */
const useViewState = () => {
    const { getTranslationText } = useTranslationText();

    return {
        getTranslationText,
    };
};

/**
 * States use event handler
 * @param state
 * @returns
 */
const useEventHandler = (state: any) => {
    const dispatch = useDispatch();
    /**
     * Handle play video event
     * @param item
     */
    const handlePlayVideo = (item: VideoGallery) => {
        dispatch(setShowVideo(true));
        dispatch(addVideo(item));
    };

    return {
        handlePlayVideo,
    };
};

/**
 * Main model
 * @param param0
 * @returns
 */
export const useViewModel = ({ topTeam }: IVideoGalleryProps) => {
    const state = useViewState();
    const eventHandler = useEventHandler(state);
    return {
        ...state,
        ...eventHandler,
    };
};
