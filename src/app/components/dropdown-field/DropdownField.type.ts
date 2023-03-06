export type IDropdownFieldProps = {
    options: any;
    title: string;
    itemTitleField: string;
    onPress: () => void;
    onPressItem: (item: any) => void;
    closeDropdown: () => void;
    isOpen: boolean;
};
