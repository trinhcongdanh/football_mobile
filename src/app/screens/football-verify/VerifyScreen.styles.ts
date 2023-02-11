import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    connect_container: {
        backgroundColor: appColors.white,
        paddingTop: getSize.m(40),
        paddingBottom: getSize.m(25),
        borderRadius: getSize.m(15),
    },

    ic_back: { alignItems: I18nManager.isRTL ? 'flex-start' : 'flex-end' },

    otp_Container: {
        paddingHorizontal: getSize.m(28),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row-reverse',
        marginTop: getSize.m(37),
    },
    // otp_Box: {
    //     borderRadius: getSize.m(15),
    //     borderColor: appColors.medium_gray,
    //     borderWidth: 1,
    //     width: getSize.m(63),
    //     height: getSize.m(63),
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },

    otp_Text: {
        fontSize: getSize.m(36),
        color: appColors.text_dark_blue,
        textAlign: 'center',
        width: getSize.m(63),
        borderRadius: getSize.m(15),
        borderColor: appColors.medium_gray,
        borderWidth: getSize.m(1),
        fontFamily: AppFonts.bold,
    },

    footer_opt: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    text_link: {
        fontSize: getSize.m(14),
        color: appColors.blue_light,
        fontFamily: AppFonts.bold,
        lineHeight: getSize.m(18.2),
    },
    text_not_reach: {
        fontSize: getSize.m(14),
        color: appColors.text_dark_blue,
        fontFamily: AppFonts.bold,
        lineHeight: getSize.m(18.2),
    },
    timeSend: {
        fontSize: getSize.m(13),
        fontFamily: AppFonts.medium,
        color: appColors.light_gray,
        textAlign: 'center',
    },
    error: {
        color: 'red',
        fontSize: getSize.s(12),
        textAlign: 'center',
        fontFamily: AppFonts.medium,
    },
    underlineStyleBase: {
        padding: getSize.m(30),
        borderRadius: getSize.m(10),
        color: appColors.text_dark_blue,
        fontSize: getSize.m(36),
    },
});

export default styles;
