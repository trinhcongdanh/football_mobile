import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ticket: {
        marginLeft: getSize.m(9),
        width: getSize.m(14),
        height: getSize.m(20),
    },
});

export default styles;
