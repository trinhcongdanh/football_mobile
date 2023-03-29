import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    logo_team: {
        width: getSize.m(63),
        height: getSize.m(63),
        borderRadius: getSize.m(63),
        backgroundColor: appColors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: getSize.m(-30),
        elevation: 10,
    },

    icon_arrow_left: {
        width: getSize.m(24),
        height: getSize.m(24),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(24),
        marginLeft: getSize.m(10),
    },

    text_details: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(20),
        lineHeight: getSize.m(26),
        color: appColors.blue_black,
    },
    stats_content: {
        backgroundColor: appColors.gray,
        width: getSize.m(303),
        minHeight: getSize.m(389),
        borderRadius: getSize.m(15),
        marginBottom: getSize.m(15),
        marginTop: getSize.m(14),
        paddingTop: getSize.m(16),
        paddingBottom: getSize.m(23.5),
    },

    title_statistic: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(16),
        lineHeight: getSize.m(20.8),
        color: appColors.text_dark_blue,
        marginLeft: getSize.m(4),
    },

    text_see_all: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(12),
        lineHeight: getSize.m(15.6),
        color: appColors.button_dark_blue,
    },
    dotContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        marginBottom: getSize.m(30),
    },

    dot: {
        width: getSize.m(5),
        height: getSize.m(5),
        marginHorizontal: getSize.m(2.5),
        borderRadius: getSize.m(5),
    },

    name_club: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(13),
        lineHeight: getSize.m(17),
        color: appColors.blue_black,
        marginTop: getSize.m(5),
    },
    container_result: {
        paddingVertical: getSize.m(6),
        paddingHorizontal: getSize.m(14),
        borderWidth: getSize.m(1),
        borderColor: appColors.border,
        borderRadius: getSize.m(10),
        marginBottom: getSize.m(4),
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

    label: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(13),
        color: appColors.blue_black,
        lineHeight: getSize.m(17),
    },

    content: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(16),
        lineHeight: getSize.m(20),
        color: appColors.blue_black,
    },
    title: {
        fontSize: getSize.m(12),
        fontFamily: AppFonts.medium,
        lineHeight: getSize.m(16),
        color: appColors.blue_black,
        marginTop: getSize.m(4),
    },

    content_ticket: {
        fontSize: getSize.m(13),
        fontFamily: AppFonts.bold,
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(17),
        marginRight: getSize.m(4),
    },

    ticket: {
        width: getSize.m(15),
        height: getSize.m(21),
        position: 'absolute',
        left: getSize.m(-3.8),
        top: getSize.m(-2),
    },

    line: {
        height: getSize.m(1),
        backgroundColor: appColors.separator,
        marginTop: getSize.m(20),
        marginHorizontal: getSize.m(16),
    },
});

export default styles;
