import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './Button.styles';

type Props = {
    title: string;
    onPress: () => void;
    // eslint-disable-next-line react/require-default-props
    disabled?: boolean;
};

export const Button = ({ title, onPress, disabled }: Props) => {
    return (
        <TouchableOpacity disabled={disabled} style={styles.button} onPress={onPress}>
            <Text style={styles.text_button}>{title}</Text>
        </TouchableOpacity>
    );
};
