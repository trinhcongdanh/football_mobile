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
    confirmation: {
        backgroundColor: 'rgba(32, 134, 255, 0.24)',
        paddingVertical: getSize.m(24),
        paddingHorizontal: getSize.m(20),
        borderTopLeftRadius: getSize.m(20),
        borderTopRightRadius: getSize.m(20),
        marginTop: getSize.m(43),
        justifyContent: 'center',
        alignItems: 'center',
    },
    confirmation_reward_bg_logo: {
        width: getSize.m(60),
        height: getSize.m(60),
        borderRadius: getSize.m(60),
        justifyContent: 'center',
        alignItems: 'center',
    },
    confirmation_reward_score_bg_logo: {
        width: getSize.m(50),
        height: getSize.m(50),
        borderRadius: getSize.m(50),
        justifyContent: 'center',
        alignItems: 'center',
    },
    confirmation_reward_title: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(17),
        lineHeight: getSize.m(25),
        color: appColors.white,
        textAlign: 'center',
        marginTop: getSize.m(16),
        marginBottom: getSize.m(7),
    },
    confirmation_reward_subtitle: {
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(14),
        lineHeight: getSize.m(18),
        color: appColors.white,
        textAlign: 'center',
    },
    confirmation_reward_line: {
        height: getSize.m(2),
        marginVertical: getSize.m(31),
    },
    confirmation_reward_require: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(14),
        lineHeight: getSize.m(18),
        color: appColors.white,
    },
    confirmation_reward_check: {
        width: getSize.m(18),
        height: getSize.m(18),

        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(3),
    },
    confirmation_reward_provision: {
        fontFamily: AppFonts.medium,

        fontSize: getSize.m(14),
        lineHeight: getSize.m(18),
        color: appColors.white,
        marginLeft: getSize.m(10),
    },
    confirmation_button: {
        paddingVertical: getSize.m(12),
        paddingHorizontal: getSize.m(60),
        borderRadius: getSize.m(13),
    },
    confirmation_button_text: {
        color: appColors.white,
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(16),
        textAlign: 'center',
    },
});

export default styles;
