import { View, Text, TouchableOpacity } from 'react-native';
import IconLocation from 'react-native-vector-icons/EvilIcons';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appColors } from '@football/app/utils/constants/appColors';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import { getSize } from '@football/app/utils/responsive/scale';
import { appIcons } from '@football/app/assets/icons/appIcons';
import styles from './DataCoachGamesScreen.style';
import { useViewModel } from './DataCoachGamesScreen.viewModel';
import { IDataCoachGamesScreenProps } from './DataCoachGamesScreen.type';
import FastImage from 'react-native-fast-image';

export const DataCoachGamesScreen = ({ games }: IDataCoachGamesScreenProps) => {
    const { t, onGoBack } = useViewModel({ games });
    return (
        <View style={{ marginHorizontal: getSize.m(20) }}>
            {games.map((game, index) => {
                return (
                    <View key={index.toString()} style={styles.games}>
                        <View style={styles.tournaments}>
                            <Text style={styles.text_tournaments}>{t('coach.tournaments')}</Text>
                        </View>
                        <View
                            style={[
                                appStyles.flex_row_space,
                                {
                                    flexDirection: 'row-reverse',
                                    marginRight: getSize.m(20),
                                    marginLeft: getSize.m(24),
                                },
                            ]}
                        >
                            <View
                                style={[
                                    appStyles.flex_row_align,
                                    {
                                        flex: 0,
                                    },
                                ]}
                            >
                                <IconLocation
                                    name={appIcons.ic_location}
                                    size={getSize.m(20)}
                                    color={appColors.blue_light}
                                />
                                <Text
                                    style={[
                                        styles.stadium,
                                        {
                                            color: appColors.text_dark_blue,
                                        },
                                    ]}
                                >
                                    {game.stadium_he}
                                </Text>
                            </View>
                            <Text
                                style={[
                                    styles.date,
                                    {
                                        color: appColors.text_dark_blue,
                                    },
                                ]}
                            >
                                {game.date}
                            </Text>
                        </View>
                        <View
                            style={[
                                appStyles.flex_row_space,
                                {
                                    marginHorizontal: getSize.m(28),
                                },
                            ]}
                        >
                            <View style={[styles.circle, { right: getSize.m(-40) }]} />
                            <View style={[styles.circle, { left: getSize.m(-40) }]} />
                        </View>
                        <View style={styles.line_dots} />
                        <View
                            style={[
                                appStyles.flex_row_space_center,
                                { marginHorizontal: getSize.m(36), flexDirection: 'row-reverse' },
                            ]}
                        >
                            <View style={[appStyles.align_justify]}>
                                <View style={styles.avt_club}>
                                    <FastImage
                                        style={{
                                            width: getSize.m(24),
                                            height: getSize.m(24),
                                            borderRadius: getSize.m(24),
                                        }}
                                        source={{ uri: game.team1.logo_url }}
                                    />
                                </View>

                                <Text style={styles.name_club}>{game.team1.name_he}</Text>
                            </View>
                            {game.score != null ? (
                                <View style={[appStyles.align_justify, styles.result]}>
                                    <Text style={styles.score}>{game.score}</Text>
                                </View>
                            ) : (
                                <View style={[appStyles.align_justify, styles.result]}>
                                    <Text style={styles.score}>{game.time}</Text>
                                </View>
                            )}

                            <View style={[appStyles.align_justify]}>
                                <View style={styles.avt_club}>
                                    <FastImage
                                        style={{
                                            width: getSize.m(24),
                                            height: getSize.m(24),
                                            borderRadius: getSize.m(24),
                                        }}
                                        source={{ uri: game.team2.logo_url }}
                                    />
                                </View>
                                <Text style={styles.name_club}>{game.team2.name_he}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={[appStyles.flex_row_center, { flex: 0 }]}>
                            <Text style={styles.details}>{t('coach.game_details')}</Text>
                            <Icon
                                name={appIcons.ic_arrow_left}
                                size={getSize.m(10)}
                                color={appColors.button_dark_blue}
                            />
                        </TouchableOpacity>
                    </View>
                );
            })}
        </View>
    );
};
