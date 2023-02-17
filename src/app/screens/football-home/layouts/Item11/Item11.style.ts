import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

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
        height: getSize.m(202),
        position: 'absolute',
        bottom: getSize.m(16),
        zIndex: 1,
    },
    button: {
        position: 'absolute',
        right: getSize.m(10),
        bottom: getSize.m(60),
        zIndex: 0,
    },
    content_button: {
        position: 'absolute',
        top: getSize.m(5),
        left: getSize.m(28),
    },
    text_button: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(15),
        lineHeight: getSize.m(19.5),
        color: appColors.white,
    },
});

export default styles;
