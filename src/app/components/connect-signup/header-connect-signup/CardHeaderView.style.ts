import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    logo: { width: getSize.s(60), height: getSize.s(60) },
});

export default styles;
