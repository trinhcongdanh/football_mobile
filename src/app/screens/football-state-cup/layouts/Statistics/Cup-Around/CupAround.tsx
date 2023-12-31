import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { getSize } from '@football/app/utils/responsive/scale';
import { appColors } from '@football/app/utils/constants/appColors';
import Icon from 'react-native-vector-icons/Feather';
import { appStyles } from '@football/app/utils/constants/appStyles';
import styles from './CupAround.style';
import { useViewModel } from './CupAround.viewModel';
import LinearGradient from 'react-native-linear-gradient';

export const CupAround = () => {
    const { t, cupsAround, handleStatisticDetailsScreen } = useViewModel();
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
                <TouchableOpacity
                    style={appStyles.flex_row_space_center}
                    onPress={handleStatisticDetailsScreen}
                >
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
                        {t('state_cup.statistics.date')}
                    </Text>
                </View>
                <View style={{ width: getSize.m(200) }}>
                    <Text style={[styles.header, { textAlign: 'left' }]}>
                        {t('state_cup.statistics.round')}
                    </Text>
                </View>
            </View>
            <View style={{ marginTop: getSize.m(10) }}>
                {cupsAround.map(item => {
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
                                    width: getSize.m(90),
                                }}
                            >
                                <Text style={[styles.text_content, { textAlign: 'left' }]}>
                                    {item.date}
                                </Text>
                            </View>
                            <View
                                style={{
                                    width: getSize.m(200),
                                }}
                            >
                                <Text style={[styles.text_content, { textAlign: 'left' }]}>
                                    {item.group}
                                </Text>
                            </View>
                        </LinearGradient>
                    );
                })}
            </View>
        </View>
    );
};
