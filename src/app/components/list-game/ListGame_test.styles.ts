import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    main_schedule: {
        marginTop: getSize.m(30),
        paddingHorizontal: getSize.m(10),
        paddingTop: getSize.m(8),
        borderRadius: getSize.m(15),
        backgroundColor: appColors.white,
    },
    tournament: {
        borderRadius: getSize.m(5),
        marginBottom: getSize.m(10),
    },
    text_live: {
        fontSize: getSize.m(13),
        fontFamily: AppFonts.bold,
        lineHeight: getSize.m(17),
        color: appColors.text_dark_blue,
    },
    text_tournament: {
        textAlign: 'center',
        fontSize: getSize.m(14),
        lineHeight: getSize.m(22),
        fontFamily: AppFonts.bold,
        paddingVertical: getSize.m(4),
    },
    line_dots: {
        marginTop: getSize.m(14),
        marginBottom: getSize.m(14),
        width: '100%',
        resizeMode: 'contain',
    },
    date: {
        fontSize: getSize.m(12),
        fontFamily: AppFonts.bold,
    },
    stadium: {
        fontSize: getSize.m(12),
        marginLeft: getSize.m(6),
        fontFamily: AppFonts.semibold,
    },
    avt_club: {
        borderColor: appColors.white,
        borderWidth: getSize.m(5),
    },
    resize_name_club: {
        width: getSize.m(80),
        height: getSize.m(46),
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    name_club: {
        fontSize: getSize.m(12),
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(14),
        marginTop: getSize.m(5),
        fontFamily: AppFonts.bold,
        textAlign: 'left',
    },
    score: {
        color: appColors.text_dark_blue,
        fontSize: getSize.m(14),
        lineHeight: getSize.m(20),
        fontFamily: AppFonts.bold,
    },
    time: {
        borderColor: '#E8F4F9',
        borderWidth: 1,
        borderRadius: getSize.m(16),
        width: getSize.m(65),
        height: getSize.m(39),
    },
    circle_right: {
        backgroundColor: '#D9D9D9',
        position: 'absolute',
        height: getSize.m(28),
        width: getSize.m(14),
        borderTopRightRadius: getSize.m(14),
        borderBottomRightRadius: getSize.m(14),
        left: getSize.m(-11),
        overflow: 'hidden',
    },
    circle_left: {
        backgroundColor: '#D9D9D9',
        position: 'absolute',
        height: getSize.m(28),
        width: getSize.m(14),
        borderTopLeftRadius: getSize.m(14),
        borderBottomLeftRadius: getSize.m(14),
        right: getSize.m(-11),
        overflow: 'hidden',
    },
    details: {
        fontSize: getSize.m(12),
        lineHeight: getSize.m(16),
        fontFamily: AppFonts.bold,
        marginRight: getSize.m(4),
        color: appColors.button_dark_blue,
    },
});
