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
        paddingHorizontal: getSize.m(26),
        marginTop: getSize.m(10),
    },
    text_title: {
        fontFamily: AppFonts.regular,
        fontWeight: '700',
        fontSize: getSize.m(20),
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
        paddingVertical: getSize.m(15),
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
        fontSize: getSize.s(9),
        marginTop: getSize.m(5),
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
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
});
