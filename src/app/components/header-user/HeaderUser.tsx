import { AppImages } from '@football/app/assets/images';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useAppNavigation } from '@football/app/utils/hooks/useAppNavigation';
import { getSize } from '@football/app/utils/responsive/scale';
import { renderAvatar, renderUserPoints } from '@football/core/models/AvatarType.enum';
import { isEmpty } from 'lodash';
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
    const { navigate } = useAppNavigator();
    const getProfile = useSelector((state: RootState) => state.getProfile);

    const onPressMenu = () => {
        if (handlePressFunction) {
            handlePressFunction();
        } else {
            openDrawer();
        }
    };

    const onPressAvatar = () => {
        if (isEmpty(getProfile.getProfile)) {
            navigate(ScreenName.RegisterPage, { isLogin: true });
        } else {
            navigate(ScreenName.SettingsPage);
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
                            // transform: [{ rotate: I18nManager.isRTL ? '0deg' : '180deg' }],
                            transform: [{ scaleX: I18nManager.isRTL ? 1 : -1 }],
                        }}
                    />
                </LinearGradient>
            </TouchableOpacity>
            {title ? <Text style={styles.txt_title}>{title}</Text> : <View />}
            {avt ? null : <View style={styles.width_size} />}
            {avt ? (
                <View style={[appStyles.flex_row_space_center, styles.avt]}>
                    <TouchableOpacity style={styles.container_avt} onPress={onPressAvatar}>
                        <FastImage
                            style={{
                                width: getSize.m(40),
                                height: getSize.m(40),
                                borderRadius: getSize.m(40),
                            }}
                            source={renderAvatar(profileUser)}
                        />
                    </TouchableOpacity>
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
            ) : null}
        </View>
    );
};
