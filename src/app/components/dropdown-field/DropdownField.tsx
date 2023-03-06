/* eslint-disable react/no-array-index-key */
import { appIcons } from '@football/app/assets/icons/appIcons';
import { IDropdownFieldProps } from '@football/app/components/dropdown-field/DropdownField.type';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import OutsidePressHandler from 'react-native-outside-press';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './DropdownField.style';

const DropdownField = ({
    onPress,
    title,
    isOpen,
    options = [],
    onPressItem,
    itemTitleField = '',
    closeDropdown,
}: IDropdownFieldProps) => {
    return (
        <OutsidePressHandler onOutsidePress={closeDropdown}>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={onPress}
                    style={[
                        styles.fieldContainer,
                        {
                            borderColor: isOpen ? appColors.blue_light : appColors.border,
                        },
                    ]}
                >
                    <Text style={styles.title}>{title}</Text>
                    <Icon
                        name={isOpen ? appIcons.ic_chevron_up : appIcons.ic_chevron_down}
                        size={getSize.m(14)}
                        color={isOpen ? appColors.blue_light : appColors.light_gray}
                        style={styles.chevronDown}
                    />
                </TouchableOpacity>
                {isOpen && (
                    <View style={[styles.itemsContainer]}>
                        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
                            {options.map((opt: any, index: number) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => onPressItem(opt)}
                                        key={index}
                                        style={styles.itemContainer}
                                    >
                                        <Text style={styles.itemTitle}>{opt[itemTitleField]}</Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </ScrollView>
                    </View>
                )}
            </View>
        </OutsidePressHandler>
    );
};

export default DropdownField;
