import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import Icon from 'react-native-vector-icons/Feather';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { AppImages } from '@football/app/assets/images';
import { Avatar } from 'react-native-elements';
import styles from './AverageYellows.style';
import { useViewModel } from './AverageYellows.viewModel';
import { IAverageYellowsProps } from './AverageYellows.type';

export const AverageYellows = ({}: IAverageYellowsProps) => {
    const { t, listAverages } = useViewModel({});
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
                <Text style={appStyles.statistics_title}>
                    {t('statistics.leagues.average_yellow')}
                </Text>
                <TouchableOpacity style={appStyles.flex_row_space_center}>
                    <Text style={appStyles.statistics_see_all}>
                        {t('statistics.leagues.see_all')}
                    </Text>
                    <Icon
                        name={appIcons.ic_arrow_left}
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
                <View style={{ width: getSize.m(30) }}>
                    <Text style={[appStyles.statistics_header, { textAlign: 'left' }]}>
                        {t('statistics.leagues.location')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(160) }}>
                    <Text style={[appStyles.statistics_header, { textAlign: 'left' }]}>
                        {t('statistics.leagues.name_club')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(60) }}>
                    <Text style={appStyles.statistics_header}>
                        {t('statistics.leagues.average')}
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
                                appStyles.statistic_row,
                                {
                                    backgroundColor:
                                        item.id % 2 === 1
                                            ? 'rgba(7, 16, 47, 0.03)'
                                            : appColors.gray,
                                },
                            ]}
                        >
                            <View
                                style={{
                                    width: getSize.m(30),
                                    overflow: 'hidden',
                                }}
                            >
                                <Text style={[appStyles.statistics_content]}>{item.id}</Text>
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
                                            appStyles.statistics_content,
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
                                style={[
                                    appStyles.flex_row_center,
                                    {
                                        width: getSize.m(60),
                                        flex: 0,
                                    },
                                ]}
                            >
                                <Text style={appStyles.statistics_content}>{item.amount}</Text>
                                <Image source={AppImages.img_ticket_yellow} style={styles.ticket} />
                            </View>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};
