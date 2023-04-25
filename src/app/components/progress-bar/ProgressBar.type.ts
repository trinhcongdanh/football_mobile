import { StyleProp } from 'react-native';

export type IProgressBarProps = {
    percentage?: number;
    radius?: number;
    strokeWidth?: number;
    duration?: number;
    color?: string;
    delay?: number;
    textColor?: string;
    max?: number;
    width?: number;
    height?: number;
    children?: JSX.Element | JSX.Element[] | undefined;
};
