import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet, I18nManager } from 'react-native';

const styles = StyleSheet.create({
    ic_back: { alignItems: I18nManager.isRTL ? 'flex-start' : 'flex-end' },
    header: {
        backgroundColor: appColors.blue_matte,
        paddingVertical: getSize.m(7),
        paddingHorizontal: getSize.m(14),
        borderRadius: getSize.m(5),
    },
    text_header: {
        color: appColors.text_option_unselect,
        fontSize: getSize.m(12),
        fontWeight: '500',
        lineHeight: getSize.m(16),
        fontFamily: AppFonts.regular,
    },

    content: {
        paddingVertical: getSize.m(20),
        paddingHorizontal: getSize.m(13),
        marginTop: getSize.m(12),
        borderRadius: getSize.m(15),
        backgroundColor: appColors.white,
    },

    name_campaign: {
        fontWeight: '700',
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(18),
        fontSize: getSize.m(14),
        fontFamily: AppFonts.regular,
    },

    year_campaign: {
        fontWeight: '500',
        fontSize: getSize.m(14),
        lineHeight: getSize.m(21),
        fontFamily: AppFonts.regular,
        color: appColors.text_option_unselect,
    },
});

export default styles;
