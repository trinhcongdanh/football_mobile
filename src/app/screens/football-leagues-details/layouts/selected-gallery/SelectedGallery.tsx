/* eslint-disable react/no-array-index-key */
import { View, Image, useWindowDimensions, ScrollView, TouchableOpacity, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Animated, {
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
} from 'react-native-reanimated';
import { Gallery } from '@football/core/models/LeagueSeasonModelResponse';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import styles from './SelectedGallery.style';
import { useViewModel } from './SelectedGallery.viewModel';
import { ISelectedGalleryProps } from './SelectedGallery.type';
import { getSize } from '@football/app/utils/responsive/scale';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import VideoPlayer from 'react-native-video-player';
import { AppImages } from '@football/app/assets/images';

const SelectedGallery = ({ pagination, galleries }: ISelectedGalleryProps) => {
    const {
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
    } = useViewModel({ galleries });
    // const { width } = useWindowDimensions();
    // const [newData] = useState([{ key: 'spacer-left' }, ...data, { key: 'spacer-right' }]);

    // const SIZE = width * 0.7;
    // const SPACER = (width - SIZE) / 2;
    // const x = useSharedValue(0);
    // const onScroll = useAnimatedScrollHandler({
    //     onScroll: event => {
    //         x.value = event.contentOffset.x;
    //     },
    // });

    // useEffect(() => {}, [x.value]);

    // return (
    //     <View>
    //         <Animated.ScrollView
    //             horizontal
    //             showsHorizontalScrollIndicator={false}
    //             bounces={false}
    //             scrollEventThrottle={16}
    //             snapToInterval={SIZE}
    //             decelerationRate="fast"
    //             onScroll={onScroll}
    //         >
    //             {newData.map((item: Gallery, index: number) => {
    //                 // eslint-disable-next-line react-hooks/rules-of-hooks
    //                 const style = useAnimatedStyle(() => {
    //                     const scale = interpolate(
    //                         x.value,
    //                         [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
    //                         [0.8, 1, 0.8]
    //                     );
    //                     return {
    //                         transform: [{ scale }],
    //                     };
    //                 });
    //                 if (!item.image_url) {
    //                     return <View style={{ width: SPACER }} key={index} />;
    //                 }
    //                 return (
    //                     <View style={{ width: SIZE }} key={index}>
    //                         <Animated.View style={[styles.imageContainer, style]}>
    //                             <Image source={{ uri: item.image_url }} style={styles.image} />
    //                         </Animated.View>
    //                     </View>
    //                 );
    //             })}
    //         </Animated.ScrollView>
    //     </View>
    // );
    return (
        <View>
            {display && (
                <View style={styles.video_container}>
                    <View style={styles.ic_close}>
                        <IconAntDesign
                            onPress={() => {
                                setDisplay(false);
                                setAutoPlay(true);
                            }}
                            name="close"
                            size={getSize.m(18)}
                            color={appColors.white}
                        />
                    </View>
                    <View style={styles.ic_share}>
                        <IconAntDesign
                            onPress={() => {}}
                            name="sharealt"
                            size={getSize.m(18)}
                            color={appColors.white}
                        />
                    </View>

                    <View>
                        <VideoPlayer
                            loop
                            video={sourceVideo}
                            thumbnail={AppImages.img_thumbnail}
                            endThumbnail={AppImages.img_thumbnail}
                            videoWidth={getSize.m(1600)}
                            videoHeight={getSize.m(900)}
                            resizeMode="contain"
                            showDuration
                            onEnd={() => {
                                setDisplay(false);
                                setAutoPlay(true);
                            }}
                        />
                    </View>
                </View>
            )}
            <Text
                style={[appStyles.text_topic, { marginLeft: getSize.m(6), color: appColors.white }]}
            >
                {t('leagues_details.gallery.title')}
            </Text>
            <View
                style={{
                    marginLeft: getSize.m(-16),
                    marginRight: getSize.m(-20),
                    marginTop: getSize.m(18),
                }}
            >
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    directionalLockEnabled
                    onScroll={e => {
                        const slide = Math.round(
                            e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width
                        );
                        if (slide !== activeIndexNumber) {
                            setActiveIndexNumber(slide); // here we will set our active index num
                        }
                    }}
                >
                    {data.map((item, index) => {
                        return (
                            <View
                                // eslint-disable-next-line react/no-array-index-key
                                key={index}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginHorizontal: getSize.m(12),
                                }}
                            >
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    onPress={() => handlePlayVideo(item.video)}
                                >
                                    <Image source={item.image_url} style={styles.image} />
                                    <View style={styles.date}>
                                        <Text style={styles.text_date}>{item.length}</Text>
                                    </View>
                                    <View style={styles.play_video}>
                                        <IconAntDesign
                                            name={appIcons.ic_caretright}
                                            size={getSize.m(16)}
                                            color={appColors.white}
                                        />
                                    </View>
                                    <View style={styles.content}>
                                        <Text style={styles.text_content}>
                                            {item.caption_he}{' '}
                                            <IconFeather
                                                name={appIcons.ic_arrow_left}
                                                size={getSize.m(12)}
                                                color={appColors.white}
                                                style={styles.ic_arrow_left}
                                            />
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                </ScrollView>
                <View style={styles.dotContainer}>
                    {dots.map((_, index) => {
                        return (
                            // eslint-disable-next-line react/no-array-index-key
                            <View key={index}>
                                <View
                                    style={[
                                        styles.dot,
                                        {
                                            width:
                                                index === activeIndexNumber
                                                    ? getSize.m(18)
                                                    : getSize.m(5),
                                            backgroundColor:
                                                index === activeIndexNumber
                                                    ? appColors.blue_light
                                                    : appColors.soft_grey,
                                        },
                                    ]}
                                />
                            </View>
                        );
                    })}
                </View>
            </View>
        </View>
    );
};

export default SelectedGallery;
