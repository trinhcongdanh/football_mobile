import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    avt_leagues_container: {
        width: getSize.m(80),
        height: getSize.m(80),
        backgroundColor: appColors.white,
        borderRadius: getSize.m(76),
        justifyContent: 'center',
        alignItems: 'center',
    },
    avt_leagues: {
        width: getSize.m(74),
        height: getSize.m(74),
        borderRadius: getSize.m(74),
    },
    name_leagues: {
        fontFamily: AppFonts.regular,
        color: appColors.white,
        fontWeight: '700',
        fontSize: getSize.m(18),
        lineHeight: getSize.m(24),
        marginTop: getSize.m(16),
    },
    season_year: {
        fontWeight: '700',
        fontSize: getSize.m(14),
        lineHeight: getSize.m(18),
        color: appColors.white,
        fontFamily: AppFonts.regular,
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
        fontWeight: '700',
        color: appColors.white,
        marginRight: getSize.m(58),
        lineHeight: getSize.m(20),
    },
    chevron_down: {
        fontWeight: '900',
    },
    drop_down_calender: {
        borderColor: appColors.border,
        borderWidth: 1,
        width: '40%',
    },
    btn_drop_down_calender: {
        borderColor: appColors.border,
        borderBottomWidth: 1,
        paddingHorizontal: getSize.m(17),
        paddingVertical: getSize.m(15),
    },

    line_dots: {
        borderBottomWidth: getSize.m(1),
        borderColor: appColors.text_option_unselect,
        borderStyle: 'dotted',
        marginVertical: getSize.m(16),
        marginHorizontal: getSize.m(20),
    },
    drop_down_filter: {
        backgroundColor: appColors.white,
        marginHorizontal: getSize.m(20),
        marginTop: getSize.m(-40),
        paddingHorizontal: getSize.m(10),
        paddingVertical: getSize.m(14),
        borderRadius: getSize.m(15),
        elevation: getSize.m(1),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cycle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: getSize.m(10),
        paddingVertical: getSize.m(12),
        marginHorizontal: getSize.m(7),
        borderRadius: getSize.m(10),
        borderColor: appColors.border,
        borderWidth: getSize.m(1),
        flex: 1,
    },
    text_cycle: {
        fontSize: getSize.m(13),
        fontWeight: '700',
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(20),
    },

    package: {
        backgroundColor: appColors.gray,
        marginTop: getSize.m(10),
        paddingVertical: getSize.m(20),
        paddingHorizontal: getSize.m(16),
    },
});

export default styles;
