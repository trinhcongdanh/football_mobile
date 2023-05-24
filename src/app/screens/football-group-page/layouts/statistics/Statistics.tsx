import { appIcons } from '@football/app/assets/icons/appIcons';
import styles from '@football/app/screens/football-group-page/layouts/statistics/Statistics.style';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { getSize } from '@football/app/utils/responsive/scale';
import { Statistic } from '@football/core/models/TeamSeasonResponse';
import React from 'react';
import { I18nManager, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { IStatisticsProps } from './Statistics.type';
import { useViewModel } from './Statistics.viewModel';

export const Statistics = ({ data }: IStatisticsProps) => {
    const {
        t,
        activeIndexNumber,
        setActiveIndexNumber,
        dots,
        handleNextRightSlide,
        handleNextLeftSlide,
        onNavigateDataPlayer,
    } = useViewModel();

    const { getTranslationText } = useTranslationText();

    return (
        <View>
            <Text style={[appStyles.text_topic, { marginLeft: getSize.m(6) }]}>
                {t('group_page.statistics.title')}
            </Text>
            <View style={{ marginTop: getSize.m(0), marginBottom: getSize.m(21) }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginTop: I18nManager.isRTL ? getSize.m(8) : getSize.m(22) }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                                paddingHorizontal: getSize.m(10),
                                marginTop: getSize.m(6.5),
                            }}
                        >
                            <View style={{ width: getSize.m(120) }}>
                                <Text style={[appStyles.statistics_header, { textAlign: 'left' }]}>
                                    {t('group_page.statistics.player')}
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginTop: getSize.m(7.5) }}>
                            {data?.map((item: Statistic, index) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => onNavigateDataPlayer(item.player_id)}
                                        key={item.player_id}
                                    >
                                        <LinearGradient
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 1 }}
                                            colors={
                                                index % 2 === 0
                                                    ? [appColors.linearLight, appColors.linearLight]
                                                    : [appColors.gray, appColors.gray]
                                            }
                                            style={[
                                                appStyles.align_justify,
                                                {
                                                    paddingHorizontal: getSize.m(10),
                                                    height: getSize.m(30),
                                                },
                                            ]}
                                        >
                                            <View style={{ width: getSize.m(120) }}>
                                                <View style={appStyles.flex_row_align}>
                                                    <Avatar
                                                        source={{ uri: item.player_image_url }}
                                                        rounded
                                                        size={getSize.m(17.33)}
                                                    />
                                                    <Text
                                                        numberOfLines={1}
                                                        style={[
                                                            appStyles.statistics_content,
                                                            {
                                                                marginLeft: getSize.m(10),
                                                                fontSize: getSize.m(13),
                                                                textAlign: 'left',
                                                            },
                                                        ]}
                                                    >
                                                        {getTranslationText({
                                                            textHe: item.player_name_he,
                                                            textEn: item.player_name_en,
                                                        })}
                                                    </Text>
                                                </View>
                                            </View>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>

                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            top: getSize.m(24),
                            left: getSize.m(130),
                            transform: [{ rotate: I18nManager.isRTL ? '0deg' : '180deg' }],
                        }}
                        onPress={handleNextRightSlide}
                    >
                        <IconAntDesign
                            name={appIcons.ic_caretright}
                            size={getSize.m(10)}
                            color={
                                activeIndexNumber === (Platform.OS === 'ios' ? 0 : 2)
                                    ? '#D9D9D9'
                                    : appColors.blue_light
                            }
                        />
                    </TouchableOpacity>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        snapToInterval={getSize.m(194)}
                        showsHorizontalScrollIndicator={false}
                        onScroll={e => {
                            const slide = Math.round(
                                e.nativeEvent.contentOffset.x /
                                    e.nativeEvent.layoutMeasurement.width
                            );
                            if (slide !== activeIndexNumber) {
                                setActiveIndexNumber(slide); // here we will set our active index num
                            }
                        }}
                    >
                        <View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'flex-end',
                                    paddingHorizontal: getSize.m(10),
                                }}
                            >
                                <View
                                    style={{
                                        width: getSize.m(56),
                                        marginHorizontal: getSize.m(4),
                                    }}
                                >
                                    <Text style={appStyles.statistics_header}>
                                        {t('group_page.statistics.number_game')}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: getSize.m(56),
                                        marginHorizontal: getSize.m(4),
                                    }}
                                >
                                    <Text style={appStyles.statistics_header}>
                                        {t('group_page.statistics.gates')}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: getSize.m(56),
                                        marginHorizontal: getSize.m(4),
                                    }}
                                >
                                    <Text style={appStyles.statistics_header}>
                                        {t('group_page.statistics.yellow_league_cup')}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: getSize.m(56),
                                        marginHorizontal: getSize.m(4),
                                    }}
                                >
                                    <Text style={appStyles.statistics_header}>
                                        {t('group_page.statistics.yellow_tutu')}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: getSize.m(56),
                                        marginHorizontal: getSize.m(4),
                                    }}
                                >
                                    <Text style={appStyles.statistics_header}>
                                        {t('group_page.statistics.red_card')}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: getSize.m(56),
                                        marginHorizontal: getSize.m(4),
                                    }}
                                >
                                    <Text style={appStyles.statistics_header}>
                                        {t('group_page.statistics.vehicle')}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: getSize.m(56),
                                        marginHorizontal: getSize.m(4),
                                    }}
                                >
                                    <Text style={appStyles.statistics_header}>
                                        {t('group_page.statistics.enter_replacement')}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: getSize.m(56),
                                        marginHorizontal: getSize.m(4),
                                    }}
                                >
                                    <Text style={appStyles.statistics_header}>
                                        {t('group_page.statistics.switched')}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: getSize.m(56),
                                        marginHorizontal: getSize.m(4),
                                    }}
                                >
                                    <Text style={appStyles.statistics_header}>
                                        {t('group_page.statistics.subtlety')}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ marginTop: getSize.m(7.5) }}>
                                {data.map((item: Statistic, index) => {
                                    return (
                                        <LinearGradient
                                            colors={
                                                index % 2 === 0
                                                    ? [appColors.linearLight, appColors.linearLight]
                                                    : [appColors.gray, appColors.gray]
                                            }
                                            style={[
                                                appStyles.flex_row_align,
                                                {
                                                    paddingHorizontal: getSize.m(10),
                                                    height: getSize.m(30),
                                                },
                                            ]}
                                            key={item.player_id}
                                        >
                                            <View
                                                style={{
                                                    width: getSize.m(56),
                                                    marginHorizontal: getSize.m(4),
                                                }}
                                            >
                                                <Text
                                                    style={[
                                                        appStyles.statistics_content,
                                                        { fontSize: getSize.m(13) },
                                                    ]}
                                                >
                                                    {item.games}
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    width: getSize.m(56),
                                                    marginHorizontal: getSize.m(4),
                                                }}
                                            >
                                                <Text
                                                    style={[
                                                        appStyles.statistics_content,
                                                        { fontSize: getSize.m(13) },
                                                    ]}
                                                >
                                                    {item.goals}
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    width: getSize.m(56),
                                                    marginHorizontal: getSize.m(4),
                                                }}
                                            >
                                                <Text
                                                    style={[
                                                        appStyles.statistics_content,
                                                        { fontSize: getSize.m(13) },
                                                    ]}
                                                >
                                                    {item.yellow_cards_league}
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    width: getSize.m(56),
                                                    marginHorizontal: getSize.m(4),
                                                }}
                                            >
                                                <Text
                                                    style={[
                                                        appStyles.statistics_content,
                                                        { fontSize: getSize.m(13) },
                                                    ]}
                                                >
                                                    {item.yellow_cards_toto}
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    width: getSize.m(56),
                                                    marginHorizontal: getSize.m(4),
                                                }}
                                            >
                                                <Text
                                                    style={[
                                                        appStyles.statistics_content,
                                                        { fontSize: getSize.m(13) },
                                                    ]}
                                                >
                                                    {item.red_cards}
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    width: getSize.m(56),
                                                    marginHorizontal: getSize.m(4),
                                                }}
                                            >
                                                <Text
                                                    style={[
                                                        appStyles.statistics_content,
                                                        { fontSize: getSize.m(13) },
                                                    ]}
                                                >
                                                    {item.opening}
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    width: getSize.m(56),
                                                    marginHorizontal: getSize.m(4),
                                                }}
                                            >
                                                <Text
                                                    style={[
                                                        appStyles.statistics_content,
                                                        { fontSize: getSize.m(13) },
                                                    ]}
                                                >
                                                    {item.substitutes}
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    width: getSize.m(56),
                                                    marginHorizontal: getSize.m(4),
                                                }}
                                            >
                                                <Text
                                                    style={[
                                                        appStyles.statistics_content,
                                                        { fontSize: getSize.m(13) },
                                                    ]}
                                                >
                                                    {item.substituted}
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    width: getSize.m(56),
                                                    marginHorizontal: getSize.m(4),
                                                }}
                                            >
                                                <Text
                                                    style={[
                                                        appStyles.statistics_content,
                                                        { fontSize: getSize.m(13) },
                                                    ]}
                                                >
                                                    {item.minutes_playing}
                                                </Text>
                                            </View>
                                        </LinearGradient>
                                    );
                                })}
                            </View>
                        </View>
                    </ScrollView>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            top: getSize.m(24),
                            right: getSize.m(2),
                            transform: [{ rotate: I18nManager.isRTL ? '0deg' : '180deg' }],
                        }}
                        onPress={handleNextLeftSlide}
                    >
                        <IconAntDesign
                            name={appIcons.ic_caretleft}
                            size={getSize.m(10)}
                            color={
                                activeIndexNumber === (Platform.OS === 'ios' ? 2 : 0)
                                    ? '#D9D9D9'
                                    : appColors.blue_light
                            }
                        />
                    </TouchableOpacity>
                    <View style={styles.dotContainer}>
                        {dots.map((_, index) => {
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
                                                        ? appColors.blue_light
                                                        : appColors.soft_grey,
                                            },
                                        ]}
                                    />
                                </View>
                            );
                        })}
                    </View>
                </View>
            </View>
        </View>
    );
};
