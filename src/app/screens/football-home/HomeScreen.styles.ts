import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet, I18nManager } from 'react-native';

const styles = StyleSheet.create({
    header_background: {
        height: getSize.m(172),
        zIndex: 1000,
        overflow: 'hidden',
        width: '102%',
        marginLeft: getSize.m(-2),
        backgroundColor: appColors.text_dark,
        borderBottomLeftRadius: 40,
    },
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
        margin: 5,
    },

    header_item: {
        paddingVertical: getSize.m(7),
        paddingHorizontal: getSize.m(15),
        backgroundColor: 'rgba(255, 255, 255, 0.13)',
        borderRadius: getSize.m(46),
        marginHorizontal: getSize.m(6),
    },

    header_item_text: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(15),
        color: appColors.white,
        lineHeight: getSize.m(19.5),
    },

    home_video: {
        marginTop: getSize.m(20),
        justifyContent: 'center',
        alignItems: 'center',
    },
    date: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingHorizontal: getSize.m(12),
        paddingVertical: getSize.m(2),
        borderRadius: getSize.m(40),
        top: getSize.m(16),
        right: getSize.m(16),
        alignSelf: 'flex-end'
    },
    text_date: {
        width: '30%',
        textAlign: 'center',
        fontSize: getSize.m(12),
        fontFamily: AppFonts.semibold,
        color: appColors.white,
        lineHeight: getSize.m(20),
    },
    play_video_main: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: getSize.m(10),
        paddingVertical: getSize.m(10),
        borderRadius: getSize.m(50),
        backgroundColor: 'rgba(95,95,89,0.95)',
        borderColor: '#757372',
        borderWidth: getSize.m(2),
    },

    content: {
        bottom: getSize.m(16),
        overflow: 'hidden',
        alignSelf: 'center',
        width: '80%'
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
