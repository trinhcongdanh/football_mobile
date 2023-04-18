import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button_completed: {
        backgroundColor: appColors.blue_light,
        borderRadius: getSize.m(60),
        marginTop: getSize.m(20),
        width: '100%',
        paddingVertical: getSize.m(16),
    },
    button_disable: {
        backgroundColor: '#41B2DE',
        borderRadius: getSize.m(60),
        marginTop: getSize.m(20),
        width: '100%',
        paddingVertical: getSize.m(16),
    },
    text_button_completed: {
        fontSize: getSize.s(16),
        color: appColors.white,
        fontFamily: AppFonts.bold,
        textAlign: 'center',
        lineHeight: getSize.m(20.8),
    },
    text_button_disable: {
        fontSize: getSize.s(16),
        color: 'rgba(255, 255, 255, 0.48)',
        fontFamily: AppFonts.bold,
        textAlign: 'center',
        lineHeight: getSize.m(20.8),
    },
});

export default styles;
