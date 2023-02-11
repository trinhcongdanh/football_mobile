import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appColors } from '../../utils/constants/appColors';
import { getSize } from '../../utils/responsive/scale';
import { AppFonts } from '@football/app/assets/fonts';

type Props = {
    labels: any;
};
const Tab = createMaterialTopTabNavigator();
export const TopTaps = ({ labels }: Props) => {
    const { t } = useTranslation();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: appStyles.top_tap,
                tabBarIndicatorStyle: appStyles.top_tap_indicator,
            }}
        >
            {labels.map((item: any) => {
                return (
                    <Tab.Screen
                        key={item.id}
                        name={item.name}
                        component={item.component}
                        options={{
                            tabBarLabel: ({ focused }) => (
                                <View>
                                    <Text
                                        style={{
                                            color: focused
                                                ? appColors.text_dark_blue
                                                : appColors.text_option_unselect,
                                            fontFamily: focused ? AppFonts.bold : AppFonts.medium,
                                            lineHeight: getSize.m(18),
                                        }}
                                    >
                                        {item.title}
                                    </Text>
                                </View>
                            ),
                        }}
                    />
                );
            })}
        </Tab.Navigator>
    );
};
