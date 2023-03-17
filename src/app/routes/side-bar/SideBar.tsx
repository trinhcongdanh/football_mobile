import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SideMenu } from '@football/app/components/side-menu/SideMenu';
import { ScreenName } from '@football/app/utils/constants/enum';
import { BottomTabStack } from '@football/app/routes/BottomTab';
import { SafeAreaView } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';

const Drawer = createDrawerNavigator();

export const SideBar = () => {
    return (
        <SafeAreaView
            style={[
                appStyles.safe_area,
                {
                    zIndex: 100000,
                },
            ]}
        >
            <Drawer.Navigator
                initialRouteName={ScreenName.BottomTab}
                screenOptions={{
                    headerShown: false,
                    drawerStyle: { width: '85%' },
                }}
                drawerContent={props => <SideMenu {...props} />}
            >
                <Drawer.Screen name={ScreenName.BottomTab} component={BottomTabStack} />
            </Drawer.Navigator>
        </SafeAreaView>
    );
};
