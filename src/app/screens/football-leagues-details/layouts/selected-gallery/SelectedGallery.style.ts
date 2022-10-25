import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        height: getSize.m(280),
        borderRadius: getSize.m(18),
    },
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
        fontSize: getSize.m(14),
        lineHeight: getSize.m(22),
        color: appColors.white,
        fontFamily: AppFonts.regular,
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
});

export default styles;
