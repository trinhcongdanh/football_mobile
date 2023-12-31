import { View, ScrollView, Text } from 'react-native';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appColors } from '@football/app/utils/constants/appColors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { getSize } from '@football/app/utils/responsive/scale';
import { TicketYellow } from '@football/app/components/ticket_yellow/TicketYellow';
import { TicketRed } from '@football/app/components/ticket_red/TicketRed';
import { Goal } from '@football/app/components/goal/Goal';
import { Replace } from '@football/app/components/replace/Replace';
import { Gameplay, GamePlayAction } from '@football/core/models/GameModelResponse';
import styles from './GameScreen.styles';
import { useViewModel } from './GameScreen.viewModel';
import { IGameScreenProps } from './GameScreen.type';

// type Props = {};

export const GameScreen = ({ navigation, route }: IGameScreenProps) => {
    const game = route?.params?.data;

    const { t } = useViewModel({
        navigation,
        route,
    });
    // if (gamePlay.isLoading == true) {
    //     return <></>;
    // }
    // if (gamePlay.success == false) {
    //     return <></>;
    // }
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
                        {game?.gameplay.map((item: Gameplay, index: number) => {
                            return (
                                // eslint-disable-next-line react/no-array-index-key
                                <View key={index} style={{ marginTop: getSize.m(item.minute) }}>
                                    {item.action === GamePlayAction.YellowCard && (
                                        <TicketYellow
                                            name={item.player.name_he}
                                            avt={item.player.image_url}
                                            minute={item.minute}
                                            team={item.team_name_he}
                                        />
                                    )}
                                    {item.action === GamePlayAction.RedCard && (
                                        <TicketRed
                                            name={item.player.name_he}
                                            avt={item.player.image_url}
                                            minute={item.minute}
                                            team={item.team_name_he}
                                        />
                                    )}
                                    {item.action === GamePlayAction.Goal && (
                                        <Goal
                                            name={item.player.name_he}
                                            avt={item.player.image_url}
                                            minute={item.minute}
                                            team={item.team_name_he}
                                        />
                                    )}
                                    {item.action === GamePlayAction.Exchange && (
                                        <Replace
                                            name_up={item.player_up.name_he}
                                            name_down={item.player_down.name_he}
                                            avt_up={item.player_up.image_url}
                                            avt_down={item.player_down.image_url}
                                            minute={item.minute}
                                            team={item.team_name_he}
                                        />
                                    )}
                                </View>
                            );
                        })}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
