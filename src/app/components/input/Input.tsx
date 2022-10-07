import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Input.styles';

type Props = {
    error: string;
    placeholder: string;
    onChangeText: () => void;
    onFocus: () => void;
};

export const Input = ({ error, placeholder, onChangeText, onFocus }: Props) => {
    const { t, i18n } = useTranslation();
    return (
        <View>
            <TextInput
                placeholderTextColor="#C3CFDC"
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                onFocus={onFocus}
            />
            {error && <Text style={styles.error}>{t(error)}</Text>}
        </View>
    );
};
