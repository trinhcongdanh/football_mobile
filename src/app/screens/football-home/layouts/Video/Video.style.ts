import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#061134',
        height: getSize.m(384),
    },
    header: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(16),
        lineHeight: getSize.m(20.8),
        color: appColors.white,
    },
    details: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(12),
        lineHeight: getSize.m(15.6),
        color: appColors.white,
    },
    image: {
        height: getSize.m(280),
        width: getSize.m(194),
        borderRadius: getSize.m(18),
        resizeMode: 'cover',
    },
    date: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        paddingHorizontal: getSize.m(12),
        paddingVertical: getSize.m(2),
        position: 'absolute',
        borderRadius: getSize.m(40),
        top: getSize.m(16),
        zIndex: 101,
        right: getSize.m(16),
    },
    text_date: {
        fontSize: getSize.m(12),
        fontFamily: AppFonts.semibold,
        color: appColors.white,
        lineHeight: getSize.m(20),
    },

    content: {
        position: 'absolute',
        bottom: getSize.m(26),
        right: getSize.m(16),
        left: getSize.m(16),
        zIndex: 101,
        overflow: 'hidden',
    },
    text_content: {
        fontSize: getSize.m(12),
        lineHeight: getSize.m(16),
        color: appColors.white,
        fontFamily: AppFonts.bold,
        textAlign: 'left',
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
        zIndex: 101,
        top: getSize.m(100),
        left: getSize.m(70),
        borderColor: 'rgba(255, 255, 255, 0.4)',
        borderWidth: getSize.m(2),
    },
    dotContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        marginBottom: getSize.m(20),
    },

    dot: {
        width: getSize.m(5),
        height: getSize.m(5),
        marginHorizontal: getSize.m(2.5),
        borderRadius: getSize.m(5),
    },
    gradient_img: {
        position: 'absolute',
        zIndex: 100,
        top: 0,
        left: 0,
        height: getSize.m(280),
        width: getSize.m(194),
        borderRadius: getSize.m(18),
    },
});

export default styles;
