import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet, I18nManager } from 'react-native';

const styles = StyleSheet.create({
    search: {
        backgroundColor: appColors.black,
        borderRadius: getSize.m(10),
        marginTop: getSize.m(20),
    },
    text_search: {
        flex: 1,
        fontSize: getSize.m(14),
        lineHeight: getSize.m(24),
        fontFamily: AppFonts.regular,
        color: appColors.blue_gray_dark,
        fontWeight: '400',
        paddingVertical: getSize.m(13),
        paddingHorizontal: getSize.m(25),
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },

    name_club: {
        fontSize: getSize.m(14),
        fontWeight: '700',
        color: appColors.white,
        lineHeight: getSize.m(24),
        fontFamily: AppFonts.bold,
    },

    content_item: {
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingHorizontal: getSize.m(16),
        marginTop: getSize.m(7),
    },

    item: {
        width: '32%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: getSize.m(11),
        paddingHorizontal: getSize.m(10),
        height: getSize.m(85),
        borderRadius: getSize.m(12),
        borderColor: appColors.blue_light,
        marginBottom: getSize.m(7),
        marginHorizontal: getSize.m(2),
    },

    image_item: {
        width: getSize.m(25),
        height: getSize.m(28),
        marginBottom: getSize.m(10),
    },
    name_item: {
        fontSize: getSize.m(12),
        fontWeight: '600',
        color: appColors.white,
        lineHeight: getSize.m(15),
        fontFamily: AppFonts.semibold,
        height: getSize.m(30),
    },
    check: {
        width: getSize.m(18),
        height: getSize.m(18),
        backgroundColor: appColors.blue_light,
        borderRadius: getSize.m(18),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: getSize.m(-5),
        right: getSize.m(-5),
    },
    ic_check: {
        fontWeight: '900',
        lineHeight: getSize.m(10),
        height: getSize.m(9.39),
        width: getSize.m(10.17),
        justifyContent: 'center',
        alignItems: 'center',
    },
    select_item: {
        backgroundColor: appColors.black,
        width: '100%',
        borderTopLeftRadius: getSize.m(30),
        borderTopRightRadius: getSize.m(30),
    },

    result_select: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: getSize.m(25),
        paddingHorizontal: getSize.m(36),
    },
    index: {
        backgroundColor: appColors.button_dark_blue,
        width: getSize.m(13),
        height: getSize.m(13),
        borderRadius: getSize.m(13),
        position: 'absolute',
        right: getSize.m(0),
        bottom: getSize.m(0),
    },
    text_index: {
        fontWeight: '600',
        color: appColors.white,
        fontSize: getSize.m(10),
        fontFamily: AppFonts.regular,
        textAlign: 'center',
    },
    result_number: {
        fontSize: getSize.m(14),
        color: appColors.white,
        lineHeight: getSize.m(24),
    },
    image_select: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button_continue: {
        borderRadius: getSize.m(15),
    },
});

export default styles;
