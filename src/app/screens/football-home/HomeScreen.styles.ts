import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet, I18nManager } from 'react-native';

const styles = StyleSheet.create({
    home_side_bar: {
        width: getSize.m(40),
        height: getSize.m(40),
        borderRadius: getSize.m(40),
        justifyContent: 'center',
        alignItems: 'center',
    },
    avt: {},
    ic_football: {
        width: getSize.m(16),
        height: getSize.m(16),
        marginRight: getSize.m(3),
        marginLeft: getSize.m(17),
    },

    header_item: {
        paddingVertical: getSize.m(7),
        paddingHorizontal: getSize.m(15),
        backgroundColor: 'rgba(255, 255, 255, 0.13)',
        borderRadius: getSize.m(46),
    },

    header_item_text: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(15),
        color: appColors.white,
        lineHeight: getSize.m(19.5),
    },

    home_video: {
        marginTop: getSize.m(20),
        marginHorizontal: getSize.m(14),
        justifyContent: 'center',
        alignItems: 'center',
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
    play_video_main: {
        paddingHorizontal: getSize.m(16),
        paddingVertical: getSize.m(14),
        borderRadius: getSize.m(50),
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        position: 'absolute',
        top: getSize.m(90),
        left: getSize.m(140),
        borderColor: 'rgba(255, 255, 255, 0.6)',
        borderWidth: getSize.m(2),
    },

    content: {
        position: 'absolute',
        bottom: getSize.m(16),
        right: getSize.m(40),
        left: getSize.m(40),
        overflow: 'hidden',
        zIndex: 100,
    },
    text_content: {
        textAlign: 'center',
        fontSize: getSize.m(20),
        lineHeight: getSize.m(24),
        color: appColors.white,
        fontFamily: AppFonts.bold,
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
});

export default styles;
