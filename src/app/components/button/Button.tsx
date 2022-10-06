import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './Button.styles';

type Props = {
    title?: string;
    onPress?: () => void;
};

export const Button = ({ title, onPress }: Props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text_button}>{title}</Text>
        </TouchableOpacity>
    );
};
