import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    game_table: {
        backgroundColor: appColors.white,
        marginHorizontal: getSize.m(15),
        borderRadius: getSize.m(15),
        marginTop: getSize.m(10),
        elevation: 2,
        height: getSize.m(108),
    },
    location: {
        fontSize: getSize.m(12),
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(15.6),
        fontFamily: AppFonts.semibold,
    },
    date: {
        fontSize: getSize.m(12),
        fontFamily: AppFonts.bold,
        lineHeight: getSize.m(15.6),
        color: appColors.text_dark_blue,
    },
    league: {
        fontSize: getSize.m(12),
        lineHeight: getSize.m(15.6),
        fontFamily: AppFonts.bold,
        color: appColors.text_dark_blue,
    },
    line_dot: {
        marginBottom: getSize.m(14),
        borderBottomWidth: getSize.m(1),
        borderStyle: 'dashed',
        borderColor: appColors.soft_grey,
        marginLeft: getSize.m(33),
        marginRight: getSize.m(17),
    },
    circle: {
        backgroundColor: appColors.gray,
        position: 'absolute',
        height: getSize.m(30),
        width: getSize.m(30),
        borderRadius: getSize.m(30),
    },
    container_result: {
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
    name: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(15),
        lineHeight: getSize.m(20),
        color: appColors.text_dark_blue,
    },
    live: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(13),
        lineHeight: getSize.m(17),
        color: appColors.text_dark_blue,
    },
    minute: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(14),
        color: 'rgba(0, 150, 255, 1)',
        lineHeight: getSize.m(18),
        marginLeft: getSize.m(6),
    },
});

export default styles;
