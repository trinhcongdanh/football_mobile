/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppImages } from '@football/app/assets/images';
import i18n from '@football/app/i18n/EnStrings';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { isGuessUser } from '@football/core/models/AvatarType.enum';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { I18nManager, SafeAreaView } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import {
    GobletScreen,
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
    let iconOutline: any = '';
    switch (routeName) {
        case ScreenName.HomePage:
            icon = AppImages.img_home;
            iconOutline = AppImages.img_home_outline;
            break;
        case ScreenName.LeaguesPage:
            icon = AppImages.img_security;
            iconOutline = AppImages.img_security_outline;
            break;
        case ScreenName.TeamPage:
            icon = AppImages.img_people;
            iconOutline = AppImages.img_people_outline;
            break;
        case ScreenName.PlayGroundPage:
            icon = AppImages.img_message_question;
            iconOutline = AppImages.img_message_question_outline;
            break;
        case ScreenName.GobletPage:
            icon = AppImages.img_cups;
            iconOutline = AppImages.img_cups_outline;
            break;
        case ScreenName.VideoPage:
            icon = AppImages.img_video_square;
            iconOutline = AppImages.img_video_square_outline;
            break;
        default:
            break;
    }

    return ({ focused }: any) => (
        <FastImage
            source={!focused ? iconOutline : icon}
            resizeMode={FastImage.resizeMode.contain}
            style={{ width: getSize.m(25), height: getSize.m(25) }}
            // color={focused ? appColors.white : appColors.stroke}
        />
    );
};

export const BottomTabStack = () => {
    const { t } = useTranslation();
    const insets = useSafeAreaInsets();
    const profileUser = useSelector((state: RootState) => state.getProfile);

    return (
        <SafeAreaView style={{ flex: 1, marginBottom: -insets.bottom }}>
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
                        // isRtl={true}
                        isEng={I18nManager.isRTL ? false : true}
                        focusedButtonStyle={{
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: -1,
                            },
                            shadowOpacity: 0.41,
                            shadowRadius: 5,
                            elevation: 5,
                        }}
                        bottomBarContainerStyle={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                        }}
                        {...props}
                    />
                )}
            >
                <Bottom.Screen
                    options={{
                        tabBarIcon: renderIcon(ScreenName.HomePage),
                        tabBarLabel: t('bottom_tab.home'),
                    }}
                    name={ScreenName.HomePage}
                    component={HomeScreen}
                />
                <Bottom.Screen
                    options={{
                        tabBarIcon: renderIcon(ScreenName.LeaguesPage),
                        tabBarLabel: t('bottom_tab.leagues'),
                    }}
                    name={ScreenName.LeaguesPage}
                    component={LeaguesScreen}
                />
                <Bottom.Screen
                    options={{
                        tabBarIcon: renderIcon(ScreenName.TeamPage),
                        tabBarLabel: t('bottom_tab.teams'),
                    }}
                    name={ScreenName.TeamPage}
                    component={TeamScreen}
                />
                <Bottom.Screen
                    options={{
                        tabBarIcon: renderIcon(ScreenName.PlayGroundPage),
                        tabBarLabel: t('bottom_tab.question'),
                    }}
                    name={ScreenName.PlayGroundPage}
                    component={PlayGroundScreen}
                    listeners={({ navigation, route }) => ({
                        tabPress: e => {
                            if (isGuessUser(profileUser)) {
                                e.preventDefault();
                                navigation.navigate(ScreenName.RegisterPage, { isLogin: true });
                            }
                        },
                    })}
                />
                <Bottom.Screen
                    options={{
                        tabBarIcon: renderIcon(ScreenName.GobletPage),
                        tabBarLabel: t('bottom_tab.goblet'),
                    }}
                    name={ScreenName.GobletPage}
                    component={GobletScreen}
                />

                <Bottom.Screen
                    options={{
                        tabBarIcon: renderIcon(ScreenName.VideoPage),
                        tabBarLabel: 'VOD',
                    }}
                    name={ScreenName.VideoPage}
                    component={VideoScreen}
                />
            </Bottom.Navigator>
        </SafeAreaView>
    );
};
