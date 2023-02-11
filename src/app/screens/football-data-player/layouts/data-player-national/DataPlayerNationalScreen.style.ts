import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container_national: {
        marginTop: getSize.m(50),
    },

    team_national: {
        backgroundColor: appColors.white,
        width: '100%',
    },

    logo_club: {
        backgroundColor: appColors.white,
        elevation: getSize.m(2),
        width: getSize.m(65),
        height: getSize.m(65),
        borderRadius: getSize.m(56),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: getSize.m(-20),
    },

    name_national: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(16),
        lineHeight: getSize.m(22),
        color: appColors.text_dark_blue,
    },

    text_label: {
        fontSize: getSize.m(16),
        fontFamily: AppFonts.bold,
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(20),
        textAlign: 'left',
    },
    header: {
        marginTop: getSize.m(14),
        marginHorizontal: getSize.m(10),
        paddingHorizontal: getSize.m(12),
        paddingVertical: getSize.m(7),
        borderRadius: getSize.m(5),
    },

    text_header: {
        color: appColors.text_option_unselect,
        fontSize: getSize.m(12),
        lineHeight: getSize.m(16),
        fontFamily: AppFonts.medium,
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
        color: appColors.text_dark_blue,
        marginRight: getSize.m(20),
        lineHeight: getSize.m(20),
        fontFamily: AppFonts.bold,
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
        fontSize: getSize.m(12),
        lineHeight: getSize.m(17),
        fontFamily: AppFonts.medium,
        color: appColors.light_gray,
    },
    score: {
        fontSize: getSize.m(12),
        color: appColors.text_dark_blue,
        fontFamily: AppFonts.bold,
        lineHeight: getSize.m(18),
    },

    logo_national: {
        width: getSize.m(30),
        height: getSize.m(30),
        borderRadius: getSize.m(30),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors.white,
        elevation: 1,
    },

    info_player: {
        paddingVertical: getSize.m(15),
        borderBottomWidth: getSize.m(1),
        borderColor: appColors.border,
    },

    team_national_date: {
        alignItems: 'flex-end',
        marginRight: getSize.m(10),
    },

    details: {
        padding: getSize.m(12),
        backgroundColor: appColors.separator,
        borderRadius: getSize.m(30),
    },

    goal_team: {
        paddingVertical: getSize.m(15),
        borderBottomWidth: getSize.m(1),
        borderColor: appColors.border,
    },
    item: {
        borderColor: appColors.text_dark_blue,
        borderBottomWidth: getSize.m(10),
        paddingBottom: getSize.m(26),
    },
});

export default styles;
