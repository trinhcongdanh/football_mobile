import { appColors } from '@football/app/utils/constants/appColors';
import { StyleSheet } from 'react-native';
import { AppFonts } from '@football/app/assets/fonts';
import { getSize } from '@football/app/utils/responsive/scale';

export const styles = StyleSheet.create({
    width_size: { width: 50 },
    txt_title: {
        color: appColors.white,
        fontSize: getSize.m(20),
        fontFamily: AppFonts.bold,
        textAlign: 'center',
    },
    position: {
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(13),
        lineHeight: getSize.m(15),
        color: appColors.text_option_unselect,
        marginLeft: getSize.m(30),
        width: getSize.m(160),
        textAlign: 'right',
    },
});
