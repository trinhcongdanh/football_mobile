import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    whistle: {
        backgroundColor: appColors.blue_matte,
        width: getSize.m(30),
        height: getSize.m(30),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(30),
        marginRight: getSize.m(10),
    },

    line: {
        backgroundColor: appColors.separator,
        width: getSize.m(1),
        minHeight: 0,
        height: '100%',
        position: 'absolute',
        left: getSize.m(14),
        top: getSize.m(30),
    },
    whistle_text: {
        color: appColors.text_dark_blue,
        fontFamily: AppFonts.bold,
        lineHeight: getSize.m(18),
        fontSize: getSize.m(13),
        textAlign: 'center',
    },
});
export default styles;
