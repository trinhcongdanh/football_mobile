import { appColors } from '@football/app/utils/constants/appColors';
import { StyleSheet } from 'react-native';
import { AppFonts } from '@football/app/assets/fonts';
import { getSize } from '@football/app/utils/responsive/scale';

export const styles = StyleSheet.create({
    width_size: { width: 30 },
    txt_title: {
        color: appColors.white,
        fontSize: getSize.m(20),
        fontFamily: AppFonts.regular,
        fontWeight: '700',
        textAlign: 'center',
        width: '70%',
    },
});
