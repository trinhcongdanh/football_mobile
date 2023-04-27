import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    },

    avt: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    },

    ic_football: {
        width: getSize.m(16),
        height: getSize.m(16),
        marginRight: getSize.m(3),
    },

    bar: {
        width: getSize.s(40),
        height: getSize.s(40),
        backgroundColor: appColors.blue_light,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(40),
    },
    logo: { width: getSize.m(28), height: getSize.m(28), borderRadius: getSize.m(28) },
    container_logo: {
        backgroundColor: appColors.white,
        width: getSize.m(32),
        height: getSize.m(32),
        borderRadius: getSize.m(32),
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1,
    },
    state_content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: getSize.m(100),
    },
    option_grid: {
        borderColor: appColors.border,
        borderWidth: getSize.m(1),
        alignItems: 'center',
        paddingVertical: getSize.m(12),
        borderRadius: getSize.m(16),
        marginHorizontal: getSize.m(5),
        marginVertical: getSize.m(7),
        width: '30%',
        height: getSize.m(110),
        overflow: 'hidden',
    },
    text_option_grid: {
        fontSize: getSize.m(13),
        marginTop: getSize.m(10),
        lineHeight: getSize.m(16),
        fontFamily: AppFonts.bold,
        color: appColors.text_dark_blue,
        textAlign: 'center',
        paddingHorizontal: getSize.m(4),
    },

    option_menu: {
        elevation: getSize.m(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: getSize.m(20),
        paddingHorizontal: getSize.m(15),
        borderRadius: getSize.m(15),
        marginBottom: getSize.m(14),
    },

    text_option_menu: {
        fontSize: getSize.m(13),
        color: appColors.text_dark_blue,
        textAlign: 'center',
        fontFamily: AppFonts.bold,
        paddingHorizontal: getSize.m(4),
    },
    ic_arrow_left: {
        fontFamily: AppFonts.bold,
    },
});

export default styles;
