import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    main_schedule: {
        marginTop: getSize.m(30),
        paddingHorizontal: getSize.m(10),
        paddingTop: getSize.m(12),
        paddingBottom: getSize.m(30),
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
        marginTop: getSize.m(16),
        marginBottom: getSize.m(36),
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
        borderColor: appColors.white,
        borderWidth: getSize.m(5),
    },
    name_club: {
        fontSize: getSize.m(13),
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(20),
        marginTop: getSize.m(5),
        fontFamily: AppFonts.bold,
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
        paddingHorizontal: getSize.m(12),
        paddingVertical: getSize.m(8),
        borderRadius: getSize.m(16),
        width: getSize.m(65),
        height: getSize.m(39),
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
});
