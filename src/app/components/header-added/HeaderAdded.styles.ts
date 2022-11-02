import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header_title: {
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(13),
        fontWeight: '700',
        color: appColors.text_dark_blue,
    },
    header_skip: {
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(12),
        fontWeight: '700',
        color: appColors.text_dark_blue,
        marginRight: getSize.m(4),
    },
});