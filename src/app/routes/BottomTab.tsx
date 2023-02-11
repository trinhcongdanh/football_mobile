/* eslint-disable react-native/no-inline-styles */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import { ScreenName } from '../utils/constants/enum';
import {
    GobletScreen,
    GroupPageScreen,
    LeaguesScreen,
    PlayGroundScreen,
    TeamScreen,
    VideoScreen,
} from '../screens';
import { MyTabBar } from './bottom-tab/MyTabBar';
import { BottomFabBar } from './bottom-tab';

const Bottom = createBottomTabNavigator();

const tabBarIcon = (name: string) => ({
    focused,
    color,
    size,
}: {
    focused: boolean;
    color: string;
    size: number;
}) => <Icon name={name} size={28} color={focused ? 'white' : 'white'} />;

export const BottomTabStack = () => {
    const showLabel = true;
    return (
        <Bottom.Navigator
            initialRouteName={ScreenName.HomePage}
            screenOptions={{
                tabBarActiveTintColor: '#5F0B65',
                tabBarInactiveTintColor: 'white',
                tabBarActiveBackgroundColor: '#5F0B65',
                tabBarInactiveBackgroundColor: 'red',
                tabBarLabelStyle: {
                    color: 'purple',
                },
                headerShown: false,
            }}
            tabBar={(props: any) => (
                <BottomFabBar
                    mode="default"
                    isRtl
                    // Add Shadow for active tab bar button
                    focusedButtonStyle={{
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: -1,
                        },
                        shadowOpacity: 0.61,
                        shadowRadius: 8,
                        elevation: 14,
                    }}
                    // - You can add the style below to show content screen under the tab-bar
                    // - It will makes the "transparent tab bar" effect.
                    // bottomBarContainerStyle={{
                    //     position: 'absolute',
                    //     bottom: 0,
                    //     left: 0,
                    //     right: 0,
                    // }}
                    springConfig={{
                        stiffness: 1500,
                        damping: 85,
                        mass: 4,
                    }}
                    {...props}
                />
            )}
        >
            <Bottom.Screen
                options={{
                    tabBarIcon: tabBarIcon('aliwangwang-o1'),
                    tabBarLabel: showLabel ? 'Home' : undefined,
                }}
                name={ScreenName.GroupPagePage}
                component={GroupPageScreen}
            />
            <Bottom.Screen
                options={{
                    tabBarIcon: tabBarIcon('aliwangwang-o1'),
                    tabBarLabel: showLabel ? 'Home' : undefined,
                }}
                name={ScreenName.LeaguesPage}
                component={LeaguesScreen}
            />
            <Bottom.Screen
                options={{
                    tabBarIcon: tabBarIcon('aliwangwang-o1'),
                    tabBarLabel: showLabel ? 'Home' : undefined,
                }}
                name={ScreenName.TeamPage}
                component={TeamScreen}
            />
            <Bottom.Screen
                options={{
                    tabBarIcon: tabBarIcon('aliwangwang-o1'),
                    tabBarLabel: showLabel ? 'Home' : undefined,
                }}
                name={ScreenName.PlayGroundPage}
                component={PlayGroundScreen}
            />
            <Bottom.Screen
                options={{
                    tabBarIcon: tabBarIcon('aliwangwang-o1'),
                    tabBarLabel: showLabel ? 'Home' : undefined,
                }}
                name={ScreenName.GobletPage}
                component={GobletScreen}
            />
            <Bottom.Screen
                options={{
                    tabBarIcon: tabBarIcon('aliwangwang-o1'),
                    tabBarLabel: showLabel ? 'Home' : undefined,
                }}
                name={ScreenName.VideoPage}
                component={VideoScreen}
            />
        </Bottom.Navigator>
    );
};
