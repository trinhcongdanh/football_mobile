import React from 'react';
import { View, Text } from 'react-native';
import { getSize } from '@football/app/utils/responsive/scale';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { styles } from './Position.styles';
import { IPositionProps } from './Position.type';
import { appColors } from '@football/app/utils/constants/appColors';

export const Position = ({
    position,
    color,
    backgroundColor,
    fontWeight,
    fontFamily,
    fontSize,
}: IPositionProps) => {
    return (
        <View style={[appStyles.align_justify, { marginBottom: getSize.m(24) }]}>
            <View style={[styles.line]} />
            <View
                style={[
                    styles.container_text,
                    {
                        backgroundColor: backgroundColor ? backgroundColor : appColors.gray,
                    },
                ]}
            >
                <Text
                    style={[
                        styles.text_or,
                        {
                            color: color,
                            fontWeight: fontWeight,
                            fontFamily: fontFamily,
                            fontSize: fontSize,
                        },
                    ]}
                >
                    {position}
                </Text>
            </View>
        </View>
    );
};
