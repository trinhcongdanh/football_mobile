/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-comment-textnodes */
import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import styles from '@football/app/screens/football-home/HomeScreen.styles';
import { IHomeScreenProps } from '@football/app/screens/football-home/HomeScreen.type';
import { useViewModel } from '@football/app/screens/football-home/HomeScreen.viewModel';
import { FavPlayer } from '@football/app/screens/football-home/layouts/FavPlayer/FavPlayer';
import { FavTeam } from '@football/app/screens/football-home/layouts/FavTeam/FavTeam';
import { FavTopTeam } from '@football/app/screens/football-home/layouts/FavTopTeam/FavTopTeam';
import { Instagram } from '@football/app/screens/football-home/layouts/Instagram/Instagram';
import { LeaguesTable } from '@football/app/screens/football-home/layouts/LeaguesTable/LeaguesTable';
import { Magazine } from '@football/app/screens/football-home/layouts/Magazine/Magazine';
import { NationalCup } from '@football/app/screens/football-home/layouts/NationalCup/NationalCup';
import { SocialResponsibility } from '@football/app/screens/football-home/layouts/SocialResponsibility/SocialResponsibility';
import { Video } from '@football/app/screens/football-home/layouts/Video/Video';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { getSize, width } from '@football/app/utils/responsive/scale';
import { renderAvatar, renderUserPoints } from '@football/core/models/AvatarType.enum';
import { isEmpty } from 'lodash';
import React, { useRef, useState } from 'react';
import {
    I18nManager,
    ImageBackground,
    LogBox,
    Platform,
    RefreshControl,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import DeviceInfo from 'react-native-device-info';
import { useDateTime } from '@football/app/utils/hooks/useDateTime';

export const HomeScreen = ({ navigation, route }: IHomeScreenProps) => {
    const {
        onGoBack,
        t,
        navigate,
        players,
        onShowSideMenu,
        onClickPlayer,
        homePage,
        homeLayout,
        teams,
        topTeams,
        leagues,
        generalVod,
        handlePlayVideo,
        onClickTeam,
        onClickTopTeam,
        profileUser,
        userLogin,
        colorCustom,
        onClickGuestRegistration,
        getProfile,
    } = useViewModel({
        navigation,
        route,
    });

    const scrollViewRef = useRef<any>();
    LogBox.ignoreLogs(['Warning: Encountered two children with the same key']);
    LogBox.ignoreLogs(['Warning: Each child in a list should have a unique "key" prop']);

    const isGuest = !userLogin?.success;
    const { getTranslationText } = useTranslationText();

    const scrollToTheEnd = () => {
        if (I18nManager.isRTL && Platform.OS === 'android') {
            scrollViewRef.current?.scrollToEnd();
        }
    };

    const onPressAvatar = () => {
        if (isEmpty(getProfile.getProfile)) {
            navigate(ScreenName.RegisterPage, { isLogin: true });
        } else {
            navigate(ScreenName.SettingsPage, { previousScreen: ScreenName.HomePage });
        }
    };
    let hasNotch = DeviceInfo.hasNotch();
    const { getTime } = useDateTime();

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <View style={[appStyles.flex, { backgroundColor: appColors.gray2 }]}>
            {/* Header */}
            {homePage && (
                <>
                    <View style={styles.header_background}>
                        <FastImage
                            source={AppImages.img_arrow_header_home}
                            resizeMode={FastImage.resizeMode.contain}
                            style={{
                                height: Platform.OS === 'android' ? getSize.m(80) : getSize.m(70),
                                width: getSize.m(281),
                                position: 'absolute',
                                top: getSize.m(0),
                                left:
                                    Platform.OS === 'android'
                                        ? width / (3 * 0.8)
                                        : width / 3 + getSize.m(40),
                                transform: [{ scaleX: I18nManager.isRTL ? 1 : -1 }],
                            }}
                        />
                        <FastImage
                            source={AppImages.img_dot_header_home}
                            tintColor={colorCustom}
                            resizeMode={FastImage.resizeMode.contain}
                            style={{
                                height: getSize.m(64),
                                width: getSize.m(94),
                                position: 'absolute',
                                bottom: getSize.m(-50),
                                right: I18nManager.isRTL ? undefined : getSize.m(30),
                                left: I18nManager.isRTL ? getSize.m(220) : undefined,
                            }}
                        />

                        <StatusBar
                            barStyle="light-content"
                            translucent
                            backgroundColor="transparent"
                        />
                        <SafeAreaView
                            style={[
                                appStyles.safe_area,
                                {
                                    zIndex: 100000,
                                },
                            ]}
                        >
                            <View style={[appStyles.container]}>
                                <View style={[appStyles.flex_row_space_center]}>
                                    <TouchableOpacity onPress={onShowSideMenu}>
                                        <LinearGradient
                                            colors={[
                                                Platform.OS === 'android'
                                                    ? colorCustom
                                                    : colorCustom,
                                                colorCustom,
                                            ]}
                                            // colors={appColors.menu_gradient}
                                            style={styles.home_side_bar}
                                        >
                                            <FastImage
                                                source={AppImages.img_bars_sort}
                                                style={{
                                                    width: getSize.m(12),
                                                    height: getSize.m(14),
                                                    transform: [
                                                        { scaleX: I18nManager.isRTL ? 1 : -1 },
                                                    ],
                                                }}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                        </LinearGradient>
                                    </TouchableOpacity>
                                    <View>
                                        <View style={[appStyles.flex_row_align, styles.avt]}>
                                            <TouchableOpacity
                                                style={styles.container_avt}
                                                onPress={onPressAvatar}
                                            >
                                                <FastImage
                                                    style={{
                                                        width: getSize.m(40),
                                                        height: getSize.m(40),
                                                        borderRadius: getSize.m(40),
                                                    }}
                                                    source={renderAvatar(profileUser)}
                                                />
                                            </TouchableOpacity>
                                            <FastImage
                                                source={AppImages.img_ball}
                                                style={styles.ic_football}
                                                tintColor={colorCustom}
                                                resizeMode={FastImage.resizeMode.contain}
                                            />
                                            <Text
                                                style={[
                                                    appStyles.text_bold,
                                                    {
                                                        // marginRight: getSize.m(3),
                                                        // marginLeft: getSize.m(10),
                                                    },
                                                ]}
                                            >
                                                {renderUserPoints(profileUser, t)}
                                            </Text>
                                        </View>
                                    </View>
                                    <View>
                                        <FastImage
                                            source={AppImages.img_logo}
                                            style={{
                                                width: getSize.m(36),
                                                height: getSize.m(40),
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View
                                style={{
                                    marginTop:
                                        Platform.OS === 'android'
                                            ? getSize.m(20)
                                            : hasNotch
                                            ? getSize.m(20)
                                            : getSize.m(30),
                                }}
                            >
                                <ScrollView
                                    style={{
                                        // flexDirection: I18nManager.isRTL
                                        //     ? 'row-reverse'
                                        //     : 'row',
                                        marginHorizontal: getSize.m(10),
                                    }}
                                    contentContainerStyle={{
                                        minWidth: width,
                                    }}
                                    horizontal
                                    ref={scrollViewRef}
                                    onContentSizeChange={scrollToTheEnd}
                                >
                                    {players
                                        ?.filter(item => item)
                                        .map((item, index) => {
                                            return (
                                                <TouchableOpacity
                                                    // eslint-disable-next-line no-underscore-dangle
                                                    onPress={() => onClickPlayer(item._id)}
                                                    // eslint-disable-next-line no-underscore-dangle
                                                    key={item._id}
                                                >
                                                    <View
                                                        style={[
                                                            appStyles.flex_row_align,
                                                            styles.header_item,
                                                        ]}
                                                    >
                                                        <FastImage
                                                            source={{ uri: item.image_url }}
                                                            style={{
                                                                width: getSize.m(30),
                                                                height: getSize.m(30),
                                                                borderRadius: getSize.m(30),
                                                                marginRight: getSize.m(6),
                                                            }}
                                                        />
                                                        <Text style={styles.header_item_text}>
                                                            {getTranslationText({
                                                                textHe: item.name_he,
                                                                textEn: item.name_en,
                                                            })}
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            );
                                        })}

                                    {teams
                                        ?.filter(item => item)
                                        .map((item, index) => {
                                            return (
                                                <TouchableOpacity
                                                    // eslint-disable-next-line no-underscore-dangle
                                                    onPress={() => onClickTeam(item._id)}
                                                    // eslint-disable-next-line no-underscore-dangle
                                                    key={item._id}
                                                >
                                                    <View
                                                        style={[
                                                            appStyles.flex_row_align,
                                                            styles.header_item,
                                                        ]}
                                                    >
                                                        <FastImage
                                                            source={{ uri: item.logo_url }}
                                                            style={{
                                                                width: getSize.m(30),
                                                                height: getSize.m(30),
                                                                borderRadius: getSize.m(30),
                                                                marginRight: getSize.m(6),
                                                            }}
                                                        />
                                                        <Text style={styles.header_item_text}>
                                                            {getTranslationText({
                                                                textHe: item.name_he,
                                                                textEn: item.name_en,
                                                            })}
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            );
                                        })}

                                    {topTeams
                                        ?.filter(item => item)
                                        .map((item, index) => {
                                            return (
                                                <TouchableOpacity
                                                    // eslint-disable-next-line no-underscore-dangle
                                                    onPress={() => onClickTopTeam(item._id)}
                                                    // eslint-disable-next-line no-underscore-dangle
                                                    key={item._id}
                                                >
                                                    <View
                                                        style={[
                                                            appStyles.flex_row_align,
                                                            styles.header_item,
                                                        ]}
                                                    >
                                                        <FastImage
                                                            source={{ uri: item.logo_url }}
                                                            style={{
                                                                width: getSize.m(30),
                                                                height: getSize.m(30),
                                                                borderRadius: getSize.m(30),
                                                                marginRight: getSize.m(6),
                                                            }}
                                                        />
                                                        <Text style={styles.header_item_text}>
                                                            {getTranslationText({
                                                                textHe: item.name_he,
                                                                textEn: item.name_en,
                                                            })}
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            );
                                        })}
                                    {isGuest && (
                                        <TouchableOpacity onPress={onClickGuestRegistration}>
                                            <View
                                                style={[
                                                    appStyles.flex_row_align,
                                                    styles.header_item,
                                                    {
                                                        marginHorizontal: getSize.m(16),
                                                    },
                                                ]}
                                            >
                                                <FastImage
                                                    source={AppImages.img_guest_regist}
                                                    style={{
                                                        width: getSize.m(30),
                                                        height: getSize.m(30),
                                                        borderRadius: getSize.m(30),
                                                        marginRight: getSize.m(6),
                                                    }}
                                                />
                                                <Text style={styles.header_item_text}>
                                                    {t('home_page.edit_favorites')}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                </ScrollView>
                            </View>
                        </SafeAreaView>
                    </View>

                    <ScrollView
                        style={{
                            marginTop: getSize.m(-40),
                            paddingTop: getSize.m(40),
                            zIndex: -1000000,
                            marginBottom: getSize.m(40),
                        }}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                        }
                    >
                        {/* Video Intro */}
                        {homeLayout?.layout.includes('video') && (
                            <TouchableOpacity onPress={() => handlePlayVideo(homePage?.video)}>
                                <View style={[styles.home_video]}>
                                    <ImageBackground
                                        source={{ uri: homePage?.video.image_url }}
                                        imageStyle={{ borderRadius: getSize.m(20), opacity: 0.9 }}
                                        style={{
                                            width: getSize.m(347),
                                            height: getSize.m(233),
                                        }}
                                    >
                                        <View
                                            style={{
                                                flex: 1,
                                                backgroundColor: 'rgba(0,0,0,0.4)',
                                                borderRadius: getSize.m(20),
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <View style={styles.date}>
                                                <Text style={styles.text_date}>
                                                    {getTime({ time: homePage?.video.length })}
                                                </Text>
                                            </View>
                                            <View style={styles.play_video_main}>
                                                <FastImage
                                                    source={AppImages.img_play_icon}
                                                    style={{
                                                        width: getSize.m(35),
                                                        height: getSize.m(35),
                                                    }}
                                                />
                                            </View>
                                            <View style={styles.content}>
                                                <Text style={styles.text_content}>
                                                    {getTranslationText({
                                                        textHe: homePage?.video.caption_he,
                                                        textEn: homePage?.video.caption_en,
                                                    })}
                                                </Text>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>
                        )}
                        {/* Player Stats */}
                        {homeLayout?.layout.includes('my_teams') &&
                            teams
                                ?.filter(team => team)
                                .map(team => {
                                    // eslint-disable-next-line no-underscore-dangle
                                    return (
                                        <FavTeam color={colorCustom} team={team} key={team?._id} />
                                    );
                                })}

                        {homeLayout?.layout.includes('my_players') &&
                            players &&
                            players?.map(player => {
                                // eslint-disable-next-line no-underscore-dangle
                                return (
                                    <FavPlayer
                                        color={colorCustom}
                                        player={player}
                                        key={player?._id}
                                    />
                                );
                            })}

                        {homeLayout?.layout.includes('my_top_team') &&
                            topTeams?.map(topTeam => {
                                return (
                                    <>
                                        <FavTopTeam
                                            color={colorCustom}
                                            topTeam={topTeam}
                                            key={topTeam?._id}
                                        />
                                    </>
                                );
                            })}

                        {homeLayout?.layout.includes('ads') && (
                            <SocialResponsibility homePage={homePage} />
                        )}

                        {homeLayout?.layout.includes('magazine') ? (
                            <Magazine homePage={homePage} />
                        ) : null}

                        {homeLayout?.layout.includes('leagues_table') && leagues?.length
                            ? leagues.map(league => {
                                  return <LeaguesTable league={league} key={league?._id} />;
                              })
                            : null}

                        {homeLayout?.layout.includes('national_cup') && (
                            <NationalCup homePage={homePage} />
                        )}

                        {homeLayout?.layout.includes('clips') && generalVod && (
                            <Video videos={generalVod} handlePlayVideo={handlePlayVideo} />
                        )}

                        {homeLayout?.layout.includes('instagram') && (
                            <Instagram homePage={homePage} />
                        )}

                        <View style={{ height: getSize.m(120), width: '100%' }} />
                    </ScrollView>
                </>
            )}
        </View>
    );
};
