import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './SideMenu.style';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { ISideMenuProps } from '@football/app/components/side-menu/SideMenu.type';
import FastImage from 'react-native-fast-image';
import { AppImages } from '@football/app/assets/images';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';

export const SideMenu = ({ navigation }: ISideMenuProps) => {
    const { navigate, goBack } = useAppNavigator();

    const { t } = useTranslation();
    return (
        <View style={styles.side_menu_container}>
            <View style={styles.side_menu}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.closeDrawer();
                    }}
                    style={styles.side_menu_close}
                >
                    <IconAntDesign
                        name={appIcons.ic_close}
                        color={appColors.text_option_unselect}
                        size={getSize.m(24)}
                    />
                </TouchableOpacity>

                <View style={[appStyles.flex_row_align_center, styles.side_menu_info]}>
                    <View style={styles.side_menu_avt_container}>
                        <FastImage
                            source={AppImages.img_avt}
                            style={styles.side_menu_avt}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    </View>
                    <View style={{ marginLeft: getSize.m(10) }}>
                        <Text style={styles.side_menu_name}>עידו אברהמי</Text>
                        <View style={[appStyles.flex_row_align_center]}>
                            <FastImage
                                source={AppImages.img_arrow_right_from_bracket}
                                style={styles.side_menu_logout_icon}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                            <Text style={styles.side_menu_logout_text}>התנתק</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: getSize.m(23) }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigate(ScreenName.TermsConditionPage);
                        }}
                        style={appStyles.flex_row_align_center}
                    >
                        <FastImage
                            source={AppImages.img_user_bold}
                            resizeMode={FastImage.resizeMode.contain}
                            style={{ width: getSize.m(14), height: getSize.m(12) }}
                        />
                        <Text style={styles.side_menu_item_text}>{t('side_menu.my_account')}</Text>
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
                            style={{ width: getSize.m(14), height: getSize.m(12) }}
                        />
                        <Text style={styles.side_menu_item_text}>{t('side_menu.contact_us')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[appStyles.flex_row_align_center, { marginTop: getSize.m(28) }]}
                    >
                        <FastImage
                            source={AppImages.img_gear}
                            resizeMode={FastImage.resizeMode.contain}
                            style={{ width: getSize.m(14), height: getSize.m(12) }}
                        />
                        <Text style={styles.side_menu_item_text}>{t('side_menu.definitions')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[appStyles.flex_row_align_center, { marginTop: getSize.m(28) }]}
                    >
                        <FastImage
                            source={AppImages.img_file}
                            resizeMode={FastImage.resizeMode.contain}
                            style={{ width: getSize.m(14), height: getSize.m(12) }}
                        />
                        <Text style={styles.side_menu_item_text}>{t('side_menu.terms')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
