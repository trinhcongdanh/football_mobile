import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

import { AppFonts } from '@football/app/assets/fonts';

export const styles = StyleSheet.create({
    close: { fontFamily: AppFonts.bold },
    title: {
        fontSize: getSize.m(20),
        fontFamily: AppFonts.bold,
        textAlign: 'center',
    },
    subTitle: {
        fontSize: getSize.m(15),
        textAlign: 'center',
    },
    button_ok: {
        borderRadius: getSize.m(15),
        width: '100%',
        fontSize: getSize.m(50),
    },
    button_sign_up: {
        backgroundColor: 'transparent',
        borderRadius: getSize.m(15),
        marginTop: getSize.m(18),
        borderColor: appColors.text_dark_blue,
        borderWidth: getSize.m(1),
        width: '100%',
        paddingVertical: getSize.m(16),
    },
    text_button_sign_up: {
        fontSize: getSize.m(16),
        color: appColors.text_dark_blue,
        fontFamily: AppFonts.bold,
        textAlign: 'center',
        lineHeight: getSize.m(20.8),
    },
});
