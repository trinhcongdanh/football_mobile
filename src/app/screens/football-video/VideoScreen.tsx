import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { BOTTOM_SVG_HEIGHT } from '@football/app/routes/bottom-tab/components/bottom.tab';
import { TAB_BAR_HEIGHT } from '@football/app/routes/bottom-tab/styles/bottom.tab.styles';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
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
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';

import styles from './VideoScreen.styles';
import { IVideoScreenProps } from './VideoScreen.type';
import { useViewModel } from './VideoScreen.viewModel';

export const VideoScreen = ({ navigation, route }: IVideoScreenProps) => {
    const {
        t,
        onShowSideMenu,
        handlePlayVideo,
        favoriteTeamsVideo,
        favoriteTopTeamsVideo,
        favoritePlayersVideo,
        generalVod,
    } = useViewModel({
        navigation,
        route,
    });

    const [indexDot, setIndexDot] = useState(0);
    const { getTranslationText } = useTranslationText();

    const colorCustom = useSelector((state: any) => state.colorCustom.colorCustom);

    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background_black} style={appStyles.flex}>
                <FastImage
                    source={AppImages.img_decoration_background}
                    tintColor={colorCustom}
                    style={{ height: '100%', width: '100%', position: 'absolute' }}
                />
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <ScrollView>
                        <View style={appStyles.container}>
                            <HeaderUser
                                avt={AppImages.img_avt}
                                point="1,325"
                                icon={AppImages.img_bars_sort}
                                color_pre={colorCustom}
                                color_after={colorCustom}
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
                                            {favoriteTeamsVideo?.map((item, index) => {
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
                                                            activeOpacity={1}
                                                            onPress={() => handlePlayVideo(item)}
                                                        >
                                                            <LinearGradient
                                                                colors={[
                                                                    'transparent',
                                                                    'rgba(0, 0, 0, 0.92)',
                                                                ]}
                                                                start={{ x: 0, y: 0.3 }}
                                                                end={{ x: 0, y: 1 }}
                                                                style={styles.gradient_img}
                                                            />
                                                            <Image
                                                                source={{ uri: item.image_url }}
                                                                style={[styles.image]}
                                                            />
                                                            <View style={styles.date}>
                                                                <Text style={styles.text_date}>
                                                                    {item.length}
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
                                                                    {getTranslationText({
                                                                        textHe: item.caption_he,
                                                                        textEn: item.caption_en,
                                                                    })}
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
                                            {favoriteTopTeamsVideo?.map((item, index) => {
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
                                                            activeOpacity={1}
                                                            onPress={() => handlePlayVideo(item)}
                                                        >
                                                            <LinearGradient
                                                                colors={[
                                                                    'transparent',
                                                                    'rgba(0, 0, 0, 0.92)',
                                                                ]}
                                                                start={{ x: 0, y: 0.3 }}
                                                                end={{ x: 0, y: 1 }}
                                                                style={styles.gradient_img}
                                                            />
                                                            <Image
                                                                source={{ uri: item.image_url }}
                                                                style={[styles.image]}
                                                            />
                                                            <View style={styles.date}>
                                                                <Text style={styles.text_date}>
                                                                    {item.length}
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
                                                                    {getTranslationText({
                                                                        textHe: item.caption_he,
                                                                        textEn: item.caption_en,
                                                                    })}
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
                                            {favoritePlayersVideo?.map((item, index) => {
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
                                                            activeOpacity={1}
                                                            onPress={() => handlePlayVideo(item)}
                                                        >
                                                            <LinearGradient
                                                                colors={[
                                                                    'transparent',
                                                                    'rgba(0, 0, 0, 0.92)',
                                                                ]}
                                                                start={{ x: 0, y: 0.3 }}
                                                                end={{ x: 0, y: 1 }}
                                                                style={styles.gradient_img}
                                                            />
                                                            <Image
                                                                source={{ uri: item.image_url }}
                                                                style={[styles.image]}
                                                            />
                                                            <View style={styles.date}>
                                                                <Text style={styles.text_date}>
                                                                    {item.length}
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
                                                                    {getTranslationText({
                                                                        textHe: item.caption_he,
                                                                        textEn: item.caption_en,
                                                                    })}
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
                                    {t('video.general_vod.label')}
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
                                            {generalVod?.map((item, index) => {
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
                                                            activeOpacity={1}
                                                            onPress={() => handlePlayVideo(item)}
                                                        >
                                                            <LinearGradient
                                                                colors={[
                                                                    'transparent',
                                                                    'rgba(0, 0, 0, 0.92)',
                                                                ]}
                                                                start={{ x: 0, y: 0.3 }}
                                                                end={{ x: 0, y: 1 }}
                                                                style={styles.gradient_img}
                                                            />
                                                            <Image
                                                                source={{ uri: item.image_url }}
                                                                style={[styles.image]}
                                                            />
                                                            <View style={styles.date}>
                                                                <Text style={styles.text_date}>
                                                                    {item.length}
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
                                                                    {getTranslationText({
                                                                        textHe: item.caption_he,
                                                                        textEn: item.caption_en,
                                                                    })}
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
