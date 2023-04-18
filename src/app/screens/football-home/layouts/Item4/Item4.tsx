import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import styles from '@football/app/screens/football-home/layouts/Item4/Item4.style';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { ImageBackground, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { useViewModel } from '@football/app/screens/football-home/layouts/Item4/Item4.viewModel';
import { appColors } from '@football/app/utils/constants/appColors';
import { GameTable2 } from '@football/app/components/game-table-2/GameTable2';

export const Item4 = () => {
    const { t, pages, activeIndexNumber, setActiveIndexNumber, datas } = useViewModel({});
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
                            <Text style={styles.title_statistic}>{t('home_page.game_season')}</Text>
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
                    {datas.map((item, index) => {
                        return (
                            <GameTable2
                                key={item.id}
                                date={item.date}
                                name_away={item.name_away}
                                name_home={item.name_home}
                                result={item.result}
                                schedule={item.schedule}
                                avt_away={AppImages.img_club}
                                avt_home={AppImages.img_club}
                                clock={item.clock}
                                ticket={item.ticket}
                                score={item.score}
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
                        <View
                            style={{
                                marginTop: getSize.m(20),
                            }}
                        >
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
                                    <Text style={styles.title}>{t('home_page.league')}</Text>
                                </View>
                                <View style={appStyles.align_justify}>
                                    <Text>-</Text>
                                    <Text style={styles.title}>{t('home_page.state_cup')}</Text>
                                </View>
                                <View style={appStyles.align_justify}>
                                    <Text style={styles.content}>2</Text>
                                    <Text style={styles.title}>{t('home_page.toto_cup')}</Text>
                                </View>
                                <View style={appStyles.align_justify}>
                                    <Text style={styles.content}>5</Text>
                                    <Text style={styles.title}>{t('home_page.total')}</Text>
                                </View>
                            </View>
                        </View>
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
                                        <Text style={styles.content_ticket}>3</Text>
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
                                        <Text style={styles.content_ticket}>3</Text>
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
                                        <Text style={styles.content_ticket}>3</Text>
                                    </View>
                                    <Text style={styles.title}>{t('home_page.toto_cup')}</Text>
                                </View>
                                <View style={appStyles.align_justify}>
                                    <Text style={styles.content}>9</Text>
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
                                            3
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
                                            3
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
                                            3
                                        </Text>
                                    </View>
                                    <Text style={styles.title}>{t('home_page.toto_cup')}</Text>
                                </View>
                                <View style={appStyles.align_justify}>
                                    <Text style={styles.content}>9</Text>
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
