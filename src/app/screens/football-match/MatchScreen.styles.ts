import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet, I18nManager } from 'react-native';

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
        backgroundColor: appColors.text_dark_blue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(40),
    },

    avt_club: {
        borderColor: appColors.white,
        borderWidth: getSize.m(5),
    },
    name_club: {
        fontWeight: '700',
        fontSize: getSize.m(15),
        color: appColors.white,
        lineHeight: getSize.m(20),
        marginTop: getSize.m(5),
    },
    score: {
        color: appColors.white,
        fontSize: getSize.m(36),
        lineHeight: getSize.m(54),
        fontWeight: '700',
    },
    status: {
        color: appColors.light_gray,
        fontSize: getSize.m(13),
        lineHeight: getSize.m(17),
        fontWeight: '500',
        marginTop: getSize.m(12),
    },
    stadium: {
        fontWeight: '600',
        color: appColors.white,
        lineHeight: getSize.m(18),
        fontSize: getSize.m(14),
        marginLeft: getSize.m(6),
    },
});

export default styles;
