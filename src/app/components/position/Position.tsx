import React from 'react';
import { View, Text } from 'react-native';
import { getSize } from '@football/app/utils/responsive/scale';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { styles } from './Position.styles';
import { IPositionProps } from './Position.type';

export const Position = ({ position, color, width, fontWeight }: IPositionProps) => {
    return (
        <View style={[appStyles.flex_row_space_center, { marginBottom: getSize.m(24) }]}>
            <View style={[styles.line, { width: width }]} />
            <Text
                style={[
                    styles.text_or,
                    {
                        color: color,
                        fontWeight: fontWeight,
                    },
                ]}
            >
                {position}
            </Text>
            <View style={[styles.line, { width: width }]} />
        </View>
    );
};
