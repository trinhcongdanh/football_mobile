import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, TouchableOpacity, I18nManager } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ILeaguesTableProps } from '@football/app/screens/football-leagues-details/layouts/leagues-table/LeaguesTable.type';
import styles from './LeaguesTable.style';
import { useViewModel } from './LeaguesTable.viewModel';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';

export const LeaguesTable = ({ leaderBoards }: ILeaguesTableProps) => {
    const { t, listTeams, onNavigateTeamDetails } = useViewModel({ leaderBoards });
    const { getTranslationText } = useTranslationText();

    return (
        <View
            style={{
                marginHorizontal: getSize.m(10),
                marginVertical: getSize.m(20),
            }}
        >
            <Text style={[appStyles.text_topic, { marginLeft: getSize.m(6) }]}>
                {t('leagues_details.league_table.title')}
            </Text>
            <View style={{ marginTop: getSize.m(20) }}>
                <View
                    style={[
                        appStyles.flex_row_space_center,
                        {
                            paddingHorizontal: getSize.m(8),
                        },
                    ]}
                >
                    <View style={{ width: getSize.m(120) }}>
                        <Text style={[styles.header, { textAlign: 'left' }]}>
                            {t('leagues_details.league_table.group')}
                        </Text>
                    </View>
                    <View style={{ width: getSize.m(30) }}>
                        <Text style={styles.header}>{t('leagues_details.league_table.from')}</Text>
                    </View>
                    <View style={{ width: getSize.m(30) }}>
                        <Text style={styles.header}>{t('leagues_details.league_table.nch')}</Text>
                    </View>
                    <View style={{ width: getSize.m(30) }}>
                        <Text style={styles.header}>{t('leagues_details.league_table.draw')}</Text>
                    </View>
                    <View style={{ width: getSize.m(30) }}>
                        <Text style={styles.header}>{t('leagues_details.league_table.the_p')}</Text>
                    </View>
                    <View style={{ width: getSize.m(40) }}>
                        <Text style={styles.header}>{t('leagues_details.league_table.time')}</Text>
                    </View>
                    <View style={{ width: getSize.m(30) }}>
                        <Text style={styles.header}>{t('leagues_details.league_table.no')}</Text>
                    </View>
                </View>
                {listTeams.map(item => {
                    return (
                        <TouchableOpacity
                            style={{ marginTop: getSize.m(10) }}
                            onPress={() => onNavigateTeamDetails(item.team_id)}
                            key={item.place}
                        >
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                colors={[
                                    item.place % 2 === 1 ? appColors.linearLight : appColors.gray,
                                    item.place % 2 === 1 ? appColors.linearDark : appColors.gray,
                                ]}
                                style={[appStyles.flex_row_space_center, styles.itemTeam]}
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
                                        <View style={{ width: '12%' }}>
                                            <Text
                                                style={[
                                                    styles.text_content,
                                                    {
                                                        textAlign: 'left',
                                                    },
                                                ]}
                                            >
                                                {item.place}
                                            </Text>
                                        </View>
                                        <View style={{ marginHorizontal: getSize.m(10) }}>
                                            <FastImage
                                                source={{ uri: item.logo_url }}
                                                style={{
                                                    width: getSize.m(18),
                                                    height: getSize.m(18),
                                                }}
                                            />
                                        </View>
                                        <View style={{ width: '50%' }}>
                                            <Text
                                                numberOfLines={2}
                                                style={[
                                                    styles.text_content,
                                                    {
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
                                    <Text style={styles.text_content}>{item.games}</Text>
                                </View>
                                <View style={{ width: getSize.m(30) }}>
                                    <Text style={styles.text_content}>{item.wins}</Text>
                                </View>
                                <View style={{ width: getSize.m(30) }}>
                                    <Text style={styles.text_content}>{item.ties}</Text>
                                </View>
                                <View style={{ width: getSize.m(30) }}>
                                    <Text style={styles.text_content}>{item.difference}</Text>
                                </View>
                                <View style={{ width: getSize.m(40) }}>
                                    <Text style={styles.text_content}>{item.goals}</Text>
                                </View>
                                <View style={{ width: getSize.m(30) }}>
                                    <Text style={styles.text_content}>{item.score}</Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};
