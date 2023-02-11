import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet, I18nManager } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    },
    question_close: {
        padding: getSize.m(10),
        borderRadius: getSize.m(20),
    },

    container_star: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(20),
    },
    star: {
        elevation: getSize.m(20),
        marginTop: getSize.m(-60),
    },
    star_title: {
        fontSize: getSize.m(24),
        color: appColors.white,
        textAlign: 'center',
        fontFamily: AppFonts.bold,
    },
    star_line: {
        width: '80%',
        height: getSize.m(2),
    },
    star_subtitle: {
        color: appColors.white,
        textAlign: 'center',
        fontFamily: AppFonts.medium,
    },
    accumulated_text: {
        fontSize: getSize.m(20),
        lineHeight: getSize.m(30),
        color: appColors.white,
        fontFamily: AppFonts.bold,
    },
    accumulated_number: {
        fontSize: getSize.m(13),
        fontFamily: AppFonts.bold,
        lineHeight: getSize.m(20),
        color: appColors.white,
        marginRight: getSize.m(4),
    },
    accumulated_total: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(13),
        lineHeight: getSize.m(20),
        color: 'rgba(206, 220, 255, 1)',
    },
    question: {
        fontFamily: AppFonts.medium,
        color: appColors.white,
        textAlign: 'center',
        fontSize: getSize.m(14),
        lineHeight: getSize.m(18),
    },
    button: {
        paddingVertical: getSize.m(12),
        paddingHorizontal: getSize.m(60),
        borderRadius: getSize.m(13),
    },
    button_text: {
        color: appColors.white,
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(16),
        textAlign: 'center',
    },
    results: {
        paddingTop: getSize.m(8),
        paddingBottom: getSize.m(12),
        paddingHorizontal: getSize.m(19),
        marginBottom: getSize.m(14),
        borderRadius: getSize.m(15),
        flexDirection: 'row',
        alignItems: 'center',
    },
    time: {
        width: getSize.m(33),
        height: getSize.m(33),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(10),
    },
    minutes: {
        fontSize: getSize.m(15),
        color: appColors.white,
        lineHeight: getSize.m(22),
        fontFamily: AppFonts.bold,
    },

    total_time: {
        fontSize: getSize.m(13),
        color: appColors.white,
        lineHeight: getSize.m(17),
        fontFamily: AppFonts.regular,
    },
    date: {
        fontSize: getSize.m(12),
        lineHeight: getSize.m(18),
        color: 'rgba(137, 178, 247, 1)',
        fontFamily: AppFonts.regular,
    },
});

export default styles;
