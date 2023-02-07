import React from 'react';
import { View, Text } from 'react-native';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import styles from './OptionState.style';
import { useViewModel } from './OptionState.viewModel';
import { IOptionStateProps } from './OptionState.type';
export const OptionState = ({ label }: IOptionStateProps) => {
    const { t, listState } = useViewModel();
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
                    <View style={{ width: getSize.m(50) }}>
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
                    {listState.map(item => {
                        return (
                            <View
                                key={item.id}
                                style={[
                                    appStyles.flex_row_space_center,
                                    styles.itemTeam,
                                    {
                                        backgroundColor:
                                            item.id % 2 === 1
                                                ? 'rgba(7, 16, 47, 0.03)'
                                                : appColors.gray,
                                    },
                                ]}
                            >
                                <View style={{ width: getSize.m(50) }}>
                                    <Text style={styles.text_content}>{item.date}</Text>
                                </View>
                                <View style={{ width: getSize.m(110) }}>
                                    <Text style={styles.text_content}>{item.play}</Text>
                                </View>
                                <View style={{ width: getSize.m(80) }}>
                                    <Text style={styles.text_content}>{item.etch}</Text>
                                </View>
                                <View style={{ width: getSize.m(30) }}>
                                    <Text style={styles.text_content}>{item.hour}</Text>
                                </View>
                                <View style={{ width: getSize.m(30) }}>
                                    <Text style={styles.text_content}>{item.toch}</Text>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </View>
        </View>
    );
};
