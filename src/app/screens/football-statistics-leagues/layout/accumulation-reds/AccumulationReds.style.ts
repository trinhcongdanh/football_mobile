import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ticket: {
        width: getSize.m(13),
        height: getSize.m(19),
        position: 'absolute',
        left: getSize.m(14),
        top: getSize.m(-1),
    },
});

export default styles;
