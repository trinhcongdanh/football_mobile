import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Avatar } from 'react-native-elements';
import styles from './LeaguesTable.style';
import { ILeaguesTableProps } from './LeaguesTable.type';
import { useViewModel } from './LeaguesTable.viewModel';
import LinearGradient from 'react-native-linear-gradient';

export const LeaguesTable = ({}: ILeaguesTableProps) => {
    const { t, listTeams } = useViewModel({});
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
                <View style={{ marginTop: getSize.m(10) }}>
                    {listTeams.map(item => {
                        return (
                            <LinearGradient
                                key={item.id}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                colors={[
                                    item.id % 2 === 1 ? 'rgba(16, 32, 100, 0.04)' : appColors.gray,
                                    item.id % 2 === 1 ? 'rgba(59, 168, 225, 0.04)' : appColors.gray,
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
                                        <Text
                                            style={[
                                                styles.text_content,
                                                { marginRight: getSize.m(10) },
                                            ]}
                                        >
                                            {item.id}
                                        </Text>
                                        <FastImage
                                            source={{ uri: item.logo }}
                                            style={{ width: getSize.m(18), height: getSize.m(18) }}
                                        />
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
                                    <Text style={styles.text_content}>{item.the_p}</Text>
                                </View>
                                <View style={{ width: getSize.m(40) }}>
                                    <Text style={styles.text_content}>{item.time}</Text>
                                </View>
                                <View style={{ width: getSize.m(30) }}>
                                    <Text style={styles.text_content}>{item.no}</Text>
                                </View>
                            </LinearGradient>
                        );
                    })}
                </View>
            </View>
        </View>
    );
};
