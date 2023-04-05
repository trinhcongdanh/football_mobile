import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './ButtonOption.style';
import { IButtonOptionComponent } from './ButtonOption.type';

export const ButtonOption = ({
    option_one,
    option_two,
    onSelect,
    defaultValue,
}: IButtonOptionComponent) => {
    const options = [option_one, option_two];

    const [select, setSelect] = useState(defaultValue);
    useEffect(() => {
        setSelect(pre => defaultValue);
    }, [defaultValue]);

    const selectOption = (index: number): void => {
        setSelect(index);
        onSelect(index);
    };
    return (
        <View style={[appStyles.flex_row_space, styles.option]}>
            {options.map((option: any, index: number) => {
                return (
                    option && (
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
                                        fontFamily:
                                            index === select ? AppFonts.bold : AppFonts.medium,
                                    },
                                ]}
                            >
                                {option}
                            </Text>
                        </TouchableOpacity>
                    )
                );
            })}
        </View>
    );
};
