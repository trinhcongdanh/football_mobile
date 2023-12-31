import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import styles from '@football/app/screens/football-home/layouts/Item3/Item3.style';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { ImageBackground, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { useViewModel } from '@football/app/screens/football-home/layouts/Item3/Item3.viewModel';
import { appColors } from '@football/app/utils/constants/appColors';
import { GameTable1 } from '@football/app/components/game-table-1/GameTable1';

export const Item3 = () => {
    const { t, pages, activeIndexNumber, setActiveIndexNumber } = useViewModel({});
    return (
        <ImageBackground
            source={AppImages.img_background_home_3}
            style={[appStyles.flex, { height: getSize.m(528), marginTop: getSize.m(46) }]}
        >
            <View style={appStyles.align_justify}>
                <View style={styles.logo_team}>
                    <FastImage
                        source={AppImages.img_avt_player}
                        style={{
                            width: getSize.m(58),
                            height: getSize.m(58),
                            borderRadius: getSize.m(62),
                        }}
                    />
                </View>
                <View style={[appStyles.flex_row_align, { marginTop: getSize.m(14) }]}>
                    <Text style={styles.text_details}>דוד קלטינס</Text>
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
                                source={AppImages.img_light_volleyball}
                                style={{
                                    width: getSize.m(14),
                                    height: getSize.m(14),
                                }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                            <Text style={styles.title_statistic}>משחקים בעונה 21/22</Text>
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
                    <GameTable1
                        date="14.09.22"
                        name_away="הפועל ב״ש"
                        name_home="הפועל ב״ש"
                        result="3 : 1"
                        schedule=":"
                        avt_away={AppImages.img_club}
                        avt_home={AppImages.img_club}
                        clock="45 דק׳"
                        ticket_red="1"
                        ticket_yellow="2"
                        score="3"
                    />
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
                                    <Text style={styles.content}>3</Text>
                                    <Text style={styles.title}>ליגת העל</Text>
                                </View>
                                <View style={appStyles.align_justify}>
                                    <Text>-</Text>
                                    <Text style={styles.title}>גביע המדינה</Text>
                                </View>
                                <View style={appStyles.align_justify}>
                                    <Text style={styles.content}>2</Text>
                                    <Text style={styles.title}>גביע הטוטו</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: getSize.m(20) }}>
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
                                        <Text style={styles.content_ticket}>x2</Text>
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
                                        <Text style={styles.content_ticket}>x2</Text>
                                        <FastImage
                                            source={AppImages.img_ticket_yellow_1}
                                            style={{ width: getSize.m(24), height: getSize.m(27) }}
                                            resizeMode={FastImage.resizeMode.contain}
                                        />
                                    </View>
                                    <Text style={styles.title}>גביע הטוטו</Text>
                                </View>
                            </View>
                        </View>
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
                                                ? appColors.light_gray
                                                : appColors.soft_grey,
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
