import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet, I18nManager } from 'react-native';

const styles = StyleSheet.create({
    ic_back: { alignItems: I18nManager.isRTL ? 'flex-start' : 'flex-end' },
    ticket: {
        width: getSize.m(14),
        height: getSize.m(20),
        position: 'absolute',
        left: getSize.m(13.5),
        top: getSize.m(-2),
    },
    avg_ticket: {
        marginLeft: getSize.m(9),
        width: getSize.m(14),
        height: getSize.m(20),
    },
});

export default styles;
