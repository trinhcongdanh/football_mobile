import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, StyleSheet } from 'react-native';
import { appColors } from '@football/app/utils/constants/appColors';
import { AppFonts } from '@football/app/assets/fonts';

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
    },

    avt: {
        flexDirection: 'row-reverse',
    },
    ic_football: {
        width: getSize.m(16),
        height: getSize.m(16),
        marginRight: getSize.m(6),
    },
    bar: {
        width: getSize.m(40),
        height: getSize.m(40),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(40),
    },
    txt_title: {
        color: appColors.white,
        fontSize: getSize.m(20),
        fontFamily: AppFonts.bold,
        textAlign: 'center',
    },
    width_size: { width: getSize.m(40) },
});
