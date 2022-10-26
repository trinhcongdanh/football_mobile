import React from 'react';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import Icon from 'react-native-vector-icons/Feather';
import { getSize } from '@football/app/utils/responsive/scale';
import { View, TouchableOpacity, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { styles } from './HeaderFav.styles';
import { IHeaderFavProps } from './HeaderFav.type';

export const HeaderFav = ({ goBack, goSkip }: IHeaderFavProps) => {
    const { t } = useTranslation();
    const dots = Array(3).fill('');
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={goSkip}>
                <Text style={styles.skip}>{t('favorite_team.skip')}</Text>
            </TouchableOpacity>
            <View style={appStyles.flex_row_center}>
                {dots.map((_, index) => {
                    return <View key={index} style={styles.dots} />;
                })}
            </View>
            <TouchableOpacity onPress={goBack}>
                <Icon name={appIcons.ic_right_ios} size={getSize.m(14)} color={appColors.white} />
            </TouchableOpacity>
        </View>
    );
};
