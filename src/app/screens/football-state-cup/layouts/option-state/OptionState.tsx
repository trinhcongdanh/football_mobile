import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import styles from './OptionState.style';
import { useViewModel } from './OptionState.viewModel';
import { IOptionStateProps } from './OptionState.type';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import moment from 'moment';
export const OptionState = ({ label, data }: IOptionStateProps) => {
    const { t, listState, onNavigateGame, getTranslationText, getDate, getTime } = useViewModel();

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
                    <View style={{ width: getSize.m(40) }}>
                        <Text style={styles.header}>{t('state_cup.early_stage_game.hour')}</Text>
                    </View>
                    <View style={{ width: getSize.m(30) }}>
                        <Text style={styles.header}>{t('state_cup.early_stage_game.toch')}</Text>
                    </View>
                </View>
                <View style={{ marginTop: getSize.m(10) }}>
                    {data.map(item => {
                        return (
                            <TouchableOpacity
                                onPress={() => onNavigateGame(item.game_id)}
                                key={item.id}
                            >
                                <LinearGradient
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    colors={[
                                        item.id % 2 === 1 ? appColors.linearLight : appColors.gray,
                                        item.id % 2 === 1 ? appColors.linearDark : appColors.gray,
                                    ]}
                                    style={[appStyles.flex_row_space_center, styles.itemTeam]}
                                >
                                    <View style={{ width: getSize.m(60) }}>
                                        <Text style={styles.text_content}>
                                            {getDate({ date: item.date })}
                                        </Text>
                                    </View>
                                    <View style={{ width: getSize.m(110) }}>
                                        <Text style={styles.text_content}>
                                            {getTranslationText({
                                                textHe: item.team1.name_he,
                                                textEn: item.team1.name_en,
                                            })}
                                            -
                                            {getTranslationText({
                                                textHe: item.team2.name_he,
                                                textEn: item.team2.name_en,
                                            })}
                                        </Text>
                                    </View>
                                    <View style={{ width: getSize.m(80) }}>
                                        <Text style={styles.text_content}>
                                            {getTranslationText({
                                                textHe: item.stadium_he,
                                                textEn: item.stadium_en,
                                            })}
                                        </Text>
                                    </View>
                                    <View style={{ width: getSize.m(40) }}>
                                        <Text style={styles.text_content}>
                                            {getTime({ time: item.time })}
                                        </Text>
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
