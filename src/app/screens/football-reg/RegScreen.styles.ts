import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet, I18nManager } from 'react-native';

const styles = StyleSheet.create({
    ic_back: { alignItems: I18nManager.isRTL ? 'flex-start' : 'flex-end' },
    provision: {
        color: appColors.white,
        fontSize: getSize.s(13),
        fontFamily: AppFonts.bold,
    },
    agree: {
        color: appColors.white,
        fontSize: getSize.s(13),
        fontFamily: AppFonts.regular,
    },

    checkBox: {
        width: getSize.s(20),
        height: getSize.s(20),
        borderWidth: getSize.m(1),
        borderColor: appColors.blue_light,
        marginRight: getSize.m(8),
        borderRadius: getSize.m(3),
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
