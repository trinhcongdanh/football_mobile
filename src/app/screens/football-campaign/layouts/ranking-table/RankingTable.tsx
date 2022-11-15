import React from 'react';
import { Text, View } from 'react-native';
import { Position } from '@football/app/components/position/Position';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { useViewModel } from './RankingTable.viewModel';

export const RankingTable = () => {
    const { t, listTeams } = useViewModel({});
    return (
        <View>
            <Text style={appStyles.statistics_title}>{t('campaign.ranking_table.title')}</Text>
            <View style={{ marginTop: getSize.m(26) }}>
                <Position
                    position="בית 9"
                    color={appColors.text_dark_blue}
                    width={getSize.m(130)}
                />
                <View>
                    <View
                        style={[
                            appStyles.flex_row_space_center,
                            {
                                paddingHorizontal: getSize.m(4),
                            },
                        ]}
                    >
                        <View style={{ width: getSize.m(30) }}>
                            <Text style={[appStyles.statistics_header, { textAlign: 'left' }]}>
                                {t('match.standing.place')}
                            </Text>
                        </View>
                        <View style={{ width: getSize.m(80) }}>
                            <Text style={[appStyles.statistics_header, { textAlign: 'left' }]}>
                                {t('match.standing.team')}
                            </Text>
                        </View>
                        <View style={{ width: getSize.m(30) }}>
                            <Text style={appStyles.statistics_header}>
                                {t('match.standing.mash')}
                            </Text>
                        </View>
                        <View style={{ width: getSize.m(30) }}>
                            <Text style={appStyles.statistics_header}>
                                {t('match.standing.nch')}
                            </Text>
                        </View>
                        <View style={{ width: getSize.m(30) }}>
                            <Text style={appStyles.statistics_header}>
                                {t('match.standing.draw')}
                            </Text>
                        </View>
                        <View style={{ width: getSize.m(30) }}>
                            <Text style={appStyles.statistics_header}>
                                {t('match.standing.the_p')}
                            </Text>
                        </View>
                        <View style={{ width: getSize.m(40) }}>
                            <Text style={appStyles.statistics_header}>
                                {t('match.standing.time')}
                            </Text>
                        </View>
                        <View style={{ width: getSize.m(30) }}>
                            <Text style={appStyles.statistics_header}>
                                {t('match.standing.no')}
                            </Text>
                        </View>
                    </View>
                    <View>
                        {listTeams.map(item => {
                            return (
                                <View
                                    key={item.id}
                                    style={[
                                        appStyles.flex_row_space_center,
                                        appStyles.statistic_row,
                                        {
                                            backgroundColor:
                                                item.id % 2 === 0
                                                    ? appColors.blue_matte
                                                    : appColors.gray,
                                        },
                                    ]}
                                >
                                    <View
                                        style={[appStyles.flex_row_align, { width: getSize.m(30) }]}
                                    >
                                        <Text style={appStyles.statistics_content}>{item.id}</Text>
                                        <View>
                                            <Icon
                                                name={appIcons.ic_up}
                                                size={11}
                                                color={appColors.green}
                                            />
                                            <Icon
                                                name={appIcons.ic_down}
                                                size={11}
                                                color={appColors.red}
                                            />
                                        </View>
                                    </View>
                                    <View style={[{ width: getSize.m(80), overflow: 'hidden' }]}>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                            }}
                                        >
                                            <Avatar source={item.logo} rounded size={20} />
                                            <Text
                                                style={[
                                                    appStyles.statistics_content,
                                                    { marginLeft: getSize.m(6) },
                                                ]}
                                            >
                                                {item.name}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ width: getSize.m(30) }}>
                                        <Text style={appStyles.statistics_content}>
                                            {item.mash}
                                        </Text>
                                    </View>
                                    <View style={{ width: getSize.m(30) }}>
                                        <Text style={appStyles.statistics_content}>{item.nch}</Text>
                                    </View>
                                    <View style={{ width: getSize.m(30) }}>
                                        <Text style={appStyles.statistics_content}>
                                            {item.draw}
                                        </Text>
                                    </View>
                                    <View style={{ width: getSize.m(30) }}>
                                        <Text style={appStyles.statistics_content}>
                                            {item.the_p}
                                        </Text>
                                    </View>
                                    <View style={{ width: getSize.m(40) }}>
                                        <Text style={appStyles.statistics_content}>
                                            {item.time}
                                        </Text>
                                    </View>
                                    <View style={{ width: getSize.m(30) }}>
                                        <Text style={appStyles.statistics_content}>{item.no}</Text>
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                </View>
            </View>
        </View>
    );
};
