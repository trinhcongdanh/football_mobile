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
        fontWeight: '700',
        fontSize: getSize.m(24),
        textAlign: 'center',
        color: appColors.white,
        lineHeight: getSize.m(24),
        marginTop: getSize.m(20),
    },
    text_sub_title: {
        fontFamily: AppFonts.regular,
        fontWeight: '500',
        fontSize: getSize.m(15),
        textAlign: 'center',
        color: appColors.text_grey,
        lineHeight: getSize.m(21),
        marginTop: getSize.m(8),
    },

    text_header: {
        fontFamily: AppFonts.regular,
        fontWeight: '700',
        fontSize: getSize.m(20),
        textAlign: 'center',
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(24),
    },
    text_sub_header: {
        fontFamily: AppFonts.regular,
        fontWeight: '400',
        fontSize: getSize.m(16),
        textAlign: 'center',
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(24),
    },
    text_input: {
        fontSize: getSize.s(13),
        fontWeight: '500',
        lineHeight: getSize.m(17),
        color: appColors.text_dark_blue,
        paddingHorizontal: getSize.m(15),
        paddingVertical: getSize.m(13),
        borderColor: '#E9F1F4',
        borderWidth: 1,
        borderRadius: getSize.m(15),
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    text_label: {
        fontSize: getSize.s(13),
        fontWeight: '700',
        lineHeight: getSize.m(17),
        color: appColors.text_dark_blue,
    },
    text_error: {
        color: 'red',
        fontSize: getSize.m(12),
        marginTop: getSize.m(4),
        lineHeight: getSize.m(11.7),
        fontWeight: '500',
        fontFamily: AppFonts.medium,
        textAlign: I18nManager.isRTL ? 'left' : 'right',
    },
    account_container: {
        backgroundColor: appColors.white,
        paddingHorizontal: getSize.m(30),
        paddingTop: getSize.m(32),
        paddingBottom: getSize.m(20),
        borderRadius: getSize.m(15),
    },
    text_bold: {
        fontWeight: '700',
        fontSize: getSize.s(14),
        lineHeight: getSize.m(24),
        color: appColors.white,
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
        fontWeight: '700',
        fontFamily: AppFonts.regular,
        color: appColors.text_dark,
        lineHeight: getSize.m(15),
        fontSize: getSize.m(13),
    },

    text_topic: {
        textAlign: 'left',
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(16),
        lineHeight: getSize.m(20),
        color: appColors.text_dark_blue,
        fontWeight: '700',
    },

    number: {
        fontWeight: '700',
        fontFamily: AppFonts.regular,
        color: appColors.text_dark_blue,
        fontSize: getSize.m(16),
        lineHeight: getSize.m(24),
    },

    top_tap: {
        elevation: 0,
        backgroundColor: appColors.gray,
        marginHorizontal: getSize.m(16),
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
        paddingVertical: getSize.m(17),
        paddingHorizontal: getSize.m(12),
    },
    statistics_title: {
        color: appColors.text_dark_blue,
        fontSize: getSize.m(14),
        fontWeight: '700',
        lineHeight: getSize.m(18),
        fontFamily: AppFonts.regular,
    },
    statistics_see_all: {
        color: appColors.button_dark_blue,
        fontSize: getSize.m(12),
        lineHeight: getSize.m(16),
        fontWeight: '700',
        fontFamily: AppFonts.regular,
        marginRight: getSize.m(4),
    },
    statistic_ic_arrow: {
        fontWeight: '700',
    },

    statistics_header: {
        fontWeight: '500',
        color: appColors.button_dark_blue,
        textAlign: 'center',
        fontSize: getSize.m(11),
        lineHeight: getSize.m(14),
        fontFamily: AppFonts.regular,
    },

    statistics_content: {
        textAlign: 'center',
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(11),
        color: appColors.text_dark_blue,
        fontWeight: '700',
        lineHeight: getSize.m(16),
        overflow: 'hidden',
    },

    statistic_row: {
        paddingHorizontal: getSize.m(8),
        paddingVertical: getSize.m(10),
        borderRadius: getSize.m(5),
    },
});
