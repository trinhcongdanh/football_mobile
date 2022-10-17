import { View, Text } from 'react-native';
import { IPositionProps } from './Position.type';
import React from 'react';
import { getSize } from '@football/app/utils/responsive/scale';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { styles } from './Position.styles';

export const Position = ({ position }: IPositionProps) => {
    return (
        <View style={[appStyles.flex_row_space_center, { marginBottom: getSize.m(24) }]}>
            <View style={styles.line} />
            <Text style={styles.text_or}>{position}</Text>
            <View style={styles.line} />
        </View>
    );
};
