import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        color: appColors.button_dark_blue,
        textAlign: 'center',
        fontSize: getSize.m(12),
        lineHeight: getSize.m(14),
        fontFamily: AppFonts.medium,
    },

    itemTeam: {
        paddingHorizontal: getSize.m(8),
        paddingVertical: getSize.m(10),
        borderRadius: getSize.m(5),
    },

    text_content: {
        textAlign: 'center',
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(14),
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(16),
        overflow: 'hidden',
    },

    item_statistics: {
        backgroundColor: appColors.gray,
    },
    title: {
        color: appColors.text_dark_blue,
        fontSize: getSize.m(16),
        lineHeight: getSize.m(18),
        fontFamily: AppFonts.bold,
    },

    see_all: {
        color: appColors.button_dark_blue,
        fontSize: getSize.m(12),
        lineHeight: getSize.m(16),
        fontFamily: AppFonts.bold,
        marginRight: getSize.m(4),
    },
    ic_arrow: {
        fontFamily: AppFonts.bold,
    },
});

export default styles;
