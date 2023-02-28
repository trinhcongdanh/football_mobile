import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet, I18nManager } from 'react-native';

const styles = StyleSheet.create({
    ic_back: { alignItems: I18nManager.isRTL ? 'flex-start' : 'flex-end' },
    logo_club: {
        backgroundColor: appColors.white,
        elevation: getSize.m(2),
        width: getSize.m(54),
        height: getSize.m(54),
        borderRadius: getSize.m(56),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: getSize.m(-20),
    },

    club_name: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(16),
        lineHeight: getSize.m(22),
        color: appColors.text_dark_blue,
    },

    avt_club: {
        width: getSize.m(26),
        height: getSize.m(26),
        backgroundColor: appColors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(26),
        marginHorizontal: getSize.m(4),
        elevation: 1,
    },

    score: {
        fontSize: getSize.m(12),
        color: appColors.text_dark_blue,
        fontFamily: AppFonts.bold,
        lineHeight: getSize.m(18),
        width: getSize.m(40),
        marginLeft: getSize.m(10),
        textAlign: 'center',
    },

    name_club: {
        fontSize: getSize.m(11),
        lineHeight: getSize.m(14),
        fontFamily: AppFonts.bold,
        color: appColors.text_dark_blue,
    },

    calendar: {
        fontSize: getSize.m(11),
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(16.5),
        fontFamily: AppFonts.medium,
        marginLeft: getSize.m(5),
    },
    location: {
        fontSize: getSize.m(11),
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(14.5),
        fontFamily: AppFonts.semibold,
        marginLeft: getSize.m(5),
    },
});

export default styles;
