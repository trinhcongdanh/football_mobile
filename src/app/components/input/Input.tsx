import { View, Text, TextInput } from 'react-native';
import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { IInputComponent } from './Input.type';
import { onChange } from 'react-native-reanimated';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';

const Input = ({
    error,
    placeholder,
    onChangeTextInput,
    onFocus,
    styleInput,
    backgroundColor,
    backgroundColorCompleted,
    textColor,
    input,
    inputRef,
    keyboardType,
    editable,
}: IInputComponent) => {
    const { t } = useTranslation();
    return (
        <View style={styleInput}>
            <TextInput
                value={input}
                placeholderTextColor={appColors.light_gray}
                style={[
                    appStyles.text_input,
                    {
                        paddingHorizontal: input === '' ? getSize.m(24) : getSize.m(15),
                        backgroundColor: input === '' ? backgroundColor : backgroundColorCompleted,
                        color: textColor,
                    },
                ]}
                placeholder={placeholder}
                keyboardType={keyboardType}
                onChangeText={onChangeTextInput}
                onFocus={onFocus}
                ref={inputRef}
                editable={editable}
            />
            {input === '' && (
                <View style={{ position: 'absolute', top: getSize.m(19), left: getSize.m(16) }}>
                    <Text style={{ color: 'red' }}>*</Text>
                </View>
            )}

            {error && <Text style={appStyles.text_error}>{t(error)}</Text>}
        </View>
    );
};

export default Input;
