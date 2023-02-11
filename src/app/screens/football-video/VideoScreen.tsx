import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { BOTTOM_SVG_HEIGHT } from '@football/app/routes/bottom-tab/components/bottom.tab';
import { TAB_BAR_HEIGHT } from '@football/app/routes/bottom-tab/styles/bottom.tab.styles';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React, { useState } from 'react';
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/AntDesign';
import VideoPlayer from 'react-native-video-player';
import styles from './VideoScreen.styles';
import { IVideoScreenProps } from './VideoScreen.type';
import { useViewModel } from './VideoScreen.viewModel';

export const VideoScreen = ({ navigation, route }: IVideoScreenProps) => {
    const {
        t,
        onNavigateSetting,
        handlePlayVideo,
        setDisplay,
        setAutoPlay,
        display,
        data,
        width,
        sourceVideo,
        autoPlay,
    } = useViewModel({
        navigation,
        route,
    });

    const [indexDot, setIndexDot] = useState(0);

    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    {display && (
                        <View style={styles.video_container}>
                            <View style={styles.ic_close}>
                                <Icon
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
                                <Icon
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
                    <ScrollView>
                        <View style={appStyles.container}>
                            <HeaderUser
                                avt={AppImages.img_avt}
                                point="1,325"
                                icon={AppImages.img_bars_sort}
                                color_pre={appColors.blue_light}
                                color_after={appColors.blue_dark}
                                handlePressFunction={onNavigateSetting}
                            />
                            <View>
                                <Text style={[appStyles.text_title]}>{t('video.title')}</Text>
                            </View>
                            <View style={{ marginTop: getSize.m(30) }}>
                                <Text
                                    style={[
                                        appStyles.text_topic,
                                        { marginLeft: getSize.m(6), color: appColors.white },
                                    ]}
                                >
                                    {t('video.priority.label')}
                                </Text>
                                <View
                                    style={{
                                        marginHorizontal: getSize.m(-16),
                                        marginTop: getSize.m(18),
                                    }}
                                >
                                    <GestureHandlerRootView style={appStyles.flex}>
                                        <Carousel
                                            loop={false}
                                            pagingEnabled={true}
                                            snapEnabled
                                            width={width}
                                            height={getSize.m(280)}
                                            scrollAnimationDuration={1000}
                                            autoPlayInterval={4000}
                                            mode="parallax"
                                            modeConfig={{
                                                parallaxScrollingScale: 1,
                                                parallaxScrollingOffset: getSize.m(140),
                                            }}
                                            autoPlay={autoPlay}
                                            defaultIndex={0}
                                            onSnapToItem={index => {
                                                setIndexDot(index);
                                            }}
                                            data={data}
                                            renderItem={({ item, index }) => (
                                                <View
                                                    key={index}
                                                    style={{
                                                        flexDirection: 'row',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                    <TouchableOpacity
                                                        activeOpacity={0.9}
                                                        onPress={() => handlePlayVideo(item.video)}
                                                    >
                                                        <Image
                                                            source={item.image}
                                                            style={[styles.image]}
                                                        />
                                                        <View style={styles.date}>
                                                            <Text style={styles.text_date}>
                                                                {item.minute}
                                                            </Text>
                                                        </View>
                                                        <View style={styles.play_video}>
                                                            <Icon
                                                                name={appIcons.ic_caretright}
                                                                size={getSize.m(16)}
                                                                color={appColors.white}
                                                            />
                                                        </View>
                                                        <View style={styles.content}>
                                                            <Text style={styles.text_content}>
                                                                {item.content}
                                                            </Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                            )}
                                        />
                                    </GestureHandlerRootView>
                                    <View style={styles.indicatorContainer}>
                                        {data.map((item, index) => {
                                            return (
                                                <View
                                                    key={index.toString()}
                                                    style={[
                                                        styles.normalDots,
                                                        {
                                                            width:
                                                                index === indexDot
                                                                    ? getSize.m(18)
                                                                    : getSize.m(5),
                                                            backgroundColor:
                                                                index === indexDot
                                                                    ? appColors.white
                                                                    : appColors.text_option_unselect,
                                                        },
                                                    ]}
                                                />
                                            );
                                        })}
                                    </View>
                                </View>
                            </View>

                            <View style={{ marginTop: getSize.m(30) }}>
                                <Text
                                    style={[
                                        appStyles.text_topic,
                                        { marginLeft: getSize.m(6), color: appColors.white },
                                    ]}
                                >
                                    {t('video.fav_player.label')}
                                </Text>
                                <View
                                    style={{
                                        marginHorizontal: getSize.m(-16),
                                        marginTop: getSize.m(18),
                                    }}
                                >
                                    <GestureHandlerRootView style={appStyles.flex}>
                                        <Carousel
                                            loop={false}
                                            pagingEnabled={true}
                                            snapEnabled
                                            width={width}
                                            height={getSize.m(280)}
                                            scrollAnimationDuration={1000}
                                            autoPlayInterval={4000}
                                            mode="parallax"
                                            modeConfig={{
                                                parallaxScrollingScale: 1,
                                                parallaxScrollingOffset: getSize.m(140),
                                            }}
                                            autoPlay={autoPlay}
                                            defaultIndex={0}
                                            onSnapToItem={index => {
                                                setIndexDot(index);
                                            }}
                                            data={data}
                                            renderItem={({ item, index }) => (
                                                <View
                                                    key={index}
                                                    style={{
                                                        flexDirection: 'row',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                    <TouchableOpacity
                                                        activeOpacity={0.9}
                                                        onPress={() => handlePlayVideo(item.video)}
                                                    >
                                                        <Image
                                                            source={item.image}
                                                            style={[styles.image]}
                                                        />
                                                        <View style={styles.date}>
                                                            <Text style={styles.text_date}>
                                                                {item.minute}
                                                            </Text>
                                                        </View>
                                                        <View style={styles.play_video}>
                                                            <Icon
                                                                name={appIcons.ic_caretright}
                                                                size={getSize.m(16)}
                                                                color={appColors.white}
                                                            />
                                                        </View>
                                                        <View style={styles.content}>
                                                            <Text style={styles.text_content}>
                                                                {item.content}
                                                            </Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                            )}
                                        />
                                    </GestureHandlerRootView>
                                    <View style={styles.indicatorContainer}>
                                        {data.map((item, index) => {
                                            return (
                                                <View
                                                    key={index.toString()}
                                                    style={[
                                                        styles.normalDots,
                                                        {
                                                            width:
                                                                index === indexDot
                                                                    ? getSize.m(18)
                                                                    : getSize.m(5),
                                                            backgroundColor:
                                                                index === indexDot
                                                                    ? appColors.white
                                                                    : appColors.text_option_unselect,
                                                        },
                                                    ]}
                                                />
                                            );
                                        })}
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginTop: getSize.m(30) }}>
                                <Text
                                    style={[
                                        appStyles.text_topic,
                                        { marginLeft: getSize.m(6), color: appColors.white },
                                    ]}
                                >
                                    {t('video.fav_nation_team.label')}
                                </Text>
                                <View
                                    style={{
                                        marginHorizontal: getSize.m(-16),
                                        marginTop: getSize.m(18),
                                    }}
                                >
                                    <GestureHandlerRootView style={appStyles.flex}>
                                        <Carousel
                                            loop={false}
                                            pagingEnabled={true}
                                            snapEnabled
                                            width={width}
                                            height={getSize.m(280)}
                                            scrollAnimationDuration={1000}
                                            autoPlayInterval={4000}
                                            mode="parallax"
                                            modeConfig={{
                                                parallaxScrollingScale: 1,
                                                parallaxScrollingOffset: getSize.m(140),
                                            }}
                                            autoPlay={autoPlay}
                                            defaultIndex={0}
                                            onSnapToItem={index => {
                                                setIndexDot(index);
                                            }}
                                            data={data}
                                            renderItem={({ item, index }) => (
                                                <View
                                                    key={index}
                                                    style={{
                                                        flexDirection: 'row',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                    <TouchableOpacity
                                                        activeOpacity={0.9}
                                                        onPress={() => handlePlayVideo(item.video)}
                                                    >
                                                        <Image
                                                            source={item.image}
                                                            style={[styles.image]}
                                                        />
                                                        <View style={styles.date}>
                                                            <Text style={styles.text_date}>
                                                                {item.minute}
                                                            </Text>
                                                        </View>
                                                        <View style={styles.play_video}>
                                                            <Icon
                                                                name={appIcons.ic_caretright}
                                                                size={getSize.m(16)}
                                                                color={appColors.white}
                                                            />
                                                        </View>
                                                        <View style={styles.content}>
                                                            <Text style={styles.text_content}>
                                                                {item.content}
                                                            </Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                            )}
                                        />
                                    </GestureHandlerRootView>
                                    <View style={styles.indicatorContainer}>
                                        {data.map((item, index) => {
                                            return (
                                                <View
                                                    key={index.toString()}
                                                    style={[
                                                        styles.normalDots,
                                                        {
                                                            width:
                                                                index === indexDot
                                                                    ? getSize.m(18)
                                                                    : getSize.m(5),
                                                            backgroundColor:
                                                                index === indexDot
                                                                    ? appColors.white
                                                                    : appColors.text_option_unselect,
                                                        },
                                                    ]}
                                                />
                                            );
                                        })}
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: TAB_BAR_HEIGHT + BOTTOM_SVG_HEIGHT }} />
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
