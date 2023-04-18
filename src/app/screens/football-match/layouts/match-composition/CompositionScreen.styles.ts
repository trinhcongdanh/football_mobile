import { AppFonts } from '@football/app/assets/fonts';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';
import { appColors } from '@football/app/utils/constants/appColors';

const styles = StyleSheet.create({
    button_option_dark: {
        paddingHorizontal: getSize.m(60),
        paddingVertical: getSize.m(10),
        borderRadius: getSize.m(30),
    },
    text_option: {
        fontFamily: AppFonts.regular,
        lineHeight: getSize.m(22),
        textAlign: 'center',
    },
    option: {
        backgroundColor: appColors.separator,
        borderRadius: getSize.m(30),
        paddingVertical: getSize.m(4),
        // marginHorizontal: getSize.m(10),
        marginTop: getSize.m(20),
    },
});

export default styles;
