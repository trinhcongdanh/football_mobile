import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { appColors } from '@football/app/utils/constants/appColors';
import { Avatar } from 'react-native-elements';
import { useViewModel } from './Statistics.viewModel';
import styles from '@football/app/screens/football-group-page/layouts/statistics/Statistics.style';
import { appIcons } from '@football/app/assets/icons/appIcons';
import LinearGradient from 'react-native-linear-gradient';

export const Statistics = () => {
    const {
        t,
        statistics,
        players,
        activeIndexNumber,
        setActiveIndexNumber,
        dots,
        handleNextRightSlide,
        handleNextLeftSlide,
        onNavigateDataPlayer,
    } = useViewModel({});

    return (
        <View>
            <Text style={[appStyles.text_topic, { marginLeft: getSize.m(6) }]}>
                {t('group_page.statistics.title')}
            </Text>
            <View style={{ marginTop: getSize.m(30), marginBottom: getSize.m(21) }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginTop: getSize.m(8) }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                                paddingHorizontal: getSize.m(10),
                            }}
                        >
                            <View style={{ width: getSize.m(120) }}>
                                <Text style={[appStyles.statistics_header, { textAlign: 'left' }]}>
                                    {t('group_page.statistics.player')}
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginTop: getSize.m(14) }}>
                            {players.map(item => {
                                return (
                                    <TouchableOpacity onPress={onNavigateDataPlayer} key={item.id}>
                                        <LinearGradient
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 1 }}
                                            colors={[
                                                item.id % 2 === 1
                                                    ? 'rgba(16, 32, 100, 0.04)'
                                                    : appColors.white,
                                                item.id % 2 === 1
                                                    ? 'rgba(59, 168, 225, 0.04)'
                                                    : appColors.white,
                                            ]}
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
                                                        source={item.avt}
                                                        rounded
                                                        size={getSize.m(17.33)}
                                                    />
                                                    <Text
                                                        style={[
                                                            appStyles.statistics_content,
                                                            {
                                                                marginLeft: getSize.m(10),
                                                                fontSize: getSize.m(13),
                                                            },
                                                        ]}
                                                    >
                                                        {item.player}
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
                        style={{ position: 'absolute', top: getSize.m(10), left: getSize.m(130) }}
                        onPress={handleNextRightSlide}
                    >
                        <IconAntDesign
                            name={appIcons.ic_caretright}
                            size={getSize.m(10)}
                            color={activeIndexNumber === 2 ? '#D9D9D9' : appColors.blue_light}
                        />
                    </TouchableOpacity>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        snapToInterval={getSize.m(194)}
                        showsHorizontalScrollIndicator={false}
                        onScroll={e => {
                            let slide = Math.round(
                                e.nativeEvent.contentOffset.x /
                                    e.nativeEvent.layoutMeasurement.width
                            );
                            if (slide !== activeIndexNumber) {
                                setActiveIndexNumber(slide); //here we will set our active index num
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
                            <View style={{ marginTop: getSize.m(8) }}>
                                {statistics.map(item => {
                                    return (
                                        <LinearGradient
                                            colors={[
                                                item.id % 2 === 1
                                                    ? 'rgba(16, 32, 100, 0.04)'
                                                    : appColors.gray,
                                                item.id % 2 === 1
                                                    ? 'rgba(59, 168, 225, 0.04)'
                                                    : appColors.gray,
                                            ]}
                                            style={[
                                                appStyles.flex_row_align,
                                                {
                                                    paddingHorizontal: getSize.m(10),
                                                    height: getSize.m(30),
                                                },
                                            ]}
                                            key={item.id}
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
                                                    {item.number_game}
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
                                                    {item.gates}
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
                                                    {item.yellow_league_cup}
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
                                                    {item.yellow_tutu}
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
                                                    {item.red_card}
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
                                                    {item.vehicle}
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
                                                    {item.enter_replacement}
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
                                                    {item.switched}
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
                                                    {item.subtlety}
                                                </Text>
                                            </View>
                                        </LinearGradient>
                                    );
                                })}
                            </View>
                        </View>
                    </ScrollView>
                    <TouchableOpacity
                        style={{ position: 'absolute', top: getSize.m(10), right: getSize.m(2) }}
                        onPress={handleNextLeftSlide}
                    >
                        <IconAntDesign
                            name={appIcons.ic_caretleft}
                            size={getSize.m(10)}
                            color={activeIndexNumber === 0 ? '#D9D9D9' : appColors.blue_light}
                        />
                    </TouchableOpacity>
                    <View style={styles.dotContainer}>
                        {dots.map((_, index) => {
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
                                                        ? appColors.blue_light
                                                        : appColors.soft_grey,
                                            },
                                        ]}
                                    ></View>
                                </View>
                            );
                        })}
                    </View>
                </View>
            </View>
        </View>
    );
};
