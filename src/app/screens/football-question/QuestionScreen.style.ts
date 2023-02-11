import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    },
    question_close: {
        padding: getSize.m(10),
        borderRadius: getSize.m(20),
    },
    question_result: {
        width: '90%',
        height: getSize.m(22),
        borderRadius: getSize.m(12),
        backgroundColor: '#061134',
    },
    question_progress: {
        top: getSize.m(-40),
        zIndex: getSize.m(1),
    },

    question_bar_progress: {
        position: 'absolute',
        height: getSize.m(22),
        borderRadius: getSize.m(12),
        top: getSize.m(0),
        left: getSize.m(0),
        right: getSize.m(0),
        bottom: getSize.m(0),
    },
    question_total: {
        color: appColors.white,
        fontSize: getSize.m(16),
        lineHeight: getSize.m(24),
        fontFamily: AppFonts.medium,
    },
    question_current: {
        color: appColors.white,
        fontSize: getSize.m(16),
        lineHeight: getSize.m(24),
        fontFamily: AppFonts.bold,
    },

    question_background: {
        height: getSize.m(200),
        borderRadius: getSize.m(12),
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    question_title: {
        color: appColors.white,
        lineHeight: getSize.m(29),
        fontSize: getSize.m(20),
        textAlign: 'center',
        marginTop: getSize.m(97),
        marginHorizontal: getSize.m(40),
        fontFamily: AppFonts.bold,
    },
    question_time: {
        paddingVertical: getSize.m(10),
        paddingHorizontal: getSize.m(10.5),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: getSize.m(10),
        marginTop: getSize.m(-20),
    },
    question_time_text: {
        fontSize: getSize.m(16),
        lineHeight: getSize.m(19),
        color: appColors.white,
        fontFamily: AppFonts.bold,
    },

    answer: {
        paddingVertical: getSize.m(15),
        borderRadius: getSize.m(14),
        paddingHorizontal: getSize.m(20),
    },

    answer_text: {
        fontSize: getSize.m(15),
        lineHeight: getSize.m(19),
        color: appColors.white,
        fontFamily: AppFonts.bold,
    },
});

export default styles;
