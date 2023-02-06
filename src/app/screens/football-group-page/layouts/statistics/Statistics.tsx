import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { Button } from '@football/app/components/button';
import Icon from 'react-native-vector-icons/Feather';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { Avatar } from 'react-native-elements';
import { useViewModel } from './Statistics.viewModel';
import styles from '@football/app/screens/football-group-page/layouts/statistics/Statistics.style';

export const Statistics = () => {
    const { t, handleMoreStatistics, statistics, players } = useViewModel({});
    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);
    return (
        <View>
            <Text style={[appStyles.text_topic, { marginLeft: getSize.m(6) }]}>
                {t('group_page.statistics.title')}
            </Text>
            <View style={{ marginTop: getSize.m(30) }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginTop: getSize.m(8) }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                                paddingHorizontal: getSize.m(10),
                            }}
                        >
                            <View style={{ width: getSize.m(130) }}>
                                <Text style={[appStyles.statistics_header, { textAlign: 'left' }]}>
                                    {t('group_page.statistics.player')}
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginTop: getSize.m(14) }}>
                            {players.map(item => {
                                return (
                                    <View
                                        style={[
                                            appStyles.align_justify,
                                            {
                                                backgroundColor:
                                                    item.id % 2 !== 0
                                                        ? appColors.blue_matte
                                                        : appColors.white,
                                                paddingHorizontal: getSize.m(10),
                                                height: getSize.m(30),
                                            },
                                        ]}
                                        key={item.id}
                                    >
                                        <View style={{ width: getSize.m(130) }}>
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
                                    </View>
                                );
                            })}
                        </View>
                    </View>

                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={e => {
                            let slide = Math.round(
                                e.nativeEvent.contentOffset.x /
                                    e.nativeEvent.layoutMeasurement.width
                            );
                            if (slide !== activeIndexNumber) {
                                console.log(slide);
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
                                        width: getSize.m(50),
                                        marginHorizontal: getSize.m(4),
                                    }}
                                >
                                    <Text style={appStyles.statistics_header}>
                                        {t('group_page.statistics.number_game')}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: getSize.m(50),
                                        marginHorizontal: getSize.m(4),
                                    }}
                                >
                                    <Text style={appStyles.statistics_header}>
                                        {t('group_page.statistics.gates')}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: getSize.m(50),
                                        marginHorizontal: getSize.m(4),
                                    }}
                                >
                                    <Text style={appStyles.statistics_header}>
                                        {t('group_page.statistics.yellow_league_cup')}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: getSize.m(50),
                                        marginHorizontal: getSize.m(4),
                                    }}
                                >
                                    <Text style={appStyles.statistics_header}>
                                        {t('group_page.statistics.yellow_tutu')}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: getSize.m(50),
                                        marginHorizontal: getSize.m(4),
                                    }}
                                >
                                    <Text style={appStyles.statistics_header}>
                                        {t('group_page.statistics.red_card')}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: getSize.m(50),
                                        marginHorizontal: getSize.m(4),
                                    }}
                                >
                                    <Text style={appStyles.statistics_header}>
                                        {t('group_page.statistics.vehicle')}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: getSize.m(50),
                                        marginHorizontal: getSize.m(4),
                                    }}
                                >
                                    <Text style={appStyles.statistics_header}>
                                        {t('group_page.statistics.enter_replacement')}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: getSize.m(50),
                                        marginHorizontal: getSize.m(4),
                                    }}
                                >
                                    <Text style={appStyles.statistics_header}>
                                        {t('group_page.statistics.switched')}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: getSize.m(50),
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
                                        <View
                                            style={[
                                                appStyles.flex_row_align,
                                                {
                                                    backgroundColor:
                                                        item.id % 2 !== 0
                                                            ? appColors.blue_matte
                                                            : appColors.gray,
                                                    paddingHorizontal: getSize.m(10),
                                                    height: getSize.m(30),
                                                },
                                            ]}
                                            key={item.id}
                                        >
                                            <View
                                                style={{
                                                    width: getSize.m(50),
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
                                                    width: getSize.m(50),
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
                                                    width: getSize.m(50),
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
                                                    width: getSize.m(50),
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
                                                    width: getSize.m(50),
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
                                                    width: getSize.m(50),
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
                                                    width: getSize.m(50),
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
                                                    width: getSize.m(50),
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
                                                    width: getSize.m(50),
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
                                        </View>
                                    );
                                })}
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={{ marginHorizontal: getSize.m(28), marginTop: getSize.m(40) }}>
                    <Button title={t('group_page.statistics.btn')} onPress={handleMoreStatistics} />
                </View>
            </View>
        </View>
    );
};
