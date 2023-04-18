import { StyleProp, ViewStyle } from 'react-native';

export type ICardGoBackProps = {
    iconName: string;
    title?: string;
    iconStyle: StyleProp<ViewStyle>;
    goBack: () => void;
};
