import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './HeaderAdded.styles';
import { IHeaderAddedProps } from './HeaderAdded.type';

export const HeaderAdded = ({ headerTitle, headerSkip, iconName }: IHeaderAddedProps) => {
    return (
        <View style={appStyles.flex_row_space_center}>
            <Text style={styles.header_title}>{headerTitle}</Text>
            <View style={appStyles.flex_row_align}>
                <Text style={styles.header_skip}>{headerSkip}</Text>
                <Icon name={iconName} size={getSize.m(12)} color={appColors.text_dark_blue} />
            </View>
        </View>
    );
};
