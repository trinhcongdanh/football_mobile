import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { styles } from '@football/app/components/video/Video.style';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { BlurView } from '@react-native-community/blur';
import Slider from '@react-native-community/slider';
import React from 'react';
import { I18nManager, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useViewModel } from './Video.viewModel';

export const Video = () => {
    const {
        showVideo,
        sourceVideo,
        videoRef,
        currentTime,
        duration,
        pause,
        getTranslationText,
        handlePause,
        skipForward,
        skipBackward,
        onStateChange,
        onSliderValueChange,
        showFullscreen,
        hiddenVideo,
        formatTime,
        onFullScreenChange,
        onReady,
    } = useViewModel({});
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
                        {showVideo && (
                            <View>
                                <YoutubePlayer
                                    ref={videoRef}
                                    height={getSize.m(210)}
                                    play={pause}
                                    videoId={sourceVideo.video_url.split('=')[1]}
                                    initialPlayerParams={{ controls: true }}
                                    onChangeState={onStateChange}
                                    onReady={() => onReady}
                                    onFullScreenChange={onFullScreenChange}
                                />
                            </View>
                        )}
                        {/* <View style={styles.controls}>
                            <View
                                style={[
                                    styles.progress_bar,
                                    {
                                        marginHorizontal: getSize.m(27),
                                    },
                                ]}
                            >
                                <View style={styles.container_minutes}>
                                    <Text style={styles.minutes}>{formatTime(duration)}</Text>
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
                                        onValueChange={onSliderValueChange}
                                        onSlidingStart={handlePause}
                                        onSlidingComplete={handlePause}
                                        minimumTrackTintColor={appColors.blue_light}
                                        maximumTrackTintColor={appColors.text_option_unselect}
                                        thumbTintColor={appColors.white}
                                        inverted={I18nManager.isRTL}
                                    />
                                </View>
                                <View style={styles.container_minutes}>
                                    <Text style={styles.minutes}>{formatTime(currentTime)}</Text>
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
                                <View style={styles.progress_bar}>
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
                                        {!pause ? (
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
                        </View> */}
                        <View
                            style={{
                                paddingVertical: getSize.m(26),
                                paddingHorizontal: getSize.m(26),
                            }}
                        >
                            <Text style={styles.title}>
                                {sourceVideo &&
                                    getTranslationText({
                                        textHe: sourceVideo.caption_he,
                                        textEn: sourceVideo.caption_en,
                                    })}
                            </Text>
                            {sourceVideo && sourceVideo.text_he && (
                                <Text style={styles.desc}>
                                    {getTranslationText({
                                        textHe: sourceVideo.text_he,
                                        textEn: sourceVideo.text_en,
                                    })}
                                </Text>
                            )}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};
