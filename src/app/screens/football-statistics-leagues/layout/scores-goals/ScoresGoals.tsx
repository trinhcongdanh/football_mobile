import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import Icon from 'react-native-vector-icons/Feather';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { MAX_LEAGUE_SEASON_STATS_ITEMS } from '@football/core/api/configs/config';
import { useViewModel } from './ScoresGoals.viewModel';
import { IScoresGoalsProps } from './ScoresGoals.type';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';

export const ScoresGoals = ({ goalKickers, leagueSeasonStats }: IScoresGoalsProps) => {
    const { t, handleSeeAll } = useViewModel();
    const { getTranslationText } = useTranslationText();

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
                <Text style={[appStyles.statistics_title, { fontSize: getSize.m(16) }]}>
                    {t('statistics.leagues.goal')}
                </Text>
                <TouchableOpacity
                    style={appStyles.flex_row_space_center}
                    onPress={() =>
                        handleSeeAll(
                            leagueSeasonStats,
                            goalKickers,
                            t('statistics.leagues.goal'),
                            t('statistics.leagues.name_player'),
                            t('statistics.leagues.name_club'),
                            t('statistics.leagues.gate')
                        )
                    }
                >
                    <Text style={appStyles.statistics_see_all}>
                        {t('statistics.leagues.see_all')}
                    </Text>
                    <Icon
                        name={appIcons.ic_left_ios}
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
                        {t('statistics.leagues.name_player')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(120) }}>
                    <Text
                        style={[
                            appStyles.statistics_header,
                            { textAlign: 'left', fontSize: getSize.m(12) },
                        ]}
                    >
                        {t('statistics.leagues.name_club')}
                    </Text>
                </View>

                <View style={{ width: getSize.m(40) }}>
                    <Text style={[appStyles.statistics_header, { fontSize: getSize.m(12) }]}>
                        {t('statistics.leagues.gate')}
                    </Text>
                </View>
            </View>
            <View style={{ marginTop: getSize.m(10) }}>
                {goalKickers?.slice(0, MAX_LEAGUE_SEASON_STATS_ITEMS).map((item, index) => {
                    return (
                        <LinearGradient
                            key={item.player_id}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            colors={[
                                index % 2 === 0 ? appColors.linearLight : appColors.gray,
                                index % 2 === 0 ? appColors.linearDark : appColors.gray,
                            ]}
                            style={[appStyles.flex_row_space_center, appStyles.statistic_row]}
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
                                    <Avatar
                                        source={{ uri: item.player_image_url }}
                                        rounded
                                        size={18}
                                    />
                                    <Text
                                        style={[
                                            appStyles.statistics_content,
                                            {
                                                marginLeft: getSize.m(10),
                                                fontSize: getSize.m(14),
                                            },
                                        ]}
                                    >
                                        {getTranslationText({
                                            textHe: item.player_name_he,
                                            textEn: item.player_name_en,
                                        })}
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
                                    <Avatar
                                        source={{ uri: item.team_image_url }}
                                        rounded
                                        size={18}
                                    />
                                    <Text
                                        style={[
                                            appStyles.statistics_content,
                                            {
                                                marginLeft: getSize.m(10),
                                                fontSize: getSize.m(14),
                                            },
                                        ]}
                                    >
                                        {getTranslationText({
                                            textHe: item.team_name_he,
                                            textEn: item.team_name_en,
                                        })}
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    width: getSize.m(40),
                                }}
                            >
                                <Text
                                    style={[
                                        appStyles.statistics_content,
                                        { fontSize: getSize.m(14) },
                                    ]}
                                >
                                    {item.num_of_goals}
                                </Text>
                            </View>
                        </LinearGradient>
                    );
                })}
            </View>
        </View>
    );
};
