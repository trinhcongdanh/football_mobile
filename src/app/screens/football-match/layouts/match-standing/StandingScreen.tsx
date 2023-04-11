import { View, ScrollView, Text } from 'react-native';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { Avatar } from 'react-native-elements';
import { appIcons } from '@football/app/assets/icons/appIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { LeaderBoard } from '@football/core/models/GameModelResponse';
import { useViewModel } from './StandingScreen.viewModel';
import { IStandingScreenProps } from './StandingScreen.type';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';

export const StandingScreen = ({ navigation, route }: IStandingScreenProps) => {
    const game = route?.params?.data;

    const { t } = useViewModel({
        navigation,
        route,
    });

    // if (leaderBoard.isLoading == true) {
    //     return <></>;
    // }
    // if (leaderBoard.success == false) {
    //     return <></>;
    // }

    const { getTranslationText } = useTranslationText();

    return (
        <View
            style={[
                appStyles.flex,
                {
                    backgroundColor: appColors.gray,
                    paddingTop: getSize.m(40),
                },
            ]}
        >
            <View style={{ marginTop: getSize.m(30) }}>
                <ScrollView>
                    <View>
                        <View
                            style={[
                                appStyles.flex_row_space_center,
                                {
                                    paddingHorizontal: getSize.m(4),
                                },
                            ]}
                        >
                            <View style={{ width: getSize.m(34) }}>
                                <Text
                                    style={[
                                        appStyles.statistics_header,
                                        { textAlign: 'left', marginLeft: getSize.m(2) },
                                    ]}
                                >
                                    {t('match.standing.place')}
                                </Text>
                            </View>
                            <View style={{ width: getSize.m(80) }}>
                                <Text
                                    style={[
                                        appStyles.statistics_header,
                                        { textAlign: 'left', marginLeft: getSize.m(2) },
                                    ]}
                                >
                                    {t('match.standing.team')}
                                </Text>
                            </View>
                            <View style={{ width: getSize.m(30) }}>
                                <Text style={appStyles.statistics_header}>
                                    {t('match.standing.mash')}
                                </Text>
                            </View>
                            <View style={{ width: getSize.m(30) }}>
                                <Text style={appStyles.statistics_header}>
                                    {t('match.standing.nch')}
                                </Text>
                            </View>
                            <View style={{ width: getSize.m(30) }}>
                                <Text style={appStyles.statistics_header}>
                                    {t('match.standing.draw')}
                                </Text>
                            </View>
                            <View style={{ width: getSize.m(30) }}>
                                <Text style={appStyles.statistics_header}>
                                    {t('match.standing.the_p')}
                                </Text>
                            </View>
                            <View style={{ width: getSize.m(40) }}>
                                <Text style={appStyles.statistics_header}>
                                    {t('match.standing.time')}
                                </Text>
                            </View>
                            <View style={{ width: getSize.m(30) }}>
                                <Text style={appStyles.statistics_header}>
                                    {t('match.standing.no')}
                                </Text>
                            </View>
                        </View>
                        <View>
                            {game?.leader_board?.map((item: LeaderBoard, index: number) => {
                                return (
                                    <LinearGradient
                                        key={item.place}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        colors={[
                                            index % 2 === 0
                                                ? appColors.linearLight
                                                : appColors.gray,
                                            index % 2 === 0 ? appColors.linearDark : appColors.gray,
                                        ]}
                                        style={[
                                            appStyles.flex_row_space_center,
                                            appStyles.statistic_row,
                                        ]}
                                    >
                                        <View
                                            style={[
                                                appStyles.flex_row_align,
                                                { width: getSize.m(40) },
                                            ]}
                                        >
                                            <View style={{ width: '38%' }}>
                                                <Text
                                                    style={[
                                                        appStyles.statistics_content,
                                                        {
                                                            textAlign: 'left',
                                                        },
                                                    ]}
                                                >
                                                    {item.place}
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    marginLeft: getSize.m(4),
                                                    marginTop: getSize.m(1),
                                                }}
                                            >
                                                {item.place_change === 'up' && (
                                                    <Icon
                                                        name={appIcons.ic_up}
                                                        size={getSize.m(8)}
                                                        color={appColors.blue_light}
                                                    />
                                                )}
                                                {item.place_change === 'down' && (
                                                    <Icon
                                                        name={appIcons.ic_down}
                                                        size={getSize.m(8)}
                                                        color={appColors.red}
                                                    />
                                                )}
                                            </View>
                                        </View>
                                        <View
                                            style={[{ width: getSize.m(80), overflow: 'hidden' }]}
                                        >
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                }}
                                            >
                                                <Avatar
                                                    source={{ uri: item.logo_url }}
                                                    rounded
                                                    size={20}
                                                />
                                                <View style={{ width: '70%' }}>
                                                    <Text
                                                        numberOfLines={2}
                                                        style={[
                                                            appStyles.statistics_content,
                                                            {
                                                                marginLeft: getSize.m(3),
                                                                textAlign: 'left',
                                                            },
                                                        ]}
                                                    >
                                                        {getTranslationText({
                                                            textHe: item.name_he,
                                                            textEn: item.name_en,
                                                        })}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ width: getSize.m(30) }}>
                                            <Text style={appStyles.statistics_content}>
                                                {item.games}
                                            </Text>
                                        </View>
                                        <View style={{ width: getSize.m(30) }}>
                                            <Text style={appStyles.statistics_content}>
                                                {item.wins}
                                            </Text>
                                        </View>
                                        <View style={{ width: getSize.m(30) }}>
                                            <Text style={appStyles.statistics_content}>
                                                {item.ties}
                                            </Text>
                                        </View>
                                        <View style={{ width: getSize.m(30) }}>
                                            <Text style={appStyles.statistics_content}>
                                                {item.difference}
                                            </Text>
                                        </View>
                                        <View style={{ width: getSize.m(40) }}>
                                            <Text style={appStyles.statistics_content}>
                                                {item.goals}
                                            </Text>
                                        </View>
                                        <View style={{ width: getSize.m(30) }}>
                                            <Text style={appStyles.statistics_content}>
                                                {item.score}
                                            </Text>
                                        </View>
                                    </LinearGradient>
                                );
                            })}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};
