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
                            <View style={{ width: getSize.m(80) }}>
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
                                    <View
                                        key={item.id}
                                        style={[
                                            appStyles.flex_row_space_center,
                                            appStyles.statistic_row,
                                            {
                                                backgroundColor:
                                                    item.id % 2 === 0
                                                        ? appColors.blue_matte
                                                        : appColors.gray,
                                            },
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
                                            <View>
                                                <Icon
                                                    name={appIcons.ic_up}
                                                    size={11}
                                                    color={appColors.blue_light}
                                                />
                                                <Icon
                                                    name={appIcons.ic_down}
                                                    size={11}
                                                    color={appColors.red}
                                                />
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
                                                <Avatar source={item.logo} rounded size={20} />
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
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};
