import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text_button_change: {
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(13),
        lineHeight: getSize.m(24),

        textAlign: 'center',
    },
});

export default styles;
