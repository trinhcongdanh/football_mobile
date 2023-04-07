import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    option: {
        borderRadius: getSize.m(30),
        paddingHorizontal: getSize.m(4),
        paddingVertical: getSize.m(4),
        marginHorizontal: getSize.m(24),
    },
    button_option_dark: {
        paddingHorizontal: getSize.m(10),
        paddingVertical: getSize.m(10),
        borderRadius: getSize.m(30),
        flex: 1,
    },

    text_option: {
        lineHeight: getSize.m(22),
        textAlign: 'center',
        fontSize: getSize.m(14),
    },
});

export default styles;
