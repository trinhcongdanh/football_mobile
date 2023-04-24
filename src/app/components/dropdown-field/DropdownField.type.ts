import { StyleProp } from 'react-native';

export type IDropdownFieldProps = {
    options: any;
    itemTitleField: string | undefined;
    onPress?: () => void;
    onPressItem?: (item: any) => void;
    closeDropdown?: () => void;
    selectedValue: any;
    isOpen?: boolean;
    width?: StyleProp<any>;
    style?: StyleProp<any>;
};
