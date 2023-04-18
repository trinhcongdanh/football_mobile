import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './HeaderAdded.styles';
import { IHeaderAddedProps } from './HeaderAdded.type';

export const HeaderAdded = ({
    headerTitle,
    headerSkip,
    iconName,
    leftIcon,
    backFav,
}: IHeaderAddedProps) => {
    return (
        <View style={appStyles.flex_row_space_center}>
            {leftIcon ? (
                <View style={appStyles.flex_row_align}>
                    <Icon
                        name={appIcons.ic_star}
                        size={getSize.m(16)}
                        color={appColors.soft_grey}
                    />
                    <Text style={[styles.header_title, { marginLeft: getSize.m(4) }]}>
                        {headerTitle}
                    </Text>
                </View>
            ) : (
                <Text style={styles.header_title}>{headerTitle}</Text>
            )}
            <TouchableOpacity onPress={backFav} style={appStyles.flex_row_align}>
                <Text style={styles.header_skip}>{headerSkip}</Text>
                <Icon name={iconName} size={getSize.m(12)} color={appColors.text_dark_blue} />
            </TouchableOpacity>
        </View>
    );
};
