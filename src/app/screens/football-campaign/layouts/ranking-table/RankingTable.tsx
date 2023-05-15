import { AppFonts } from '@football/app/assets/fonts';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { Position } from '@football/app/components/position/Position';
import { useViewModel } from '@football/app/screens/football-campaign/layouts/ranking-table/RankingTable.viewModel';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { I18nManager, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import { IRankingTableProps } from './RankingTable.type';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';

export const RankingTable = ({ data, groupName, topTeam }: IRankingTableProps) => {
    const { t, handleSeeAll } = useViewModel(topTeam);
    const { getTranslationText } = useTranslationText();

    return (
        <View>
            <View style={appStyles.flex_row_space_center}>
                <Text style={appStyles.statistics_title}>{t('campaign.ranking_table.title')}</Text>
                <TouchableOpacity
                    style={[appStyles.flex_row_center, { flex: 0 }]}
                    onPress={handleSeeAll}
                >
                    <Text style={appStyles.statistics_title}>
                        {t('campaign.ranking_table.all_previous_seasons')}
                    </Text>
                    <IconFeather
                        name={appIcons.ic_left_ios}
                        size={getSize.m(10)}
                        color={appColors.button_dark_blue}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: getSize.m(26) }}>
                <Position
                    position={groupName}
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
                        <View style={{ width: getSize.m(34) }}>
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
                    <View style={{ marginTop: getSize.m(8) }}>
                        {data?.map((item, index) => {
                            return (
                                <LinearGradient
                                    key={item.place}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    colors={[
                                        index % 2 === 0 ? appColors.linearLight : appColors.gray,
                                        index % 2 === 0 ? appColors.linearDark : appColors.gray,
                                    ]}
                                    style={[
                                        appStyles.flex_row_space_center,
                                        appStyles.statistic_row,
                                    ]}
                                >
                                    <View
                                        style={[appStyles.flex_row_align, { width: getSize.m(34) }]}
                                    >
                                        <View style={{ width: '30%' }}>
                                            <Text
                                                style={[
                                                    appStyles.statistics_content,
                                                    {
                                                        textAlign: 'left',
                                                    },
                                                ]}
                                            >
                                                {index + 1}
                                            </Text>
                                        </View>
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
                                    <View style={[{ width: getSize.m(80), overflow: 'hidden' }]}>
                                        <View style={appStyles.flex_row_align}>
                                            <Avatar
                                                source={{ uri: item.logo_url }}
                                                rounded
                                                size={getSize.m(20)}
                                            />
                                            <View style={{ width: '70%' }}>
                                                <Text
                                                    numberOfLines={2}
                                                    style={[
                                                        appStyles.statistics_content,
                                                        {
                                                            marginLeft: getSize.m(3),
                                                            textAlign: 'left',
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
