/* eslint-disable no-underscore-dangle */
import { AppFonts } from '@football/app/assets/fonts';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { ListGame } from '@football/app/components/list-game/ListGame';
import { ListGame_Test } from '@football/app/components/list-game/ListGame_test';
import styles from '@football/app/screens/football-home/layouts/FavTeam/FavTeam.style';
import { useViewModel } from '@football/app/screens/football-home/layouts/FavTeam/FavTeam.viewModel';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { getSize } from '@football/app/utils/responsive/scale';
import { MAX_GAME_IN_FAVORITES_TEAM } from '@football/core/api/configs/config';
import moment from 'moment';
import React from 'react';
import {
    I18nManager,
    ImageBackground,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { IFavTeamProps } from './FavTeam.type';

export const FavTeam = ({ team, color }: IFavTeamProps) => {
    const {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        handleStadium,
        handleDetailMatch,
        onNavigateTeamDetails,
        onNavigateStatistics,
        onNavigateGameList,
    } = useViewModel();
    const { getTranslationText } = useTranslationText();

    return (
        <ImageBackground
            source={AppImages.img_home_background_favorite}
            style={[appStyles.flex, { height: '100%', marginTop: getSize.m(46) }]}
        >
            <FastImage
                source={AppImages.img_decoration_top}
                tintColor={'#182A63'}
                style={{ height: '100%', width: '100%', position: 'absolute' }}
            />
            <FastImage
                source={AppImages.img_decoration_bottom}
                tintColor={color}
                style={{ height: '100%', width: '100%', position: 'absolute' }}
            />
            <View style={appStyles.align_justify}>
                <View style={styles.logo_team}>
                    <FastImage
                        source={{ uri: team?.logo_url }}
                        resizeMode="contain"
                        style={{
                            width: getSize.m(58),
                            height: getSize.m(58),
                            borderRadius: getSize.m(29),
                        }}
                    />
                </View>
                <View style={[appStyles.flex_row_align, { marginTop: getSize.m(14) }]}>
                    <Text style={styles.text_details}>
                        {getTranslationText({
                            textHe: team?.name_he,
                            textEn: team?.name_en,
                        })}
                    </Text>
                    <TouchableOpacity onPress={() => onNavigateTeamDetails(team?._id)}>
                        <LinearGradient colors={[color, color]} style={styles.icon_arrow_left}>
                            <FastImage
                                source={AppImages.img_angle_down}
                                style={{
                                    width: getSize.m(9),
                                    height: getSize.m(12),
                                    transform: [{ rotate: I18nManager.isRTL ? '0deg' : '180deg' }],
                                }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
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
                            onPress={() => onNavigateStatistics(team)}
                        >
                            <Text style={styles.text_see_all}>{t('home_page.see_all')}</Text>
                            <IconEntypo
                                name={appIcons.ic_left_ios}
                                size={getSize.m(13)}
                                color={appColors.button_dark_blue}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: getSize.m(10) }}>
                        <View
                            style={{
                                paddingLeft: getSize.m(10),
                                paddingRight: getSize.m(5),
                            }}
                        >
                            <View style={[appStyles.flex_row_space_center]}>
                                <View style={{ width: getSize.m(120) }}>
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
                                <View style={{ width: getSize.m(40) }}>
                                    <Text style={[styles.statistics_header]}>
                                        {t('home_page.league')}
                                    </Text>
                                </View>
                                <View style={{ width: getSize.m(40) }}>
                                    <Text style={styles.statistics_header}>
                                        {t('home_page.third_country')}
                                    </Text>
                                </View>
                                <View style={{ width: getSize.m(40) }}>
                                    <Text style={styles.statistics_header}>
                                        {t('home_page.third_tutu')}
                                    </Text>
                                </View>
                                <View style={{ width: getSize.m(40) }}>
                                    <Text style={styles.statistics_header}>
                                        {t('home_page.total')}
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
                            {team.homepage_info?.goal_kickers?.slice(0, 3).map((item, index) => {
                                return (
                                    <LinearGradient
                                        key={item?.player_id}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        colors={[
                                            index % 2 === 0
                                                ? appColors.linearLightRed
                                                : appColors.white,
                                            index % 2 === 0
                                                ? appColors.linearDarkRed
                                                : appColors.white,
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
                                                    width: getSize.m(120),
                                                    overflow: 'hidden',
                                                },
                                            ]}
                                        >
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                }}
                                            >
                                                <Avatar
                                                    source={{ uri: item?.player_image_url }}
                                                    rounded
                                                    size={getSize.m(20)}
                                                />
                                                <Text
                                                    style={[
                                                        styles.statistics_content,
                                                        {
                                                            marginLeft: getSize.m(6),
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
                                        <View style={{ width: getSize.m(40) }}>
                                            {item?.league_goals ? (
                                                <Text style={styles.statistics_content}>
                                                    {item?.league_goals}
                                                </Text>
                                            ) : (
                                                <Text
                                                    style={[
                                                        styles.statistics_content,
                                                        {
                                                            color: appColors.light_gray,
                                                        },
                                                    ]}
                                                >
                                                    -
                                                </Text>
                                            )}
                                        </View>
                                        <View style={{ width: getSize.m(40) }}>
                                            {item?.national_cup_goals ? (
                                                <Text style={styles.statistics_content}>
                                                    {item?.national_cup_goals}
                                                </Text>
                                            ) : (
                                                <Text
                                                    style={[
                                                        styles.statistics_content,
                                                        {
                                                            color: appColors.light_gray,
                                                        },
                                                    ]}
                                                >
                                                    -
                                                </Text>
                                            )}
                                        </View>
                                        <View style={{ width: getSize.m(40) }}>
                                            {item?.toto_cup_goals ? (
                                                <Text style={styles.statistics_content}>
                                                    {item?.toto_cup_goals}
                                                </Text>
                                            ) : (
                                                <Text
                                                    style={[
                                                        styles.statistics_content,
                                                        {
                                                            color: appColors.light_gray,
                                                        },
                                                    ]}
                                                >
                                                    -
                                                </Text>
                                            )}
                                        </View>
                                        <View style={{ width: getSize.m(40) }}>
                                            <Text style={styles.statistics_content}>
                                                {item?.total_goals}
                                            </Text>
                                        </View>
                                    </LinearGradient>
                                );
                            })}
                        </View>
                    </View>
                    <View style={{ marginTop: getSize.m(14) }}>
                        <View
                            style={{
                                paddingLeft: getSize.m(10),
                                paddingRight: getSize.m(5),
                            }}
                        >
                            <View style={[appStyles.flex_row_space_center]}>
                                <View style={{ width: getSize.m(120) }}>
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
                                        {t('home_page.yellow_card')}
                                    </Text>
                                </View>
                                <View style={{ width: getSize.m(40) }}>
                                    <Text style={[styles.statistics_header]}>
                                        {t('home_page.league')}
                                    </Text>
                                </View>
                                <View style={{ width: getSize.m(40) }}>
                                    <Text style={styles.statistics_header}>
                                        {t('home_page.third_country')}
                                    </Text>
                                </View>
                                <View style={{ width: getSize.m(40) }}>
                                    <Text style={styles.statistics_header}>
                                        {t('home_page.third_tutu')}
                                    </Text>
                                </View>
                                <View style={{ width: getSize.m(40) }}>
                                    <Text style={styles.statistics_header}>
                                        {t('home_page.total')}
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
                            {team?.homepage_info?.yellow_cards?.slice(0, 2)?.map((item, index) => {
                                return (
                                    <LinearGradient
                                        key={item?.player_id}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        colors={[
                                            index % 2 === 0
                                                ? appColors.linearLightRed
                                                : appColors.white,
                                            index % 2 === 0
                                                ? appColors.linearDarkRed
                                                : appColors.white,
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
                                                    width: getSize.m(120),
                                                    overflow: 'hidden',
                                                },
                                            ]}
                                        >
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                }}
                                            >
                                                <Avatar
                                                    source={{ uri: item?.player_image_url }}
                                                    rounded
                                                    size={getSize.m(20)}
                                                />
                                                <Text
                                                    style={[
                                                        styles.statistics_content,
                                                        {
                                                            marginLeft: getSize.m(6),
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
                                        <View style={{ width: getSize.m(40) }}>
                                            {item?.league_cards ? (
                                                <View>
                                                    <FastImage
                                                        source={AppImages.img_ticket_yellow}
                                                        style={styles.img_ticket}
                                                        resizeMode={FastImage.resizeMode.contain}
                                                    />
                                                    <Text style={styles.statistics_content}>
                                                        {item?.league_cards}
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
                                        <View style={{ width: getSize.m(40) }}>
                                            {item?.national_cup_cards ? (
                                                <View>
                                                    <FastImage
                                                        source={AppImages.img_ticket_yellow}
                                                        style={styles.img_ticket}
                                                        resizeMode={FastImage.resizeMode.contain}
                                                    />
                                                    <Text style={styles.statistics_content}>
                                                        {item?.national_cup_cards}
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
                                        <View style={{ width: getSize.m(40) }}>
                                            {item?.toto_cup_cards ? (
                                                <View>
                                                    <FastImage
                                                        source={AppImages.img_ticket_yellow}
                                                        style={styles.img_ticket}
                                                        resizeMode={FastImage.resizeMode.contain}
                                                    />
                                                    <Text style={styles.statistics_content}>
                                                        {item?.toto_cup_cards}
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
                                        <View style={{ width: getSize.m(40) }}>
                                            <View>
                                                <FastImage
                                                    source={AppImages.img_ticket_yellow}
                                                    style={styles.img_ticket}
                                                    resizeMode={FastImage.resizeMode.contain}
                                                />
                                                <Text style={styles.statistics_content}>
                                                    {item?.total_cards}
                                                </Text>
                                            </View>
                                        </View>
                                    </LinearGradient>
                                );
                            })}
                        </View>
                    </View>
                    <View style={{ marginTop: getSize.m(14) }}>
                        <View
                            style={{
                                paddingLeft: getSize.m(10),
                                paddingRight: getSize.m(5),
                            }}
                        >
                            <View style={[appStyles.flex_row_space_center]}>
                                <View style={{ width: getSize.m(120) }}>
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
                                        {t('home_page.red_card')}
                                    </Text>
                                </View>
                                <View style={{ width: getSize.m(40) }}>
                                    <Text style={[styles.statistics_header]}>
                                        {t('home_page.league')}
                                    </Text>
                                </View>
                                <View style={{ width: getSize.m(40) }}>
                                    <Text style={styles.statistics_header}>
                                        {t('home_page.third_country')}
                                    </Text>
                                </View>
                                <View style={{ width: getSize.m(40) }}>
                                    <Text style={styles.statistics_header}>
                                        {t('home_page.third_tutu')}
                                    </Text>
                                </View>
                                <View style={{ width: getSize.m(40) }}>
                                    <Text style={styles.statistics_header}>
                                        {t('home_page.total')}
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
                            {team?.homepage_info?.red_cards?.slice(0, 2)?.map((item, index) => {
                                return (
                                    <LinearGradient
                                        key={item?.player_id}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        colors={[
                                            index % 2 === 0
                                                ? appColors.linearLightRed
                                                : appColors.white,
                                            index % 2 === 0
                                                ? appColors.linearDarkRed
                                                : appColors.white,
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
                                                    width: getSize.m(120),
                                                    overflow: 'hidden',
                                                },
                                            ]}
                                        >
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                }}
                                            >
                                                <Avatar
                                                    source={{ uri: item?.player_image_url }}
                                                    rounded
                                                    size={getSize.m(20)}
                                                />
                                                <Text
                                                    style={[
                                                        styles.statistics_content,
                                                        {
                                                            marginLeft: getSize.m(6),
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
                                        <View style={{ width: getSize.m(40) }}>
                                            {item.league_cards ? (
                                                <View>
                                                    <FastImage
                                                        source={AppImages.img_ticket_red}
                                                        style={styles.img_ticket}
                                                        resizeMode={FastImage.resizeMode.contain}
                                                    />
                                                    <Text
                                                        style={[
                                                            styles.statistics_content,
                                                            { color: appColors.white },
                                                        ]}
                                                    >
                                                        {item?.league_cards}
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
                                        <View style={{ width: getSize.m(40) }}>
                                            {item?.national_cup_cards ? (
                                                <View>
                                                    <FastImage
                                                        source={AppImages.img_ticket_red}
                                                        style={styles.img_ticket}
                                                        resizeMode={FastImage.resizeMode.contain}
                                                    />
                                                    <Text
                                                        style={[
                                                            styles.statistics_content,
                                                            {
                                                                color: appColors.white,
                                                            },
                                                        ]}
                                                    >
                                                        {item?.national_cup_cards}
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
                                        <View style={{ width: getSize.m(40) }}>
                                            {item?.toto_cup_cards ? (
                                                <View>
                                                    <FastImage
                                                        source={AppImages.img_ticket_red}
                                                        style={styles.img_ticket}
                                                        resizeMode={FastImage.resizeMode.contain}
                                                    />
                                                    <Text
                                                        style={[
                                                            styles.statistics_content,
                                                            {
                                                                color: appColors.white,
                                                            },
                                                        ]}
                                                    >
                                                        {item?.toto_cup_cards}
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
                                        <View style={{ width: getSize.m(40) }}>
                                            <View>
                                                <FastImage
                                                    source={AppImages.img_ticket_red}
                                                    style={styles.img_ticket}
                                                    resizeMode={FastImage.resizeMode.contain}
                                                />
                                                <Text
                                                    style={[
                                                        styles.statistics_content,
                                                        { color: appColors.white },
                                                    ]}
                                                >
                                                    {item?.total_cards}
                                                </Text>
                                            </View>
                                        </View>
                                    </LinearGradient>
                                );
                            })}
                        </View>
                    </View>
                </View>
                <View
                    style={[
                        styles.stats_content,
                        {
                            marginLeft: getSize.m(8),
                            marginRight: getSize.m(25),
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
                            <Text style={styles.title_statistic}>{t('home_page.game_table')}</Text>
                        </View>
                        <TouchableOpacity
                            style={appStyles.flex_row_align}
                            onPress={() => onNavigateGameList(team)}
                        >
                            <Text style={styles.text_see_all}>{t('home_page.see_all')}</Text>
                            <IconEntypo
                                name={appIcons.ic_left_ios}
                                size={getSize.m(13)}
                                color={appColors.button_dark_blue}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingHorizontal: getSize.m(10) }}>
                        {team?.homepage_info?.games
                            ?.slice(0, MAX_GAME_IN_FAVORITES_TEAM)
                            .map((item, index) => {
                                return (
                                    <ListGame_Test
                                        // eslint-disable-next-line react/no-array-index-key
                                        key={index}
                                        logo_home={item?.team1?.logo_url}
                                        logo_away={item?.team2?.logo_url}
                                        nameHome={getTranslationText({
                                            textHe: item?.team1?.name_he,
                                            textEn: item?.team1?.name_en,
                                        })}
                                        nameAway={getTranslationText({
                                            textHe: item?.team2?.name_he,
                                            textEn: item?.team2?.name_en,
                                        })}
                                        location={getTranslationText({
                                            textHe: item?.stadium_he,
                                            textEn: item?.stadium_en,
                                        })}
                                        date={item?.date}
                                        result={item?.score}
                                        schedule={item?.time}
                                        icon={appIcons.ic_left_ios}
                                        // completed={item.completed}
                                        details={item?.game_id}
                                        color={appColors.gray2}
                                        handleDetailMatch={() => handleDetailMatch(item?.game_id)}
                                        handleStadium={() => handleStadium(item?.stadium_id)}
                                        isLive={moment().isBetween(
                                            moment(`${item?.date} ${item?.time}`, 'DD.M.YY HH:mm'),
                                            moment(
                                                `${item?.date} ${item?.time}`,
                                                'DD.M.YY HH:mm'
                                            ).add(2, 'hours')
                                        )}
                                        style={{ marginTop: getSize.m(12) }}
                                        personnel={t('home_page.composition')}
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
