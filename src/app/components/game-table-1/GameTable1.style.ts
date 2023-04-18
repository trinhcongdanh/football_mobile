import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    game_table: {
        paddingTop: getSize.m(6),
        paddingBottom: getSize.m(14),
        backgroundColor: appColors.white,
        marginHorizontal: getSize.m(10),
        borderRadius: getSize.m(10),
        marginTop: getSize.m(12),
        overflow: 'hidden',
    },
    date: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(13),
        color: appColors.text_dark_blue,
        marginLeft: getSize.m(28),
    },
    line_dots: {
        marginBottom: getSize.m(10),
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        borderColor: appColors.soft_grey,
        width: '100%'
    },
    resize_name_club: {
        width: getSize.m(100),
        height: getSize.m(60),
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    name_club: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(13),
        lineHeight: getSize.m(17),
        color: appColors.blue_black,
        marginTop: getSize.m(5),
        textAlign: 'left',
    },
    container_result: {
        paddingVertical: getSize.m(6),
        paddingHorizontal: getSize.m(14),
        borderWidth: getSize.m(1),
        borderColor: appColors.border,
        borderRadius: getSize.m(15),
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
        color: appColors.text_dark_blue,
    },
    content_ticket: {
        fontSize: getSize.m(10),
        fontFamily: AppFonts.semibold,
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(13),
    },
});

export default styles;
