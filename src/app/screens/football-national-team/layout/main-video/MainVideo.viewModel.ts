import { IMainVideoProps } from '@football/app/screens/football-national-team/layout/main-video/MainVideo.type';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { MainVideo } from '@football/core/models/TopTeamModelResponse';
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
    const handlePlayVideo = (item: MainVideo) => {
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
export const useViewModel = ({ topTeam }: IMainVideoProps) => {
    const state = useViewState();
    const eventHandler = useEventHandler(state);
    return {
        ...state,
        ...eventHandler,
    };
};
