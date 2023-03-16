/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-comment-textnodes */
import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import styles from '@football/app/screens/football-home/HomeScreen.styles';
import { IHomeScreenProps } from '@football/app/screens/football-home/HomeScreen.type';
import { useViewModel } from '@football/app/screens/football-home/HomeScreen.viewModel';
import { Item1 } from '@football/app/screens/football-home/layouts/Item1/Item1';
import { Item10 } from '@football/app/screens/football-home/layouts/Item10/Item10';
import { Item11 } from '@football/app/screens/football-home/layouts/Item11/Item11';
import { Item12 } from '@football/app/screens/football-home/layouts/Item12/Item12';
import { Item13 } from '@football/app/screens/football-home/layouts/Item13/Item13';
import { Item3 } from '@football/app/screens/football-home/layouts/Item3/Item3';
import { Item5 } from '@football/app/screens/football-home/layouts/Item5/Item5';
import { Item6 } from '@football/app/screens/football-home/layouts/Item6/Item6';
import { Item7 } from '@football/app/screens/football-home/layouts/Item7/Item7';
import { Item9 } from '@football/app/screens/football-home/layouts/Item9/Item9';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { getSize } from '@football/app/utils/responsive/scale';
import { renderAvatar, renderUserPoints } from '@football/core/models/AvatarType.enum';
import React, { useRef, useState } from 'react';
import {
    I18nManager,
    ImageBackground,
    LogBox,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from 'src/store/color/ColorCustom.slice';

export const HomeScreen = ({ navigation, route }: IHomeScreenProps) => {
    const {
        onGoBack,
        t,
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
    } = useViewModel({
        navigation,
        route,
    });

    const scrollViewRef = useRef<any>();
    const notScroll = () => {};
    LogBox.ignoreLogs(['Warning: Encountered two children with the same key']);
    LogBox.ignoreLogs(['Warning: Each child in a list should have a unique "key" prop']);

    const isGuest = !userLogin?.success;
    const { getTranslationText } = useTranslationText();

    return (
        <View style={[appStyles.flex, { backgroundColor: appColors.gray2 }]}>
            {/* Header */}
            {homePage && (
                <>
                    <View>
                        <ImageBackground
                            source={AppImages.img_background_header_home}
                            style={[
                                {
                                    height: getSize.m(172),
                                    zIndex: 1000,
                                    overflow: 'hidden',
                                },
                            ]}
                        >
                            <FastImage
                                source={AppImages.img_dot_header_home}
                                tintColor={colorCustom}
                                resizeMode={FastImage.resizeMode.contain}
                                style={{
                                    height: getSize.m(64),
                                    // width: '100%',
                                    width: getSize.m(94),
                                    position: 'absolute',
                                    bottom: getSize.m(-50),
                                    right: I18nManager.isRTL ? undefined : getSize.m(30),
                                    left: I18nManager.isRTL ? getSize.m(220) : undefined,
                                }}
                            />

                            <StatusBar translucent backgroundColor="transparent" />
                            <SafeAreaView
                                style={[
                                    appStyles.safe_area,
                                    {
                                        zIndex: 100000,
                                    },
                                ]}
                            >
                                <View style={appStyles.container}>
                                    <View style={appStyles.flex_row_space_center}>
                                        <TouchableOpacity onPress={onShowSideMenu}>
                                            <LinearGradient
                                                colors={[
                                                    Platform.OS === 'android'
                                                        ? colorCustom
                                                        : colorCustom,
                                                    colorCustom,
                                                ]}
                                                style={styles.home_side_bar}
                                            >
                                                <FastImage
                                                    source={AppImages.img_bars_sort}
                                                    style={{
                                                        width: getSize.m(12),
                                                        height: getSize.m(14),
                                                    }}
                                                    resizeMode={FastImage.resizeMode.contain}
                                                />
                                            </LinearGradient>
                                        </TouchableOpacity>
                                        <View>
                                            <View style={[appStyles.flex_row_align, styles.avt]}>
                                                <FastImage
                                                    style={{
                                                        width: getSize.m(40),
                                                        height: getSize.m(40),
                                                        borderRadius: getSize.m(40),
                                                    }}
                                                    source={renderAvatar(profileUser)}
                                                />
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
                                                            marginRight: getSize.m(6),
                                                            marginLeft: getSize.m(3),
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
                                <View style={{ marginTop: getSize.m(22) }}>
                                    <ScrollView
                                        style={{
                                            flexDirection: I18nManager.isRTL
                                                ? 'row-reverse'
                                                : 'row',
                                        }}
                                        horizontal
                                        ref={scrollViewRef}
                                        onContentSizeChange={() =>
                                            I18nManager.isRTL &&
                                            scrollViewRef.current?.scrollToEnd()
                                        }
                                    >
                                        {players?.map((item, index) => {
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
                                                            {
                                                                marginLeft:
                                                                    index === 0
                                                                        ? getSize.m(16)
                                                                        : getSize.m(6),
                                                                marginRight:
                                                                    index === players?.length - 1
                                                                        ? getSize.m(16)
                                                                        : getSize.m(6),
                                                            },
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

                                        {teams?.map((item, index) => {
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
                                                            {
                                                                marginLeft:
                                                                    index === 0
                                                                        ? getSize.m(16)
                                                                        : getSize.m(6),
                                                                marginRight:
                                                                    index === teams.length - 1
                                                                        ? getSize.m(16)
                                                                        : getSize.m(6),
                                                            },
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

                                        {topTeams?.map((item, index) => {
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
                                                            {
                                                                marginLeft:
                                                                    index === 0
                                                                        ? getSize.m(16)
                                                                        : getSize.m(6),
                                                                marginRight:
                                                                    index === topTeams?.length - 1
                                                                        ? getSize.m(16)
                                                                        : getSize.m(6),
                                                            },
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
                        </ImageBackground>
                    </View>
                    <ScrollView
                        style={{ marginTop: getSize.m(-40), paddingTop: getSize.m(40), zIndex: -1 }}
                    >
                        {/* Video Intro */}
                        {homeLayout?.layout.includes('video') && (
                            <TouchableOpacity onPress={() => handlePlayVideo(homePage?.video)}>
                                <View style={styles.home_video}>
                                    <LinearGradient
                                        colors={['transparent', 'rgba(0, 0, 0, 0.92)']}
                                        start={{ x: 0, y: 0.3 }}
                                        end={{ x: 0, y: 1 }}
                                        style={styles.gradient_img}
                                    />
                                    <FastImage
                                        source={{ uri: homePage?.video.image_url }}
                                        style={{
                                            width: getSize.m(347),
                                            height: getSize.m(233),
                                            borderRadius: getSize.m(20),
                                        }}
                                    />
                                    <View style={styles.date}>
                                        <Text style={styles.text_date}>
                                            {homePage?.video.length}
                                        </Text>
                                    </View>
                                    <View style={styles.play_video_main}>
                                        <IconAntDesign
                                            name={appIcons.ic_caretright}
                                            size={getSize.m(16)}
                                            color={appColors.white}
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
                            </TouchableOpacity>
                        )}
                        {/* Player Stats */}
                        {homeLayout?.layout.includes('my_teams') &&
                            teams?.map(team => {
                                // eslint-disable-next-line no-underscore-dangle
                                return <Item1 color={colorCustom} team={team} key={team._id} />;
                            })}
                        {/* Item2 */}
                        {/* <Item2 /> */}
                        {/* Item3 */}
                        {homeLayout?.layout.includes('my_players') &&
                            players &&
                            players?.map(player => {
                                // eslint-disable-next-line no-underscore-dangle
                                return (
                                    <Item3 color={colorCustom} player={player} key={player._id} />
                                );
                            })}
                        {/* Item4 */}
                        {/* <Item4 /> */}
                        {/* Item5 */}
                        {homeLayout?.layout.includes('my_top_team') &&
                            topTeams?.map(topTeam => {
                                return (
                                    <>
                                        <Item5
                                            color={colorCustom}
                                            topTeam={topTeam}
                                            key={topTeam._id}
                                        />
                                        {homeLayout?.layout.includes('my_top_team') && (
                                            <Item6 topTeam={topTeam} key={topTeam._id} />
                                        )}
                                    </>
                                );
                            })}
                        {/* <Item5 topTeam={} /> */}
                        {/* Item6 */}
                        {/* Item7 */}
                        {homeLayout?.layout.includes('ads') && <Item7 homePage={homePage} />}
                        {/* Item8 */}
                        {/* <Item8 /> */}
                        {/* Item9 */}
                        {homeLayout?.layout.includes('magazine') ? (
                            <Item9 homePage={homePage} />
                        ) : null}
                        {/* Item10 */}
                        {homeLayout?.layout.includes('leagues_table') && leagues?.length
                            ? leagues.map(league => {
                                  return <Item10 league={league} key={league._id} />;
                              })
                            : null}
                        {/* Item11 */}
                        {/* <Item11 /> */}
                        {homeLayout?.layout.includes('national_cup') && (
                            <Item11 homePage={homePage} />
                        )}

                        {/* Item12 */}
                        {homeLayout?.layout.includes('clips') && generalVod && (
                            <Item12 videos={generalVod} handlePlayVideo={handlePlayVideo} />
                        )}

                        {/* Item13 */}

                        {homeLayout?.layout.includes('instagram') && <Item13 />}

                        <View style={{ height: getSize.m(120), width: '100%' }} />
                    </ScrollView>
                </>
            )}
        </View>
    );
};
