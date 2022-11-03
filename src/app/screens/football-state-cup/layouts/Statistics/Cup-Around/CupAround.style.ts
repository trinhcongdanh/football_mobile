import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        fontWeight: '500',
        color: appColors.button_dark_blue,
        textAlign: 'center',
        fontSize: getSize.m(11),
        lineHeight: getSize.m(14),
        fontFamily: AppFonts.regular,
    },

    itemTeam: {
        paddingHorizontal: getSize.m(8),
        paddingVertical: getSize.m(10),
        borderRadius: getSize.m(5),
    },

    text_content: {
        textAlign: 'center',
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(11),
        color: appColors.text_dark_blue,
        fontWeight: '700',
        lineHeight: getSize.m(16),
        overflow: 'hidden',
    },

    item_statistics: {
        backgroundColor: appColors.white,
        borderRadius: getSize.m(15),
        paddingVertical: getSize.m(17),
        paddingHorizontal: getSize.m(12),
        elevation: getSize.m(2),
        marginTop: getSize.m(20),
    },
    title: {
        color: appColors.text_dark_blue,
        fontSize: getSize.m(14),
        fontWeight: '700',
        lineHeight: getSize.m(18),
        fontFamily: AppFonts.regular,
    },

    see_all: {
        color: appColors.button_dark_blue,
        fontSize: getSize.m(12),
        lineHeight: getSize.m(16),
        fontWeight: '700',
        fontFamily: AppFonts.regular,
        marginRight: getSize.m(4),
    },
    ic_arrow: {
        fontWeight: '700',
    },
});

export default styles;
