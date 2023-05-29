import { AppFonts } from '@football/app/assets/fonts';
import i18n from '@football/app/i18n/EnStrings';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    option: {
        backgroundColor: appColors.separator,
        borderRadius: getSize.m(30),
        paddingVertical: getSize.m(4),
        marginHorizontal: getSize.m(10),
        paddingHorizontal: getSize.m(4),
        height: Platform.OS === 'android' ? (I18nManager.isRTL ? 'auto' : getSize.m(70)) : 'auto',
    },
    button_option_dark: {
        paddingHorizontal: getSize.m(20),
        paddingVertical: getSize.m(10),
        borderRadius: getSize.m(30),
        height:
            Platform.OS === 'android'
                ? I18nManager.isRTL
                    ? 'auto'
                    : '100%'
                : i18n.language === 'heb'
                ? 'auto'
                : getSize.m(70),
        justifyContent: 'center',
        flex: Platform.OS === 'android' ? (I18nManager.isRTL ? 0 : 1) : 1,
    },

    text_option: {
        fontFamily: AppFonts.regular,
        lineHeight: getSize.m(22),
        textAlign: 'center',
    },
});

export default styles;
