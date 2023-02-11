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
import FastImage from 'react-native-fast-image';

export const StandingScreen = ({ navigation, route }: IStandingScreenProps) => {
    const { t, listTeams } = useViewModel({
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
                                <Text style={[appStyles.statistics_header, { textAlign: 'left' }]}>
                                    {t('match.standing.place')}
                                </Text>
                            </View>
                            <View style={{ width: getSize.m(70) }}>
                                <Text style={[appStyles.statistics_header, { textAlign: 'left' }]}>
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
                            {listTeams.map(item => {
                                return (
                                    <LinearGradient
                                        colors={[
                                            item.id % 2 === 1
                                                ? 'rgba(255, 255, 255, 0.05)'
                                                : appColors.gray,
                                            item.id % 2 === 1
                                                ? 'rgba(16, 32, 100, 0.05)'
                                                : appColors.gray,
                                            item.id % 2 === 1
                                                ? 'rgba(59, 168, 225, 0.05)'
                                                : appColors.gray,
                                        ]}
                                        key={item.id}
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
                                                {item.id}
                                            </Text>
                                            <View
                                                style={{
                                                    marginLeft: getSize.m(4),
                                                    marginTop: getSize.m(1),
                                                }}
                                            >
                                                <Icon
                                                    name={appIcons.ic_up}
                                                    size={10}
                                                    color={appColors.blue_light}
                                                />
                                                {/* <Icon
                                                    name={appIcons.ic_down}
                                                    size={11}
                                                    color={appColors.red}
                                                /> */}
                                            </View>
                                        </View>
                                        <View
                                            style={[{ width: getSize.m(70), overflow: 'hidden' }]}
                                        >
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                }}
                                            >
                                                <FastImage
                                                    source={item.logo}
                                                    style={{
                                                        width: getSize.m(20),
                                                        height: getSize.m(20),
                                                        borderRadius: getSize.m(20),
                                                    }}
                                                />
                                                <Text
                                                    style={[
                                                        appStyles.statistics_content,
                                                        { marginLeft: getSize.m(6) },
                                                    ]}
                                                >
                                                    {item.name}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ width: getSize.m(30) }}>
                                            <Text style={appStyles.statistics_content}>
                                                {item.mash}
                                            </Text>
                                        </View>
                                        <View style={{ width: getSize.m(30) }}>
                                            <Text style={appStyles.statistics_content}>
                                                {item.nch}
                                            </Text>
                                        </View>
                                        <View style={{ width: getSize.m(30) }}>
                                            <Text style={appStyles.statistics_content}>
                                                {item.draw}
                                            </Text>
                                        </View>
                                        <View style={{ width: getSize.m(30) }}>
                                            <Text style={appStyles.statistics_content}>
                                                {item.the_p}
                                            </Text>
                                        </View>
                                        <View style={{ width: getSize.m(40) }}>
                                            <Text style={appStyles.statistics_content}>
                                                {item.time}
                                            </Text>
                                        </View>
                                        <View style={{ width: getSize.m(30) }}>
                                            <Text style={appStyles.statistics_content}>
                                                {item.no}
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
