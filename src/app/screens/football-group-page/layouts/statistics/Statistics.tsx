import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { Button } from '@football/app/components/button';
import Icon from 'react-native-vector-icons/Feather';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { Avatar } from 'react-native-elements';
import { useViewModel } from './Statistics.viewModel';

export const Statistics = () => {
    const { t, handleMoreStatistics, statistics } = useViewModel({});

    return (
        <View>
            <Text style={[appStyles.text_topic, { marginLeft: getSize.m(6) }]}>
                {t('group_page.statistics.title')}
            </Text>
            <View style={{ marginTop: getSize.m(30) }}>
                <View
                    style={[
                        appStyles.flex_row_space_center,
                        {
                            marginHorizontal: getSize.m(6),
                        },
                    ]}
                >
                    <Text style={appStyles.statistics_title}>2021/2022</Text>
                    <TouchableOpacity style={appStyles.flex_row_space_center}>
                        <Text style={appStyles.statistics_see_all}>
                            {t('group_page.statistics.see_all')}
                        </Text>
                        <Icon
                            name={appIcons.ic_arrow_left}
                            size={getSize.m(10)}
                            color={appColors.button_dark_blue}
                            style={appStyles.statistic_ic_arrow}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    style={[
                        {
                            marginHorizontal: getSize.m(6),
                            marginTop: getSize.m(18),
                        },
                    ]}
                    horizontal
                >
                    <View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                                paddingHorizontal: getSize.m(10),
                            }}
                        >
                            <View style={{ width: getSize.m(100) }}>
                                <Text style={[appStyles.statistics_header, { textAlign: 'left' }]}>
                                    {t('group_page.statistics.player')}
                                </Text>
                            </View>
                            <View style={{ width: getSize.m(50), marginHorizontal: getSize.m(4) }}>
                                <Text style={appStyles.statistics_header}>
                                    {t('group_page.statistics.number_game')}
                                </Text>
                            </View>
                            <View style={{ width: getSize.m(50), marginHorizontal: getSize.m(4) }}>
                                <Text style={appStyles.statistics_header}>
                                    {t('group_page.statistics.gates')}
                                </Text>
                            </View>
                            <View style={{ width: getSize.m(50), marginHorizontal: getSize.m(4) }}>
                                <Text style={appStyles.statistics_header}>
                                    {t('group_page.statistics.yellow_league_cup')}
                                </Text>
                            </View>
                            <View style={{ width: getSize.m(50), marginHorizontal: getSize.m(4) }}>
                                <Text style={appStyles.statistics_header}>
                                    {t('group_page.statistics.yellow_tutu')}
                                </Text>
                            </View>
                            <View style={{ width: getSize.m(50), marginHorizontal: getSize.m(4) }}>
                                <Text style={appStyles.statistics_header}>
                                    {t('group_page.statistics.red_card')}
                                </Text>
                            </View>
                            <View style={{ width: getSize.m(50), marginHorizontal: getSize.m(4) }}>
                                <Text style={appStyles.statistics_header}>
                                    {t('group_page.statistics.vehicle')}
                                </Text>
                            </View>
                            <View style={{ width: getSize.m(50), marginHorizontal: getSize.m(4) }}>
                                <Text style={appStyles.statistics_header}>
                                    {t('group_page.statistics.enter_replacement')}
                                </Text>
                            </View>
                            <View style={{ width: getSize.m(50), marginHorizontal: getSize.m(4) }}>
                                <Text style={appStyles.statistics_header}>
                                    {t('group_page.statistics.switched')}
                                </Text>
                            </View>
                            <View style={{ width: getSize.m(50), marginHorizontal: getSize.m(4) }}>
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
                                                paddingVertical: getSize.m(5),
                                                paddingHorizontal: getSize.m(10),
                                                borderRadius: getSize.m(5),
                                            },
                                        ]}
                                        key={item.id}
                                    >
                                        <View style={{ width: getSize.m(100) }}>
                                            <View style={appStyles.flex_row_align}>
                                                <Avatar source={item.avt} rounded size={18} />
                                                <Text
                                                    style={[
                                                        appStyles.statistics_content,
                                                        {
                                                            marginLeft: getSize.m(10),
                                                        },
                                                    ]}
                                                >
                                                    {item.player}
                                                </Text>
                                            </View>
                                        </View>
                                        <View
                                            style={{
                                                width: getSize.m(50),
                                                marginHorizontal: getSize.m(4),
                                            }}
                                        >
                                            <Text style={appStyles.statistics_content}>
                                                {item.number_game}
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                width: getSize.m(50),
                                                marginHorizontal: getSize.m(4),
                                            }}
                                        >
                                            <Text style={appStyles.statistics_content}>
                                                {item.gates}
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                width: getSize.m(50),
                                                marginHorizontal: getSize.m(4),
                                            }}
                                        >
                                            <Text style={appStyles.statistics_content}>
                                                {item.yellow_league_cup}
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                width: getSize.m(50),
                                                marginHorizontal: getSize.m(4),
                                            }}
                                        >
                                            <Text style={appStyles.statistics_content}>
                                                {item.yellow_tutu}
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                width: getSize.m(50),
                                                marginHorizontal: getSize.m(4),
                                            }}
                                        >
                                            <Text style={appStyles.statistics_content}>
                                                {item.red_card}
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                width: getSize.m(50),
                                                marginHorizontal: getSize.m(4),
                                            }}
                                        >
                                            <Text style={appStyles.statistics_content}>
                                                {item.vehicle}
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                width: getSize.m(50),
                                                marginHorizontal: getSize.m(4),
                                            }}
                                        >
                                            <Text style={appStyles.statistics_content}>
                                                {item.enter_replacement}
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                width: getSize.m(50),
                                                marginHorizontal: getSize.m(4),
                                            }}
                                        >
                                            <Text style={appStyles.statistics_content}>
                                                {item.switched}
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                width: getSize.m(50),
                                                marginHorizontal: getSize.m(4),
                                            }}
                                        >
                                            <Text style={appStyles.statistics_content}>
                                                {item.subtlety}
                                            </Text>
                                        </View>
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                </ScrollView>

                <View style={{ marginHorizontal: getSize.m(28), marginTop: getSize.m(40) }}>
                    <Button title={t('group_page.statistics.btn')} onPress={handleMoreStatistics} />
                </View>
            </View>
        </View>
    );
};
