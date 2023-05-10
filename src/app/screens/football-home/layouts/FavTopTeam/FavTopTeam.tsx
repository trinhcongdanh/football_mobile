/* eslint-disable no-underscore-dangle */
import { AppFonts } from '@football/app/assets/fonts';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { GameTable } from '@football/app/components/game_table/GameTable';
import { ListGame } from '@football/app/components/list-game/ListGame';
import { ListGame_Test } from '@football/app/components/list-game/ListGame_test';
import styles from '@football/app/screens/football-home/layouts/FavTopTeam/FavTopTeam.style';
import { useViewModel } from '@football/app/screens/football-home/layouts/FavTopTeam/FavTopTeam.viewModel';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { getSize } from '@football/app/utils/responsive/scale';
import moment from 'moment';
import React from 'react';
import {
    I18nManager,
    ImageBackground,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { IFavTopTeamProps } from './FavTopTeam.type';

export const FavTopTeam = ({ topTeam, color }: IFavTopTeamProps) => {
    const {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        handleStadium,
        onClickTopTeam,
        handleDetailMatch,
        onNavigateGameList,
        newTopGames,
    } = useViewModel({ topTeam, color });
    const { getTranslationText } = useTranslationText();

    return (
        <ImageBackground
            source={AppImages.img_home_background_favorite}
            style={[appStyles.flex, { height: '100%', marginTop: getSize.m(46) }]}
        >
            <FastImage
                source={AppImages.img_decoration_background}
                tintColor={color}
                style={{ height: '100%', width: '100%', position: 'absolute' }}
            />
            <View style={appStyles.align_justify}>
                <View style={styles.logo_team}>
                    <FastImage
                        source={{ uri: topTeam?.logo_url }}
                        style={{
                            width: getSize.m(55),
                            height: getSize.m(55),
                            borderRadius: getSize.m(50),
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View>
                <View style={[appStyles.flex_row_align, { marginTop: getSize.m(14) }]}>
                    <Text style={styles.text_details}>
                        {getTranslationText({
                            textHe: topTeam?.name_he,
                            textEn: topTeam?.name_en,
                        })}
                    </Text>

                    <TouchableOpacity onPress={() => onClickTopTeam(topTeam?._id)}>
                        <LinearGradient colors={[color, color]} style={styles.icon_arrow_left}>
                            <View style={{ marginLeft: getSize.m(1) }}>
                                <FastImage
                                    source={AppImages.img_angle_down}
                                    style={{
                                        width: getSize.m(9),
                                        height: getSize.m(12),
                                        transform: [
                                            { rotate: I18nManager.isRTL ? '0deg' : '180deg' },
                                        ],
                                    }}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={e => {
                    const slide = Math.round(
                        e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width
                    );
                    if (slide !== activeIndexNumber) {
                        setActiveIndexNumber(slide); // here we will set our active index num
                    }
                }}
            >
                <View
                    style={[
                        styles.stats_content,
                        {
                            marginLeft: getSize.m(25),
                            marginRight: getSize.m(8),
                        },
                    ]}
                >
                    <View
                        style={[
                            appStyles.flex_row_space_center,
                            {
                                paddingLeft: getSize.m(16),
                                paddingRight: getSize.m(10),
                            },
                        ]}
                    >
                        <View style={appStyles.flex_row_align}>
                            <FastImage
                                source={AppImages.img_chess_queen}
                                style={{
                                    width: getSize.m(14),
                                    height: getSize.m(14),
                                }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                            <Text style={styles.title_statistic}>{t('home_page.statistics')}</Text>
                        </View>
                        <TouchableOpacity
                            style={appStyles.flex_row_align}
                            onPress={() => onClickTopTeam(topTeam._id)}
                        >
                            <Text style={styles.text_see_all}>{t('home_page.see_all')}</Text>
                            <IconEntypo
                                name={appIcons.ic_left_ios}
                                size={getSize.m(13)}
                                color={appColors.button_dark_blue}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={{ marginTop: getSize.m(20) }}>
                            <View
                                style={{
                                    paddingLeft: getSize.m(10),
                                    paddingRight: getSize.m(5),
                                }}
                            >
                                <View style={[appStyles.flex_row_space_center]}>
                                    <View style={{ width: getSize.m(160) }}>
                                        <Text
                                            style={[
                                                styles.statistics_header,
                                                {
                                                    textAlign: 'left',
                                                    marginLeft: getSize.m(4),
                                                    fontFamily: AppFonts.bold,
                                                    fontSize: getSize.m(13),
                                                },
                                            ]}
                                        >
                                            {t('home_page.gates')}
                                        </Text>
                                    </View>
                                    <View style={{ width: getSize.m(50) }}>
                                        <Text style={styles.statistics_header}>
                                            {t('home_page.games')}
                                        </Text>
                                    </View>
                                    <View style={{ width: getSize.m(50) }}>
                                        <Text style={styles.statistics_header}>
                                            {t('home_page.gates')}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View
                                style={{
                                    paddingLeft: getSize.m(8),
                                    paddingRight: getSize.m(6),
                                    marginTop: getSize.m(13),
                                }}
                            >
                                {topTeam?.homepage_info?.goal_kickers
                                    ?.slice(0, 4)
                                    ?.map((item, index) => {
                                        return (
                                            <LinearGradient
                                                key={item?.player_id}
                                                start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 1 }}
                                                colors={[
                                                    index % 2 === 0 ? '#f3f4f7' : appColors.white,
                                                    index % 2 === 0 ? '#f5fbfd' : appColors.white,
                                                ]}
                                                style={[
                                                    appStyles.flex_row_space_center,
                                                    appStyles.statistic_row,
                                                    {
                                                        paddingVertical: getSize.m(7),
                                                    },
                                                ]}
                                            >
                                                <View
                                                    style={[
                                                        {
                                                            width: getSize.m(160),
                                                            overflow: 'hidden',
                                                        },
                                                    ]}
                                                >
                                                    <View style={appStyles.flex_row_align}>
                                                        <Avatar
                                                            source={{ uri: item?.player_image_url }}
                                                            rounded
                                                            size={getSize.m(20)}
                                                        />
                                                        <View style={{ width: '80%' }}>
                                                            <Text
                                                                numberOfLines={1}
                                                                style={[
                                                                    styles.statistics_content,
                                                                    {
                                                                        marginLeft: getSize.m(6),
                                                                        textAlign: 'left',
                                                                    },
                                                                ]}
                                                            >
                                                                {getTranslationText({
                                                                    textHe: item?.player_name_he,
                                                                    textEn: item?.player_name_en,
                                                                })}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={{ width: getSize.m(50) }}>
                                                    {item?.games ? (
                                                        <Text style={styles.statistics_content}>
                                                            {item?.games}
                                                        </Text>
                                                    ) : (
                                                        <Text style={styles.statistics_content}>
                                                            -
                                                        </Text>
                                                    )}
                                                </View>
                                                <View style={{ width: getSize.m(50) }}>
                                                    {item?.goals ? (
                                                        <Text style={styles.statistics_content}>
                                                            {item?.goals}
                                                        </Text>
                                                    ) : (
                                                        <Text style={styles.statistics_content}>
                                                            -
                                                        </Text>
                                                    )}
                                                </View>
                                            </LinearGradient>
                                        );
                                    })}
                            </View>
                        </View>
                        <View style={styles.line} />
                        <View>
                            <View
                                style={{
                                    paddingLeft: getSize.m(10),
                                    paddingRight: getSize.m(5),
                                }}
                            >
                                <View style={[appStyles.flex_row_space_center]}>
                                    <View style={{ width: getSize.m(160) }}>
                                        <Text
                                            style={[
                                                styles.statistics_header,
                                                {
                                                    textAlign: 'left',
                                                    marginLeft: getSize.m(4),
                                                    fontFamily: AppFonts.bold,
                                                    fontSize: getSize.m(13),
                                                },
                                            ]}
                                        >
                                            {t('home_page.tickets')}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View
                                style={{
                                    paddingLeft: getSize.m(8),
                                    paddingRight: getSize.m(6),
                                    marginTop: getSize.m(13),
                                }}
                            >
                                {topTeam?.homepage_info?.cards?.slice(0, 3)?.map((item, index) => {
                                    return (
                                        <LinearGradient
                                            key={item.player_id}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 1 }}
                                            colors={[
                                                index % 2 === 0 ? '#f3f4f7' : appColors.white,
                                                index % 2 === 0 ? '#f5fbfd' : appColors.white,
                                            ]}
                                            style={[
                                                appStyles.flex_row_space_center,
                                                appStyles.statistic_row,
                                                {
                                                    paddingVertical: getSize.m(7),
                                                },
                                            ]}
                                        >
                                            <View
                                                style={[
                                                    {
                                                        width: getSize.m(160),
                                                        overflow: 'hidden',
                                                    },
                                                ]}
                                            >
                                                <View style={appStyles.flex_row_align}>
                                                    <Avatar
                                                        source={{ uri: item?.player_image_url }}
                                                        rounded
                                                        size={getSize.m(20)}
                                                    />
                                                    <View style={{ width: '80%' }}>
                                                        <Text
                                                            style={[
                                                                styles.statistics_content,
                                                                {
                                                                    marginLeft: getSize.m(6),
                                                                    textAlign: 'left',
                                                                },
                                                            ]}
                                                        >
                                                            {getTranslationText({
                                                                textHe: item?.player_name_he,
                                                                textEn: item?.player_name_en,
                                                            })}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{ width: getSize.m(50) }}>
                                                {item?.yellow_cards ? (
                                                    <View>
                                                        <FastImage
                                                            source={AppImages.img_ticket_yellow}
                                                            style={styles.img_ticket}
                                                            resizeMode={
                                                                FastImage.resizeMode.contain
                                                            }
                                                        />
                                                        <Text style={styles.statistics_content}>
                                                            {item?.yellow_cards}
                                                        </Text>
                                                    </View>
                                                ) : (
                                                    <FastImage
                                                        source={AppImages.img_ticket_white}
                                                        style={styles.img_ticket_white}
                                                        resizeMode={FastImage.resizeMode.contain}
                                                    />
                                                )}
                                            </View>
                                            <View style={{ width: getSize.m(50) }}>
                                                {item?.red_cards ? (
                                                    <View>
                                                        <FastImage
                                                            source={AppImages.img_ticket_red}
                                                            style={styles.img_ticket}
                                                            resizeMode={
                                                                FastImage.resizeMode.contain
                                                            }
                                                        />
                                                        <Text
                                                            style={[
                                                                styles.statistics_content,
                                                                {
                                                                    color: appColors.white,
                                                                },
                                                            ]}
                                                        >
                                                            {item?.red_cards}
                                                        </Text>
                                                    </View>
                                                ) : (
                                                    <FastImage
                                                        source={AppImages.img_ticket_white}
                                                        style={styles.img_ticket_white}
                                                        resizeMode={FastImage.resizeMode.contain}
                                                    />
                                                )}
                                            </View>
                                        </LinearGradient>
                                    );
                                })}
                            </View>
                        </View>
                    </View>
                </View>

                <View
                    style={[
                        styles.stats_content,
                        {
                            marginLeft: getSize.m(8),
                            marginRight: getSize.m(25),
                            backgroundColor: appColors.gray2,
                        },
                    ]}
                >
                    <View
                        style={[
                            appStyles.flex_row_space_center,
                            {
                                paddingLeft: getSize.m(16),
                                paddingRight: getSize.m(10),
                            },
                        ]}
                    >
                        <View style={appStyles.flex_row_align}>
                            <FastImage
                                source={AppImages.img_ball_light_gray}
                                style={{
                                    width: getSize.m(14),
                                    height: getSize.m(14),
                                }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                            <Text style={styles.title_statistic}>
                                {t('home_page.top_team_second_tab_title')}
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={appStyles.flex_row_align}
                            onPress={() => onNavigateGameList(topTeam)}
                        >
                            <Text style={styles.text_see_all}>{t('home_page.see_all')}</Text>
                            <IconEntypo
                                name={appIcons.ic_left_ios}
                                size={getSize.m(13)}
                                color={appColors.button_dark_blue}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ padding: getSize.m(5), zIndex: 0, position: 'relative' }}>
                        {newTopGames?.slice(0, 3)?.map(item => {
                            return (
                                // <ListGame_Test
                                //     key={item.game_id}
                                //     logo_home={item.team1.logo_url}
                                //     logo_away={item.team2.logo_url}
                                // nameHome={getTranslationText({
                                //     textHe: item.team1.name_he,
                                //     textEn: item.team1.name_en,
                                // })}
                                //     nameAway={getTranslationText({
                                //         textHe: item.team2.name_he,
                                //         textEn: item.team2.name_en,
                                //     })}
                                // location={getTranslationText({
                                //     textHe: item.stadium_he,
                                //     textEn: item.stadium_en,
                                // })}
                                //     date={item.date}
                                //     result={item.score}
                                //     schedule={item.time}
                                //     // completed={item.completed}
                                //     details={item.game_id}
                                //     color={appColors.gray2}
                                //     handleDetailMatch={() => handleDetailMatch(item.game_id)}
                                //     handleStadium={() => handleStadium(item.stadium_id)}
                                // isLive={moment().isBetween(
                                //     moment(`${item.date} ${item.time}`, 'DD.M.YY HH:mm'),
                                //     moment(`${item.date} ${item.time}`, 'DD.M.YY HH:mm').add(
                                //         2,
                                //         'hours'
                                //     )
                                // )}
                                //     style={{ marginTop: getSize.m(12) }}
                                // />
                                <GameTable
                                    key={item?.game_id}
                                    date={item?.date}
                                    avt_away={item?.team2?.logo_url}
                                    avt_home={item?.team1?.logo_url}
                                    name_away={getTranslationText({
                                        textHe: item?.team2?.name_he,
                                        textEn: item?.team2?.name_en,
                                    })}
                                    name_home={getTranslationText({
                                        textHe: item?.team1?.name_he,
                                        textEn: item?.team1?.name_en,
                                    })}
                                    result={item?.score}
                                    schedule={item?.time}
                                    location={getTranslationText({
                                        textHe: item?.stadium_he,
                                        textEn: item?.stadium_en,
                                    })}
                                    handleDetailMatch={() => handleDetailMatch(item?.game_id, true)}
                                    handleStadium={() => handleStadium(item?.stadium_id)}
                                    isLive={moment().isBetween(
                                        moment(`${item?.date} ${item?.time}`),
                                        moment(`${item?.date} ${item?.time}`).add(2, 'hours')
                                    )}
                                    isFuture={
                                        moment().diff(moment(`${item?.date} ${item?.time}`)) < 0
                                    }
                                />
                            );
                        })}
                    </View>
                </View>
            </ScrollView>
            <View style={styles.dotContainer}>
                {pages.map((_, index) => {
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
                                                ? appColors.white
                                                : appColors.light_gray,
                                    },
                                ]}
                            />
                        </View>
                    );
                })}
            </View>
        </ImageBackground>
    );
};
