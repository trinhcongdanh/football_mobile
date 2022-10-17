import { appColors } from '@football/app/utils/constants/appColors';
import { StyleSheet } from 'react-native';

import { getSize } from '@football/app/utils/responsive/scale';

export const styles = StyleSheet.create({
    time: {
        fontSize: getSize.m(14),
        color: appColors.text_dark_blue,
        fontWeight: '700',
        marginRight: getSize.m(10),
        marginLeft: getSize.m(6),
    },
    ticket: {
        backgroundColor: appColors.yellow_light,
        width: getSize.m(30),
        height: getSize.m(30),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(30),
        marginRight: getSize.m(26),
    },
    avt: {
        borderColor: appColors.white,
        borderWidth: getSize.m(2),
    },
    name_player: {
        marginLeft: getSize.m(10),
    },
    team: {
        marginLeft: getSize.m(32),
        fontSize: getSize.m(12),
    },
});
