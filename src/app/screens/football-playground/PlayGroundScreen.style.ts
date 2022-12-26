import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet, I18nManager } from 'react-native';

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: getSize.m(16),
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    },
    bar: {
        width: getSize.s(40),
        height: getSize.s(40),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(40),
    },

    information: {
        paddingHorizontal: getSize.m(8),
        paddingVertical: getSize.m(12),
        backgroundColor: '#102064',
        borderRadius: getSize.m(12),
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
        height: getSize.m(60),
    },

    triangle: {
        width: 0,
        height: 0,
        borderTopColor: '#102064',
        borderTopWidth: getSize.m(30),
        borderBottomColor: 'transparent',
        borderBottomWidth: getSize.m(30),
        borderRightColor: '#102064',
        borderRightWidth: getSize.m(30),
        borderLeftColor: 'transparent',
        borderLeftWidth: getSize.m(30),
        borderStyle: 'solid',
        marginHorizontal: getSize.m(-8),
        marginVertical: getSize.m(-12),
        position: 'absolute',
        top: getSize.m(12),
        left: getSize.m(148),
        zIndex: getSize.m(1),
    },

    information_avt: {
        backgroundColor: 'transparent',
        position: 'absolute',
        borderTopRightRadius: getSize.m(12),
        borderBottomRightRadius: getSize.m(12),
        left: 0,
        height: '100%',
        justifyContent: 'center',
        width: getSize.m(195),
    },

    option: {
        backgroundColor: appColors.text_dark_blue,
        borderRadius: getSize.m(10),
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    },
    button_option_dark: {
        paddingHorizontal: getSize.m(32),
        paddingVertical: getSize.m(14),
        borderRadius: getSize.m(10),
        flex: 1,
    },

    text_option: {
        fontFamily: AppFonts.regular,
        lineHeight: getSize.m(22),
        textAlign: 'center',
    },
});

export default styles;
