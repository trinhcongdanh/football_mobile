import { AppFonts } from '@football/app/assets/fonts';
import { StyleSheet, I18nManager, Platform } from 'react-native';
import { getSize } from '../responsive/scale';
import { appColors } from './appColors';

export const appStyles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    flex_align_center: {
        flex: 1,
        alignItems: 'center',
    },
    flex_justify_center: {
        flex: 1,
        justifyContent: 'center',
    },
    flex_center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flex_row: {
        flex: 1,
        flexDirection: 'row',
    },
    flex_row_center: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flex_row_space: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    flex_row_align: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    flex_row_content_center: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    flex_row_space_center: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flex_space_center: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flex_row_align_center: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    align_justify: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        paddingHorizontal: getSize.m(16),
        marginTop: getSize.m(10),
    },
    text_title: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(24),
        textAlign: 'center',
        color: appColors.white,
        lineHeight: getSize.m(24),
        marginTop: getSize.m(20),
    },
    text_sub_title: {
        fontFamily: AppFonts.medium,
        fontSize: getSize.m(15),
        textAlign: 'center',
        color: appColors.text_grey,
        lineHeight: getSize.m(21),
        marginTop: getSize.m(8),
    },

    text_header: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(20),
        textAlign: 'center',
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(25),
    },
    text_sub_header: {
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(16),
        textAlign: 'center',
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(25),
    },
    text_input: {
        fontSize: getSize.m(13),
        lineHeight: getSize.m(17),
        color: appColors.text_dark_blue,
        paddingHorizontal: getSize.m(24),
        paddingVertical: getSize.m(13),
        borderColor: '#E9F1F4',
        borderWidth: 1,
        borderRadius: getSize.m(15),
        fontFamily: AppFonts.medium,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    text_label: {
        fontSize: getSize.s(13),
        lineHeight: getSize.m(17),
        color: appColors.text_dark_blue,
        fontFamily: AppFonts.bold,
    },
    text_error: {
        color: 'red',
        fontSize: getSize.m(12),
        marginTop: getSize.m(4),
        lineHeight: getSize.m(11.7),
        fontFamily: AppFonts.medium,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    account_container: {
        backgroundColor: appColors.white,
        paddingRight: getSize.m(33),
        paddingLeft: getSize.m(31),
        paddingTop: getSize.m(30),
        paddingBottom: getSize.m(30),
        borderRadius: getSize.m(15),
    },
    text_bold: {
        fontSize: getSize.s(14),
        lineHeight: getSize.m(24),
        color: appColors.white,
        fontFamily: AppFonts.bold,
    },
    safe_area: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 30 : 0,
    },

    main_container: {
        backgroundColor: appColors.gray,
        marginTop: getSize.m(20),
        borderTopLeftRadius: getSize.m(30),
        borderTopRightRadius: getSize.m(30),
        paddingVertical: getSize.m(20),
    },
    text_dark: {
        fontFamily: AppFonts.bold,
        color: appColors.text_dark,
        lineHeight: getSize.m(15),
        fontSize: getSize.m(13),
    },

    text_topic: {
        textAlign: 'left',
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(16),
        lineHeight: getSize.m(20),
        color: appColors.text_dark_blue,
    },

    number: {
        fontFamily: AppFonts.bold,
        color: appColors.text_dark_blue,
        fontSize: getSize.m(16),
        lineHeight: getSize.m(24),
    },

    top_tap: {
        elevation: 0,

        backgroundColor: appColors.gray,
        marginHorizontal: getSize.m(16),
    },
    top_tap_item: {
        width: getSize.m(90),
        textAlign: 'center',
    },
    top_tap_indicator: {
        borderWidth: getSize.m(2),
        borderColor: appColors.blue_light,
        borderRadius: getSize.m(2),
    },

    package: {
        backgroundColor: appColors.gray,
        marginTop: getSize.m(10),
        paddingVertical: getSize.m(20),
        paddingHorizontal: getSize.m(16),
    },
    item_statistics: {
        backgroundColor: appColors.gray,
        borderRadius: getSize.m(15),
        paddingHorizontal: getSize.m(12),
    },
    statistics_title: {
        color: appColors.text_dark_blue,
        fontSize: getSize.m(14),
        lineHeight: getSize.m(18),
        fontFamily: AppFonts.bold,
    },
    statistics_see_all: {
        color: appColors.button_dark_blue,
        fontSize: getSize.m(12),
        lineHeight: getSize.m(16),
        fontFamily: AppFonts.bold,
        marginRight: getSize.m(4),
    },
    statistic_ic_arrow: {
        fontFamily: AppFonts.bold,
    },

    statistics_header: {
        color: appColors.button_dark_blue,
        textAlign: 'center',
        fontSize: getSize.m(11),
        lineHeight: getSize.m(14),
        fontFamily: AppFonts.medium,
    },

    statistics_content: {
        textAlign: 'center',
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(11),
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(16),
        overflow: 'hidden',
    },

    statistic_row: {
        paddingHorizontal: getSize.m(8),
        paddingVertical: getSize.m(10),
        borderRadius: getSize.m(5),
    },
});
