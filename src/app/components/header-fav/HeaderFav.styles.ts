import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet, I18nManager } from 'react-native';

export const styles = StyleSheet.create({
    header: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    skip: {
        fontWeight: '700',
        fontSize: getSize.m(14),
        lineHeight: getSize.m(24),
        color: appColors.white,
        fontFamily: AppFonts.regular,
    },

    dots: {
        width: getSize.m(5),
        height: getSize.m(5),
        borderRadius: getSize.m(5),
        backgroundColor: appColors.light_gray,
        marginHorizontal: getSize.m(5),
    },
});
