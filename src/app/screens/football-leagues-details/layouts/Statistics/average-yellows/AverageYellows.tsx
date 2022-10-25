import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import Icon from 'react-native-vector-icons/Feather';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from './AverageYellows.style';
import { useViewModel } from './AverageYellows.viewModel';
import { IAverageYellowsProps } from './AverageYellows.type';

export const AverageYellows = ({}: IAverageYellowsProps) => {
    const { t, listAverages } = useViewModel({});
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
                <Text style={styles.title}>{t('leagues_details.statistics.average_yellow')}</Text>
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
                <View style={{ width: getSize.m(30) }}>
                    <Text style={[styles.header, { textAlign: 'left' }]}>
                        {t('leagues_details.statistics.location')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(160) }}>
                    <Text style={[styles.header, { textAlign: 'left' }]}>
                        {t('leagues_details.statistics.name_club')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(60) }}>
                    <Text style={styles.header}>
                        {t('leagues_details.statistics.number_yellow')}
                    </Text>
                </View>
            </View>
            <View style={{ marginTop: getSize.m(10) }}>
                {listAverages.map(item => {
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
                                    width: getSize.m(30),
                                    overflow: 'hidden',
                                }}
                            >
                                <Text style={[styles.text_content]}>{item.id}</Text>
                            </View>
                            <View
                                style={{
                                    width: getSize.m(160),
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
                            <View
                                style={{
                                    width: getSize.m(60),
                                }}
                            >
                                <Text style={styles.text_content}>{item.amount}</Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};
