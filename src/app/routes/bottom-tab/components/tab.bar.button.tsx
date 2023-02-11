/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/prop-types */
import React, { memo, useEffect } from 'react';
import { StyleProp, TouchableOpacity, View } from 'react-native';

import RNReanimated, {
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    WithSpringConfig,
} from 'react-native-reanimated';

import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { appColors } from '@football/app/utils/constants/appColors';
import LinearGradient from 'react-native-linear-gradient';
import { style } from '../styles/tab.bar.button.styles';

interface Props {
    mode: 'default' | 'square';
    index: number;
    isFocused: boolean;
    onPress: () => void;
    onLongPress: () => void;
    options: BottomTabNavigationOptions;
    inactiveTintColor?: string;
    activeTintColor?: string;
    springConfig?: WithSpringConfig;
    focusedButtonStyle?: StyleProp<any>;
    width?: number;
}

export const defaultSpringConfig: WithSpringConfig = {
    damping: 30,
    mass: 0.7,
    stiffness: 250,
};

export const BarButton: React.FC<Props> = memo(
    ({
        isFocused,
        options,
        onPress,
        onLongPress,
        inactiveTintColor,
        focusedButtonStyle,
        springConfig,
        activeTintColor,
    }) => {
        const animationValueThreshold = useSharedValue(0);

        useEffect(() => {
            if (isFocused) {
                animationValueThreshold.value = withSpring(0, springConfig || defaultSpringConfig);
            } else {
                animationValueThreshold.value = withSpring(1, springConfig || defaultSpringConfig);
            }
        }, [isFocused, animationValueThreshold, springConfig]);

        // const animatedStyles = useAnimatedStyle(() => {
        //     return {
        //         opacity: animationValueThreshold.value,
        //         transform: [
        //             {
        //                 scale: animationValueThreshold.value,
        //             },
        //         ],
        //     };
        // });

        const iconAnimatedStyle = useAnimatedStyle(() => {
            return {
                opacity: interpolate(animationValueThreshold.value, [0.5, 1], [0, 1]),
            };
        });

        return (
            <View style={style.wrapper}>
                <RNReanimated.View>
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        style={[style.unfocusedButton, isFocused ? focusedButtonStyle : {}]}
                        onLongPress={onLongPress}
                    >
                        <View style={style.tabBarLabelWrapper}>
                            {options.tabBarIcon ? (
                                <RNReanimated.View style={iconAnimatedStyle}>
                                    {options.tabBarIcon({
                                        focused: isFocused,
                                        color: inactiveTintColor || 'white',
                                        size: 28,
                                    })}
                                </RNReanimated.View>
                            ) : null}
                            {options.tabBarLabel && (
                                <RNReanimated.Text
                                    style={[
                                        {
                                            marginTop: 2,
                                            color: isFocused ? activeTintColor : inactiveTintColor,
                                            fontWeight: isFocused ? 'bold' : 'normal',
                                        },

                                        options.tabBarLabelStyle,
                                    ]}
                                >
                                    {options.tabBarLabel}
                                </RNReanimated.Text>
                            )}
                        </View>
                    </TouchableOpacity>
                </RNReanimated.View>
            </View>
        );
    }
);

export const TabBarButton: React.FC<Props> = memo(
    ({
        isFocused,
        options,
        onPress,
        onLongPress,
        activeTintColor,
        springConfig,
        focusedButtonStyle,
        width,
        mode,
    }) => {
        const animationValueThreshold = useSharedValue(0);

        useEffect(() => {
            if (isFocused) {
                animationValueThreshold.value = withSpring(0, springConfig || defaultSpringConfig);
            } else {
                animationValueThreshold.value = withSpring(1, springConfig || defaultSpringConfig);
            }
        }, [isFocused, animationValueThreshold, springConfig]);

        const animatedStyles = useAnimatedStyle(() => {
            return {
                transform: [
                    {
                        translateY: interpolate(animationValueThreshold.value, [0, 1], [-40, 100]),
                    },
                ],
            };
        });

        return (
            <View style={style.wrapper}>
                <RNReanimated.View
                    style={[animatedStyles, { width, height: width }, style.focusedButton]}
                >
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        style={[
                            {
                                ...style.focusedButton,
                                ...(mode === 'square' ? style.squareFocusedButton : {}),
                                backgroundColor: activeTintColor || 'white',
                            },
                            isFocused ? focusedButtonStyle : {},
                        ]}
                        onLongPress={onLongPress}
                    >
                        <LinearGradient
                            colors={[appColors.blue_light, appColors.blue_dark]}
                            style={[
                                {
                                    width,
                                    height: width,
                                    borderRadius: 1000,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                },
                            ]}
                        >
                            {options.tabBarIcon
                                ? options.tabBarIcon({
                                      focused: isFocused,
                                      color: 'white',
                                      size: 28,
                                  })
                                : null}
                        </LinearGradient>
                    </TouchableOpacity>
                </RNReanimated.View>
            </View>
        );
    }
);

export default TabBarButton;
