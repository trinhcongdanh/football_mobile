import { appIcons } from '@football/app/assets/icons/appIcons';
import { AppImages } from '@football/app/assets/images';
import { ISideMenuProps } from '@football/app/components/side-menu/SideMenu.type';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { ScreenName } from '@football/app/utils/constants/enum';
import { getSize } from '@football/app/utils/responsive/scale';
import React, { useState } from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { styles } from './SideMenu.style';
import { useViewModel } from './SideMenu.viewModel';
import { ChangeLanguage } from '@football/app/components/change-language/ChangeLanguage';
import DeviceInfo from 'react-native-device-info';
import { renderAvatar } from '@football/core/models/AvatarType.enum';

export const SideMenu = ({ navigation }: ISideMenuProps) => {
    const {
        t,
        navigate,
        onNavigateStartScreen,
        userName,
        avt,
        handleAccount,
        handleBottomSettingPage,
        resetNotifications,
        isGuestWithFavourite,
        notifications,
        getProfile,
        closeDrawer,
    } = useViewModel({
        navigation,
    });

    let hasNotch = DeviceInfo.hasNotch();

    return (
        <View style={styles.side_menu_container}>
            <View style={styles.side_menu}>
                <TouchableOpacity
                    onPress={() => {
                        closeDrawer();
                    }}
                    style={styles.side_menu_close}
                >
                    <IconAntDesign
                        name={appIcons.ic_close}
                        color={appColors.text_option_unselect}
                        size={getSize.m(24)}
                    />
                </TouchableOpacity>
                <View style={{ paddingHorizontal: getSize.m(30) }}>
                    <View style={[appStyles.flex_row_align_center, styles.side_menu_info]}>
                        <View style={styles.side_menu_avt_container}>
                            <FastImage
                                source={renderAvatar(getProfile)}
                                style={styles.side_menu_avt}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                        </View>
                        <View style={{ marginLeft: getSize.m(10) }}>
                            <Text style={styles.side_menu_name}>{userName}</Text>
                            <TouchableOpacity
                                onPress={onNavigateStartScreen}
                                style={[appStyles.flex_row_align_center]}
                            >
                                <FastImage
                                    source={AppImages.img_arrow_right_from_bracket}
                                    style={styles.side_menu_logout_icon}
                                    resizeMode={FastImage.resizeMode.contain}
                                />
                                <Text style={styles.side_menu_logout_text}>
                                    {isGuestWithFavourite
                                        ? t('side_menu.logout_with_guest_title')
                                        : t('side_menu.logout')}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: getSize.m(23) }}>
                        <TouchableOpacity
                            onPress={handleAccount}
                            style={appStyles.flex_row_align_center}
                        >
                            <FastImage
                                source={AppImages.img_user_bold}
                                resizeMode={FastImage.resizeMode.contain}
                                style={{ width: getSize.m(16), height: getSize.m(14) }}
                            />
                            <Text style={styles.side_menu_item_text}>
                                {t('side_menu.my_account')}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigate(ScreenName.ContactUsPage);
                            }}
                            style={[appStyles.flex_row_align_center, { marginTop: getSize.m(28) }]}
                        >
                            <FastImage
                                source={AppImages.img_message}
                                resizeMode={FastImage.resizeMode.contain}
                                style={{ width: getSize.m(16), height: getSize.m(14) }}
                            />
                            <Text style={styles.side_menu_item_text}>
                                {t('side_menu.contact_us')}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleBottomSettingPage}
                            style={[appStyles.flex_row_align_center, { marginTop: getSize.m(28) }]}
                        >
                            <FastImage
                                source={AppImages.img_gear}
                                resizeMode={FastImage.resizeMode.contain}
                                style={{ width: getSize.m(16), height: getSize.m(14) }}
                            />
                            <Text style={styles.side_menu_item_text}>
                                {t('side_menu.definitions')}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigate(ScreenName.TermsConditionPage);
                            }}
                            style={[appStyles.flex_row_align_center, { marginTop: getSize.m(28) }]}
                        >
                            <FastImage
                                source={AppImages.img_file}
                                resizeMode={FastImage.resizeMode.contain}
                                style={{ width: getSize.m(16), height: getSize.m(14) }}
                            />
                            <Text style={styles.side_menu_item_text}>{t('side_menu.terms')}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={resetNotifications}
                            style={[appStyles.flex_row_align_center, { marginTop: getSize.m(28) }]}
                        >
                            <FastImage
                                source={AppImages.img_bell}
                                resizeMode={FastImage.resizeMode.contain}
                                style={{ width: getSize.m(16), height: getSize.m(14) }}
                            />
                            <Text style={styles.side_menu_item_text}>
                                {t('side_menu.notification')}
                            </Text>
                            {notifications.length > 0 && (
                                <View style={styles.side_menu_notification}>
                                    <Text style={styles.text_inside_notification}>
                                        {notifications.length}
                                    </Text>
                                </View>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={{
                        marginTop:
                            Platform.OS === 'android'
                                ? getSize.m(300)
                                : hasNotch
                                ? getSize.m(300)
                                : getSize.m(260),
                        alignItems: 'center',
                    }}
                >
                    <ChangeLanguage color="#000" borderBottomColor="#000" />
                </View>
            </View>
        </View>
    );
};
