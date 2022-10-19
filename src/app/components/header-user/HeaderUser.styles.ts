import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet, I18nManager } from 'react-native';

export const styles = StyleSheet.create({
    header: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    },

    avt: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    },
    ic_football: {
        width: getSize.m(16),
        height: getSize.m(16),
        marginRight: getSize.m(3),
    },
    bar: {
        width: getSize.s(40),
        height: getSize.s(40),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(40),
    },
});
