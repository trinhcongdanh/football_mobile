import { appIcons } from '@football/app/assets/icons/appIcons';
import { IRankingsProps } from '@football/app/screens/football-national-team/layout/rankings/Rankings.type';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { I18nManager, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import { useViewModel } from './Rankings.viewModel';

export const Rankings = ({ topTeam }: IRankingsProps) => {
    const { getTranslationText, t } = useViewModel({
        topTeam,
    });
    return (
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
                        {t('national_team.ranking_table.place')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(60) }}>
                    <Text style={[appStyles.statistics_header, { textAlign: 'left' }]}>
                        {t('national_team.ranking_table.team')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(28) }}>
                    <Text style={appStyles.statistics_header}>
                        {t('national_team.ranking_table.mash')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(28) }}>
                    <Text style={appStyles.statistics_header}>
                        {t('national_team.ranking_table.nch')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(28) }}>
                    <Text style={appStyles.statistics_header}>
                        {t('national_team.ranking_table.draw')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(28) }}>
                    <Text style={appStyles.statistics_header}>
                        {t('national_team.ranking_table.the_p')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(38) }}>
                    <Text style={appStyles.statistics_header}>
                        {t('national_team.ranking_table.time')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(28) }}>
                    <Text style={appStyles.statistics_header}>
                        {t('national_team.ranking_table.no')}
                    </Text>
                </View>
            </View>
            <View>
                {topTeam?.last_campaign?.leader_board.map((item, index) => {
                    return (
                        <LinearGradient
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            colors={[
                                index % 2 === 1 ? appColors.linearLight : appColors.white,
                                index % 2 === 1 ? appColors.linearDark : appColors.white,
                            ]}
                            style={[appStyles.flex_row_space_center, appStyles.statistic_row]}
                        >
                            <View style={[appStyles.flex_row_align, { width: getSize.m(30) }]}>
                                <Text
                                    style={[
                                        appStyles.statistics_content,
                                        {
                                            textAlign: I18nManager.isRTL ? 'right' : 'left',
                                        },
                                    ]}
                                >
                                    {index + 1}
                                </Text>
                                <View
                                    style={{
                                        marginLeft: getSize.m(2),
                                        marginTop: getSize.m(2),
                                    }}
                                >
                                    {item.place_change === 'up' && (
                                        <Icon
                                            name={appIcons.ic_up}
                                            size={8}
                                            color={appColors.green}
                                        />
                                    )}

                                    {item.place_change === 'down' && (
                                        <Icon
                                            name={appIcons.ic_down}
                                            size={8}
                                            color={appColors.red}
                                        />
                                    )}
                                </View>
                            </View>
                            <View
                                style={[
                                    {
                                        width: getSize.m(60),
                                    },
                                ]}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Avatar
                                        source={{
                                            uri: item.logo_url,
                                        }}
                                        rounded
                                        size={20}
                                    />
                                    <View style={{ width: '70%' }}>
                                        <Text
                                            numberOfLines={1}
                                            style={[
                                                appStyles.statistics_content,
                                                {
                                                    marginLeft: getSize.m(3),
                                                    textAlign: I18nManager.isRTL ? 'right' : 'left',
                                                },
                                            ]}
                                        >
                                            {getTranslationText({
                                                textHe: item.name_he,
                                                textEn: item.name_en,
                                            })}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: getSize.m(28) }}>
                                <Text style={appStyles.statistics_content}>{item.games}</Text>
                            </View>
                            <View style={{ width: getSize.m(28) }}>
                                <Text style={appStyles.statistics_content}>{item.wins}</Text>
                            </View>
                            <View style={{ width: getSize.m(28) }}>
                                <Text style={appStyles.statistics_content}>{item.ties}</Text>
                            </View>
                            <View style={{ width: getSize.m(28) }}>
                                <Text style={appStyles.statistics_content}>{item.difference}</Text>
                            </View>
                            <View style={{ width: getSize.m(38) }}>
                                <Text style={appStyles.statistics_content}>{item.goals}</Text>
                            </View>
                            <View style={{ width: getSize.m(28) }}>
                                <Text style={appStyles.statistics_content}>{item.score}</Text>
                            </View>
                        </LinearGradient>
                    );
                })}
            </View>
        </View>
    );
};
