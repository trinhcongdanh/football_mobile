import { IVideoProps } from '@football/app/components/video/Video.type';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { createRef, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BackHandler, Platform } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import { useDispatch, useSelector } from 'react-redux';
import { resetVideo, setHiddenVideo } from 'src/store/video/Video.slice';

/**
 * view settings variables
 * @returns
 */
const useViewState = () => {
    const showVideo = useSelector((state: any) => state.video.showVideo);
    const sourceVideo = useSelector((state: any) => state.video.sourceVideo);
    const videoRef = useRef<any>();
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [pause, setPause] = useState(false);
    const [showControls, setShowControls] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);
    const dispatch = useDispatch();
    const { getTranslationText } = useTranslationText();

    /**
     *  Format time
     * @param time
     */
    const formatTime = (time: any) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return {
        showVideo,
        sourceVideo,
        videoRef,
        currentTime,
        setCurrentTime,
        duration,
        setDuration,
        pause,
        setPause,
        showControls,
        setShowControls,
        fullscreen,
        setFullscreen,
        dispatch,
        getTranslationText,
        formatTime,
    };
};

/**
 * States use event handler
 * @param state
 * @returns
 */

const useEventHandler = (state: any) => {
    const {
        videoRef,
        currentTime,
        setCurrentTime,
        setDuration,
        pause,
        setPause,
        setShowControls,
        setFullscreen,
        dispatch,
        duration,
    } = state;

    /**
     *  Ready to play
     * @param e
     */
    const onReady = (e: any) => {
        videoRef.current = e.target;
        e.target?.getDuration().then((durationTime: any) => {
            setDuration(durationTime);
        });
    };

    // Pause/Resume video
    const handlePause = () => {
        setPause(!pause);
    };

    // Next  minute Video
    const skipForward = () => {
        videoRef.current.seekTo(currentTime + 15);
        setCurrentTime(currentTime + 15);
    };

    // Back minute Video
    const skipBackward = () => {
        videoRef.current.seekTo(currentTime - 15);
        setCurrentTime(currentTime - 15);
    };

    /**
     *  This event fires whenever the player's state changes
     * @param state
     */
    const onStateChange = useCallback(async (state: any) => {
        console.log(state);
        if (state === 'ended') {
            setPause(false);
            videoRef.current?.seekTo(0);
        }

        if (state === 'playing') {
            videoRef.current?.getDuration().then((duration: any) => {
                console.log('duration', duration);
                setDuration(duration);
            });
        }
    }, []);

    /**
     *  Change value progress time
     * @param value
     */
    const onSliderValueChange = (value: any) => {
        videoRef.current.seekTo(value);
        setCurrentTime(value);
    };

    // Close video
    const hiddenVideo = () => {
        videoRef?.current?.seekTo(0);
        setPause(false);
        dispatch(setHiddenVideo(false));
        dispatch(resetVideo(null));
        Orientation.lockToPortrait();
    };

    // show full screen
    const showFullscreen = () => {
        // if (Platform.OS === 'ios') {
        //     setShowControls(false);
        //     if (videoRef.current?.setFullscreen(true)) {
        //         // videoRef?.current?.presentFullscreenPlayer();
        //         // videoRef.current?.setFullscreen(true);
        //         const iframe = videoRef.current?.webViewRef;
        //         iframe?.injectJavaScript('document.querySelector("video").webkitEnterFullscreen()');
        //     }
        // } else {
        //     setFullscreen(true);
        //     setShowControls(true);
        // }
        // Orientation.lockToLandscapeLeft();
    };

    const onFullScreenChange = (status: boolean) => {
        if (status) {
            Orientation.lockToLandscapeLeft();
        } else {
            Orientation.lockToPortrait();
        }
    };

    /**
     *  Change rotation orientation
     * @param orientation
     */
    const handleOrientation = (orientation: string) => {
        if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
            setFullscreen(true);
            setShowControls(true);
        } else {
        }
    };

    // Action hidden video controls
    const backAction = () => {
        hiddenVideo();
        return true;
    };

    return {
        handlePause,
        skipForward,
        skipBackward,
        onStateChange,
        onSliderValueChange,
        showFullscreen,
        handleOrientation,
        backAction,
        hiddenVideo,
        onReady,
        onFullScreenChange,
    };
};

/**
 * Handle effect to listening variables change here.
 * @param state
 * @param eventHandler
 */
const useEffectHandler = (state: any, eventHandler: any) => {
    const {
        showVideo,
        videoRef,
        currentTime,
        setCurrentTime,
        pause,
        showControls,
        fullscreen,
    } = state;

    const { handleOrientation, backAction } = eventHandler;

    // Progress bar
    useEffect(() => {
        let interval: any;
        if (pause) {
            interval = setInterval(async () => {
                setCurrentTime(await videoRef.current.getCurrentTime());
            }, 500);
        } else if (!pause && currentTime !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [pause, currentTime]);

    // handleOrientation
    useLayoutEffect(() => {
        const iframe = videoRef.current?.webViewRef;
        const listener = iframe?.addEventListener('load', () => {
            iframe.injectJavaScript(`
            const video = document.querySelector("video");
            if (video) {
              video.setAttribute("playsinline", "true");
              video.setAttribute("webkit-playsinline", "true");
              video.setAttribute("x5-video-player-type", "h5");
              video.setAttribute("x5-video-player-fullscreen", "true");
            }
          `);
        });
        return () => iframe?.removeEventListener('load', listener);
    }, []);

    useEffect(() => {
        if (showControls) {
            Orientation.lockToLandscapeLeft();
            const iframe = videoRef.current?.webViewRef;
            iframe?.injectJavaScript('document.querySelector("video").webkitEnterFullscreen()');
        } else if (Platform.OS === 'android') {
            Orientation.lockToPortrait();
        }
    }, [fullscreen, showControls]);

    useEffect(() => {
        Orientation.addOrientationListener(handleOrientation);

        return () => {
            Orientation.removeOrientationListener(handleOrientation);
        };
    }, []);

    // Click back phone button
    useEffect(() => {
        if (showVideo) {
            BackHandler.addEventListener('hardwareBackPress', backAction);
            return () => BackHandler.removeEventListener('hardwareBackPress', backAction);
        }
        console.log(showVideo);
    }, [showVideo]);
};

/**
 * Main model
 * @param param0
 * @returns
 */
export const useViewModel = ({ }: IVideoProps) => {
    const state = useViewState();
    const eventHandler = useEventHandler(state);
    useEffectHandler(state, eventHandler);

    return {
        ...eventHandler,
        ...state,
    };
};
