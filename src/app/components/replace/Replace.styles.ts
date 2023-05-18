import { appColors } from '@football/app/utils/constants/appColors';
import { StyleSheet } from 'react-native';
import { getSize } from '@football/app/utils/responsive/scale';
import { AppFonts } from '@football/app/assets/fonts';

export const styles = StyleSheet.create({
    time: {
        fontSize: getSize.m(14),
        color: appColors.text_dark_blue,
        marginRight: getSize.m(10),
        marginLeft: getSize.m(6),
        fontFamily: AppFonts.bold,
    },
    ticket: {
        backgroundColor: appColors.blue_matte,
        width: getSize.m(30),
        height: getSize.m(30),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(30),
        marginRight: getSize.m(26),
    },
    avt_away: {
        borderColor: appColors.white,
        borderWidth: getSize.m(2),
    },
    avt_home: {
        borderColor: appColors.white,
        borderWidth: getSize.m(2),
        position: 'absolute',
        left: getSize.m(20),
        zIndex: 1,
    },
    ic_arrow: {
        marginHorizontal: getSize.m(6),
    },
    name_player: {
        fontSize: getSize.m(13),
        fontFamily: AppFonts.semibold,
        color: appColors.text_dark_blue,
        width: getSize.m(50),
        textAlign: 'left',
    },
    team: {
        marginLeft: getSize.m(32),
        fontSize: getSize.m(12),
        color: '#2f4cfa',
        fontFamily: AppFonts.bold,
        textAlign: 'left',
    },
});
