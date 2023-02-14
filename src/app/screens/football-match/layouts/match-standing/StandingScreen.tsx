import { View, ScrollView, Text } from 'react-native';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { Avatar } from 'react-native-elements';
import { appIcons } from '@football/app/assets/icons/appIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import { useViewModel } from './StandingScreen.viewModel';
import { IStandingScreenProps } from './StandingScreen.type';
import LinearGradient from 'react-native-linear-gradient';

export const StandingScreen = ({ navigation, route }: IStandingScreenProps) => {
    const { t, leaderBoard } = useViewModel({
        navigation,
        route,
    });

    // if (leaderBoard.isLoading == true) {
    //     return <></>;
    // }
    // if (leaderBoard.success == false) {
    //     return <></>;
    // }

    return (
        <View
            style={[
                appStyles.flex,
                { backgroundColor: appColors.gray, paddingHorizontal: getSize.m(16) },
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
                            <View style={{ width: getSize.m(30) }}>
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
                            {leaderBoard.map((item, index) => {
                                return (
                                    <LinearGradient
                                        key={index}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        colors={[
                                            index % 2 === 0
                                                ? 'rgba(16, 32, 100, 0.04)'
                                                : appColors.gray,
                                            index % 2 === 0
                                                ? 'rgba(59, 168, 225, 0.04)'
                                                : appColors.gray,
                                        ]}
                                        style={[
                                            appStyles.flex_row_space_center,
                                            appStyles.statistic_row,
                                        ]}
                                    >
                                        <View
                                            style={[
                                                appStyles.flex_row_align,
                                                { width: getSize.m(30) },
                                            ]}
                                        >
                                            <Text style={appStyles.statistics_content}>
                                                {item.place}
                                            </Text>
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
                                                <Text
                                                    style={[
                                                        appStyles.statistics_content,
                                                        { marginLeft: getSize.m(6) },
                                                    ]}
                                                >
                                                    {item.name_he}
                                                </Text>
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
