import { appIcons } from '@football/app/assets/icons/appIcons';
import { ITrophyProps } from '@football/app/screens/football-state-cup/layouts/Statistics/Trophy/Trophy.type';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import styles from './Trophy.style';
import { useViewModel } from './Trophy.viewModel';

export const Trophy = ({ cupHolders, cup }: ITrophyProps) => {
    const { t, handleCupAround, holders } = useViewModel({ cupHolders, cup });

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
                <Text style={styles.title}>{t('state_cup.statistics.trophy')}</Text>
                <TouchableOpacity style={appStyles.flex_row_space_center} onPress={handleCupAround}>
                    <Text style={styles.see_all}>{t('state_cup.statistics.see_all')}</Text>
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
                <View style={{ width: getSize.m(90) }}>
                    <Text style={[styles.header, { textAlign: 'left' }]}>
                        {t('state_cup.statistics.season')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(200) }}>
                    <Text style={[styles.header, { textAlign: 'left' }]}>
                        {t('state_cup.statistics.group')}
                    </Text>
                </View>
            </View>
            <View style={{ marginTop: getSize.m(10) }}>
                {holders.map((item, index) => {
                    return (
                        <LinearGradient
                            key={item.cup_season_id}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            colors={[
                                index % 2 === 1 ? 'rgba(16, 32, 100, 0.04)' : appColors.gray,
                                index % 2 === 1 ? 'rgba(59, 168, 225, 0.04)' : appColors.gray,
                            ]}
                            style={[appStyles.flex_row_space_center, styles.itemTeam]}
                        >
                            <View
                                style={{
                                    width: getSize.m(90),
                                    overflow: 'hidden',
                                }}
                            >
                                <Text style={[styles.text_content, { textAlign: 'left' }]}>
                                    {item.cup_season_name}
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
                                    <Avatar
                                        source={{ uri: item.team_image_url }}
                                        rounded
                                        size={18}
                                    />
                                    <Text
                                        style={[
                                            styles.text_content,
                                            {
                                                marginLeft: getSize.m(10),
                                            },
                                        ]}
                                    >
                                        {item.team_name_en}
                                    </Text>
                                </View>
                            </View>
                        </LinearGradient>
                    );
                })}
            </View>
        </View>
    );
};
