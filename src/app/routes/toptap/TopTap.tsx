import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScreenTopTap } from '../../utils/constants/enum';
import React from 'react';
import { CompositionScreen } from '../../screens/football-match/layouts/match-composition';
import { GameScreen } from '../../screens/football-match/layouts/match-game';
import { ScheduleScreen } from '../../screens/football-match/layouts/match-schedule';
import { StandingScreen } from '../../screens/football-match/layouts/match-standing';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { appColors } from '../../utils/constants/appColors';
import { getSize } from '../../utils/responsive/scale';
import { appStyles } from '@football/app/utils/constants/appStyles';

const Tab = createMaterialTopTabNavigator();
export const TopTaps = () => {
    const { t } = useTranslation();
    return (
        <Tab.Navigator
            initialRouteName={ScreenTopTap.CompositionPage}
            screenOptions={{
                tabBarStyle: appStyles.top_tap,
                tabBarIndicatorStyle: appStyles.top_tap_indicator,
            }}
        >
            <Tab.Screen
                name={ScreenTopTap.CompositionPage}
                component={CompositionScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <View>
                            <Text
                                style={{
                                    color: focused
                                        ? appColors.text_dark_blue
                                        : appColors.text_option_unselect,
                                    fontWeight: focused ? '700' : '500',
                                    lineHeight: getSize.m(18),
                                }}
                            >
                                {t('match.composition.title')}
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name={ScreenTopTap.GamePage}
                component={GameScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <View>
                            <Text
                                style={{
                                    color: focused
                                        ? appColors.text_dark_blue
                                        : appColors.text_option_unselect,
                                    fontWeight: focused ? '700' : '500',
                                    lineHeight: getSize.m(18),
                                }}
                            >
                                {t('match.game_move.title')}
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name={ScreenTopTap.SchedulePage}
                component={ScheduleScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <View>
                            <Text
                                style={{
                                    color: focused
                                        ? appColors.text_dark_blue
                                        : appColors.text_option_unselect,
                                    fontWeight: focused ? '700' : '500',
                                    lineHeight: getSize.m(18),
                                }}
                            >
                                {t('match.schedule')}
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name={ScreenTopTap.StandingPage}
                component={StandingScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <View>
                            <Text
                                style={{
                                    color: focused
                                        ? appColors.text_dark_blue
                                        : appColors.text_option_unselect,
                                    fontWeight: focused ? '700' : '500',
                                    lineHeight: getSize.m(18),
                                }}
                            >
                                {t('match.standing.title')}
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
