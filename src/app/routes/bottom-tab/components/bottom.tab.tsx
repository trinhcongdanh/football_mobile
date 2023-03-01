/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable spaced-comment */
/* eslint-disable react-native/no-inline-styles */
import { getSize } from '@football/app/utils/responsive/scale';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Route } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleProp, View } from 'react-native';
import RNReanimated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    WithSpringConfig,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Path, Svg } from 'react-native-svg';
import { style, TAB_BAR_HEIGHT } from '../styles/bottom.tab.styles';
import FabBarButton, { BarButton } from './tab.bar.button';
import { getTabShape } from './tab.shape';

const ReanimatedSvg = RNReanimated.createAnimatedComponent(Svg);

export const defaultSpringConfig = {
    damping: 30,
    mass: 0.7,
    stiffness: 250,
};

export const BOTTOM_SVG_HEIGHT = 46;

type CustomProps = {
    mode: 'default' | 'square';
    /**
     * Custom spring animation config
     */
    springConfig?: Omit<WithSpringConfig, 'toValue'>;
    /**
     * Custom style for bar
     */
    bottomBarContainerStyle?: StyleProp<any>;
    /**
     * Adding additional style for the focused tab button, such as a shadow.
     */
    focusedButtonStyle?: StyleProp<any>;
    /**
     * Enable right to left
     */
    isRtl?: boolean;
};

export const FabTabBar: React.FC<BottomTabBarProps & CustomProps> = ({
    state,
    descriptors,
    navigation,
    springConfig,
    bottomBarContainerStyle,
    focusedButtonStyle,
    mode = 'default',
    isRtl = false,
}) => {
    const currentDescriptor = descriptors[state.routes[state.index].key];

    const [{ width, height }, setDimensions] = useState({
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    });
    const { bottom } = useSafeAreaInsets();
    const tabsWidthValue = React.useMemo(() => width / state.routes.length, [width, state.routes]);
    const tabsRealWidth = width / state.routes.length;

    const tabWidth = tabsWidthValue;
    const d = getTabShape(width, height + 10, tabWidth, TAB_BAR_HEIGHT);

    const initialPosition = isRtl
        ? -width + tabsWidthValue * state.index
        : width - tabsWidthValue * (state.index + 1);

    const animatedValueLength = useSharedValue(initialPosition);

    const offset =
        tabsRealWidth < tabWidth ? tabWidth - tabsRealWidth : (tabsRealWidth - tabWidth) * -1;

    useEffect(() => {
        // animatedValueLength.value = initialPosition;
    }, [isRtl]);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: animatedValueLength.value }],
        };
    });
    useEffect(() => {
        animatedValueLength.value = withSpring(
            initialPosition - offset / 2,
            springConfig || defaultSpringConfig
        );
    }, [
        width,
        height,
        state,
        tabsWidthValue,
        offset,
        animatedValueLength,
        springConfig,
        initialPosition,
    ]);

    const animationValueThreshold = useSharedValue(0);

    useEffect(() => {
        animationValueThreshold.value = withSpring(
            state.index,
            springConfig || defaultSpringConfig
        );
    }, [animationValueThreshold, state.index, springConfig]);

    return (
        <View
            onLayout={({
                nativeEvent: {
                    layout: { height: lHeight, width: lWidth },
                },
            }) => {
                setDimensions({ width: lWidth, height: lHeight });
            }}
            style={[
                style.container,
                {
                    marginBottom: bottom,
                    height: TAB_BAR_HEIGHT,
                    flexDirection: isRtl ? 'row-reverse' : 'row',
                    // justifyContent: 'space-around',
                },
                bottomBarContainerStyle,
                // apply style from descriptor
                currentDescriptor.options.tabBarStyle,
            ]}
        >
            {bottom > 0 && (
                <View
                    style={[
                        {
                            height: bottom,
                            backgroundColor: Object.values(descriptors)[state.index].options
                                .tabBarActiveBackgroundColor,
                            bottom: bottom * -1,
                        },
                        style.bottomFill,
                    ]}
                />
            )}
            <View
                style={[
                    style.fabButtonsContainer,
                    {
                        flexDirection: isRtl ? 'row-reverse' : 'row',
                        justifyContent: 'space-around',
                    },
                ]}
            >
                {state.routes.map((route: Route<any>, index: number) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <FabBarButton
                            mode={mode}
                            key={route.key}
                            options={options}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            focusedButtonStyle={focusedButtonStyle}
                            index={index}
                            isFocused={isFocused}
                            activeTintColor={options.tabBarActiveTintColor}
                            inactiveTintColor={options.tabBarInactiveTintColor}
                            width={tabWidth - 10 > getSize.m(50) ? getSize.m(50) : tabWidth - 10}
                        />
                    );
                })}
            </View>
            <View style={[{ position: 'absolute', top: -10, left: 0 }, style.barShapeWrapper]}>
                <ReanimatedSvg
                    width={width * 2}
                    height={height + bottom + BOTTOM_SVG_HEIGHT}
                    style={[
                        {
                            width: '100%',
                            backgroundColor: 'transparent',

                            flex: 1,
                        },
                        animatedStyles,
                    ]}
                >
                    <Path
                        y={3}
                        d={d}
                        fill={
                            Object.values(descriptors)[state.index].options
                                .tabBarActiveBackgroundColor || '#FF5252'
                        }
                    />
                </ReanimatedSvg>
            </View>

            {state.routes.map((route: Route<any>, index: number) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <BarButton
                        mode={mode}
                        focusedButtonStyle={focusedButtonStyle}
                        key={route.key}
                        options={options}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        index={index}
                        isFocused={isFocused}
                        activeTintColor={options.tabBarActiveTintColor}
                        inactiveTintColor={options.tabBarInactiveTintColor}
                    />
                );
            })}
        </View>
    );
};

export default FabTabBar;
