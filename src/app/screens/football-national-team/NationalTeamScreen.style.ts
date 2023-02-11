import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container_image: {
        backgroundColor: appColors.white,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: getSize.m(80),
        height: getSize.m(80),
        borderRadius: getSize.m(80),
    },
    image_logo: {
        width: getSize.m(60),
        height: getSize.m(65),
        elevation: 2,
    },
    text_title: {
        fontWeight: '700',
        fontSize: getSize.m(18),
        color: appColors.white,
        lineHeight: getSize.m(23),
        fontFamily: AppFonts.regular,
        marginTop: getSize.m(14),
        textAlign: 'center',
    },
    image_team: {
        resizeMode: 'contain',
        width: '100%',
        height: getSize.m(240),
        borderRadius: getSize.m(20),
    },
    image: {
        height: getSize.m(280),
        width: getSize.m(200),
        resizeMode: 'contain',
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
        textAlign: 'left',
        fontSize: getSize.m(12),
        lineHeight: getSize.m(16),
        color: appColors.white,
        fontFamily: AppFonts.regular,
    },
    ic_arrow_left: {
        lineHeight: getSize.m(16),
        fontWeight: '900',
    },
    play_video_main: {
        paddingHorizontal: getSize.m(16),
        paddingVertical: getSize.m(14),
        borderRadius: getSize.m(50),
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        position: 'absolute',
        top: getSize.m(90),
        left: getSize.m(140),
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: getSize.m(2),
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

    video_container: {
        position: 'absolute',
        zIndex: getSize.m(1),
        right: getSize.m(0),
        left: getSize.m(0),
        top: getSize.m(0),
        bottom: getSize.m(0),
        justifyContent: 'center',
        backgroundColor: appColors.black,
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

    details: {
        fontSize: getSize.m(12),
        color: appColors.button_dark_blue,
        fontWeight: '700',
        lineHeight: getSize.m(16),
        fontFamily: AppFonts.bold,
        marginRight: getSize.m(4),
    },

    option: {
        backgroundColor: appColors.separator,
        borderRadius: getSize.m(30),
        paddingHorizontal: getSize.m(5),
        paddingVertical: getSize.m(4),
        marginHorizontal: getSize.m(26),
    },
    button_option_dark: {
        paddingHorizontal: getSize.m(30),
        paddingVertical: getSize.m(10),
        borderRadius: getSize.m(30),
    },

    text_option: {
        fontFamily: AppFonts.regular,
        lineHeight: getSize.m(22),
        textAlign: 'center',
    },
    content_team_squad: {
        paddingVertical: getSize.m(20),
        paddingHorizontal: getSize.m(13),
        marginTop: getSize.m(12),
        borderRadius: getSize.m(15),
        backgroundColor: appColors.white,
    },
    name_player: {
        fontWeight: '700',
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(18),
        fontSize: getSize.m(14),
        fontFamily: AppFonts.regular,
        marginLeft: getSize.m(8),
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
