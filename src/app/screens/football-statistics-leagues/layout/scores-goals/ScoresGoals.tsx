import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import Icon from 'react-native-vector-icons/Feather';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { Avatar } from 'react-native-elements';
import { useViewModel } from './ScoresGoals.viewModel';
import { IScoresGoalsProps } from './ScoresGoals.type';
export const ScoresGoals = ({}: IScoresGoalsProps) => {
    const { t, listGoals, handleSeeAll } = useViewModel({});
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
                <Text style={appStyles.statistics_title}>{t('statistics.leagues.goal')}</Text>
                <TouchableOpacity style={appStyles.flex_row_space_center} onPress={handleSeeAll}>
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
                        {t('statistics.leagues.name_club')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(120) }}>
                    <Text style={[appStyles.statistics_header, { textAlign: 'left' }]}>
                        {t('statistics.leagues.name_player')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(40) }}>
                    <Text style={appStyles.statistics_header}>{t('statistics.leagues.gate')}</Text>
                </View>
            </View>
            <View style={{ marginTop: getSize.m(10) }}>
                {listGoals.map(item => {
                    return (
                        <View
                            key={item.id}
                            style={[
                                appStyles.flex_row_space_center,
                                appStyles.statistic_row,
                                {
                                    backgroundColor:
                                        item.id % 2 === 1
                                            ? 'rgba(7, 16, 47, 0.03)'
                                            : appColors.gray,
                                },
                            ]}
                        >
                            <View
                                style={{
                                    width: getSize.m(120),
                                    overflow: 'hidden',
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                    }}
                                >
                                    <Avatar source={item.avt_club} rounded size={18} />
                                    <Text
                                        style={[
                                            appStyles.statistics_content,
                                            {
                                                marginLeft: getSize.m(10),
                                            },
                                        ]}
                                    >
                                        {item.name_club}
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    width: getSize.m(120),
                                    overflow: 'hidden',
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                    }}
                                >
                                    <Avatar source={item.avt_player} rounded size={18} />
                                    <Text
                                        style={[
                                            appStyles.statistics_content,
                                            {
                                                marginLeft: getSize.m(10),
                                            },
                                        ]}
                                    >
                                        {item.name_player}
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    width: getSize.m(40),
                                }}
                            >
                                <Text style={appStyles.statistics_content}>{item.gate}</Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};
