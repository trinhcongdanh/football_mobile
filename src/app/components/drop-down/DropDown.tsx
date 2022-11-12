import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './DropDown.style';
import { IDropDownProps } from './DropDown.type';

export const DropDown = ({ data, handleSelected, handleCloseModal }: IDropDownProps) => {
    return (
        <View style={styles.background_opacity}>
            <View style={[appStyles.flex, appStyles.main_container, styles.drop_down]}>
                <View style={{ marginHorizontal: getSize.m(18) }}>
                    <TouchableOpacity style={styles.close_drop_down} onPress={handleCloseModal} />

                    <Text style={styles.title_drop_down}>ליגת הבורסה לניירות ערך</Text>
                    <View>
                        <Text style={styles.label_drop_down}>בחר עונה</Text>
                        {data.map((item: any) => {
                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    style={[appStyles.flex_row_align_center, styles.item_select]}
                                    onPress={() => handleSelected(item)}
                                >
                                    <View
                                        style={[
                                            styles.btn_select,
                                            {
                                                backgroundColor: item.isSelected
                                                    ? appColors.blue_light
                                                    : appColors.separator,
                                            },
                                        ]}
                                    />
                                    <Text style={styles.content_select}>{item.content}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
            </View>
        </View>
    );
};
