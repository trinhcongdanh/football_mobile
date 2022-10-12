import { StyleProp, ViewStyle } from 'react-native';

export type IInputComponent = {
    error: string;
    placeholder: string;
    styleInput?: StyleProp<ViewStyle>;
    onChangeText: () => void;
    onFocus: () => void;
};
