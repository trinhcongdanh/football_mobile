import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { NotificationData } from '@football/core/models/NotificationModel';
import messaging from '@react-native-firebase/messaging';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ScreenName, ScreenStack } from '../utils/constants/enum';
import { AuthStack } from './AuthStack';
import { MainStack } from './MainStack';

const RootStack = createNativeStackNavigator();
const INITIAL_ROUTE = ScreenName.OpeningPage;

export const RootNavigator = () => {
    const { navigate } = useAppNavigator();
    messaging().onNotificationOpenedApp(remoteMessage => {
        const notificationData = remoteMessage.data as NotificationData;

        if (notificationData) {
            switch (notificationData.target_type) {
                case 'top_team':
                    navigate(ScreenName.NationalTeamPage, {
                        topTeamId: notificationData.target_id,
                    });

                    break;
                case 'campaign':
                    navigate(ScreenName.CampaignPage, {
                        campaignId: notificationData.target_id,
                    });
                    break;

                case 'stadium':
                    navigate(ScreenName.PitchPage, { stadiumId: notificationData.target_id });
                    break;

                case 'game':
                    navigate(ScreenName.MatchPage, {
                        gameId: notificationData.target_id,
                        selectedTab: notificationData.target_section,
                    });
                    break;

                case 'coach':
                    navigate(ScreenName.DataCoachPage, { coachId: notificationData.target_id });
                    break;

                case 'player':
                    navigate(ScreenName.DataPlayerPage, {
                        playerId: notificationData.target_id,
                        selectedTab: notificationData.target_section,
                    });
                    break;

                case 'questionnaire':
                    navigate(ScreenName.PlayGroundPage);
                    break;
                case 'cup':
                    navigate(ScreenName.StateCupPage, {
                        cupId: notificationData.target_id,
                    });
                    break;

                default:
                    navigate(ScreenName.SideBar);
                    break;
            }
        }
    });

    return (
        <RootStack.Navigator
            initialRouteName={INITIAL_ROUTE}
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                animation: 'fade',
                animationTypeForReplace: 'push',
            }}
        >
            <RootStack.Screen name={ScreenStack.AuthStack} component={AuthStack} />
            <RootStack.Screen name={ScreenStack.MainStack} component={MainStack} />
        </RootStack.Navigator>
    );
};
