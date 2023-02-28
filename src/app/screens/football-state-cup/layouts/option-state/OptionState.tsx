import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import styles from './OptionState.style';
import { useViewModel } from './OptionState.viewModel';
import { IOptionStateProps } from './OptionState.type';
import LinearGradient from 'react-native-linear-gradient';
export const OptionState = ({ label, data }: IOptionStateProps) => {
    const { t, listState, onNavigateGame } = useViewModel();
    return (
        <View
            style={{
                marginHorizontal: getSize.m(10),
                marginVertical: getSize.m(20),
            }}
        >
            <Text style={[appStyles.text_topic, { marginLeft: getSize.m(6) }]}>{label}</Text>
            <View style={{ marginTop: getSize.m(20) }}>
                <View
                    style={[
                        appStyles.flex_row_space_center,
                        {
                            paddingHorizontal: getSize.m(8),
                        },
                    ]}
                >
                    <View style={{ width: getSize.m(60) }}>
                        <Text style={styles.header}>{t('state_cup.early_stage_game.date')}</Text>
                    </View>
                    <View style={{ width: getSize.m(110) }}>
                        <Text style={styles.header}>{t('state_cup.early_stage_game.play')}</Text>
                    </View>
                    <View style={{ width: getSize.m(80) }}>
                        <Text style={styles.header}>{t('state_cup.early_stage_game.etch')}</Text>
                    </View>
                    <View style={{ width: getSize.m(30) }}>
                        <Text style={styles.header}>{t('state_cup.early_stage_game.hour')}</Text>
                    </View>
                    <View style={{ width: getSize.m(30) }}>
                        <Text style={styles.header}>{t('state_cup.early_stage_game.toch')}</Text>
                    </View>
                </View>
                <View style={{ marginTop: getSize.m(10) }}>
                    {data.map(item => {
                        return (
                            <TouchableOpacity onPress={onNavigateGame} key={item.id}>
                                <LinearGradient
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    colors={[
                                        item.id % 2 === 1
                                            ? 'rgba(16, 32, 100, 0.04)'
                                            : appColors.gray,
                                        item.id % 2 === 1
                                            ? 'rgba(59, 168, 225, 0.04)'
                                            : appColors.gray,
                                    ]}
                                    style={[appStyles.flex_row_space_center, styles.itemTeam]}
                                >
                                    <View style={{ width: getSize.m(60) }}>
                                        <Text style={styles.text_content}>{item.date}</Text>
                                    </View>
                                    <View style={{ width: getSize.m(110) }}>
                                        <Text style={styles.text_content}>
                                            {item.team1.name_he}-{item.team2.name_he}
                                        </Text>
                                    </View>
                                    <View style={{ width: getSize.m(80) }}>
                                        <Text style={styles.text_content}>{item.stadium_he}</Text>
                                    </View>
                                    <View style={{ width: getSize.m(30) }}>
                                        <Text style={styles.text_content}>{item.time}</Text>
                                    </View>
                                    <View style={{ width: getSize.m(30) }}>
                                        <Text style={styles.text_content}>{item.score}</Text>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        </View>
    );
};
