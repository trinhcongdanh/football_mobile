import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import { ILeaguesAverageProps } from './LeaguesAverage.type';
import { useViewModel } from './LeaguesAverage.viewModel';

export const LeaguesAverage = ({ data }: ILeaguesAverageProps) => {
    const { t, listAverages } = useViewModel({ data });
    return (
        <View style={appStyles.item_statistics}>
            <View
                style={[
                    appStyles.flex_row_space_center,
                    {
                        marginHorizontal: getSize.m(4),
                    },
                ]}
            >
                <Text style={appStyles.statistics_title}>
                    {t('statistics.leagues.average_league')}
                </Text>
                <TouchableOpacity style={appStyles.flex_row_space_center}>
                    <Text style={appStyles.statistics_see_all}>
                        {t('statistics.leagues.see_all')}
                    </Text>
                    <Icon
                        name={appIcons.ic_arrow_left}
                        size={getSize.m(10)}
                        color={appColors.button_dark_blue}
                        style={appStyles.statistic_ic_arrow}
                    />
                </TouchableOpacity>
            </View>
            <View
                style={[
                    appStyles.flex_row_space_center,
                    {
                        marginTop: getSize.m(21),
                        paddingHorizontal: getSize.m(4),
                    },
                ]}
            >
                <View style={{ width: getSize.m(120) }}>
                    <Text
                        style={[
                            appStyles.statistics_header,
                            { textAlign: 'left', fontSize: getSize.m(12) },
                        ]}
                    >
                        {t('statistics.leagues.category')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(100) }}>
                    <Text style={[appStyles.statistics_header, { fontSize: getSize.m(12) }]}>
                        {t('statistics.leagues.average_game')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(100) }}>
                    <Text style={[appStyles.statistics_header, { fontSize: getSize.m(12) }]}>
                        {t('statistics.leagues.average_cycle')}
                    </Text>
                </View>
            </View>
            <View style={{ marginTop: getSize.m(10) }}>
                {listAverages.map((item, index) => {
                    return (
                        <LinearGradient
                            key={item.id}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            colors={[
                                index % 2 === 0 ? 'rgba(16, 32, 100, 0.04)' : appColors.gray,
                                index % 2 !== 0 ? 'rgba(59, 168, 225, 0.04)' : appColors.gray,
                            ]}
                            style={[appStyles.flex_row_space_center, appStyles.statistic_row]}
                        >
                            <View
                                style={{
                                    width: getSize.m(120),
                                    overflow: 'hidden',
                                }}
                            >
                                <Text
                                    style={[
                                        appStyles.statistics_content,
                                        { textAlign: 'left', fontSize: getSize.m(14) },
                                    ]}
                                >
                                    {item.category}
                                </Text>
                            </View>
                            <View
                                style={{
                                    width: getSize.m(100),
                                    overflow: 'hidden',
                                }}
                            >
                                <Text
                                    style={[
                                        appStyles.statistics_content,
                                        { fontSize: getSize.m(14) },
                                    ]}
                                >
                                    {item.avgGame}
                                </Text>
                            </View>
                            <View
                                style={[
                                    {
                                        width: getSize.m(100),
                                    },
                                ]}
                            >
                                <Text
                                    style={[
                                        appStyles.statistics_content,
                                        { fontSize: getSize.m(14) },
                                    ]}
                                >
                                    {item.avgRound}
                                </Text>
                            </View>
                        </LinearGradient>
                    );
                })}
            </View>
        </View>
    );
};
