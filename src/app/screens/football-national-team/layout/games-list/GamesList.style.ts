import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    details: {
        fontSize: getSize.m(12),
        color: appColors.button_dark_blue,
        lineHeight: getSize.m(16),
        fontFamily: AppFonts.bold,
        marginRight: getSize.m(4),
    },
    option: {
        backgroundColor: appColors.separator,
        borderRadius: getSize.m(30),
        paddingVertical: getSize.m(4),
        marginHorizontal: getSize.m(10),
        paddingHorizontal: getSize.m(4),
        height: I18nManager.isRTL ? 'auto' : getSize.m(70),
    },
    button_option_dark: {
        paddingHorizontal: getSize.m(20),
        paddingVertical: getSize.m(10),
        borderRadius: getSize.m(30),
        height: I18nManager.isRTL ? 'auto' : '100%',
        justifyContent: 'center',
        flex: I18nManager.isRTL ? 0 : 1,
    },
    text_option: {
        fontFamily: AppFonts.regular,
        lineHeight: getSize.m(22),
        textAlign: 'center',
    },
});

export default styles;
