import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SideMenu } from '@football/app/components/side-menu/SideMenu';
import { ScreenName } from '@football/app/utils/constants/enum';
import { BottomTabStack } from '@football/app/routes/BottomTab';
import { Platform, SafeAreaView, View } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { RouteProp, useRoute } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export type ISideBarProps = {
    route: RouteProp<any, ScreenName.SideBar>;
};

export const SideBar = ({ route }: ISideBarProps) => {
    const isBackVideo = route?.params?.isBackVideo;
    console.log('isBackVideo', isBackVideo);
    return (
        <View style={appStyles.flex}>
            {Platform.OS === 'android' ? (
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
                        <Drawer.Screen
                            name={ScreenName.BottomTab}
                            component={BottomTabStack}
                            initialParams={{ isBackVideo: isBackVideo }}
                        />
                    </Drawer.Navigator>
                </SafeAreaView>
            ) : (
                <View
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
                        <Drawer.Screen
                            name={ScreenName.BottomTab}
                            component={BottomTabStack}
                            initialParams={{ isBackVideo: isBackVideo }}
                        />
                    </Drawer.Navigator>
                </View>
            )}
        </View>
    );
};
