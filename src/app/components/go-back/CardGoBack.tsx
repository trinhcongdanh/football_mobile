import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import styles from './CardGoBack.style';
import { ICardGoBackProps } from './CardGoBack.types';

// type Props = {};

export const CardGoBack = ({ goBack }: ICardGoBackProps) => {
    return (
        <View style={appStyles.container}>
            <TouchableOpacity style={styles.ic_back} onPress={goBack}>
                <Icon name={appIcons.ic_right_ios} size={20} color={appColors.white} />
            </TouchableOpacity>
        </View>
    );
};
