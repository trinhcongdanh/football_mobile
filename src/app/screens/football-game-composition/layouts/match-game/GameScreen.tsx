import { View, ScrollView, Text } from 'react-native';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appColors } from '@football/app/utils/constants/appColors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { getSize } from '@football/app/utils/responsive/scale';
import { AppImages } from '@football/app/assets/images';
import { TicketYellow } from '@football/app/components/ticket_yellow/TicketYellow';
import { TicketRed } from '@football/app/components/ticket_red/TicketRed';
import { Goal } from '@football/app/components/goal/Goal';
import { Replace } from '@football/app/components/replace/Replace';
import styles from './GameScreen.styles';
import { useViewModel } from './GameScreen.viewModel';
import { IGameScreenProps } from './GameScreen.type';

// type Props = {};

export const GameScreen = ({ navigation, route }: IGameScreenProps) => {
    const { t } = useViewModel({
        navigation,
        route,
    });
    return (
        <View
            style={[
                appStyles.flex,
                { backgroundColor: appColors.gray, paddingHorizontal: getSize.m(16) },
            ]}
        >
            <ScrollView>
                <View style={{ marginTop: getSize.m(30) }}>
                    <View style={appStyles.flex_row_align_center}>
                        <View style={styles.whistle}>
                            <Icon
                                name={appIcons.ic_whistle}
                                size={getSize.m(13)}
                                color={appColors.blue_light}
                            />
                        </View>
                        <Text>{t('match.game_move.start')}</Text>
                    </View>
                    <View style={styles.line} />
                    <View>
                        <View style={{ marginTop: getSize.m(20) }}>
                            <TicketYellow
                                name="דני גרופר"
                                avt="https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg"
                                minute="22'"
                                team="ישראל"
                            />
                        </View>
                        <View style={{ marginTop: getSize.m(30) }}>
                            <TicketRed
                                name="דני גרופר"
                                avt="https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg"
                                minute="30'"
                                team="ישראל"
                            />
                        </View>
                        <View style={{ marginTop: getSize.m(45) }}>
                            <Goal
                                name="דני גרופר"
                                avt="https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg"
                                minute="45'"
                                team="ישראל"
                            />
                        </View>
                        <View style={{ marginTop: getSize.m(78) }}>
                            <Replace
                                name_up="עומר אצילי"
                                name_down="דני גרופר"
                                avt_up="https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg"
                                avt_down="https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg"
                                minute="78'"
                                team="ישראל"
                            />
                        </View>
                        <View style={{ marginTop: getSize.m(90) }}>
                            <Goal
                                name="דני גרופר"
                                avt="https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg"
                                minute="90'"
                                team="ישראל"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
