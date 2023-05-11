import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet, I18nManager, Platform } from 'react-native';

const styles = StyleSheet.create({
    search: {
        backgroundColor: appColors.black,
        borderRadius: getSize.m(10),
        marginTop: getSize.m(14),
        marginBottom: getSize.m(20),
    },
    text_search: {
        flex: 1,
        fontSize: getSize.m(14),
        lineHeight: Platform.OS === 'android' ? getSize.m(24) : getSize.m(17),
        fontFamily: AppFonts.regular,
        color: appColors.blue_gray_dark,
        paddingVertical: getSize.m(14),
        paddingHorizontal: getSize.m(25),
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    option_menu: {
        elevation: getSize.m(1),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: getSize.m(20),
        paddingHorizontal: getSize.m(17),
        borderRadius: getSize.m(15),
        marginBottom: getSize.m(14),
        backgroundColor: appColors.white,
    },

    text_option_menu: {
        fontSize: getSize.s(14),
        fontFamily: AppFonts.bold,
        color: appColors.text_dark_blue,
        textAlign: 'center',
        paddingHorizontal: getSize.m(4),
    },

    ic_arrow_left: {
        fontFamily: AppFonts.bold,
    },

    text_suggestion: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(16),
        lineHeight: getSize.m(22),
        color: appColors.text_dark_blue,
        paddingBottom: getSize.m(20),
        textAlign: 'left',
    },
});

export default styles;
