import { View, Text, TextInput } from 'react-native';
import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { IInputComponent } from './Input.type';

const Input = (
    { error, placeholder, onChangeText, onFocus, styleInput }: IInputComponent,
    ref: any
) => {
    const { t } = useTranslation();
    return (
        <View style={styleInput}>
            <TextInput
                placeholderTextColor="#C3CFDC"
                style={appStyles.text_input}
                placeholder={placeholder}
                onChangeText={e => onChangeText(e)}
                onFocus={onFocus}
                ref={ref}
            />
            {error && <Text style={appStyles.text_error}>{t(error)}</Text>}
        </View>
    );
};

export default forwardRef(Input);
