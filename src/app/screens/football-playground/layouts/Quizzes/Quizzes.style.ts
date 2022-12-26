import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    img_quizzes_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingHorizontal: getSize.m(16),
    },
    item_quizzes: {
        padding: getSize.m(6),
        marginBottom: getSize.m(30),
        borderRadius: getSize.m(20),
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },

    item_quizzes_background: {
        borderRadius: getSize.m(20),
        width: '100%',
    },

    item_quizzes_test: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: '700',
        fontSize: getSize.m(11),
        lineHeight: getSize.m(11),
        position: 'absolute',
        top: getSize.m(16),
        left: getSize.m(16),
    },
    item_quizzes_attach: {
        position: 'absolute',
        top: getSize.m(-10),
        right: getSize.m(-9),
    },
    item_quizzes_border_logo: {
        width: getSize.m(60),
        height: getSize.m(60),
        borderRadius: getSize.m(60),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: getSize.m(-30),
    },

    item_quizzes_background_logo: {
        width: getSize.m(50),
        height: getSize.m(50),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(50),
    },
    item_quizzes_logo: {
        width: getSize.m(32),
        height: getSize.m(36),
    },

    item_quizzes_title: {
        fontWeight: '700',
        fontSize: getSize.m(16),
        lineHeight: getSize.m(20),
        color: appColors.white,
        fontFamily: AppFonts.regular,
        textAlign: 'center',
    },

    item_quizzes_line: {
        height: getSize.m(2),
        width: '100%',
        marginVertical: getSize.m(16),
    },

    item_quizzes_point: {
        fontWeight: '700',
        fontSize: getSize.m(13),
        lineHeight: getSize.m(17),
        color: appColors.white,
        fontFamily: AppFonts.regular,
    },
    item_quizzes_img_point: {
        marginLeft: getSize.m(4),
    },
    item_quizzes_quality: {
        fontWeight: '700',
        fontSize: getSize.m(12),
        lineHeight: getSize.m(18),
        color: appColors.white,
        fontFamily: AppFonts.regular,
        marginRight: getSize.m(4),
    },
    item_quizzes_participant: {
        fontWeight: '500',
        fontSize: getSize.m(12),
        lineHeight: getSize.m(18),
        color: appColors.white,
        fontFamily: AppFonts.regular,
    },
});

export default styles;
