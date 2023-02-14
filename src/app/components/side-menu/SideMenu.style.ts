import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    side_menu_container: {
        position: 'absolute',
        backgroundColor: appColors.white,
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1000,
    },
    side_menu: {
        paddingHorizontal: getSize.m(30),
        paddingVertical: getSize.m(24),
    },
    side_menu_close: {
        flexDirection: 'row',
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
});
