import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet, I18nManager } from 'react-native';
console.log(I18nManager.isRTL);
export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    skip: {
        fontSize: getSize.m(14),
        lineHeight: getSize.m(24),
        color: appColors.white,
        fontFamily: AppFonts.bold,
    },

    ic_back: {
        width: getSize.m(14),
        height: getSize.m(18),
    },

    dots: {
        width: getSize.m(5),
        height: getSize.m(5),
        borderRadius: getSize.m(5),
        backgroundColor: appColors.light_gray,
        marginHorizontal: getSize.m(5),
    },
});
