import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, Platform, StyleSheet } from 'react-native';
import DeviceInfo from 'react-native-device-info';

let hasNotch = DeviceInfo.hasNotch();

export const styles = StyleSheet.create({
    side_menu_container: {
        // position: 'absolute',
        backgroundColor: appColors.white,
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    side_menu: {
        paddingVertical: getSize.m(24),
        paddingTop:
            Platform.OS === 'android' ? getSize.m(24) : hasNotch ? getSize.m(40) : getSize.m(24),
    },
    side_menu_close: {
        flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
        paddingHorizontal: getSize.m(20),
    },
    side_menu_info: {
        marginTop: getSize.m(30),
        paddingBottom: getSize.m(20),
        borderBottomWidth: getSize.m(1),
        borderBottomColor: appColors.separator,
    },
    side_menu_avt_container: {
        width: getSize.m(62),
        height: getSize.m(62),
        borderRadius: getSize.m(62),
        elevation: 2,
        backgroundColor: appColors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    side_menu_avt: {
        width: getSize.m(56),
        height: getSize.m(56),
        borderRadius: getSize.m(56),
    },

    side_menu_name: {
        fontSize: getSize.m(20),
        lineHeight: getSize.m(26),
        fontFamily: AppFonts.bold,
        color: appColors.button_dark_blue,
        textAlign: 'left',
    },

    side_menu_logout_text: {
        fontSize: getSize.m(14),
        fontFamily: AppFonts.medium,
        lineHeight: getSize.m(18),
        color: appColors.light_gray,
        marginLeft: getSize.m(4),
    },

    side_menu_logout_icon: {
        width: getSize.m(10),
        height: getSize.m(10),
        color: appColors.soft_grey,
    },

    side_menu_item_text: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(14),
        lineHeight: getSize.m(18),
        color: appColors.button_dark_blue,
        marginLeft: getSize.m(10),
    },

    side_menu_notification: {
        textAlignVertical: 'center',
        paddingVertical: getSize.m(0),
        color: appColors.white,
        position: 'absolute',
        width: getSize.m(12),
        height: getSize.m(12),
        borderRadius: getSize.m(10),
        backgroundColor: appColors.red,
        lineHeight: 0,
        padding: getSize.m(0),
        textAlign: 'center',
        top: 0,
        left: getSize.m(-3),
    },

    text_inside_notification: {
        color: 'white',
        fontSize: getSize.m(8),
        textAlign: 'center',
    },
});
