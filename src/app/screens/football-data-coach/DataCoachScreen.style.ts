import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    debut_game: {
        paddingHorizontal: getSize.m(50),
        paddingVertical: getSize.m(16),
        backgroundColor: appColors.white,
        borderRadius: getSize.m(20),
        marginTop: getSize.m(-50),
    },

    congratulations: {
        textAlign: 'center',
        color: appColors.text_option_unselect,
        fontSize: getSize.m(13),
        lineHeight: getSize.m(17),
        fontFamily: AppFonts.regular,
    },

    logo: {
        borderColor: appColors.white,
        borderWidth: getSize.m(2),
    },
    name_national: {
        marginTop: getSize.m(5),
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(15),
        lineHeight: getSize.m(20),
        color: appColors.text_dark_blue,
        fontWeight: '700',
    },
    score: {
        paddingHorizontal: getSize.m(18),
        paddingVertical: getSize.m(10),
        borderColor: appColors.border,
        backgroundColor: appColors.blue_gray_light,
        borderWidth: getSize.m(0.5),
        borderRadius: getSize.m(15),
    },
    circle: {
        backgroundColor: appColors.gray,
        position: 'absolute',
        height: getSize.m(30),
        width: getSize.m(30),
        borderRadius: getSize.m(30),
        top: getSize.m(-60),
    },
    details: {
        fontSize: getSize.m(12),
        color: appColors.button_dark_blue,
        fontWeight: '700',
        lineHeight: getSize.m(16),
        fontFamily: AppFonts.regular,
        marginRight: getSize.m(4),
    },
});

export default styles;
