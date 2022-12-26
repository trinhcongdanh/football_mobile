import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    discussion_close: {
        padding: getSize.m(10),
        borderRadius: getSize.m(20),
    },
    txt_title: {
        color: appColors.white,
        fontSize: getSize.m(20),
        fontFamily: AppFonts.regular,
        fontWeight: '700',
        textAlign: 'center',
        marginRight: getSize.m(100),
    },
    discussion_question: {
        fontWeight: '700',
        fontSize: getSize.m(36),
        lineHeight: getSize.m(46),
        color: appColors.white,
        textAlign: 'center',
        fontFamily: AppFonts.regular,
    },
    discussion_subtitle: {
        fontWeight: '400',
        fontSize: getSize.m(16),
        color: 'rgba(159, 195, 255, 1)',
        textAlign: 'center',
        fontFamily: AppFonts.regular,
        lineHeight: getSize.m(24),
    },
    discussion_line: {
        borderColor: 'rgba(38, 93, 199, 1)',
        borderTopWidth: getSize.m(1),
        marginVertical: getSize.m(32),
    },
    discussion_rules: {
        fontWeight: '600',
        fontSize: getSize.m(18),
        lineHeight: getSize.m(28),
        textAlign: 'center',
        color: appColors.white,
    },
    discussion_point: {
        marginRight: getSize.m(10),
        color: appColors.white,
        fontWeight: '700',
    },

    discussion_start: {
        paddingVertical: getSize.m(17),
        borderRadius: getSize.m(14),
    },
    discussion_start_text: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: getSize.m(20),
        lineHeight: getSize.m(26),
        color: appColors.white,
    },
    discussion_participant: {
        fontWeight: '700',
        fontSize: getSize.m(14),
        lineHeight: getSize.m(21),
        color: appColors.white,
        fontFamily: AppFonts.regular,
        textAlign: 'center',
    },
});

export default styles;
