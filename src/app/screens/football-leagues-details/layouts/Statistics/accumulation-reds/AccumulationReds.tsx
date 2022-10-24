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
        <View style={styles.item_statistics}>
            <View
                style={[
                    appStyles.flex_row_space_center,
                    {
                        marginHorizontal: getSize.m(4),
                    },
                ]}
            >
                <Text style={styles.title}>{t('leagues_details.statistics.accumulation_red')}</Text>
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
                <View style={{ width: getSize.m(120) }}>
                    <Text style={[styles.header, { textAlign: 'left' }]}>
                        {t('leagues_details.statistics.name_club')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(120) }}>
                    <Text style={[styles.header, { textAlign: 'left' }]}>
                        {t('leagues_details.statistics.name_player')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(40) }}>
                    <Text style={styles.header}>{t('leagues_details.statistics.red')}</Text>
                </View>
            </View>
            <View style={{ marginTop: getSize.m(10) }}>
                {listTickets.map(item => {
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
                                            styles.text_content,
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
                                        styles.text_content,
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
