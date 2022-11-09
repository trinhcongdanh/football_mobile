import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    avt_club: {
        backgroundColor: appColors.white,
        borderRadius: getSize.m(60),
        padding: getSize.m(2),
    },
    name_club: {
        fontWeight: '700',
        fontSize: getSize.m(15),
        color: appColors.white,
        lineHeight: getSize.m(20),
        marginTop: getSize.m(5),
        width: getSize.m(70),
        textAlign: 'center',
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
