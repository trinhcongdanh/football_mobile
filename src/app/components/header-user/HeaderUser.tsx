import { AppImages } from '@football/app/assets/images';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { useAppNavigation } from '@football/app/utils/hooks/useAppNavigation';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './HeaderUser.styles';
import { IHeaderUserProps } from './HeaderUser.type';

export const HeaderUser = ({
    avt,
    point,
    icon,
    color_after,
    color_pre,
    title,
    handlePressFunction,
}: IHeaderUserProps) => {
    const { openDrawer } = useAppNavigation();

    const onPressMenu = () => {
        if (handlePressFunction) {
            handlePressFunction();
        } else {
            openDrawer();
        }
    };

    return (
        <View style={[appStyles.flex_space_center, styles.header]}>
            <View style={[appStyles.flex_row_space_center, styles.avt]}>
                <FastImage
                    style={{
                        width: getSize.m(40),
                        height: getSize.m(40),
                        borderRadius: getSize.m(40),
                    }}
                    source={avt}
                />

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
            {title ? <Text style={styles.txt_title}>{title}</Text> : <View />}

            <TouchableOpacity onPress={onPressMenu}>
                <LinearGradient colors={[color_pre, color_after]} style={styles.bar}>
                    <FastImage
                        source={icon}
                        resizeMode={FastImage.resizeMode.contain}
                        style={{
                            width: getSize.m(12),
                            height: getSize.m(12),
                        }}
                    />
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};
