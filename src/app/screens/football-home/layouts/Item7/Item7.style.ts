import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(34, 34, 50, 0.15)',
        paddingVertical: getSize.m(20),
        paddingHorizontal: getSize.m(14),
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo_player: {
        width: getSize.m(212),
        height: getSize.m(226),
        position: 'absolute',
        bottom: 0,
        right: getSize.m(-8),
    },
    main: {
        position: 'absolute',
        top: getSize.m(80),
        left: getSize.m(18),
        width: '60%',
    },

    title: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(16),
        lineHeight: getSize.m(20),
        color: appColors.white,
    },
    content: {
        fontFamily: AppFonts.semibold,
        fontSize: getSize.m(13),
        lineHeight: getSize.m(17),
        color: appColors.white,
        marginTop: getSize.m(6),
    },
    button: {
        paddingHorizontal: getSize.m(32.5),
        paddingVertical: getSize.m(10),
        backgroundColor: appColors.blue_light,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: getSize.m(59),
        width: '70%',
        marginTop: getSize.m(17),
    },
    text_button: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(13),
        lineHeight: getSize.m(14),
        color: appColors.white,
    },
});

export default styles;
