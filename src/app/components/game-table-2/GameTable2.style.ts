import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    game_table: {
        marginTop: getSize.m(20),
    },
    date: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(13),
        lineHeight: getSize.m(17),
        color: appColors.light_gray,
        marginLeft: getSize.m(16),
    },

    name_club: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(13),
        lineHeight: getSize.m(17),
        color: appColors.blue_black,
        marginTop: getSize.m(5),
    },
    container_result: {
        borderWidth: getSize.m(1),
        borderColor: appColors.border,
        borderRadius: getSize.m(10),
        marginBottom: getSize.m(4),
        width: getSize.m(65),
        height: getSize.m(30),
        justifyContent: 'center',
        alignItems: 'center',
    },
    result: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(14),
        color: appColors.blue_black,
        lineHeight: getSize.m(18),
    },
    details: {
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(11),
        lineHeight: getSize.m(14),
    },

    circle: {
        backgroundColor: appColors.gray,
        position: 'absolute',
        height: getSize.m(30),
        width: getSize.m(30),
        borderRadius: getSize.m(30),
    },
    line_dots: {
        marginBottom: getSize.m(11),
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        borderColor: appColors.soft_grey,
    },
    img_ticket: {
        width: getSize.m(10),
        height: getSize.m(14),
        position: 'absolute',
        left: getSize.m(-2),
    },
    content: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(12),
        lineHeight: getSize.m(16),
        color: appColors.text_dark_blue,
    },
    title: {
        fontFamily: AppFonts.medium,
        fontSize: getSize.m(12),
        lineHeight: getSize.m(16),
        color: appColors.light_gray,
    },
    content_ticket: {
        fontSize: getSize.m(10),
        fontFamily: AppFonts.semibold,
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(13),
    },
});

export default styles;
