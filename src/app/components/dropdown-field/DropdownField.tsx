/* eslint-disable react/no-array-index-key */
import { appIcons } from '@football/app/assets/icons/appIcons';
import { IDropdownFieldProps } from '@football/app/components/dropdown-field/DropdownField.type';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import OutsidePressHandler from 'react-native-outside-press';
import Icon from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './DropdownField.style';

const DropdownField = ({
    onPress,
    options = [],
    onPressItem,
    itemTitleField = '',
    selectedValue,
    closeDropdown,
    width,
    style,
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
            style={style}
        >
            <View
                style={[
                    styles.container,
                    {
                        width,
                    },
                ]}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                        setOpenModal(!openModal);
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
                    <View style={{ width: '80%' }}>
                        <Text numberOfLines={1} style={[styles.title]}>
                            {selectedValue ? selectedValue[itemTitleField] : ''}
                        </Text>
                    </View>
                    <Icon
                        name={openModal ? appIcons.ic_chevron_up : appIcons.ic_chevron_down}
                        size={getSize.m(14)}
                        color={openModal ? appColors.blue_light : appColors.light_gray}
                        style={styles.chevronDown}
                    />
                </TouchableOpacity>
                {openModal && (
                    <View style={{ position: 'relative' }}>
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
                                            <Text style={styles.itemTitle}>
                                                {opt[itemTitleField]}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </ScrollView>
                        </View>
                    </View>
                )}
            </View>
        </OutsidePressHandler>
    );
};

export default DropdownField;
