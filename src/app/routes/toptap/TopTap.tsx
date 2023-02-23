import { AppFonts } from '@football/app/assets/fonts';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import { appColors } from '../../utils/constants/appColors';
import { getSize } from '../../utils/responsive/scale';

interface Props {
    labels: any;
    // eslint-disable-next-line react/require-default-props
    data?: any;
}
const Tab = createMaterialTopTabNavigator();

const TabLabel = ({ focused, title }: any) => (
    <Text
        style={{
            color: focused ? appColors.text_dark_blue : appColors.text_option_unselect,
            fontFamily: focused ? AppFonts.bold : AppFonts.medium,

            lineHeight: getSize.m(18),
            width: getSize.m(90), // Fix losing the last character of the text
            textAlign: 'center',
        }}
    >
        {title}
    </Text>
);
export const TopTaps = ({ labels, data }: Props) => {
    if (labels.length === 0) {
        return <View />;
    }
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarScrollEnabled: true,
                tabBarStyle: appStyles.top_tap,
                tabBarItemStyle: appStyles.top_tap_item,
                tabBarIndicatorStyle: appStyles.top_tap_indicator,
            }}
        >
            {labels.map((item: any) => {
                return (
                    <Tab.Screen
                        key={item.id}
                        name={item.name}
                        component={item.component}
                        initialParams={{ typeId: item.id, data }}
                        options={{
                            tabBarLabel: ({ focused }) => (
                                <TabLabel focused={focused} title={item.title} />
                            ),
                        }}
                    />
                );
            })}
        </Tab.Navigator>
    );
};
