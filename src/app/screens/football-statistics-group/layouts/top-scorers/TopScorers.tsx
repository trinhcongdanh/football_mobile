import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import Icon from 'react-native-vector-icons/Feather';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { Avatar } from 'react-native-elements';
import { useViewModel } from './TopScorers.viewModel';
import LinearGradient from 'react-native-linear-gradient';

export const TopScorers = () => {
    const { t, listPlayerGoal } = useViewModel({});
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
                <Text style={appStyles.statistics_title}>{t('statistics.group.top_scorers')}</Text>
                <TouchableOpacity style={appStyles.flex_row_space_center}>
                    <Text style={appStyles.statistics_see_all}>
                        {t('statistics.group.see_all')}
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
                <View>
                    <Text style={appStyles.statistics_header}>
                        {t('statistics.group.player_name')}
                    </Text>
                </View>
                <View>
                    <Text style={appStyles.statistics_header}>{t('statistics.group.number')}</Text>
                </View>
            </View>
            <View style={{ marginTop: getSize.m(10) }}>
                {listPlayerGoal.map(item => {
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
                            <View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                    }}
                                >
                                    <Avatar source={item.avt} rounded size={18} />
                                    <Text
                                        style={[
                                            appStyles.statistics_content,
                                            {
                                                marginLeft: getSize.m(10),
                                            },
                                        ]}
                                    >
                                        {item.name}
                                    </Text>
                                </View>
                            </View>
                            <View>
                                <Text style={appStyles.statistics_content}>{item.goal}</Text>
                            </View>
                        </LinearGradient>
                    );
                })}
            </View>
        </View>
    );
};
