/* eslint-disable no-underscore-dangle */
import { AppFonts } from '@football/app/assets/fonts';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { GameTable } from '@football/app/components/game_table/GameTable';
import { ListGame } from '@football/app/components/list-game/ListGame';
import styles from '@football/app/screens/football-home/layouts/Item5/Item5.style';
import { useViewModel } from '@football/app/screens/football-home/layouts/Item5/Item5.viewModel';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import moment from 'moment';
import React from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { IItem5Props } from './Item5.type';

export const Item5 = ({ topTeam }: IItem5Props) => {
    const {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        handleStadium,
        onClickTopTeam,
        handleDetailMatch,
    } = useViewModel();
    return (
        <ImageBackground
            source={AppImages.img_background_home_4}
            style={[appStyles.flex, { height: getSize.m(528), marginTop: getSize.m(46) }]}
        >
            <View style={appStyles.align_justify}>
                <View style={styles.logo_team}>
                    <FastImage
                        source={{ uri: topTeam.logo_url }}
                        style={{
                            width: getSize.m(58),
                            height: getSize.m(58),
                            borderRadius: getSize.m(62),
                        }}
                    />
                </View>
                <View style={[appStyles.flex_row_align, { marginTop: getSize.m(14) }]}>
                    <Text style={styles.text_details}>{topTeam.name_he}</Text>
                    <TouchableOpacity onPress={() => onClickTopTeam(topTeam._id)}>
                        <LinearGradient
                            colors={['rgba(255, 43, 94, 1)', 'rgba(204, 10, 45, 1)']}
                            style={styles.icon_arrow_left}
                        >
                            <FastImage
                                source={AppImages.img_angle_down}
                                style={{ width: getSize.m(9), height: getSize.m(12) }}
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
                            onPress={() => onClickTopTeam(topTeam._id)}
                        >
                            <Text style={styles.text_see_all}>{t('home_page.see_all')}</Text>
                            <IconEntypo
                                name={appIcons.ic_arrow_left}
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
                                {topTeam?.homepage_info?.goal_kickers.map((item, index) => {
                                    return (
                                        <LinearGradient
                                            key={item.player_id}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 1 }}
                                            colors={[
                                                index % 2 === 0
                                                    ? 'rgba(16, 32, 100, 0.04)'
                                                    : appColors.white,
                                                index % 2 !== 0
                                                    ? 'rgba(59, 168, 225, 0.04)'
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
                                                        width: getSize.m(160),
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
                                                        source={{ uri: item.player_image_url }}
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
                                                        {item.player_name_he}
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{ width: getSize.m(50) }}>
                                                {item.games !== null && (
                                                    <Text style={styles.statistics_content}>
                                                        {item.games}
                                                    </Text>
                                                )}
                                            </View>
                                            <View style={{ width: getSize.m(50) }}>
                                                {item.goals !== null && (
                                                    <Text style={styles.statistics_content}>
                                                        {item.goals}
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
                                {topTeam?.homepage_info?.cards.map((item, index) => {
                                    return (
                                        <LinearGradient
                                            key={item.player_id}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 1 }}
                                            colors={[
                                                index % 2 === 0
                                                    ? 'rgba(16, 32, 100, 0.04)'
                                                    : appColors.white,
                                                index % 2 !== 0
                                                    ? 'rgba(59, 168, 225, 0.04)'
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
                                                        width: getSize.m(160),
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
                                                        source={{ uri: item.player_image_url }}
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
                                                        {item.player_name_he}
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{ width: getSize.m(50) }}>
                                                {item.yellow_cards !== null && (
                                                    <View>
                                                        <FastImage
                                                            source={AppImages.img_ticket_yellow}
                                                            style={styles.img_ticket}
                                                            resizeMode={
                                                                FastImage.resizeMode.contain
                                                            }
                                                        />
                                                        <Text style={styles.statistics_content}>
                                                            {item.yellow_cards}
                                                        </Text>
                                                    </View>
                                                )}
                                            </View>
                                            <View style={{ width: getSize.m(50) }}>
                                                {item.red_cards !== null && (
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
                                                            {item.red_cards}
                                                        </Text>
                                                    </View>
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
                                source={AppImages.img_light_volleyball}
                                style={{
                                    width: getSize.m(14),
                                    height: getSize.m(14),
                                }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                            <Text style={styles.title_statistic}>{t('home_page.game_table')}</Text>
                        </View>
                        <TouchableOpacity style={appStyles.flex_row_align}>
                            <Text style={styles.text_see_all}>{t('home_page.see_all')}</Text>
                            <IconEntypo
                                name={appIcons.ic_arrow_left}
                                size={getSize.m(13)}
                                color={appColors.button_dark_blue}
                            />
                        </TouchableOpacity>
                    </View>
                    {/* <GameTable
                        date="יום רביעי | 13/09/22"
                        avt_away={AppImages.img_club}
                        avt_home={AppImages.img_club}
                        location="טרם ידוע"
                        name_away="מכבי תל אביב"
                        name_home="מכבי תל אביב"
                        result="3 : 1"
                        schedule="11:30"
                    /> */}

                    {topTeam.homepage_info.games.map(item => {
                        return (
                            <ListGame
                                key={item.game_id}
                                logo_home={item.team1.logo_url}
                                logo_away={item.team2.logo_url}
                                nameHome={item.team1.name_he}
                                nameAway={item.team2.name_he}
                                location={item.stadium_he}
                                date={item.date}
                                result={item.score}
                                schedule={item.time}
                                // completed={item.completed}
                                color={appColors.text_dark_blue}
                                handleDetailMatch={() => handleDetailMatch(item.game_id)}
                                handleStadium={() => handleStadium(item.stadium_id)}
                                isLive={moment().isBetween(
                                    moment(`${item.date} ${item.time}`, 'DD.M.YY HH:mm'),
                                    moment(`${item.date} ${item.time}`, 'DD.M.YY HH:mm').add(
                                        2,
                                        'hours'
                                    )
                                )}
                                style={{ marginTop: getSize.m(12) }}
                            />
                        );
                    })}
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
                                                ? appColors.light_gray
                                                : appColors.soft_grey,
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
