import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    games: {
        marginTop: getSize.m(30),
        paddingTop: getSize.m(12),
        paddingBottom: getSize.m(20),
        borderRadius: getSize.m(15),
        backgroundColor: appColors.white,
    },
    tournaments: {
        alignItems: 'center',
        backgroundColor: '#F2FBFF',
        paddingVertical: getSize.m(4),
        borderRadius: getSize.m(5),
        marginBottom: getSize.m(10),
        marginHorizontal: getSize.m(12),
    },
    text_tournaments: {
        fontSize: getSize.m(14),
        color: appColors.text_option_unselect,
        fontFamily: AppFonts.bold,
        lineHeight: getSize.m(22),
    },
    line_dots: {
        marginTop: getSize.m(16),
        marginBottom: getSize.m(36),
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        borderColor: appColors.soft_grey,
        marginHorizontal: getSize.m(28),
    },
    date: {
        fontSize: getSize.m(14),
        lineHeight: getSize.m(20),
        fontFamily: AppFonts.bold,
    },
    stadium: {
        fontFamily: AppFonts.semibold,
        lineHeight: getSize.m(18),
        fontSize: getSize.m(14),
        marginLeft: getSize.m(6),
    },
    avt_club: {
        backgroundColor: appColors.white,
        width: getSize.m(28),
        height: getSize.m(28),
        borderRadius: getSize.m(28),
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1,
    },
    name_club: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(13),
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(20),
        marginTop: getSize.m(5),
    },
    score: {
        color: appColors.text_dark_blue,
        fontSize: getSize.m(14),
        lineHeight: getSize.m(20),
        fontFamily: AppFonts.bold,
    },
    result: {
        borderColor: appColors.border,
        borderWidth: 1,
        paddingHorizontal: getSize.m(12),
        paddingVertical: getSize.m(8),
        borderRadius: getSize.m(16),
        marginBottom: getSize.m(20),
        backgroundColor: appColors.blue_gray_light,
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

export default styles;
