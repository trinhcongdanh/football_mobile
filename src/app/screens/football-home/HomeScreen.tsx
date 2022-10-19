import { View, Animated, TouchableOpacity, Alert, Text } from 'react-native';
import React from 'react';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { TeamScreen } from '../football-team';
import { TeamSquadScreen } from '../football-team-squad';
import styles from './HomeScreen.styles';

// type Props = {};

export const HomeScreen = (props: any) => {
    const renderIcon = (routeName: string, selectedTab: string) => {
        let icon = '';
        switch (routeName) {
            case 'title1':
                icon = 'ios-home-outline';
                break;
            case 'title2':
                icon = 'settings-outline';
                break;
            case 'title3':
                icon = 'ios-home-outline';
                break;
            case 'title4':
                icon = 'settings-outline';
                break;
            default:
                break;
        }

        return (
            <Ionicons
                name={icon}
                size={25}
                color={routeName === selectedTab ? appColors.white : appColors.stroke}
            />
        );
    };

    const renderTabBar = ({ routeName, selectedTab, navigate }: any) => {
        return (
            <TouchableOpacity onPress={() => navigate(routeName)} style={styles.tab_bar}>
                {renderIcon(routeName, selectedTab)}
                <Text>{routeName}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <CurvedBottomBar.Navigator
                style={{}}
                height={getSize.m(60)}
                // circleWidth={45}
                bgColor={appColors.text_dark}
                screenOptions={{ headerShown: false }}
                initialRouteName="title1"
                renderCircle={({ selectedTab, navigate }) => (
                    <Animated.View style={styles.ic_circle}>
                        <TouchableOpacity
                            style={styles.btn_ic_circle}
                            onPress={() => Alert.alert('Click Action')}
                        >
                            <Ionicons name={'apps-sharp'} color={appColors.white} size={25} />
                        </TouchableOpacity>
                    </Animated.View>
                )}
                tabBar={renderTabBar}
            >
                <CurvedBottomBar.Screen name="title1" position="LEFT" component={TeamScreen} />
                <CurvedBottomBar.Screen
                    name="title2"
                    component={TeamSquadScreen}
                    position="RIGHT"
                />
                <CurvedBottomBar.Screen name="title3" component={TeamScreen} position="LEFT" />
                <CurvedBottomBar.Screen name="title4" component={TeamScreen} position="LEFT" />
            </CurvedBottomBar.Navigator>
        </View>
    );
};
