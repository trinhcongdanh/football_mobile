import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ticket: {
        marginLeft: getSize.m(9),
        width: getSize.m(10),
        height: getSize.m(10),
    },
});

export default styles;
