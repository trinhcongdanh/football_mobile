import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { View, TextInput } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import styles from '@football/app/components/input_dark/InputDark.styles';
import { IInputDarkComponent } from '@football/app/components/input_dark/InputDark.type';

export const InputDark = ({ label, input, inputRef, OnChangeTextInput }: IInputDarkComponent) => {
    const padding = useSharedValue(getSize.m(15));
    const font_size = useSharedValue(getSize.m(13));
    const margin_left = useSharedValue(getSize.m(4));
    const opacityStar = useSharedValue(1);

    const paddingVertical = useAnimatedStyle(() => {
        return {
            paddingVertical: padding.value,
        };
    });

    const fontSize = useAnimatedStyle(() => {
        return {
            fontSize: font_size.value,
            marginLeft: margin_left.value,
        };
    });

    const opacity = useAnimatedStyle(() => {
        return {
            opacity: opacityStar.value,
        };
    });
    const handleAnimated = () => {
        if (input === '') {
            padding.value = padding.value - getSize.m(10);
            font_size.value = font_size.value - getSize.m(4);
            margin_left.value = margin_left.value - getSize.m(10);
            opacityStar.value = opacityStar.value - 1;
        }
    };
    const backInitiation = () => {
        if (input === '') {
            padding.value = getSize.m(15);
            font_size.value = getSize.m(13);
            margin_left.value = getSize.m(4);
            opacityStar.value = 1;
        }
    };
    return (
        <View>
            <View style={styles.confirmation_reward_text_input}>
                <TextInput
                    ref={inputRef}
                    style={styles.confirmation_reward_input}
                    onFocus={handleAnimated}
                    onChangeText={OnChangeTextInput}
                    onBlur={backInitiation}
                    value={input}
                />
                <Animated.View style={[styles.confirmation_reward_label_input, paddingVertical]}>
                    <View style={{ flexDirection: 'row' }}>
                        <Animated.Text style={[styles.confirmation_reward_label_require, opacity]}>
                            *
                        </Animated.Text>
                        <Animated.Text style={[styles.confirmation_reward_label_text, fontSize]}>
                            {label}
                        </Animated.Text>
                    </View>
                </Animated.View>
            </View>
        </View>
    );
};
