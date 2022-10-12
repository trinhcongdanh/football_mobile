import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './CheckBox.styles';
import { ICheckBoxProps } from './CheckBox.type';

export const CheckBox = ({ title, isActive, onItemSelected }: ICheckBoxProps) => {
    return (
        <TouchableOpacity
            onPress={onItemSelected}
            style={[
                styles.btn_checked,
                {
                    backgroundColor: isActive ? appColors.check_box : appColors.white,
                    borderWidth: isActive ? 0 : getSize.m(1),
                    borderColor: isActive ? 'none' : appColors.border,
                },
            ]}
        >
            <Text
                style={[
                    styles.txt_title,
                    { color: isActive ? appColors.white : appColors.text_dark_blue },
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};
