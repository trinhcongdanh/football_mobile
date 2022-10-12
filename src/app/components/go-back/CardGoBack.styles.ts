import { appColors } from '@football/app/utils/constants/appColors';
import { StyleSheet } from 'react-native';
import { AppFonts } from '@football/app/assets/fonts';
import { getSize } from '@football/app/utils/responsive/scale';

export const styles = StyleSheet.create({
    width_size: { width: 50 },
    txt_title: {
        color: appColors.white,
        fontSize: getSize.m(16),
        fontFamily: AppFonts.regular,
        fontWeight: '700',
        textAlign: 'center',
    },
});
