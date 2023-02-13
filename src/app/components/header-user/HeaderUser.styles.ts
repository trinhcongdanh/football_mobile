import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, StyleSheet } from 'react-native';

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
        width: getSize.m(40),
        height: getSize.m(40),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(40),
    },
});
