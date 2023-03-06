import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet, I18nManager } from 'react-native';

const styles = StyleSheet.create({
    image: {
        height: getSize.m(240),
        width: getSize.m(160),
        resizeMode: 'cover',
        borderRadius: getSize.m(18),
        // opacity: 0,
    },
    gradient_img: {
        position: 'absolute',
        zIndex: 100,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: getSize.m(18),
    },
    date: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingHorizontal: getSize.m(12),
        paddingVertical: getSize.m(2),
        position: 'absolute',
        borderRadius: getSize.m(40),
        top: getSize.m(16),
        right: getSize.m(16),
        zIndex: 100,
    },
    text_date: {
        fontSize: getSize.m(12),
        fontFamily: AppFonts.semibold,
        color: appColors.white,
        lineHeight: getSize.m(20),
    },

    content: {
        position: 'absolute',
        bottom: getSize.m(16),
        right: getSize.m(16),
        left: getSize.m(16),
        overflow: 'hidden',
        zIndex: 101,
    },
    text_content: {
        fontSize: getSize.m(12),
        lineHeight: getSize.m(16),
        color: appColors.white,
        fontFamily: AppFonts.bold,
    },
    ic_arrow_left: {
        lineHeight: getSize.m(16),
        fontFamily: AppFonts.bold,
    },

    play_video: {
        paddingHorizontal: getSize.m(16),
        paddingVertical: getSize.m(14),
        borderRadius: getSize.m(50),
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        position: 'absolute',
        top: getSize.m(100),
        left: getSize.m(60),
        borderColor: 'rgba(255, 255, 255, 0.4)',
        borderWidth: getSize.m(2),
        zIndex: 100,
    },

    video_container: {
        position: 'absolute',
        zIndex: 1000,
        right: getSize.m(0),
        left: getSize.m(0),
        top: getSize.m(0),
        bottom: getSize.m(0),
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
    },

    ic_close: {
        position: 'absolute',
        left: getSize.m(20),
        top: getSize.m(40),
        zIndex: 1,
        backgroundColor: appColors.blue_light,
        padding: getSize.m(4),
        borderRadius: getSize.m(30),
    },
    ic_share: {
        position: 'absolute',
        right: getSize.m(20),
        top: getSize.m(40),
        zIndex: 1,
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
