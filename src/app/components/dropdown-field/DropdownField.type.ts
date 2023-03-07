export type IDropdownFieldProps = {
    options: any;
    itemTitleField: string;
    onPress?: () => void;
    onPressItem?: (item: any) => void;
    closeDropdown?: () => void;
    selectedValue: any;
    isOpen?: boolean;
};
