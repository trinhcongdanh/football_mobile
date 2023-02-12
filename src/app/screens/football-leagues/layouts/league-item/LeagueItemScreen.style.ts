import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    option_menu: {
        elevation: getSize.m(1),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: getSize.m(20),
        paddingHorizontal: getSize.m(17),
        borderRadius: getSize.m(15),
        marginBottom: getSize.m(14),
        backgroundColor: appColors.white,
    },

    text_option_menu: {
        fontSize: getSize.s(14),
        fontFamily: AppFonts.bold,
        color: appColors.text_dark_blue,
        textAlign: 'center',
        paddingHorizontal: getSize.m(4),
    },
    ic_arrow_left: {
        fontFamily: AppFonts.bold,
    },
});

export default styles;
