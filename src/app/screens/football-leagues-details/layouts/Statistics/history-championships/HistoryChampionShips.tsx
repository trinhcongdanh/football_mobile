import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import Icon from 'react-native-vector-icons/Feather';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from './HistoryChampionShips.style';
import { useViewModel } from './HistoryChampionShips.viewModel';
import { IHistoryChampionShipsProps } from './HistoryChampionShips.type';

export const HistoryChampionShips = ({}: IHistoryChampionShipsProps) => {
    const { t, seasonsHistory } = useViewModel({});
    return (
        <View style={styles.item_statistics}>
            <View
                style={[
                    appStyles.flex_row_space_center,
                    {
                        marginHorizontal: getSize.m(4),
                    },
                ]}
            >
                <Text style={styles.title}>{t('leagues_details.statistics.history')}</Text>
                <TouchableOpacity style={appStyles.flex_row_space_center}>
                    <Text style={styles.see_all}>{t('leagues_details.statistics.see_all')}</Text>
                    <Icon
                        name={appIcons.ic_arrow_left}
                        size={getSize.m(10)}
                        color={appColors.button_dark_blue}
                        style={styles.ic_arrow}
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
                <View style={{ width: getSize.m(80) }}>
                    <Text style={[styles.header, { textAlign: 'left' }]}>
                        {t('leagues_details.statistics.season')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(200) }}>
                    <Text style={[styles.header, { textAlign: 'left' }]}>
                        {t('leagues_details.statistics.name_club')}
                    </Text>
                </View>
            </View>
            <View style={{ marginTop: getSize.m(10) }}>
                {seasonsHistory.map(item => {
                    return (
                        <View
                            key={item.id}
                            style={[
                                appStyles.flex_row_space_center,
                                styles.itemTeam,
                                {
                                    backgroundColor:
                                        item.id % 2 === 1 ? appColors.blue_matte : appColors.white,
                                },
                            ]}
                        >
                            <View
                                style={{
                                    width: getSize.m(80),
                                    overflow: 'hidden',
                                }}
                            >
                                <Text style={[styles.text_content, { textAlign: 'left' }]}>
                                    {item.season}
                                </Text>
                            </View>
                            <View
                                style={{
                                    width: getSize.m(200),
                                    overflow: 'hidden',
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                    }}
                                >
                                    <Avatar source={item.avt_club} rounded size={18} />
                                    <Text
                                        style={[
                                            styles.text_content,
                                            {
                                                marginLeft: getSize.m(10),
                                            },
                                        ]}
                                    >
                                        {item.name_club}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};
