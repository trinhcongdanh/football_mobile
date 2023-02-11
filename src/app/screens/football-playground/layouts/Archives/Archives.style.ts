import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    img_archives_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingHorizontal: getSize.m(16),
    },
    item_archives: {
        backgroundColor: '#020047',
        padding: getSize.m(6),
        marginBottom: getSize.m(30),
        borderRadius: getSize.m(20),
        justifyContent: 'center',
        alignItems: 'center',
        width: '48%',
    },
    item_archives_background: { borderRadius: getSize.m(20), width: '100%' },
    item_archives_test: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: getSize.m(11),
        lineHeight: getSize.m(11),
        position: 'absolute',
        top: getSize.m(16),
        left: getSize.m(16),
        fontFamily: AppFonts.bold,
    },
    item_archives_ticket: {
        position: 'absolute',
        top: getSize.m(-24),
        right: getSize.m(-24),
    },

    item_archives_border_logo: {
        width: getSize.m(60),
        height: getSize.m(60),
        borderRadius: getSize.m(60),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: getSize.m(-30),
    },

    item_archives_background_logo: {
        width: getSize.m(50),
        height: getSize.m(50),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(50),
    },
    item_archives_logo: {
        width: getSize.m(32),
        height: getSize.m(36),
    },
    item_archives_title: {
        fontSize: getSize.m(16),
        lineHeight: getSize.m(20),
        color: 'rgba(119, 125, 163, 1)',
        fontFamily: AppFonts.bold,
        textAlign: 'center',
    },
    item_archives_line: {
        height: getSize.m(2),
        width: '100%',
        marginVertical: getSize.m(16),
    },

    item_archives_trophy: {
        width: getSize.m(26),
        height: getSize.m(26),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(10),
        marginRight: getSize.m(10),
    },
    item_archives_point: {
        fontSize: getSize.m(13),
        lineHeight: getSize.m(17),
        color: appColors.white,
        fontFamily: AppFonts.bold,
    },
    item_archives_img_point: {
        marginLeft: getSize.m(4),
    },
});

export default styles;
