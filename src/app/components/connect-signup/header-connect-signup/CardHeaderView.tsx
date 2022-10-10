import { View, Text, Image } from 'react-native';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { AppImages } from '@football/app/assets/images';
import styles from './CardHeaderView.style';
import { ICardHeaderViewProps } from './CardHeaderView.types';

// type Props = {};

export const CardHeaderView = ({ title, sub_title }: ICardHeaderViewProps) => {
    return (
        <View
            style={[
                appStyles.flex_align_center,
                // eslint-disable-next-line react-native/no-inline-styles
                { marginTop: getSize.m(10), marginBottom: getSize.m(20), flex: 0 },
            ]}
        >
            <Image resizeMode="contain" source={AppImages.img_logo} style={styles.logo} />
            <Text style={[appStyles.text_title]}>{title}</Text>
            <Text style={appStyles.text_sub_title}>{sub_title}</Text>
        </View>
    );
};
