import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    gradient_img: {
        position: 'absolute',
        zIndex: 100,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: getSize.m(18),
    },
    image: {
        height: getSize.m(280),
        width: getSize.m(200),
        resizeMode: 'cover',
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
        zIndex: 101,
    },
    text_date: {
        fontSize: getSize.m(12),
        fontFamily: AppFonts.semibold,
        color: appColors.white,
        lineHeight: getSize.m(20),
    },
    play_video: {
        paddingHorizontal: getSize.m(16),
        paddingVertical: getSize.m(14),
        borderRadius: getSize.m(50),
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        position: 'absolute',
        zIndex: 101,
        top: getSize.m(114),
        left: getSize.m(74),
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: getSize.m(2),
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
        textAlign: 'left',
        fontSize: getSize.m(12),
        lineHeight: getSize.m(16),
        color: appColors.white,
        fontFamily: AppFonts.bold,
    },
    ic_arrow_left: {
        lineHeight: getSize.m(16),
        fontFamily: AppFonts.bold,
    },
});

export default styles;
