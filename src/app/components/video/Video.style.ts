import { appColors } from '@football/app/utils/constants/appColors';
import { I18nManager, StyleSheet } from 'react-native';
import { getSize } from '@football/app/utils/responsive/scale';
import { AppFonts } from '@football/app/assets/fonts';

export const styles = StyleSheet.create({
    background_opacity: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        // minHeight: getSize.m(900),
        zIndex: 2,
        backgroundColor: 'none',
    },
    container_video: {
        zIndex: 3,
        top: getSize.m(220),
        backgroundColor: 'rgba(3, 16, 32, 1)',
        borderTopRightRadius: getSize.m(30),
        borderTopLeftRadius: getSize.m(30),
    },
    line_close: {
        width: getSize.m(23),
        height: getSize.m(3),
        backgroundColor: appColors.text_option_unselect,
        borderRadius: getSize.m(10),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: getSize.m(12),
        marginHorizontal: getSize.m(176),
    },
    ic_close: {
        flexDirection: 'row',
        marginTop: getSize.m(4),
        marginLeft: getSize.m(16),
    },
    close: { fontFamily: AppFonts.bold },
    background_video: {
        width: '100%',
        height: getSize.m(250),
        marginTop: getSize.m(10),
    },
    container_minutes: {
        paddingHorizontal: getSize.m(6),
        paddingVertical: getSize.m(2),
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: getSize.m(40),
    },
    progress_bar: {
        flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    minutes: {
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(10),
        color: appColors.white,
        lineHeight: getSize.m(20),
    },

    container_pause: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        width: getSize.m(40),
        height: getSize.m(40),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(40),
        borderWidth: getSize.m(1),
        borderColor: 'rgba(255,255,255,0.2)',
        marginHorizontal: getSize.m(22),
    },
    controls: {
        backgroundColor: '#05162A',
        paddingTop: getSize.m(18),
        paddingBottom: getSize.m(36),
    },
    title: {
        fontFamily: AppFonts.bold,
        color: appColors.white,
        fontSize: getSize.m(16),
        lineHeight: getSize.m(20),
    },
    desc: {
        fontFamily: AppFonts.regular,
        color: appColors.white,
        fontSize: getSize.m(14),
        lineHeight: getSize.m(18),
        marginTop: getSize.m(10),
    },
});
