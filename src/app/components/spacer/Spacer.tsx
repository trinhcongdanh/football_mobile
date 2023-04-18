import React from 'react';
import { View } from 'react-native';
import { ISpacerProps } from './Spacer.type';

export const Spacer = ({ heightSpacer, color }: ISpacerProps) => {
    return <View style={{ height: heightSpacer, backgroundColor: color }} />;
};
