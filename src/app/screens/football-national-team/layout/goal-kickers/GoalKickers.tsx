import { AppFonts } from '@football/app/assets/fonts';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { MAX_TOPTEAM_LASTCAMPAIGN_PLAYERAPPEARANCE } from '@football/core/api/configs/config';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import IconFeather from 'react-native-vector-icons/Feather';
import { useViewModel } from './GoalKickers.viewModel';
import { IGoalKickersProps } from '@football/app/screens/football-national-team/layout/goal-kickers/GoalKickers.type';

export const GoalKickers = ({ topTeam }: IGoalKickersProps) => {
    const { getTranslationText, t, onNavigateGoalKickers, onNavigatePlayerData } = useViewModel({
        topTeam,
    });
    return (
        <View style={appStyles.item_statistics}>
            <View style={[appStyles.flex_row_space_center]}>
                <Text style={[appStyles.statistics_title, { fontSize: getSize.m(16) }]}>
                    {t('national_team.conquerors.title')}
                </Text>
                <TouchableOpacity
                    onPress={() => onNavigateGoalKickers(topTeam)}
                    style={appStyles.flex_row_space_center}
                >
                    <Text style={appStyles.statistics_see_all}>
                        {t('national_team.conquerors.full_list')}
                    </Text>
                    <IconFeather
                        name={appIcons.ic_left_ios}
                        size={getSize.m(10)}
                        color={appColors.button_dark_blue}
                        style={appStyles.statistic_ic_arrow}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: getSize.m(10) }}>
                {topTeam?.last_campaign?.goal_kickers
                    .slice(0, MAX_TOPTEAM_LASTCAMPAIGN_PLAYERAPPEARANCE)
                    .map((item, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => onNavigatePlayerData(item.player_id)}
                                key={item.player_id}
                                style={[
                                    appStyles.flex_row_space_center,
                                    appStyles.statistic_row,
                                    {
                                        paddingHorizontal: getSize.m(0),
                                    },
                                ]}
                            >
                                <View style={appStyles.flex_row_align}>
                                    <FastImage
                                        source={{ uri: item.image_url }}
                                        style={{
                                            width: getSize.m(20),
                                            height: getSize.m(20),
                                            borderRadius: getSize.m(20),
                                        }}
                                    />
                                    <Text
                                        style={[
                                            appStyles.statistics_content,
                                            // eslint-disable-next-line react-native/no-inline-styles
                                            {
                                                textAlign: 'left',
                                                marginLeft: getSize.m(10),
                                                fontFamily: AppFonts.medium,
                                                fontSize: getSize.m(14),
                                            },
                                        ]}
                                    >
                                        {getTranslationText({
                                            textHe: item.name_he,
                                            textEn: item.name_en,
                                        })}
                                    </Text>
                                </View>
                                <View>
                                    <Text
                                        style={[
                                            appStyles.statistics_content,
                                            // eslint-disable-next-line react-native/no-inline-styles
                                            {
                                                textAlign: 'left',
                                                fontSize: getSize.m(16),
                                            },
                                        ]}
                                    >
                                        {item.num_of_goals}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
            </View>
        </View>
    );
};
