import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    dotContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        position: 'absolute',
        bottom: getSize.m(-14),
        right: getSize.m(70),
    },

    dot: {
        width: getSize.m(5),
        height: getSize.m(5),
        marginHorizontal: getSize.m(2.5),
        borderRadius: getSize.m(5),
    },
});

export default styles;
