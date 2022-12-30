import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img_background: { flex: 1, alignItems: 'center', justifyContent: 'center' },

    image: { width: 150, height: 150 },
    background_blur: {
        backgroundColor: appColors.black,
        opacity: 0.7,
        position: 'absolute',
        top: getSize.m(0),
        left: getSize.m(0),
        right: getSize.m(0),
        bottom: getSize.m(0),
        zIndex: 0,
    },
});

export default styles;
