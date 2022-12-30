import { StyleProp, ViewStyle } from 'react-native';

export type IInputComponent = {
    error: string;
    placeholder: string;
    input: string;
    inputRef: any;
    styleInput?: StyleProp<ViewStyle>;
    onChangeTextInput: (text: string) => void;
    onFocus: () => void;
};
