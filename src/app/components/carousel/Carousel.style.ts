import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    dotContainer: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'center',
        marginBottom: getSize.m(20),
    },

    dot: {
        width: getSize.m(5),
        height: getSize.m(5),
        marginHorizontal: getSize.m(2.5),
        borderRadius: getSize.m(5),
    },
    gradient_img: {
        position: 'absolute',
        zIndex: 100,
        top: 0,
        left: 0,
        height: getSize.m(280),
        width: getSize.m(194),
        borderRadius: getSize.m(18),
    },
});

export default styles;
