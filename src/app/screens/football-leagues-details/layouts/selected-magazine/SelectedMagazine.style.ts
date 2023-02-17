import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        height: getSize.m(280),
        width: getSize.m(194),
        borderRadius: getSize.m(18),
        resizeMode: 'contain',
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

    content: {
        position: 'absolute',
        bottom: getSize.m(16),
        right: getSize.m(16),
        left: getSize.m(16),
        overflow: 'hidden',
    },
    text_content: {
        textAlign: 'center',
        fontSize: getSize.m(12),
        lineHeight: getSize.m(16),
        color: appColors.white,
        fontFamily: AppFonts.bold,
    },
    ic_arrow_left: {
        lineHeight: getSize.m(16),

        fontFamily: AppFonts.bold,
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
});

export default styles;
