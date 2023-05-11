import { IHalfCircleProps } from '@football/app/components/half-circle/HalfCircle.type';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export const HalfCircle = ({ radius = 14, strokeWidth = 0, color, yOffset }: IHalfCircleProps) => {
    const path = `M 0 ${radius} A ${radius} ${radius} 0 1 1 ${radius * 2} ${radius}`;
    return (
        <View style={{ transform: [{ rotate: yOffset }] }}>
            <Svg width={radius * 2} height={radius} viewBox={`0 0 ${radius * 2} ${radius}`}>
                <Path d={path} strokeWidth={strokeWidth} fill={color ? color : appColors.gray} />
            </Svg>
        </View>
    );
};
