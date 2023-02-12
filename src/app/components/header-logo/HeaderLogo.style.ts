import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    avt: {
        backgroundColor: appColors.white,
        width: getSize.m(66),
        height: getSize.m(66),
        borderRadius: getSize.m(60),
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
    },
    text: {
        marginTop: getSize.m(20),
        fontSize: getSize.m(16),
        lineHeight: getSize.m(16),
        fontFamily: AppFonts.bold,
        color: appColors.check_box,
    },
    details: {
        fontSize: getSize.m(12),
        color: appColors.button_dark_blue,
        lineHeight: getSize.m(16),
        fontFamily: AppFonts.bold,
        marginRight: getSize.m(4),
    },
});
