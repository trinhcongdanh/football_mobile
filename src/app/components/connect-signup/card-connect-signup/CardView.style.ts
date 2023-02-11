import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    mr_top: {
        marginTop: getSize.m(17),
    },
    connect_container: {
        backgroundColor: appColors.gray,
        paddingHorizontal: getSize.m(15),
        paddingTop: getSize.m(22),
        paddingBottom: getSize.m(18),
        borderRadius: 15,
    },

    line: {
        borderColor: appColors.separator,
        borderTopWidth: 1,
        width: 100,
    },

    txt_register: {
        fontFamily: AppFonts.bold,
        textAlign: 'center',
        fontSize: getSize.m(13),
        color: appColors.text_dark_blue,
        marginBottom: getSize.m(15),
    },

    text_or: {
        textAlign: 'center',
        color: appColors.text_dark_blue,
    },
    button_link: {
        shadowColor: '#182067',
        backgroundColor: appColors.white,
        marginBottom: getSize.m(12),
        borderRadius: 15,
        elevation: 1,
        flex: 0,
    },

    text_link: {
        paddingVertical: getSize.m(17),
        color: '#020047',
        fontFamily: AppFonts.bold,
        marginLeft: getSize.m(10),
    },

    image_link: {
        height: getSize.m(32),
        width: getSize.m(32),
    },
    txt_have_user: {
        fontFamily: AppFonts.regular,
        color: appColors.white,
        textAlign: 'center',
        fontSize: getSize.m(14),
    },
    txt_connect: {
        fontFamily: AppFonts.bold,
        color: appColors.white,
        textAlign: 'center',
        fontSize: getSize.m(14),
    },
    btn_connect: {
        marginLeft: I18nManager.isRTL ? getSize.m(5) : 0,
        marginRight: I18nManager.isRTL ? getSize.m(5) : 0,
    },
});
