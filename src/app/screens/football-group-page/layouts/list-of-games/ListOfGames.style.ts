import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text_see_all: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(12),
        lineHeight: getSize.m(15.6),
        color: appColors.button_dark_blue,
    },
});

export default styles;
