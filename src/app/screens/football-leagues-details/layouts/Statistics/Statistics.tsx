import { Button } from '@football/app/components/button';
import { ButtonOption } from '@football/app/components/button_option';
import { Position } from '@football/app/components/position/Position';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { AccumulationReds } from './accumulation-reds/AccumulationReds';
import { AccumulationYellows } from './accumulation-yellows/AccumulationYellows';
import { AverageYellows } from './average-yellows/AverageYellows';
import { HistoryChampionShips } from './history-championships/HistoryChampionShips';
import { ScoresGoals } from './scores-goals/ScoresGoals';
import styles from './Statistics.style';
import { IStatisticsProps } from './Statistics.type';
import { useViewModel } from './Statistics.viewModel';
export const Statistics = ({}: IStatisticsProps) => {
    const { t, setOnSelect, handleMoreStatistics, onSelect, listTeams } = useViewModel({});
    return (
        <View>
            <Text style={[appStyles.text_topic, { marginLeft: getSize.m(6) }]}>
                {t('leagues_details.statistics.title')}
            </Text>
            <View style={{ marginTop: getSize.m(20) }}>
                <ButtonOption
                    option_one={t('leagues_details.statistics.ranking_home')}
                    option_two={t('leagues_details.statistics.ranking_away')}
                    onSelect={setOnSelect}
                />
                {onSelect === 0 ? (
                    <View style={{ marginTop: getSize.m(20) }}>
                        <Position position="מחזור 34" />
                        <View>
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
                                    <Text style={styles.header}>
                                        {t('leagues_details.league_table.from')}
                                    </Text>
                                </View>
                                <View style={{ width: getSize.m(30) }}>
                                    <Text style={styles.header}>
                                        {t('leagues_details.league_table.nch')}
                                    </Text>
                                </View>
                                <View style={{ width: getSize.m(30) }}>
                                    <Text style={styles.header}>
                                        {t('leagues_details.league_table.draw')}
                                    </Text>
                                </View>
                                <View style={{ width: getSize.m(30) }}>
                                    <Text style={styles.header}>
                                        {t('leagues_details.league_table.the_p')}
                                    </Text>
                                </View>
                                <View style={{ width: getSize.m(40) }}>
                                    <Text style={styles.header}>
                                        {t('leagues_details.league_table.time')}
                                    </Text>
                                </View>
                                <View style={{ width: getSize.m(30) }}>
                                    <Text style={styles.header}>
                                        {t('leagues_details.league_table.no')}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ marginTop: getSize.m(10) }}>
                                {listTeams.map(item => {
                                    return (
                                        <View
                                            key={item.id}
                                            style={[
                                                appStyles.flex_row_space_center,
                                                styles.itemTeam,
                                                {
                                                    backgroundColor:
                                                        item.id % 2 === 1
                                                            ? appColors.blue_matte
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
                                                    <Text
                                                        style={[
                                                            styles.text_content,
                                                            {
                                                                marginRight: getSize.m(10),
                                                            },
                                                        ]}
                                                    >
                                                        {item.id}
                                                    </Text>
                                                    <Avatar source={item.logo} rounded size={18} />
                                                    <Text
                                                        style={[
                                                            styles.text_content,
                                                            {
                                                                marginLeft: getSize.m(10),
                                                            },
                                                        ]}
                                                    >
                                                        {item.name}
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{ width: getSize.m(30) }}>
                                                <Text style={styles.text_content}>{item.from}</Text>
                                            </View>
                                            <View style={{ width: getSize.m(30) }}>
                                                <Text style={styles.text_content}>{item.nch}</Text>
                                            </View>
                                            <View style={{ width: getSize.m(30) }}>
                                                <Text style={styles.text_content}>{item.draw}</Text>
                                            </View>
                                            <View style={{ width: getSize.m(30) }}>
                                                <Text style={styles.text_content}>
                                                    {item.the_p}
                                                </Text>
                                            </View>
                                            <View style={{ width: getSize.m(40) }}>
                                                <Text style={styles.text_content}>{item.time}</Text>
                                            </View>
                                            <View style={{ width: getSize.m(30) }}>
                                                <Text style={styles.text_content}>{item.no}</Text>
                                            </View>
                                        </View>
                                    );
                                })}
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: getSize.m(32) }}>
                            <Button
                                title={t('leagues_details.statistics.more')}
                                onPress={handleMoreStatistics}
                            />
                        </View>
                        <ScoresGoals />
                        <AccumulationYellows />
                        <AccumulationReds />
                        <AverageYellows />
                        <HistoryChampionShips />
                    </View>
                ) : (
                    <View>
                        <Text>away</Text>
                    </View>
                )}
            </View>
        </View>
    );
};
