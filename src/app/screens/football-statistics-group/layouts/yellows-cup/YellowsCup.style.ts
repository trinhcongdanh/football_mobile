import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ticket: {
        width: getSize.m(13),
        height: getSize.m(19),
        position: 'absolute',
        left: getSize.m(13),
        top: getSize.m(-3),
    },
});

export default styles;
