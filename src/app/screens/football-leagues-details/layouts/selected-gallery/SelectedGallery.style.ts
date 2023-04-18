import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    minutes: {
        backgroundColor: appColors.black_dark,
        paddingHorizontal: getSize.m(6),
        paddingVertical: getSize.m(1),
        position: 'absolute',
        borderRadius: getSize.m(40),
        top: getSize.m(16),
        right: getSize.m(16),
    },
    text_minutes: {
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
    },
    text_content: {
        fontSize: getSize.m(14),
        lineHeight: getSize.m(22),
        color: appColors.white,
        fontFamily: AppFonts.bold,
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
        fontFamily: AppFonts.semibold,
        color: appColors.white,
        lineHeight: getSize.m(20),
    },

    ic_arrow_left: {
        lineHeight: getSize.m(16),

        fontFamily: AppFonts.bold,
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

    dotContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        marginTop: getSize.m(20),
    },

    dot: {
        width: getSize.m(5),
        height: getSize.m(5),
        marginHorizontal: getSize.m(2.5),
        borderRadius: getSize.m(5),
    },

    imageContainer: {
        borderRadius: 34,
        overflow: 'hidden',
    },
    image: {
        height: getSize.m(280),
        width: getSize.m(194),
        borderRadius: getSize.m(18),
        resizeMode: 'contain',
    },
    video_container: {
        position: 'absolute',
        zIndex: getSize.m(100),
        right: getSize.m(-20),
        left: getSize.m(-20),
        top: getSize.m(-200),
        bottom: getSize.m(-200),
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
});

export default styles;
