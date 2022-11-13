import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import Icon from 'react-native-vector-icons/Feather';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import { AppImages } from '@football/app/assets/images';
import styles from './AccumulationReds.style';
import { useViewModel } from './AccumulationReds.viewModel';
import { IAccumulationRedsProps } from './AccumulationReds.type';
export const AccumulationReds = ({}: IAccumulationRedsProps) => {
    const { t, listTickets } = useViewModel({});
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
                    {t('statistics.leagues.accumulation_red')}
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
                <View style={{ width: getSize.m(120) }}>
                    <Text style={[appStyles.statistics_header, { textAlign: 'left' }]}>
                        {t('statistics.leagues.name_club')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(120) }}>
                    <Text style={[appStyles.statistics_header, { textAlign: 'left' }]}>
                        {t('statistics.leagues.name_player')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(40) }}>
                    <Text style={appStyles.statistics_header}>{t('statistics.leagues.red')}</Text>
                </View>
            </View>
            <View style={{ marginTop: getSize.m(10) }}>
                {listTickets.map(item => {
                    return (
                        <View
                            key={item.id}
                            style={[
                                appStyles.flex_row_space_center,
                                appStyles.statistic_row,
                                {
                                    backgroundColor:
                                        item.id % 2 === 1 ? appColors.blue_matte : appColors.gray,
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
                                    <Avatar source={item.avt_player} rounded size={18} />
                                    <Text
                                        style={[
                                            appStyles.statistics_content,
                                            {
                                                marginLeft: getSize.m(10),
                                            },
                                        ]}
                                    >
                                        {item.name_player}
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    width: getSize.m(40),
                                }}
                            >
                                <Image source={AppImages.img_ticket_red} style={styles.ticket} />
                                <Text
                                    style={[
                                        appStyles.statistics_content,
                                        {
                                            color: appColors.white,
                                        },
                                    ]}
                                >
                                    {item.amount}
                                </Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};
