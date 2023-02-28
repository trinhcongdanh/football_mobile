import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import styles from './RedCard.style';
import { IRedCardProps } from './RedCard.type';
import { useViewModel } from './RedCard.viewModel';

export const RedCard = ({ listGames }: IRedCardProps) => {
    const { t } = useViewModel();
    return (
        <View style={appStyles.item_statistics}>
            <View style={[appStyles.flex_row_space_center]}>
                <Text style={appStyles.statistics_title}>{t('statistics.group.red_card')}</Text>
                <TouchableOpacity style={appStyles.flex_row_space_center}>
                    <Text style={appStyles.statistics_see_all}>
                        {t('statistics.group.see_all')}
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
                <View>
                    <Text style={[appStyles.statistics_header, { fontSize: getSize.m(12) }]}>
                        {t('statistics.group.player_name')}
                    </Text>
                </View>
                <View
                    style={{
                        width: getSize.m(40),
                    }}
                >
                    <Text style={[appStyles.statistics_header, { fontSize: getSize.m(12) }]}>
                        {t('statistics.group.number_red')}
                    </Text>
                </View>
            </View>
            <View style={{ marginTop: getSize.m(10) }}>
                {listGames.map((item, index) => {
                    return (
                        <LinearGradient
                            key={item.player_id}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            colors={[
                                index % 2 === 0 ? 'rgba(16, 32, 100, 0.04)' : appColors.gray,
                                index % 2 !== 0 ? 'rgba(59, 168, 225, 0.04)' : appColors.gray,
                            ]}
                            style={[appStyles.flex_row_space_center, appStyles.statistic_row]}
                        >
                            <View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                    }}
                                >
                                    <Avatar source={{ uri: item.image_url }} rounded size={18} />

                                    <Text
                                        style={[
                                            appStyles.statistics_content,
                                            {
                                                marginLeft: getSize.m(10),
                                                fontSize: getSize.m(14),
                                            },
                                        ]}
                                    >
                                        {item.name_he}
                                    </Text>
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
                                        { fontSize: getSize.m(14), color: appColors.white },
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
