import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: appColors.gray,
        paddingTop: getSize.m(30),
    },
    header: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(16),
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(20),
    },
    see_all: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(12),
        lineHeight: getSize.m(16),
        color: appColors.button_dark_blue,
    },
});

export default styles;
