import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    dot: {
        width: getSize.m(5),
        backgroundColor: 'red',
        height: getSize.m(5),
    },
});

export default styles;
