import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { getSize } from '@football/app/utils/responsive/scale';
import { AppImages } from '@football/app/assets/images';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { appColors } from '@football/app/utils/constants/appColors';
import { Avatar } from 'react-native-elements';
import { IHeaderUserProps } from './HeaderUser.type';
import { styles } from './HeaderUser.styles';

export const HeaderUser = ({
    avt,
    point,
    icon,
    color_after,
    color_pre,
    handlePressFunction,
}: IHeaderUserProps) => {
    return (
        <View style={[appStyles.flex_space_center, styles.header]}>
            <View style={[appStyles.flex_row_space_center, styles.avt]}>
                <Avatar rounded size={40} source={avt} />
                <Text
                    style={[
                        appStyles.text_bold,
                        { marginRight: getSize.m(6), marginLeft: getSize.m(3) },
                    ]}
                >
                    {point}
                </Text>
                <Image source={AppImages.img_ball} style={styles.ic_football} />
            </View>
            <TouchableOpacity onPress={handlePressFunction}>
                <LinearGradient colors={[color_pre, color_after]} style={styles.bar}>
                    <Icon name={icon} color={appColors.white} size={getSize.m(20)} />
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};
