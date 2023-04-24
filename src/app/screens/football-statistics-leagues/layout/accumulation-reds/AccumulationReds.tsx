import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { getSize } from '@football/app/utils/responsive/scale';
import { MAX_LEAGUE_SEASON_STATS_ITEMS } from '@football/core/api/configs/config';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import styles from './AccumulationReds.style';
import { IAccumulationRedsProps } from './AccumulationReds.type';
import { useViewModel } from './AccumulationReds.viewModel';

export const AccumulationReds = ({ redCards, leagueSeasonStats }: IAccumulationRedsProps) => {
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
                    {t('statistics.leagues.accumulation_red')}
                </Text>
                <TouchableOpacity
                    style={appStyles.flex_row_space_center}
                    onPress={() =>
                        handleSeeAll(
                            leagueSeasonStats,
                            redCards,
                            t('statistics.leagues.accumulation_red'),
                            t('statistics.leagues.name_player'),
                            t('statistics.leagues.name_club'),
                            t('statistics.leagues.red'),
                            'red'
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

                <View style={{ width: getSize.m(44) }}>
                    <Text style={[appStyles.statistics_header, { fontSize: getSize.m(12) }]}>
                        {t('statistics.leagues.red')}
                    </Text>
                </View>
            </View>
            <View style={{ marginTop: getSize.m(10) }}>
                {redCards.slice(0, MAX_LEAGUE_SEASON_STATS_ITEMS).map((item, index) => {
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
                                <View style={appStyles.flex_row_align}>
                                    <Avatar
                                        source={{ uri: item.player_image_url }}
                                        rounded
                                        size={18}
                                    />
                                    <View style={{ width: '70%' }}>
                                        <Text
                                            numberOfLines={2}
                                            style={[
                                                appStyles.statistics_content,
                                                {
                                                    marginLeft: getSize.m(10),
                                                    fontSize: getSize.m(14),
                                                    textAlign: 'left',
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
                            </View>
                            <View
                                style={{
                                    width: getSize.m(120),
                                    overflow: 'hidden',
                                }}
                            >
                                <View style={appStyles.flex_row_align}>
                                    <Avatar
                                        source={{ uri: item.team_image_url }}
                                        rounded
                                        size={18}
                                    />
                                    <View style={{ width: '70%' }}>
                                        <Text
                                            numberOfLines={2}
                                            style={[
                                                appStyles.statistics_content,
                                                {
                                                    marginLeft: getSize.m(10),
                                                    fontSize: getSize.m(14),
                                                    textAlign: 'left',
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
                            </View>
                            <View
                                style={{
                                    width: getSize.m(44),
                                }}
                            >
                                <FastImage
                                    source={AppImages.img_ticket_red}
                                    style={styles.ticket}
                                />
                                <Text
                                    style={[
                                        appStyles.statistics_content,
                                        {
                                            color: appColors.white,
                                            fontSize: getSize.m(10),
                                        },
                                    ]}
                                >
                                    {item.num_of_cards}
                                </Text>
                            </View>
                        </LinearGradient>
                    );
                })}
            </View>
        </View>
    );
};
