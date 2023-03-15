import { AppImages } from '@football/app/assets/images';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { useAppNavigation } from '@football/app/utils/hooks/useAppNavigation';
import { getSize } from '@football/app/utils/responsive/scale';
import { renderAvatar, renderUserPoints } from '@football/core/models/AvatarType.enum';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { I18nManager, Image, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
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
    const { t } = useTranslation();

    const onPressMenu = () => {
        if (handlePressFunction) {
            handlePressFunction();
        } else {
            openDrawer();
        }
    };
    const colorCustom = useSelector((state: any) => state.colorCustom.colorCustom);
    const profileUser = useSelector((state: RootState) => state.getProfile);

    return (
        <View style={[appStyles.flex_space_center, styles.header]}>
            <TouchableOpacity onPress={onPressMenu}>
                <LinearGradient colors={[color_pre, color_after]} style={styles.bar}>
                    <FastImage
                        source={icon}
                        resizeMode={FastImage.resizeMode.contain}
                        style={{
                            width: getSize.m(12),
                            height: getSize.m(12),
                            transform: [{ rotate: I18nManager.isRTL ? '0deg' : '180deg' }],
                        }}
                    />
                </LinearGradient>
            </TouchableOpacity>
            {title ? <Text style={styles.txt_title}>{title}</Text> : <View />}

            <View style={[appStyles.flex_row_space_center, styles.avt]}>
                <FastImage
                    style={{
                        width: getSize.m(40),
                        height: getSize.m(40),
                        borderRadius: getSize.m(40),
                    }}
                    source={renderAvatar(profileUser)}
                />
                <FastImage
                    tintColor={colorCustom}
                    source={AppImages.img_ball}
                    style={styles.ic_football}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <Text
                    style={[
                        appStyles.text_bold,
                        { marginRight: getSize.m(6), marginLeft: getSize.m(3) },
                    ]}
                >
                    {renderUserPoints(profileUser, t)}
                </Text>
            </View>
        </View>
    );
};
