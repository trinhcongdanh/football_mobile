import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: getSize.m(15),
        paddingVertical: getSize.m(15),
        borderColor: '#E9F1F4',
        borderWidth: 1,
        borderRadius: getSize.m(15),
        fontSize: getSize.s(13),
        color: '#020047',
        textAlign: 'right',
    },
    error: {
        color: 'red',
        fontSize: getSize.s(9),
        marginTop: getSize.m(5),
        textAlign: I18nManager.isRTL ? 'left' : 'right',
    },
});

export default styles;
