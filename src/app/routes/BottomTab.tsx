/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppImages } from '@football/app/assets/images';
import { BOTTOM_SVG_HEIGHT } from '@football/app/routes/bottom-tab/components/bottom.tab';
import { TAB_BAR_HEIGHT } from '@football/app/routes/bottom-tab/styles/bottom.tab.styles';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize, height } from '@football/app/utils/responsive/scale';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { SafeAreaView } from 'react-native';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    GobletScreen,
    GroupPageScreen,
    HomeScreen,
    LeaguesScreen,
    PlayGroundScreen,
    TeamScreen,
    VideoScreen,
} from '../screens';
import { ScreenName } from '../utils/constants/enum';
import { BottomFabBar } from './bottom-tab';

const Bottom = createBottomTabNavigator();

const renderIcon = (routeName: string) => {
    let icon: any = '';
    let icon_outline: any = '';
    switch (routeName) {
        case ScreenName.HomePage:
            icon = AppImages.img_home;
            icon_outline = AppImages.img_home_outline;
            break;
        case ScreenName.LeaguesPage:
            icon = AppImages.img_security;
            icon_outline = AppImages.img_security_outline;
            break;
        case ScreenName.TeamPage:
            icon = AppImages.img_people;
            icon_outline = AppImages.img_people_outline;
            break;
        case ScreenName.PlayGroundPage:
            icon = AppImages.img_message_question;
            icon_outline = AppImages.img_message_question_outline;
            break;
        case ScreenName.GobletPage:
            icon = AppImages.img_cups;
            icon_outline = AppImages.img_cups_outline;
            break;
        case ScreenName.VideoPage:
            icon = AppImages.img_video_square;
            icon_outline = AppImages.img_video_square_outline;
            break;
        default:
            break;
    }

    return ({ focused }: any) => (
        <FastImage
            source={!focused ? icon_outline : icon}
            resizeMode={FastImage.resizeMode.contain}
            style={{ width: getSize.m(25), height: getSize.m(25) }}
            // color={focused ? appColors.white : appColors.stroke}
        />
    );
};

const renderLabel = (routeName: string) => {
    let label = '';
    switch (routeName) {
        case ScreenName.HomePage:
            label = 'בית';
            break;
        case ScreenName.LeaguesPage:
            label = 'ליגות';
            break;
        case ScreenName.TeamPage:
            label = 'נבחרות';
            break;
        case ScreenName.PlayGroundPage:
            label = 'שאלון';
            break;
        case ScreenName.GobletPage:
            label = 'גביע';
            break;
        case ScreenName.VideoPage:
            label = 'VOD';
            break;
        default:
            break;
    }
    return label;
};

export const BottomTabStack = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Bottom.Navigator
                initialRouteName={ScreenName.HomePage}
                screenOptions={{
                    tabBarActiveTintColor: appColors.white,
                    tabBarInactiveTintColor: appColors.text_grey,
                    tabBarActiveBackgroundColor: appColors.text_dark_blue,
                    headerShown: false,
                }}
                tabBar={(props: any) => (
                    <BottomFabBar
                        mode="default"
                        isRtl
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
                        bottomBarContainerStyle={{
                            position: 'absolute',
                            top: height - TAB_BAR_HEIGHT - BOTTOM_SVG_HEIGHT,
                            left: 0,
                            right: 0,
                        }}
                        {...props}
                    />
                )}
            >
                <Bottom.Screen
                    options={{
                        tabBarIcon: renderIcon(ScreenName.VideoPage),
                        tabBarLabel: renderLabel(ScreenName.VideoPage),
                    }}
                    name={ScreenName.VideoPage}
                    component={VideoScreen}
                />
                <Bottom.Screen
                    options={{
                        tabBarIcon: renderIcon(ScreenName.GobletPage),
                        tabBarLabel: renderLabel(ScreenName.GobletPage),
                    }}
                    name={ScreenName.GobletPage}
                    component={GobletScreen}
                />
                <Bottom.Screen
                    options={{
                        tabBarIcon: renderIcon(ScreenName.PlayGroundPage),
                        tabBarLabel: renderLabel(ScreenName.PlayGroundPage),
                    }}
                    name={ScreenName.PlayGroundPage}
                    component={PlayGroundScreen}
                />
                <Bottom.Screen
                    options={{
                        tabBarIcon: renderIcon(ScreenName.TeamPage),
                        tabBarLabel: renderLabel(ScreenName.TeamPage),
                    }}
                    name={ScreenName.TeamPage}
                    component={TeamScreen}
                />
                <Bottom.Screen
                    options={{
                        tabBarIcon: renderIcon(ScreenName.LeaguesPage),
                        tabBarLabel: renderLabel(ScreenName.LeaguesPage),
                    }}
                    name={ScreenName.LeaguesPage}
                    component={LeaguesScreen}
                />
                <Bottom.Screen
                    options={{
                        tabBarIcon: renderIcon(ScreenName.HomePage),
                        tabBarLabel: renderLabel(ScreenName.HomePage),
                    }}
                    name={ScreenName.HomePage}
                    component={HomeScreen}
                />
            </Bottom.Navigator>
        </SafeAreaView>
    );
};
