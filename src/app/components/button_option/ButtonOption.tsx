import { Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { IButtonOptionComponent } from './ButtonOption.type';
import { useTranslation } from 'react-i18next';
import { appStyles } from '@football/app/utils/constants/appStyles';
import styles from './ButtonOption.style';
import { appColors } from '@football/app/utils/constants/appColors';

export const ButtonOption = ({ option_one, option_two, onSelect }: IButtonOptionComponent) => {
    const { t } = useTranslation();

    const options = [option_one, option_two];

    const [select, setSelect] = useState(0);

    const selectOption = (index: number): void => {
        setSelect(index);
        onSelect(index);
    };
    return (
        <View style={[appStyles.flex_row_space, styles.option]}>
            {options.map((option: string, index: number) => {
                return (
                    <TouchableOpacity
                        style={[
                            styles.button_option_dark,
                            {
                                backgroundColor:
                                    index === select
                                        ? appColors.button_dark_blue
                                        : appColors.separator,
                            },
                        ]}
                        key={index.toString()}
                        onPress={() => selectOption(index)}
                    >
                        <Text
                            style={[
                                styles.text_option,
                                {
                                    color:
                                        index === select
                                            ? appColors.white
                                            : appColors.text_option_unselect,
                                    fontWeight: index === select ? '700' : '500',
                                },
                            ]}
                        >
                            {option}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};
