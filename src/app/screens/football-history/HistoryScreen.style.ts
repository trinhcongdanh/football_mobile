import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet, I18nManager } from 'react-native';

const styles = StyleSheet.create({
    ic_back: { alignItems: I18nManager.isRTL ? 'flex-start' : 'flex-end' },
    logo_club: {
        backgroundColor: appColors.white,
        elevation: getSize.m(5),
        width: getSize.m(30),
        height: getSize.m(30),
        borderRadius: getSize.m(56),
        justifyContent: 'center',
        alignItems: 'center',
    },

    label: {
        paddingHorizontal: getSize.m(14),
        paddingVertical: getSize.m(7),
        backgroundColor: appColors.blue_matte,
        borderRadius: getSize.m(5),
    },

    text_label: {
        fontSize: getSize.m(12),
        lineHeight: getSize.m(16),
        color: appColors.text_option_unselect,
        fontFamily: AppFonts.medium,
    },

    campaign: {
        color: appColors.text_dark_blue,
        fontSize: getSize.m(14),
        lineHeight: getSize.m(18),
        fontFamily: AppFonts.bold,
    },

    year: {
        fontSize: getSize.m(14),
        color: appColors.text_option_unselect,
        lineHeight: getSize.m(21),
        fontFamily: AppFonts.medium,
    },
});

export default styles;
