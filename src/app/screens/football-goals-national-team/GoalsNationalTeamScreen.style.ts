import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet, I18nManager } from 'react-native';

const styles = StyleSheet.create({
    ic_back: { alignItems: I18nManager.isRTL ? 'flex-start' : 'flex-end' },
    main_schedule: {
        paddingHorizontal: getSize.m(23),
        paddingVertical: getSize.m(24),
        borderRadius: getSize.m(15),
        backgroundColor: appColors.white,
    },
    line_dots: {
        marginTop: getSize.m(16),
        marginBottom: getSize.m(10),
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        borderColor: appColors.soft_grey,
    },
    date: {
        fontSize: getSize.m(14),

        lineHeight: getSize.m(20),
        fontFamily: AppFonts.bold,
    },
    stadium: {
        lineHeight: getSize.m(18),
        fontSize: getSize.m(14),
        marginLeft: getSize.m(6),
        fontFamily: AppFonts.semibold,
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
    name_club: {
        fontSize: getSize.m(13),
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(20),
        fontFamily: AppFonts.bold,
        textAlign: 'left',
    },
    score: {
        color: appColors.text_dark_blue,
        fontSize: getSize.m(14),
        lineHeight: getSize.m(20),
        fontFamily: AppFonts.bold,
        textAlign: 'left',
    },
    time: {
        borderColor: appColors.border,
        borderWidth: 1,
        paddingHorizontal: getSize.m(12),
        paddingVertical: getSize.m(8),
        borderRadius: getSize.m(16),
        marginBottom: getSize.m(20),
    },
    circle: {
        backgroundColor: appColors.gray,
        position: 'absolute',
        height: getSize.m(30),
        width: getSize.m(30),
        borderRadius: getSize.m(30),
    },
    details: {
        fontSize: getSize.m(12),
        color: appColors.button_dark_blue,
        lineHeight: getSize.m(16),
        fontFamily: AppFonts.bold,
        marginRight: getSize.m(4),
    },

    number: {
        fontSize: getSize.m(12),
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(18),
        fontFamily: AppFonts.bold,
        marginBottom: getSize.m(4),
    },

    label: {
        fontSize: getSize.m(12),
        lineHeight: getSize.m(16),
        color: appColors.text_dark_blue,
        fontFamily: AppFonts.medium,
        marginLeft: getSize.m(4),
    },

    calendar: {
        fontSize: getSize.m(11),
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(16.5),
        fontFamily: AppFonts.medium,
    },
    location: {
        fontSize: getSize.m(11),
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(14.5),
        fontFamily: AppFonts.medium,
        marginRight: getSize.m(3),
    },
});

export default styles;
