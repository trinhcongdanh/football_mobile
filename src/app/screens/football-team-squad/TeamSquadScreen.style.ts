import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet, I18nManager } from 'react-native';

const styles = StyleSheet.create({
    ic_back: { alignItems: I18nManager.isRTL ? 'flex-start' : 'flex-end' },
    line: {
        borderColor: appColors.separator,
        borderTopWidth: getSize.m(1),
        width: getSize.m(130),
    },

    text_or: {
        textAlign: 'center',
        color: appColors.light_gray,
    },
});

export default styles;
