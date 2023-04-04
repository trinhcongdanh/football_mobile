import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        height: getSize.m(280),
        width: getSize.m(200),
        resizeMode: 'cover',
        borderRadius: getSize.m(18),
    },
});

export default styles;
