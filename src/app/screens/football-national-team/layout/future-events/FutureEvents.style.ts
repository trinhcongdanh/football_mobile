import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text_title: {
        fontSize: getSize.m(18),
        color: appColors.white,
        lineHeight: getSize.m(23),
        fontFamily: AppFonts.bold,
        marginTop: getSize.m(14),
        textAlign: 'center',
    },
});

export default styles;
