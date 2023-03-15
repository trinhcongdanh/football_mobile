import { ScrollView, StyleProp, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './Button.styles';

type Props = {
    title: string;
    onPress: () => void;
    // eslint-disable-next-line react/require-default-props
    disabled?: boolean;
    style?: StyleProp<any>;
};

export const Button = ({ title, onPress, disabled, style }: Props) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            style={[disabled ? styles.button_disable : styles.button_completed, style]}
            onPress={onPress}
        >
            <Text style={disabled ? styles.text_button_disable : styles.text_button_completed}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};
