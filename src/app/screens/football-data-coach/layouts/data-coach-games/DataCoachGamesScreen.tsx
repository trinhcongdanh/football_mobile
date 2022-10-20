import { View, Text, TouchableOpacity } from 'react-native';
import IconLocation from 'react-native-vector-icons/EvilIcons';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appColors } from '@football/app/utils/constants/appColors';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import { getSize } from '@football/app/utils/responsive/scale';
import { AppImages } from '@football/app/assets/images';
import { appIcons } from '@football/app/assets/icons/appIcons';
import styles from './DataCoachGamesScreen.style';
import { useViewModel } from './DataCoachGamesScreen.viewModel';
import { IDataCoachGamesScreenProps } from './DataCoachGamesScreen.type';

export const DataCoachGamesScreen = ({}: IDataCoachGamesScreenProps) => {
    const { t, onGoBack } = useViewModel({});
    const matches = Array(2).fill('');
    return (
        <View>
            {matches.map((inp: string, index: number) => {
                return (
                    <View key={index.toString()} style={styles.games}>
                        <View style={styles.tournaments}>
                            <Text style={styles.text_tournaments}>{t('coach.tournaments')}</Text>
                        </View>
                        <View style={appStyles.flex_row_space}>
                            <Text
                                style={[
                                    styles.date,
                                    {
                                        color: appColors.text_dark_blue,
                                    },
                                ]}
                            >
                                15.09.22
                            </Text>
                            <View style={[appStyles.flex_row_align, { flex: 0 }]}>
                                <IconLocation
                                    name={appIcons.ic_location}
                                    size={getSize.m(15)}
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
                                    {t('match.stadium')}
                                </Text>
                            </View>
                        </View>
                        <View style={appStyles.flex_row_space}>
                            <View style={[styles.circle, { right: getSize.m(-40) }]} />
                            <View style={[styles.circle, { left: getSize.m(-40) }]} />
                        </View>
                        <View style={styles.line_dots} />
                        <View
                            style={[
                                appStyles.flex_row_space_center,
                                { marginHorizontal: getSize.m(36) },
                            ]}
                        >
                            <View style={[appStyles.align_justify]}>
                                <Avatar
                                    rounded
                                    size={getSize.m(40)}
                                    source={AppImages.img_albania}
                                    containerStyle={styles.avt_club}
                                />
                                <Text style={styles.name_club}>{t('match.club.albania')}</Text>
                            </View>
                            <View style={[appStyles.align_justify, styles.result]}>
                                <Text style={styles.score}>3:1</Text>
                            </View>
                            <View style={[appStyles.align_justify]}>
                                <Avatar
                                    rounded
                                    size={getSize.m(40)}
                                    source={AppImages.img_israel}
                                    containerStyle={styles.avt_club}
                                />

                                <Text style={styles.name_club}>{t('match.club.israel')}</Text>
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
