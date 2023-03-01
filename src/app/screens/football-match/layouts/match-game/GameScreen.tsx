import { AppImages } from '@football/app/assets/images';
import { Goal } from '@football/app/components/goal/Goal';
import { Replace } from '@football/app/components/replace/Replace';
import { TicketRed } from '@football/app/components/ticket_red/TicketRed';
import { TicketYellow } from '@football/app/components/ticket_yellow/TicketYellow';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { Gameplay, GamePlayAction } from '@football/core/models/GameModelResponse';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './GameScreen.styles';
import { IGameScreenProps } from './GameScreen.type';
import { useViewModel } from './GameScreen.viewModel';

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
                            <FastImage
                                source={AppImages.img_whistle}
                                style={{ width: getSize.m(12), height: getSize.m(12) }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                        <Text style={styles.whistle_text}>{t('match.game_move.start')}</Text>
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
