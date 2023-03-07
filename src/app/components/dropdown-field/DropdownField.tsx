/* eslint-disable react/no-array-index-key */
import { appIcons } from '@football/app/assets/icons/appIcons';
import { IDropdownFieldProps } from '@football/app/components/dropdown-field/DropdownField.type';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import OutsidePressHandler from 'react-native-outside-press';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './DropdownField.style';

const DropdownField = ({
    onPress,
    options = [],
    onPressItem,
    itemTitleField = '',
    selectedValue,
    closeDropdown,
}: IDropdownFieldProps) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <OutsidePressHandler
            onOutsidePress={() => {
                setOpenModal(false);
                if (closeDropdown) {
                    closeDropdown();
                }
            }}
            disabled={false}
        >
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                        setOpenModal(true);
                        if (onPress) {
                            onPress();
                        }
                    }}
                    style={[
                        styles.fieldContainer,
                        {
                            borderColor: openModal ? appColors.blue_light : appColors.border,
                        },
                    ]}
                >
                    <Text style={styles.title}>
                        {selectedValue ? selectedValue[itemTitleField] : ''}
                    </Text>
                    <Icon
                        name={openModal ? appIcons.ic_chevron_up : appIcons.ic_chevron_down}
                        size={getSize.m(14)}
                        color={openModal ? appColors.blue_light : appColors.light_gray}
                        style={styles.chevronDown}
                    />
                </TouchableOpacity>
                {openModal && (
                    <View style={[styles.itemsContainer]}>
                        <ScrollView nestedScrollEnabled>
                            {options?.map((opt: any, index: number) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => {
                                            setOpenModal(!openModal);
                                            if (onPressItem) {
                                                onPressItem(opt);
                                            }
                                        }}
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
