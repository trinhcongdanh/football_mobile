import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    txt_have_user: {
        fontFamily: AppFonts.regular,
        color: appColors.white,
        textAlign: 'center',
        fontSize: getSize.m(14),
    },
    txt_connect: {
        fontFamily: AppFonts.bold,
        color: appColors.white,
        fontWeight: '700',
        textAlign: 'center',
        fontSize: getSize.m(14),
    },
    btn_connect: {
        marginLeft: I18nManager.isRTL ? getSize.m(5) : 0,
        marginRight: I18nManager.isRTL ? getSize.m(5) : 0,
    },
});
