import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { styles } from '@football/app/components/video/Video.style';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { BlurView } from '@react-native-community/blur';
import Slider from '@react-native-community/slider';
import React, { createRef, useEffect, useState } from 'react';
import {
    BackHandler,
    I18nManager,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Orientation from 'react-native-orientation-locker';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import Video_Player from 'react-native-video';
import { useDispatch, useSelector } from 'react-redux';
import { resetVideo, setHiddenVideo } from 'src/store/video/Video.slice';

export const Video = () => {
    // Pause Video
    const dispatch = useDispatch();
    const [pause, setPause] = useState(true);
    const handlePause = () => {
        setPause(!pause);
    };

    // console.log(pause);

    // Next or back minute Video
    const videoRef = createRef<any>();
    const [currentTime, setCurrentTime] = useState(0);

    const skipForward = () => {
        videoRef.current.seek(currentTime + 15);
        setCurrentTime(currentTime + 15);
    };

    const skipBackward = () => {
        videoRef.current.seek(currentTime - 15);
        setCurrentTime(currentTime - 15);
    };

    const [duration, setDuration] = useState(0);

    const onSeek = (data: number) => {
        videoRef.current.seek(data);
        setCurrentTime(data);
    };

    const onLoadEnd = (data: any) => {
        setDuration(data.duration);
        setCurrentTime(data.currentTime);
    };

    const onProgress = (data: any) => {
        setCurrentTime(data.currentTime);
    };
    const onEnd = () => {
        setPause(true);
        videoRef.current.seek(0);
    };

    const getMinutesFromSeconds = (time: any) => {
        const minutes = time >= 60 ? Math.floor(time / 60) : 0;
        const seconds = Math.floor(time - minutes * 60);

        return `${minutes >= 10 ? minutes : `0${minutes}`}:${
            seconds >= 10 ? seconds : `0${seconds}`
        }`;
    };

    const position = getMinutesFromSeconds(currentTime);
    const fullDuration = getMinutesFromSeconds(duration);

    const showVideo = useSelector((state: any) => state.video.showVideo);
    const sourceVideo = useSelector((state: any) => state.video.sourceVideo);
    const [showControls, setShowControls] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);
    const hiddenVideo = () => {
        videoRef?.current?.seek(0);
        setPause(true);
        dispatch(setHiddenVideo(false));
        dispatch(resetVideo(null));
    };

    const showFullscreen = () => {
        setFullscreen(true);
        setShowControls(true);
        Orientation.lockToLandscapeLeft();
    };

    const handleOrientation = (orientation: string) => {
        // if(orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT'){
        //     setFullscreen(true);
        //     setShowControls(true);
        // }
        // else {
        // }
    };

    useEffect(() => {
        if (showControls) {
            Orientation.lockToLandscapeLeft();
            videoRef.current.presentFullscreenPlayer();
        } else {
            Orientation.lockToPortrait();
        }
    }, [fullscreen, showControls]);

    useEffect(() => {
        Orientation.addOrientationListener(handleOrientation);

        return () => {
            Orientation.removeOrientationListener(handleOrientation);
        };
    }, []);

    const backAction = () => {
        hiddenVideo();
        return true;
    };
    useEffect(() => {
        if (showVideo) {
            BackHandler.addEventListener('hardwareBackPress', backAction);
            return () => BackHandler.removeEventListener('hardwareBackPress', backAction);
        }
    }, [showVideo]);
    return (
        <View
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: showVideo ? 'flex' : 'none',
                backgroundColor: 'none',
                zIndex: 1,
            }}
        >
            <BlurView style={[styles.background_opacity]} />
            <View style={[styles.container_video]}>
                <View style={styles.line_close} />
                <TouchableOpacity onPress={hiddenVideo} style={styles.ic_close}>
                    <IconIonicons
                        name={appIcons.ic_close}
                        color={appColors.white}
                        size={getSize.m(20)}
                        style={styles.close}
                    />
                </TouchableOpacity>
                <ScrollView>
                    <View
                        style={{
                            minHeight: getSize.m(900),
                        }}
                    >
                        <Video_Player
                            ref={videoRef}
                            source={{ uri: sourceVideo ? sourceVideo.video_url : '' }}
                            style={styles.background_video}
                            paused={pause}
                            resizeMode="cover"
                            onLoad={onLoadEnd}
                            onProgress={onProgress}
                            onEnd={onEnd}
                            controls={Platform.OS === 'ios' ? true : showControls}
                            fullscreen
                            onFullscreenPlayerWillDismiss={() => {
                                // Orientation.unlockAllOrientations();
                                setShowControls(false);
                                setFullscreen(false);
                            }}
                        />
                        <View style={styles.controls}>
                            <View
                                style={[
                                    appStyles.flex_row_space_center,
                                    {
                                        marginHorizontal: getSize.m(27),
                                    },
                                ]}
                            >
                                <View style={styles.container_minutes}>
                                    <Text style={styles.minutes}>{fullDuration}</Text>
                                </View>
                                <View>
                                    <Slider
                                        style={{
                                            width: 220,
                                            height: 40,
                                            borderRadius: getSize.m(20),
                                        }}
                                        value={currentTime}
                                        minimumValue={0}
                                        maximumValue={duration > 0 ? duration : 0}
                                        step={1}
                                        onValueChange={time => onSeek(time)}
                                        onSlidingStart={handlePause}
                                        onSlidingComplete={handlePause}
                                        minimumTrackTintColor={appColors.blue_light}
                                        maximumTrackTintColor={appColors.text_option_unselect}
                                        thumbTintColor={appColors.white}
                                        inverted={I18nManager.isRTL}
                                    />
                                </View>
                                <View style={styles.container_minutes}>
                                    <Text style={styles.minutes}>{position}</Text>
                                </View>
                            </View>
                            <View
                                style={[
                                    appStyles.flex_row_align_center,
                                    {
                                        marginHorizontal: getSize.m(31),
                                        marginTop: getSize.m(20),
                                    },
                                ]}
                            >
                                <View style={{ marginRight: getSize.m(90) }}>
                                    <TouchableOpacity onPress={showFullscreen}>
                                        <FastImage
                                            source={AppImages.img_expand}
                                            resizeMode={FastImage.resizeMode.contain}
                                            style={{ width: getSize.m(14), height: getSize.m(20) }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={appStyles.flex_row_align_center}>
                                    <TouchableOpacity onPress={skipForward}>
                                        <FastImage
                                            source={AppImages.img_backward_right}
                                            resizeMode={FastImage.resizeMode.contain}
                                            style={{
                                                width: getSize.m(10),
                                                height: getSize.m(20),
                                            }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={handlePause}
                                        style={styles.container_pause}
                                    >
                                        {pause ? (
                                            <FastImage
                                                source={AppImages.img_vector}
                                                resizeMode={FastImage.resizeMode.contain}
                                                style={{
                                                    width: getSize.m(14),
                                                    height: getSize.m(15),
                                                }}
                                            />
                                        ) : (
                                            <IconFontAwesome5
                                                name="pause"
                                                color={appColors.white}
                                            />
                                        )}
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={skipBackward}>
                                        <FastImage
                                            source={AppImages.img_backward_left}
                                            resizeMode={FastImage.resizeMode.contain}
                                            style={{
                                                width: getSize.m(10),
                                                height: getSize.m(20),
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View
                            style={{
                                paddingVertical: getSize.m(26),
                                paddingHorizontal: getSize.m(26),
                            }}
                        >
                            <Text style={styles.title}>
                                {sourceVideo && sourceVideo.caption_he}
                            </Text>
                            {sourceVideo && sourceVideo.text_he && (
                                <Text style={styles.desc}>{sourceVideo.text_he}</Text>
                            )}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};
