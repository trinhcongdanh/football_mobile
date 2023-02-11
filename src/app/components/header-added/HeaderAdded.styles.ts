import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header_title: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(13),
        color: appColors.text_dark_blue,
    },
    header_skip: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(12),
        color: appColors.text_dark_blue,
        marginRight: getSize.m(4),
    },
});
