import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: appColors.white,
        elevation: 10,
        zIndex: 10,
    },
    header: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(16),
        lineHeight: getSize.m(20.8),
        color: appColors.blue_black,
    },
    details: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(12),
        lineHeight: getSize.m(15.6),
        color: appColors.blue_black,
    },
    drop_down_filter: {
        marginHorizontal: getSize.m(14),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getSize.m(20),
        zIndex: 10,
    },
    cycle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: getSize.m(10),
        paddingVertical: getSize.m(12),
        marginHorizontal: getSize.m(7),
        borderRadius: getSize.m(10),
        borderWidth: getSize.m(1),
        flex: 1,
    },
    text_cycle: {
        fontSize: getSize.m(13),
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(20),
        fontFamily: AppFonts.bold,
    },
    season_year: {
        fontSize: getSize.m(14),
        lineHeight: getSize.m(18),
        color: appColors.white,
        fontFamily: AppFonts.bold,
        marginRight: getSize.m(12),
    },
    calender: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: appColors.blue_black,
        paddingHorizontal: getSize.m(17),
        paddingVertical: getSize.m(15),
        borderRadius: getSize.m(10),
    },
    text_calender: {
        fontSize: getSize.m(13),
        color: appColors.white,
        marginRight: getSize.m(58),
        lineHeight: getSize.m(20),
        fontFamily: AppFonts.bold,
    },
    chevron_down: {
        fontFamily: AppFonts.bold,
    },
    drop_down_calender: {
        position: 'absolute',
        right: getSize.m(10),
        top: getSize.m(48),
        zIndex: 10,
        backgroundColor: appColors.white,
        borderBottomLeftRadius: getSize.m(20),
        borderBottomRightRadius: getSize.m(20),
        elevation: 1,
    },
    btn_drop_down_calender: {
        borderColor: appColors.border,
        borderBottomWidth: 1,
        marginHorizontal: getSize.m(12),
        paddingVertical: getSize.m(15),
    },

    btn_drop_down_calender_text: {
        textAlign: 'left',
        fontSize: getSize.m(13),
        fontFamily: AppFonts.bold,
        lineHeight: getSize.m(17),
        color: appColors.text_dark_blue,
    },
});

export default styles;
