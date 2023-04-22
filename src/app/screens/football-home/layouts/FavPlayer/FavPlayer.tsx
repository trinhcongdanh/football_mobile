/* eslint-disable no-underscore-dangle */
import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import styles from '@football/app/screens/football-home/layouts/FavPlayer/FavPlayer.style';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import {
    ImageBackground,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    I18nManager,
} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { useViewModel } from '@football/app/screens/football-home/layouts/FavPlayer/FavPlayer.viewModel';
import { appColors } from '@football/app/utils/constants/appColors';
import { GameTable1 } from '@football/app/components/game-table-1/GameTable1';
import { IFavPlayerProps } from './FavPlayer.type';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { MAX_FAVORITES_PLAYER } from '@football/core/api/configs/config';

export const FavPlayer = ({ player, color }: IFavPlayerProps) => {
    const {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        onClickPlayer,
        handleDetailMatch,
    } = useViewModel();
    const { getTranslationText } = useTranslationText();

    return (
        <ImageBackground
            source={AppImages.img_decoration_background_2}
            style={[appStyles.flex, { width: '100%', height: '60%', marginTop: getSize.m(46) }]}
            imageStyle={{ tintColor: color, opacity: 0.1 }}
        >
            {/* <FastImage
                source={AppImages.img_decoration_background_2}
                tintColor={color}
                style={{ height: '100%', width: '100%', position: 'absolute' }}
            /> */}
            <View style={[appStyles.align_justify]}>
                <View style={styles.logo_team}>
                    <FastImage
                        source={{ uri: player?.image_url }}
                        style={{
                            width: getSize.m(58),
                            height: getSize.m(58),
                            borderRadius: getSize.m(62),
                        }}
                    />
                </View>
                <View style={[appStyles.flex_row_align, { marginTop: getSize.m(14) }]}>
                    <Text numberOfLines={1} style={styles.text_details}>
                        {getTranslationText({
                            textHe: player?.name_he,
                            textEn: player?.name_en,
                        })}
                    </Text>

                    <TouchableOpacity onPress={() => onClickPlayer(player?._id)}>
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
                        setActiveIndexNumber(slide);
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
                                source={AppImages.img_ball_light_gray}
                                style={{
                                    width: getSize.m(14),
                                    height: getSize.m(14),
                                }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                            <Text style={styles.title_statistic}>
                                {player?.homepage_info?.season_name}
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={appStyles.flex_row_align}
                            onPress={() => onClickPlayer(player?._id)}
                        >
                            <Text style={styles.text_see_all}>{t('home_page.see_all')}</Text>
                            <IconEntypo
                                name={appIcons.ic_left_ios}
                                size={getSize.m(13)}
                                color={appColors.button_dark_blue}
                            />
                        </TouchableOpacity>
                    </View>
                    {player?.homepage_info?.games?.slice(0, 2).map(game => {
                        return (
                            <GameTable1
                                key={game?.game_id}
                                date={game?.date}
                                name_away={getTranslationText({
                                    textHe: game?.team2?.name_he,
                                    textEn: game?.team2?.name_en,
                                })}
                                name_home={getTranslationText({
                                    textHe: game?.team1?.name_he,
                                    textEn: game?.team1?.name_en,
                                })}
                                result={game?.score}
                                schedule=":"
                                avt_away={game?.team2?.logo_url}
                                avt_home={game?.team1?.logo_url}
                                clock={`${game?.minutes_played || 0}`}
                                ticket_red={`${game?.red_cards || 0}`}
                                ticket_yellow={`${game?.yellow_cards || 0}`}
                                score={`${game?.goals || 0}`}
                                onHandleDetailMatch={() => handleDetailMatch(game?.game_id)}
                            />
                        );
                    })}
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
                        <View style={[appStyles.flex_row_align]}>
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
                            onPress={() => onClickPlayer(player?._id)}
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
                            <View style={{ marginLeft: getSize.m(16) }}>
                                <Text style={styles.label}> {t('home_page.gates')}</Text>
                            </View>
                            <View
                                style={[
                                    appStyles.flex_row_space_center,
                                    {
                                        marginHorizontal: getSize.m(37),
                                        marginTop: getSize.m(20),
                                    },
                                ]}
                            >
                                <View style={appStyles.align_justify}>
                                    <Text style={styles.content}>
                                        {player?.homepage_info?.goals.league_goals}
                                    </Text>
                                    <Text style={styles.title}>{t('home_page.league')}</Text>
                                </View>
                                <View style={appStyles.align_justify}>
                                    <Text style={styles.content}>
                                        {player?.homepage_info?.goals.national_cup_goals}
                                    </Text>
                                    <Text style={styles.title}>{t('home_page.state_cup')}</Text>
                                </View>
                                <View style={appStyles.align_justify}>
                                    <Text style={styles.content}>
                                        {player?.homepage_info?.goals.toto_cup_goals}
                                    </Text>
                                    <Text style={styles.title}>{t('home_page.toto_cup')}</Text>
                                </View>

                                <View style={appStyles.align_justify}>
                                    <Text style={styles.content}>
                                        {player?.homepage_info?.goals.total_goals}
                                    </Text>
                                    <Text style={styles.title}>{t('home_page.total_goals')}</Text>
                                </View>
                            </View>
                        </View>
                        {/* <View style={{ marginTop: getSize.m(20) }}>
                            <View style={{ marginLeft: getSize.m(16) }}>
                                <Text style={styles.label}> {t('home_page.tickets')}</Text>
                            </View>
                            <View
                                style={[
                                    appStyles.flex_row_space_center,
                                    {
                                        marginHorizontal: getSize.m(37),
                                        marginTop: getSize.m(20),
                                    },
                                ]}
                            >
                                <View style={appStyles.align_justify}>
                                    <FastImage
                                        source={AppImages.img_ticket_white_1}
                                        style={{ width: getSize.m(24), height: getSize.m(27) }}
                                        resizeMode={FastImage.resizeMode.contain}
                                    />
                                    <Text style={styles.title}>גביע המדינה</Text>
                                </View>
                                <View style={appStyles.align_justify}>
                                    <View style={appStyles.flex_row_align}>
                                        <Text style={styles.content_ticket}>
                                            x{player.homepage_info?.yellow_cards?.total_cards}
                                        </Text>
                                        <FastImage
                                            source={AppImages.img_ticket_red_1}
                                            style={{ width: getSize.m(24), height: getSize.m(27) }}
                                            resizeMode={FastImage.resizeMode.contain}
                                        />
                                    </View>
                                    <Text style={styles.title}>גביע המדינה</Text>
                                </View>
                                <View style={appStyles.align_justify}>
                                    <View style={appStyles.flex_row_align}>
                                        <Text style={styles.content_ticket}>
                                            x{player.homepage_info?.red_cards?.total_cards}
                                        </Text>
                                        <FastImage
                                            source={AppImages.img_ticket_yellow_1}
                                            style={{ width: getSize.m(24), height: getSize.m(27) }}
                                            resizeMode={FastImage.resizeMode.contain}
                                        />
                                    </View>
                                    <Text style={styles.title}>גביע הטוטו</Text>
                                </View>
                            </View>
                        </View> */}
                        <View style={styles.line} />
                        <View style={{ marginTop: getSize.m(20) }}>
                            <View style={{ marginLeft: getSize.m(16) }}>
                                <Text style={styles.label}> {t('home_page.yellow_card')}</Text>
                            </View>
                            <View
                                style={[
                                    appStyles.flex_row_space_center,
                                    {
                                        marginHorizontal: getSize.m(37),
                                        marginTop: getSize.m(20),
                                    },
                                ]}
                            >
                                <View style={appStyles.align_justify}>
                                    <View style={{ marginBottom: getSize.m(3) }}>
                                        <FastImage
                                            source={AppImages.img_ticket_yellow}
                                            resizeMode={FastImage.resizeMode.contain}
                                            style={styles.ticket}
                                        />
                                        <Text style={styles.content_ticket}>
                                            {player?.homepage_info?.yellow_cards?.league_cards}
                                        </Text>
                                    </View>
                                    <Text style={styles.title}>{t('home_page.league')}</Text>
                                </View>
                                <View style={appStyles.align_justify}>
                                    <View style={{ marginBottom: getSize.m(3) }}>
                                        <FastImage
                                            source={AppImages.img_ticket_yellow}
                                            resizeMode={FastImage.resizeMode.contain}
                                            style={styles.ticket}
                                        />
                                        <Text style={styles.content_ticket}>
                                            {
                                                player?.homepage_info?.yellow_cards
                                                    ?.national_cup_cards
                                            }
                                        </Text>
                                    </View>
                                    <Text style={styles.title}>{t('home_page.state_cup')}</Text>
                                </View>
                                <View style={appStyles.align_justify}>
                                    <View style={{ marginBottom: getSize.m(3) }}>
                                        <FastImage
                                            source={AppImages.img_ticket_yellow}
                                            resizeMode={FastImage.resizeMode.contain}
                                            style={styles.ticket}
                                        />
                                        <Text style={styles.content_ticket}>
                                            {player?.homepage_info?.yellow_cards?.toto_cup_cards}
                                        </Text>
                                    </View>
                                    <Text style={styles.title}>{t('home_page.toto_cup')}</Text>
                                </View>
                                <View style={appStyles.align_justify}>
                                    <Text style={styles.content}>
                                        {player?.homepage_info?.yellow_cards?.total_cards}
                                    </Text>
                                    <Text style={styles.title}>{t('home_page.total')}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.line} />
                        <View style={{ marginTop: getSize.m(20) }}>
                            <View style={{ marginLeft: getSize.m(16) }}>
                                <Text style={styles.label}> {t('home_page.red_card')}</Text>
                            </View>
                            <View
                                style={[
                                    appStyles.flex_row_space_center,
                                    {
                                        marginHorizontal: getSize.m(37),
                                        marginTop: getSize.m(20),
                                    },
                                ]}
                            >
                                <View style={appStyles.align_justify}>
                                    <View style={{ marginBottom: getSize.m(3) }}>
                                        <FastImage
                                            source={AppImages.img_ticket_red}
                                            resizeMode={FastImage.resizeMode.contain}
                                            style={styles.ticket}
                                        />
                                        <Text
                                            style={[
                                                styles.content_ticket,
                                                {
                                                    color: appColors.white,
                                                },
                                            ]}
                                        >
                                            {player?.homepage_info?.red_cards?.league_cards}
                                        </Text>
                                    </View>
                                    <Text style={styles.title}>{t('home_page.league')}</Text>
                                </View>
                                <View style={appStyles.align_justify}>
                                    <View style={{ marginBottom: getSize.m(3) }}>
                                        <FastImage
                                            source={AppImages.img_ticket_red}
                                            resizeMode={FastImage.resizeMode.contain}
                                            style={styles.ticket}
                                        />
                                        <Text
                                            style={[
                                                styles.content_ticket,
                                                {
                                                    color: appColors.white,
                                                },
                                            ]}
                                        >
                                            {player?.homepage_info?.red_cards?.national_cup_cards}
                                        </Text>
                                    </View>
                                    <Text style={styles.title}>{t('home_page.state_cup')}</Text>
                                </View>
                                <View style={appStyles.align_justify}>
                                    <View style={{ marginBottom: getSize.m(3) }}>
                                        <FastImage
                                            source={AppImages.img_ticket_red}
                                            resizeMode={FastImage.resizeMode.contain}
                                            style={styles.ticket}
                                        />
                                        <Text
                                            style={[
                                                styles.content_ticket,
                                                {
                                                    color: appColors.white,
                                                },
                                            ]}
                                        >
                                            {player?.homepage_info?.red_cards?.toto_cup_cards}
                                        </Text>
                                    </View>
                                    <Text style={styles.title}>{t('home_page.toto_cup')}</Text>
                                </View>
                                <View style={appStyles.align_justify}>
                                    <Text style={styles.content}>
                                        {player?.homepage_info?.red_cards?.total_cards}
                                    </Text>
                                    <Text style={styles.title}>{t('home_page.total')}</Text>
                                </View>
                            </View>
                        </View>
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
