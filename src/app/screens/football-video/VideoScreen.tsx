import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { SideMenu } from '@football/app/components/side-menu/SideMenu';
import { BOTTOM_SVG_HEIGHT } from '@football/app/routes/bottom-tab/components/bottom.tab';
import { TAB_BAR_HEIGHT } from '@football/app/routes/bottom-tab/styles/bottom.tab.styles';
import { SideBar } from '@football/app/routes/side-bar/SideBar';
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
import { Video } from '@football/app/components/video/Video';

export const VideoScreen = ({ navigation, route }: IVideoScreenProps) => {
    const {
        t,
        onShowSideMenu,
        handlePlayVideo,
        setDisplay,
        setAutoPlay,
        display,
        data,
        width,
        sourceVideo,
        autoPlay,
        showSideMenu,
        closeSideMenu,
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
                    <ScrollView>
                        <View style={appStyles.container}>
                            <HeaderUser
                                avt={AppImages.img_avt}
                                point="1,325"
                                icon={AppImages.img_bars_sort}
                                color_pre={appColors.blue_light}
                                color_after={appColors.blue_dark}
                                handlePressFunction={onShowSideMenu}
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
                                    <View style={{ paddingLeft: getSize.m(14) }}>
                                        <ScrollView
                                            horizontal
                                            showsHorizontalScrollIndicator={false}
                                            directionalLockEnabled
                                        >
                                            {data.map((item, index) => {
                                                return (
                                                    <View
                                                        key={index}
                                                        style={{
                                                            flexDirection: 'row',
                                                            justifyContent: 'center',
                                                            marginHorizontal: getSize.m(8),
                                                        }}
                                                    >
                                                        <TouchableOpacity
                                                            activeOpacity={0.9}
                                                            onPress={() =>
                                                                handlePlayVideo(item.video)
                                                            }
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
                                                );
                                            })}
                                        </ScrollView>
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
                                    <View style={{ paddingLeft: getSize.m(14) }}>
                                        <ScrollView
                                            horizontal
                                            showsHorizontalScrollIndicator={false}
                                            directionalLockEnabled
                                        >
                                            {data.map((item, index) => {
                                                return (
                                                    <View
                                                        key={index}
                                                        style={{
                                                            flexDirection: 'row',
                                                            justifyContent: 'center',
                                                            marginHorizontal: getSize.m(8),
                                                        }}
                                                    >
                                                        <TouchableOpacity
                                                            activeOpacity={0.9}
                                                            onPress={() =>
                                                                handlePlayVideo(item.video)
                                                            }
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
                                                );
                                            })}
                                        </ScrollView>
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
                                    <View style={{ paddingLeft: getSize.m(14) }}>
                                        <ScrollView
                                            horizontal
                                            showsHorizontalScrollIndicator={false}
                                            directionalLockEnabled
                                        >
                                            {data.map((item, index) => {
                                                return (
                                                    <View
                                                        key={index}
                                                        style={{
                                                            flexDirection: 'row',
                                                            justifyContent: 'center',
                                                            marginHorizontal: getSize.m(8),
                                                        }}
                                                    >
                                                        <TouchableOpacity
                                                            activeOpacity={0.9}
                                                            onPress={() =>
                                                                handlePlayVideo(item.video)
                                                            }
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
                                                );
                                            })}
                                        </ScrollView>
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
