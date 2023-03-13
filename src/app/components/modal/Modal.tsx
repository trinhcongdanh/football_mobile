import { IModalProps } from '@football/app/components/modal/Modal.type';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { Text, View } from 'react-native';

export const Modal = ({ title }: IModalProps) => {
    return (
        <View style={[appStyles.flex_row_space_center, { marginBottom: getSize.m(24) }]}>
            <Text>{title}</Text>
        </View>
    );
};
