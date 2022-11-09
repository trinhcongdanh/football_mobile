import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    image_avt: {
        backgroundColor: appColors.white,
        borderRadius: getSize.m(60),
        elevation: 2,
    },
    text: {
        marginTop: getSize.m(20),
        fontWeight: '700',
        fontSize: getSize.m(16),
        lineHeight: getSize.m(16),
        fontFamily: AppFonts.regular,
        color: appColors.check_box,
    },
});
