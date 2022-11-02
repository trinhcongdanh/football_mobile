import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet, I18nManager } from 'react-native';

const styles = StyleSheet.create({
    image: {
        height: getSize.m(280),
        width: getSize.m(200),
        resizeMode: 'contain',
        borderRadius: getSize.m(18),
    },
    date: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        paddingHorizontal: getSize.m(12),
        paddingVertical: getSize.m(2),
        position: 'absolute',
        borderRadius: getSize.m(40),
        top: getSize.m(16),
        right: getSize.m(16),
    },
    text_date: {
        fontSize: getSize.m(12),
        fontWeight: '600',
        fontFamily: AppFonts.regular,
        color: appColors.white,
        lineHeight: getSize.m(20),
    },

    content: {
        position: 'absolute',
        bottom: getSize.m(16),
        right: getSize.m(16),
        left: getSize.m(16),
        overflow: 'hidden',
    },
    text_content: {
        fontWeight: '700',
        textAlign: 'center',
        fontSize: getSize.m(12),
        lineHeight: getSize.m(16),
        color: appColors.white,
        fontFamily: AppFonts.regular,
    },
    ic_arrow_left: {
        lineHeight: getSize.m(16),
        fontWeight: '900',
    },

    play_video: {
        paddingHorizontal: getSize.m(16),
        paddingVertical: getSize.m(14),
        borderRadius: getSize.m(50),
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        position: 'absolute',
        top: getSize.m(114),
        left: getSize.m(74),
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: getSize.m(2),
    },

    video: {
        position: 'absolute',
        right: getSize.m(10),
        left: getSize.m(10),
        top: getSize.m(260),
        zIndex: getSize.m(1),
    },
    indicatorContainer: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    normalDots: {
        height: getSize.m(5),
        borderRadius: getSize.m(5),
        marginTop: getSize.m(20),
        marginHorizontal: getSize.m(5),
    },
});

export default styles;