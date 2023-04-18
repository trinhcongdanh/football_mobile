import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(250, 252, 255)',
        height: getSize.m(238),
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: getSize.m(36),
        height: getSize.m(40),
        position: 'absolute',
        top: getSize.m(35),
        left: getSize.m(30),
    },
    cup: {
        width: getSize.m(133),
        height: getSize.m(186),
        position: 'absolute',
        bottom: getSize.m(28),
        zIndex: 1,
        left: getSize.m(123),
    },
    button: {
        position: 'absolute',
        right: Platform.OS === 'android' ? getSize.m(30) : getSize.m(60),
        bottom: getSize.m(60),
        zIndex: 0,
    },
    content_button: {
        position: 'absolute',
        top: getSize.m(5),
        left: Platform.OS === 'ios' ? getSize.m(38) : getSize.m(20),
    },
    text_button: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(12),
        lineHeight: getSize.m(19.5),
        color: appColors.white,
    },
});

export default styles;
