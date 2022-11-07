import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import Icon from 'react-native-vector-icons/Feather';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { AppImages } from '@football/app/assets/images';
import { Avatar } from 'react-native-elements';
import styles from './YellowsLeagues.style';
import { useViewModel } from './YellowsLeagues.viewModel';

export const YellowsLeagues = () => {
    const { t, listPlayerGoal } = useViewModel({});
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
                <Text style={styles.title}>{t('group_page.statistics.yellow_league')}</Text>
                <TouchableOpacity style={appStyles.flex_row_space_center}>
                    <Text style={styles.see_all}>{t('group_page.statistics.see_all')}</Text>
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
                <View>
                    <Text style={styles.header}>{t('group_page.statistics.player_name')}</Text>
                </View>
                <View
                    style={{
                        width: getSize.m(40),
                    }}
                >
                    <Text style={styles.header}>{t('group_page.statistics.number_yellow')}</Text>
                </View>
            </View>
            <View style={{ marginTop: getSize.m(10) }}>
                {listPlayerGoal.map(item => {
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
                            <View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                    }}
                                >
                                    <Avatar source={item.avt} rounded size={18} />
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
                            <View
                                style={{
                                    width: getSize.m(40),
                                }}
                            >
                                <Image source={AppImages.img_ticket_yellow} style={styles.ticket} />
                                <Text style={[styles.text_content]}>{item.yellow}</Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};
