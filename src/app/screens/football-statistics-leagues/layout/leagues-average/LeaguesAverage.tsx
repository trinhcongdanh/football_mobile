import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import Icon from 'react-native-vector-icons/Feather';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { useViewModel } from './LeaguesAverage.viewModel';
import { ILeaguesAverageProps } from './LeaguesAverage.type';
import LinearGradient from 'react-native-linear-gradient';

export const LeaguesAverage = ({}: ILeaguesAverageProps) => {
    const { t, listAverages } = useViewModel({});
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
                    <Text style={[appStyles.statistics_header, { textAlign: 'left' }]}>
                        {t('statistics.leagues.category')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(100) }}>
                    <Text style={[appStyles.statistics_header]}>
                        {t('statistics.leagues.average_game')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(100) }}>
                    <Text style={appStyles.statistics_header}>
                        {t('statistics.leagues.average_cycle')}
                    </Text>
                </View>
            </View>
            <View style={{ marginTop: getSize.m(10) }}>
                {listAverages.map(item => {
                    return (
                        <LinearGradient
                            key={item.id}
                            colors={[
                                item.id % 2 === 1 ? 'rgba(255, 255, 255, 0.05)' : appColors.gray,
                                item.id % 2 === 1 ? 'rgba(16, 32, 100, 0.05)' : appColors.gray,
                                item.id % 2 === 1 ? 'rgba(59, 168, 225, 0.05)' : appColors.gray,
                            ]}
                            style={[appStyles.flex_row_space_center, appStyles.statistic_row]}
                        >
                            <View
                                style={{
                                    width: getSize.m(120),
                                    overflow: 'hidden',
                                }}
                            >
                                <Text style={[appStyles.statistics_content, { textAlign: 'left' }]}>
                                    {item.category}
                                </Text>
                            </View>
                            <View
                                style={{
                                    width: getSize.m(100),
                                    overflow: 'hidden',
                                }}
                            >
                                <Text style={[appStyles.statistics_content]}>
                                    {item.average_game}
                                </Text>
                            </View>
                            <View
                                style={[
                                    {
                                        width: getSize.m(100),
                                    },
                                ]}
                            >
                                <Text style={appStyles.statistics_content}>
                                    {item.average_cycle}
                                </Text>
                            </View>
                        </LinearGradient>
                    );
                })}
            </View>
        </View>
    );
};
