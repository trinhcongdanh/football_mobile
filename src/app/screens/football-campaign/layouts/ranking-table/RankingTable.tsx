import React from 'react';
import { Image, Text, View } from 'react-native';
import { Position } from '@football/app/components/position/Position';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { useTranslation } from 'react-i18next';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { IRankingTableProps } from './RankingTable.type';
import { useViewModel } from '@football/app/screens/football-campaign/layouts/ranking-table/RankingTable.viewModel';
import LinearGradient from 'react-native-linear-gradient';
import { AppFonts } from '@football/app/assets/fonts';

export const RankingTable = ({}: IRankingTableProps) => {
    const { t, rankingTable } = useViewModel({});
    return (
        <View>
            <Text style={appStyles.statistics_title}>{t('campaign.ranking_table.title')}</Text>
            <View style={{ marginTop: getSize.m(26) }}>
                <Position
                    position="בית 9"
                    color={appColors.text_dark_blue}
                    fontFamily={AppFonts.bold}
                    fontSize={getSize.m(12)}
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
                            <Text
                                style={[
                                    appStyles.statistics_header,
                                    { textAlign: 'left', marginLeft: getSize.m(4) },
                                ]}
                            >
                                {t('match.standing.place')}
                            </Text>
                        </View>
                        <View style={{ width: getSize.m(80) }}>
                            <Text
                                style={[
                                    appStyles.statistics_header,
                                    { textAlign: 'left', marginLeft: getSize.m(4) },
                                ]}
                            >
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
                        {rankingTable.map(item => {
                            return (
                                <LinearGradient
                                    key={item.place}
                                    colors={[
                                        item.id % 2 === 1
                                            ? 'rgba(255, 255, 255, 0.05)'
                                            : appColors.gray,
                                        item.id % 2 === 1
                                            ? 'rgba(16, 32, 100, 0.05)'
                                            : appColors.gray,
                                        item.id % 2 === 1
                                            ? 'rgba(59, 168, 225, 0.05)'
                                            : appColors.gray,
                                    ]}
                                    style={[
                                        appStyles.flex_row_space_center,
                                        appStyles.statistic_row,
                                    ]}
                                >
                                    <View
                                        style={[appStyles.flex_row_align, { width: getSize.m(30) }]}
                                    >
                                        <Text style={appStyles.statistics_content}>
                                            {item.place}
                                        </Text>
                                        <View
                                            style={{
                                                marginLeft: getSize.m(2),
                                                marginTop: getSize.m(2),
                                            }}
                                        >
                                            {item.place_change == 'up' && (
                                                <Icon
                                                    name={appIcons.ic_up}
                                                    size={8}
                                                    color={appColors.green}
                                                />
                                            )}
                                            {item.place_change == 'down' && (
                                                <Icon
                                                    name={appIcons.ic_down}
                                                    size={8}
                                                    color={appColors.red}
                                                />
                                            )}
                                        </View>
                                    </View>
                                    <View style={[{ width: getSize.m(80), overflow: 'hidden' }]}>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                            }}
                                        >
                                            <Avatar
                                                source={{ uri: item.logo_url }}
                                                rounded
                                                size={getSize.m(20)}
                                            />
                                            <Text
                                                style={[
                                                    appStyles.statistics_content,
                                                    { marginLeft: getSize.m(6) },
                                                ]}
                                            >
                                                {item.name_he}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ width: getSize.m(30) }}>
                                        <Text style={appStyles.statistics_content}>
                                            {item.games}
                                        </Text>
                                    </View>
                                    <View style={{ width: getSize.m(30) }}>
                                        <Text style={appStyles.statistics_content}>
                                            {item.games}
                                        </Text>
                                    </View>
                                    <View style={{ width: getSize.m(30) }}>
                                        <Text style={appStyles.statistics_content}>
                                            {item.ties}
                                        </Text>
                                    </View>
                                    <View style={{ width: getSize.m(30) }}>
                                        <Text style={appStyles.statistics_content}>
                                            {item.difference}
                                        </Text>
                                    </View>
                                    <View style={{ width: getSize.m(40) }}>
                                        <Text style={appStyles.statistics_content}>
                                            {item.goals}
                                        </Text>
                                    </View>
                                    <View style={{ width: getSize.m(30) }}>
                                        <Text style={appStyles.statistics_content}>
                                            {item.score}
                                        </Text>
                                    </View>
                                </LinearGradient>
                            );
                        })}
                    </View>
                </View>
            </View>
        </View>
    );
};
