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

    bar: {
        width: getSize.s(40),
        height: getSize.s(40),
        backgroundColor: appColors.blue_light,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(40),
    },
    logo: { width: getSize.s(30), height: getSize.s(30) },
    option_grid: {
        borderColor: appColors.border,
        borderWidth: getSize.m(1),
        alignItems: 'center',
        paddingVertical: getSize.m(12),
        borderRadius: getSize.m(16),
        marginHorizontal: getSize.m(6),
        marginVertical: getSize.m(7),
        width: '30%',
        height: getSize.s(100),
        overflow: 'hidden',
    },
    text_option_grid: {
        fontSize: getSize.s(14),
        marginTop: getSize.m(10),
        fontWeight: '700',
        color: appColors.text_dark_blue,
        textAlign: 'center',
        paddingHorizontal: getSize.m(4),
    },

    option_menu: {
        shadowColor: appColors.shadow,
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: getSize.m(10),
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
        fontSize: getSize.s(14),
        fontWeight: '700',
        color: appColors.text_dark_blue,
        textAlign: 'center',
        paddingHorizontal: getSize.m(4),
    },
    ic_arrow_left: {
        fontWeight: '900',
    },
});

export default styles;
