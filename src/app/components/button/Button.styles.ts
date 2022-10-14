import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        backgroundColor: appColors.blue_light,
        borderRadius: getSize.m(60),
        marginTop: getSize.m(20),
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text_button: {
        fontSize: getSize.s(16),
        color: appColors.white,
        fontFamily: AppFonts.bold,
        paddingVertical: getSize.m(16),
    },
});

export default styles;
