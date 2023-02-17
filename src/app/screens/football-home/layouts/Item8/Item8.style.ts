import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: appColors.separator,
        height: getSize.m(382),
    },
    header: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(16),
        lineHeight: getSize.m(20.8),
        color: appColors.blue_black,
    },
    details: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(12),
        lineHeight: getSize.m(15.6),
        color: appColors.blue_black,
    },
    image: {
        height: getSize.m(400),
        width: getSize.m(194),
        borderRadius: getSize.m(18),
        alignItems: 'center',
    },
    container_card: {},
    title: {
        fontFamily: AppFonts.semibold,
        fontSize: getSize.m(12),
        lineHeight: getSize.m(16),
        color: appColors.white,
        marginTop: getSize.m(52),
    },
    container_logo: {
        width: getSize.m(56),
        height: getSize.m(56),
        borderRadius: getSize.m(56),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors.white,
        marginTop: getSize.m(11),
        elevation: 10,
    },
    question: {
        fontFamily: AppFonts.bold,
        lineHeight: getSize.m(24),
        fontSize: getSize.m(18),
        color: appColors.blue_black,
        textAlign: 'center',
        marginTop: getSize.m(4),
    },
    score: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(13),
        lineHeight: getSize.m(17),
        color: appColors.light_gray,
        marginHorizontal: getSize.m(4),
    },
    label: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(13),
        lineHeight: getSize.m(17),
        color: appColors.light_gray,
    },
    button: {
        backgroundColor: appColors.blue_light,
        width: getSize.m(123),
        height: getSize.m(37),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(20),
        marginTop: getSize.m(11),
    },
    text_button: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(13),
        color: appColors.white,
        lineHeight: getSize.m(21),
    },
    total: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(12),
        lineHeight: getSize.m(16),
        color: appColors.text_dark_blue,
        marginTop: getSize.m(16),
    },
    dotContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        marginBottom: getSize.m(10),
    },

    dot: {
        width: getSize.m(5),
        height: getSize.m(5),
        marginHorizontal: getSize.m(2.5),
        borderRadius: getSize.m(5),
    },
});

export default styles;
