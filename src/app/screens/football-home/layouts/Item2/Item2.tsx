import { AppFonts } from '@football/app/assets/fonts';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import styles from '@football/app/screens/football-home/layouts/Item2/Item2.style';
import { useViewModel } from '@football/app/screens/football-home/layouts/Item2/Item2.viewModel';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { GameTable3 } from '@football/app/components/game-table-3/GameTable3';

export const Item2 = () => {
    const { t, pages, activeIndexNumber, setActiveIndexNumber, data_stats, data } = useViewModel(
        {}
    );
    return (
        <ImageBackground
            source={AppImages.img_background_home_2}
            style={[appStyles.flex, { height: getSize.m(528), marginTop: getSize.m(46) }]}
        >
            <View style={appStyles.align_justify}>
                <View style={styles.logo_team}>
                    <FastImage
                        source={AppImages.img_israel}
                        style={{
                            width: getSize.m(58),
                            height: getSize.m(58),
                            borderRadius: getSize.m(62),
                        }}
                    />
                </View>
                <View style={[appStyles.flex_row_align, { marginTop: getSize.m(14) }]}>
                    <Text style={styles.text_details}>מכבי תל אביב בוגרים</Text>
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
                </View>
            </View>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={e => {
                    let slide = Math.round(
                        e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width
                    );
                    if (slide !== activeIndexNumber) {
                        setActiveIndexNumber(slide); //here we will set our active index num
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
                        <TouchableOpacity style={appStyles.flex_row_align}>
                            <Text style={styles.text_see_all}>{t('home_page.see_all')}</Text>
                            <IconEntypo
                                name={appIcons.ic_arrow_left}
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
                            {data_stats.map(item => {
                                return (
                                    <LinearGradient
                                        key={item.id}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        colors={[
                                            item.id % 2 === 1
                                                ? appColors.linearLightRed
                                                : appColors.gray,
                                            item.id % 2 === 1
                                                ? appColors.linearDarkRed
                                                : appColors.gray,
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
                                                    source={item.avt}
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
                                                    {item.gates}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ width: getSize.m(40) }}>
                                            {item.league !== null ? (
                                                <Text style={styles.statistics_content}>
                                                    {item.league}
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
                                            {item.third_country !== null ? (
                                                <Text style={styles.statistics_content}>
                                                    {item.third_country}
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
                                            {item.third_tutu !== null ? (
                                                <Text style={styles.statistics_content}>
                                                    {item.third_tutu}
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
                                                {item.total}
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
                            {data_stats.map(item => {
                                return (
                                    <View
                                        key={item.id}
                                        style={[
                                            appStyles.flex_row_space_center,
                                            appStyles.statistic_row,
                                            {
                                                paddingVertical: getSize.m(5),
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
                                                    source={item.avt}
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
                                                    {item.gates}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ width: getSize.m(40) }}>
                                            {item.league !== null ? (
                                                <View>
                                                    <FastImage
                                                        source={AppImages.img_ticket_yellow}
                                                        style={styles.img_ticket}
                                                        resizeMode={FastImage.resizeMode.contain}
                                                    />
                                                    <Text style={styles.statistics_content}>
                                                        {item.league}
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
                                            {item.third_country !== null ? (
                                                <View>
                                                    <FastImage
                                                        source={AppImages.img_ticket_yellow}
                                                        style={styles.img_ticket}
                                                        resizeMode={FastImage.resizeMode.contain}
                                                    />
                                                    <Text style={styles.statistics_content}>
                                                        {item.third_country}
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
                                            {item.third_tutu !== null ? (
                                                <View>
                                                    <FastImage
                                                        source={AppImages.img_ticket_yellow}
                                                        style={styles.img_ticket}
                                                        resizeMode={FastImage.resizeMode.contain}
                                                    />
                                                    <Text style={styles.statistics_content}>
                                                        {item.third_tutu}
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
                                                    {item.total}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
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
                            {data_stats.map(item => {
                                return (
                                    <View
                                        key={item.id}
                                        style={[
                                            appStyles.flex_row_space_center,
                                            appStyles.statistic_row,
                                            {
                                                paddingVertical: getSize.m(5),
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
                                                    source={item.avt}
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
                                                    {item.gates}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ width: getSize.m(40) }}>
                                            {item.league !== null ? (
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
                                                        {item.league}
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
                                            {item.third_country !== null ? (
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
                                                        {item.third_country}
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
                                            {item.third_tutu !== null ? (
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
                                                        {item.third_tutu}
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
                                                    {item.total}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
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
                    <View>
                        {data.map((item, index) => {
                            return (
                                <GameTable3
                                    key={item.id}
                                    name_away={item.name_away}
                                    name_home={item.name_home}
                                    avt_away={item.avt_away}
                                    avt_home={item.avt_home}
                                    result={item.result}
                                    schedule={item.schedule}
                                    location={item.location}
                                    isLive={item.isLive}
                                    date={item.date}
                                    minute={item.minute}
                                />
                            );
                        })}
                    </View>
                </View>
            </ScrollView>
            <View style={styles.dotContainer}>
                {pages.map((_, index) => {
                    return (
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
                            ></View>
                        </View>
                    );
                })}
            </View>
        </ImageBackground>
    );
};
