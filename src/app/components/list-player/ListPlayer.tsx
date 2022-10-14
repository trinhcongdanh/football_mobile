import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { IListPlayerProps } from './ListPlayer.type';
import { getSize } from '@football/app/utils/responsive/scale';
import { Avatar } from 'react-native-elements';
import { AppImages } from '@football/app/assets/images';

export const ListPlayer = ({ name, number }: IListPlayerProps) => {
    return (
        <View style={[appStyles.flex_row_space, { marginBottom: getSize.m(16) }]}>
            <View style={appStyles.flex_row_align_center}>
                <Avatar rounded size={26} source={AppImages.img_gk} />
                <Text style={[appStyles.text_dark, { marginLeft: getSize.m(10) }]}>{name}</Text>
            </View>
            <Text style={appStyles.number}>{number}</Text>
        </View>
    );
};
