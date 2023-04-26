import { appColors } from '@football/app/utils/constants/appColors';
import { StyleSheet } from 'react-native';
import { AppFonts } from '@football/app/assets/fonts';
import { getSize } from '@football/app/utils/responsive/scale';

export const styles = StyleSheet.create({
    width_size: { width: getSize.m(40) },
    txt_title: {
        color: appColors.white,
        fontSize: getSize.m(20),
        fontFamily: AppFonts.bold,
        textAlign: 'center',
        lineHeight: getSize.m(26),
    },
    container_back: {
        width: getSize.m(40),
        height: getSize.m(40),
        borderRadius: getSize.m(34),
        justifyContent: 'center',
        alignItems: 'center',
    },
});
