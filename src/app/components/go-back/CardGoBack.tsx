import { View, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { ICardGoBackProps } from './CardGoBack.types';
import { styles } from './CardGoBack.styles';
import LinearGradient from 'react-native-linear-gradient';

// type Props = {};

export const CardGoBack = ({ goBack, iconName, iconStyle, title }: ICardGoBackProps) => {
    return (
        <View style={appStyles.flex_row_space_center}>
            <LinearGradient
                style={styles.container_back}
                colors={[appColors.blue_black, appColors.blue_black]}
            >
                <TouchableOpacity style={iconStyle} onPress={goBack}>
                    <Icon name={iconName} size={getSize.m(20)} color={appColors.white} />
                </TouchableOpacity>
            </LinearGradient>
            {title ? <Text style={styles.txt_title}>{title}</Text> : <View />}
            <View style={styles.width_size} />
        </View>
    );
};
