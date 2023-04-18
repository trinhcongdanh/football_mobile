import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    item_game: {
        marginLeft: getSize.m(16),
        marginRight: getSize.m(10),
        marginTop: getSize.m(20),
        borderBottomWidth: getSize.m(1),
        borderColor: appColors.separator,
    },

    date: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(13),
        lineHeight: getSize.m(17),
        color: appColors.light_gray,
    },

    location: {
        fontSize: getSize.m(12),
        color: appColors.light_gray,
        lineHeight: getSize.m(15.6),
    },

    resize_name_club: {
        width: getSize.m(80),
        height: getSize.m(40),
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    name_club: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(13),
        lineHeight: getSize.m(17),
        color: appColors.blue_black,
        marginTop: getSize.m(5),
        textAlign: 'left',
    },
    container_result: {
        paddingVertical: getSize.m(6),
        paddingHorizontal: getSize.m(14),
        borderWidth: getSize.m(1),
        borderColor: appColors.border,
        borderRadius: getSize.m(10),
        marginBottom: getSize.m(4),
    },
    result: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(14),
        color: appColors.blue_black,
        lineHeight: getSize.m(18),
    },
    details: {
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(11),
        lineHeight: getSize.m(14),
    },
});

export default styles;
