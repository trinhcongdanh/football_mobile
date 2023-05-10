import { StyleProp } from 'react-native';

export type IListPlayerProps = {
    name: string | undefined;
    number?: number;
    position?: string;
    avt?: string;
    number_before?: number;
    handleDataPlayer?: () => void;
    widthText?: StyleProp<any>;
    fontFamily?: StyleProp<any>;
};
