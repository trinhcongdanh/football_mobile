import { IProgressBarProps } from '@football/app/components/progress-bar/ProgressBar.type';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { Platform } from 'react-native';
import { Text, View } from 'react-native';
import Svg, { Circle, G, Rect } from 'react-native-svg';

export const ProgressBar = ({
    percentage = 0,
    radius = 30,
    strokeWidth = 1,
    duration = 500,
    color = 'red',
    delay = 0,
    textColor,
    max = 100,
    width = getSize.m(50),
    height = getSize.m(30),
    children,
}: IProgressBarProps) => {
    const halfCircle = radius + strokeWidth;
    const rectCircumference = (width + height) * 2;
    const strokeDashoffset = rectCircumference - (rectCircumference * percentage) / 100;
    return (
        <View style={{ marginTop: getSize.m(30) }}>
            <Svg
                width={radius * 2.5}
                height={radius * 2.5}
                viewBox={`-8 -1 ${halfCircle * 2} ${halfCircle * 2}`}
            >
                <G>
                    <Rect
                        rx="20%"
                        ry="20%"
                        width={width}
                        height={height}
                        stroke="#E9F1F4"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                    />
                    {Platform.OS === 'android' ? (
                        <Rect
                            rx="20%"
                            ry="20%"
                            width={width}
                            height={height}
                            stroke="rgba(3,151,255,1)"
                            strokeWidth={strokeWidth + 1}
                            fill="transparent"
                            strokeDasharray={rectCircumference}
                            strokeDashoffset={strokeDashoffset}
                        />
                    ) : (
                        <Rect
                            rx="20%"
                            ry="20%"
                            width={width}
                            height={height}
                            stroke="rgba(3,151,255,1)"
                            strokeWidth={strokeWidth + 1}
                            fill="transparent"
                            strokeDasharray={rectCircumference}
                            strokeDashoffset={strokeDashoffset}
                            transform="rotate(180 25.5 15.5)"
                        />
                    )}
                </G>
            </Svg>
            {children}
        </View>
    );
};
