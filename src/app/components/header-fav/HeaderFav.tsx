import React from 'react';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import Icon from 'react-native-vector-icons/Feather';
import { getSize } from '@football/app/utils/responsive/scale';
import { View, TouchableOpacity, Text, I18nManager } from 'react-native';
import { useTranslation } from 'react-i18next';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { styles } from './HeaderFav.styles';
import { IHeaderFavProps } from './HeaderFav.type';

export const HeaderFav = ({ goBack, goSkip, onIndex }: IHeaderFavProps) => {
    const { t } = useTranslation();
    const dots = Array(3).fill('');
    // console.log(I18nManager.isRTL);
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={goBack}>
                <Icon
                    name={appIcons.ic_right_ios}
                    style={styles.ic_back}
                    size={getSize.m(18)}
                    color={appColors.white}
                />
            </TouchableOpacity>

            <View style={appStyles.flex_row_center}>
                {dots.map((_, index) => {
                    return (
                        <View
                            key={index}
                            style={[
                                styles.dots,
                                {
                                    width: index === onIndex ? getSize.m(18) : getSize.m(5),
                                    backgroundColor:
                                        index === onIndex
                                            ? appColors.blue_light
                                            : appColors.light_gray,
                                },
                            ]}
                        />
                    );
                })}
            </View>

            <TouchableOpacity onPress={goSkip}>
                <Text style={styles.skip}>{t('favorite_team.skip')}</Text>
            </TouchableOpacity>
        </View>
    );
};
