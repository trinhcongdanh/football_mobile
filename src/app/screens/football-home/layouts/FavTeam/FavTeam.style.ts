import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    logo_team: {
        width: getSize.m(63),
        height: getSize.m(63),
        borderRadius: getSize.m(32),
        backgroundColor: appColors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: getSize.m(-30),
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },

    icon_arrow_left: {
        width: getSize.m(20),
        height: getSize.m(20),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(24),
        marginLeft: getSize.m(4),
    },

    text_details: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(18),
        lineHeight: getSize.m(26),
        color: appColors.white,
        textAlign: 'left',
    },

    stats_content: {
        backgroundColor: appColors.gray2,
        width: getSize.m(303),
        marginTop: getSize.m(14),
        minHeight: getSize.m(389),
        borderRadius: getSize.m(15),
        paddingTop: getSize.m(10),
        paddingBottom: getSize.m(15),
        marginBottom: getSize.m(15),
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

    statistics_header: {
        color: appColors.text_dark_blue,
        textAlign: 'center',
        fontSize: getSize.m(10),
        lineHeight: getSize.m(14),
        fontFamily: AppFonts.regular,
    },

    statistics_content: {
        textAlign: 'center',
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(12),
        color: appColors.blue_black,
        lineHeight: getSize.m(16),
        overflow: 'hidden',
    },

    img_ticket: {
        width: getSize.m(14),
        height: getSize.m(21),
        position: 'absolute',
        top: getSize.m(-2),
        left: getSize.m(13),
    },

    img_ticket_white: {
        width: getSize.m(14),
        height: getSize.m(21),
        position: 'absolute',
        top: getSize.m(-10.5),
        left: getSize.m(13),
    },

    dotContainer: {
        flexDirection:
            Platform.OS === 'android' ? (I18nManager.isRTL ? 'row-reverse' : 'row') : 'row',
        justifyContent: 'center',
        marginBottom: getSize.m(30),
    },

    dot: {
        width: getSize.m(5),
        height: getSize.m(5),
        marginHorizontal: getSize.m(2.5),
        borderRadius: getSize.m(5),
    },
});

export default styles;
