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
        fontFamily: AppFonts.bold,
        color: appColors.white,
        fontSize: getSize.m(18),
        lineHeight: getSize.m(24),
    },

    line_dots: {
        borderBottomWidth: getSize.m(1),
        borderColor: appColors.text_option_unselect,
        borderStyle: 'dashed',
        marginVertical: getSize.m(20),
        marginHorizontal: getSize.m(20),
    },

    avt_national: {
        borderColor: appColors.white,
        borderWidth: getSize.m(2),
        marginRight: getSize.m(6),
    },

    data: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(15),
        color: appColors.white,
        lineHeight: getSize.m(22),
        textAlign: 'left',
    },

    title: {
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(13),
        lineHeight: getSize.m(17),
        color: appColors.white,
        marginTop: getSize.m(2),
    },
    rating: {
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(18),
        color: appColors.white,
        lineHeight: getSize.m(23),
    },
    content_rating: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(18),
        color: appColors.white,
        lineHeight: getSize.m(23),
        marginLeft: getSize.m(4),
    },
});

export default styles;
