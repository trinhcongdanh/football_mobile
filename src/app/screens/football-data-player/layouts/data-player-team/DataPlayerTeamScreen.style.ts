import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container_club: {
        marginTop: getSize.m(50),
    },

    club_team: {
        backgroundColor: appColors.white,
        width: '100%',
    },

    logo_club: {
        backgroundColor: appColors.white,
        elevation: getSize.m(2),
        width: getSize.m(54),
        height: getSize.m(54),
        borderRadius: getSize.m(56),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: getSize.m(-20),
    },

    club_name: {
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(16),
        fontWeight: '700',
        lineHeight: getSize.m(22),
        color: appColors.text_dark_blue,
    },

    avt_club: {
        width: getSize.m(26),
        height: getSize.m(26),
        backgroundColor: appColors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(26),
        marginHorizontal: getSize.m(4),
        elevation: 1,
    },

    club_desc: {
        fontFamily: AppFonts.regular,
        fontWeight: '500',
        fontSize: getSize.m(14),
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(22),
    },

    text_label: {
        textAlign: 'left',
        fontSize: getSize.m(16),
        fontFamily: AppFonts.bold,
        color: appColors.text_dark_blue,
        fontWeight: '700',
        lineHeight: getSize.m(20),
    },
    header: {
        marginTop: getSize.m(14),
        marginHorizontal: getSize.m(10),
        paddingHorizontal: getSize.m(12),
        paddingVertical: getSize.m(7),
        backgroundColor: appColors.blue_matte,
        borderRadius: getSize.m(5),
    },

    text_header: {
        color: appColors.text_option_unselect,
        fontSize: getSize.m(12),
        lineHeight: getSize.m(16),
        fontWeight: '500',
        fontFamily: AppFonts.regular,
    },
    calender: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: appColors.border,
        borderWidth: 1,
        paddingHorizontal: getSize.m(17),
        paddingVertical: getSize.m(15),
        borderRadius: getSize.m(10),
    },
    text_calender: {
        fontSize: getSize.m(13),
        fontWeight: '700',
        color: appColors.text_dark_blue,
        marginRight: getSize.m(20),
        lineHeight: getSize.m(20),
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
    title_frame: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: getSize.m(18),
    },
    frame: {
        fontWeight: '500',
        fontSize: getSize.m(13),
        fontFamily: AppFonts.medium,
        lineHeight: getSize.m(17),
        marginRight: getSize.m(3),
        color: appColors.light_gray,
    },

    result: {
        paddingHorizontal: getSize.m(8),
        paddingVertical: getSize.m(11),
        backgroundColor: appColors.blue_matte,
        borderRadius: getSize.m(10),
    },
    date: {
        fontSize: getSize.m(11),
        fontWeight: '500',
        lineHeight: getSize.m(17),
        fontFamily: AppFonts.medium,
        color: appColors.text_dark_blue,
    },
    score: {
        fontSize: getSize.m(12),
        color: appColors.text_dark_blue,
        fontWeight: '800',
        fontFamily: AppFonts.bold,
        lineHeight: getSize.m(18),
    },

    name_club: {
        fontSize: getSize.m(11),
        fontWeight: '600',
        lineHeight: getSize.m(14),
        fontFamily: AppFonts.bold,
        color: appColors.text_dark_blue,
        width: getSize.m(30),
    },

    item: {
        borderColor: appColors.text_dark_blue,
        borderBottomWidth: getSize.m(10),
        paddingBottom: getSize.m(26),
    },
});

export default styles;
