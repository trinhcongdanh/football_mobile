import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Input.styles';
import { IInputComponent } from './Input.type';

export const Input = ({
    error,
    placeholder,
    onChangeText,
    onFocus,
    styleInput,
}: IInputComponent) => {
    const { t } = useTranslation();
    return (
        <View style={styleInput}>
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
