import { View, Text, TextInput } from 'react-native';
import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { IInputComponent } from './Input.type';
import { onChange } from 'react-native-reanimated';

const Input = ({
    error,
    placeholder,
    onChangeTextInput,
    onFocus,
    styleInput,
    input,
    inputRef,
}: IInputComponent) => {
    const { t } = useTranslation();
    return (
        <View style={styleInput}>
            <TextInput
                value={input}
                placeholderTextColor="#C3CFDC"
                style={appStyles.text_input}
                placeholder={placeholder}
                onChangeText={onChangeTextInput}
                onFocus={onFocus}
                ref={inputRef}
            />
            {error && <Text style={appStyles.text_error}>{t(error)}</Text>}
        </View>
    );
};

export default Input;
