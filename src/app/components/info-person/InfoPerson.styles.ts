import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    avt_person: {
        borderColor: appColors.white,
        borderWidth: getSize.m(4),
    },
    name_person: {
        fontFamily: AppFonts.regular,
        color: appColors.white,
        fontWeight: '700',
        fontSize: getSize.m(18),
        lineHeight: getSize.m(24),
        marginTop: getSize.m(16),
    },

    line_dots: {
        borderBottomWidth: getSize.m(1),
        borderColor: appColors.text_option_unselect,
        borderStyle: 'dotted',
        marginVertical: getSize.m(20),
        marginHorizontal: getSize.m(20),
    },

    avt_national: {
        borderColor: appColors.white,
        borderWidth: getSize.m(2),
        marginRight: getSize.m(6),
    },

    data: {
        fontFamily: AppFonts.regular,
        fontWeight: '700',
        fontSize: getSize.m(15),
        color: appColors.white,
        lineHeight: getSize.m(22),
    },

    title: {
        fontFamily: AppFonts.regular,
        fontWeight: '400',
        fontSize: getSize.m(13),
        lineHeight: getSize.m(17),
        color: appColors.white,
        marginTop: getSize.m(2),
    },
});

export default styles;
