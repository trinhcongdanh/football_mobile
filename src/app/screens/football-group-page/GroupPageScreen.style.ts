import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    avt_leagues: {
        borderColor: appColors.white,
        borderWidth: getSize.m(4),
    },
    name_leagues: {
        fontFamily: AppFonts.bold,
        color: appColors.white,
        fontSize: getSize.m(18),
        lineHeight: getSize.m(24),
        marginTop: getSize.m(16),
    },
    sub_name_leagues: {
        fontFamily: AppFonts.medium,
        color: appColors.white,
        fontSize: getSize.m(14),
        lineHeight: getSize.m(21),
        marginTop: getSize.m(2),
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
        borderColor: appColors.text_option_unselect,
        borderWidth: getSize.m(1),
        width: '40%',
        position: 'absolute',
        top: getSize.m(50),
        right: getSize.m(50),
        maxHeight: getSize.m(200),
        zIndex: 10,
    },
    btn_drop_down_calender: {
        borderColor: appColors.text_option_unselect,
        backgroundColor: appColors.blue_black,
        borderBottomWidth: getSize.m(1),
        paddingHorizontal: getSize.m(17),
        paddingVertical: getSize.m(15),
    },

    option_year: {
        textAlign: 'left',
        color: appColors.white,
    },

    drop_down_info: {
        width: getSize.m(34),
        height: getSize.m(34),
        borderRadius: getSize.m(34),
        justifyContent: 'center',
        alignItems: 'center',
    },

    info_group: {
        marginHorizontal: getSize.m(15),
        paddingLeft: getSize.m(25),
        paddingRight: getSize.m(16),
        paddingVertical: getSize.m(20),
        borderRadius: getSize.m(15),
        backgroundColor: appColors.white,
        elevation: 1,
        marginTop: getSize.m(-50),
    },
    info_group_item: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: getSize.m(18),
        marginLeft: getSize.m(48),
    },

    info_group_item_label: {
        fontSize: getSize.m(13),
        color: appColors.light_gray,
        lineHeight: getSize.m(17),
        fontFamily: AppFonts.medium,
    },

    info_group_item_content: {
        fontSize: getSize.m(14),
        color: appColors.blue_black,
        lineHeight: getSize.m(18),
        fontFamily: AppFonts.bold,
    },

    ic_label: {
        width: getSize.m(30),
        height: getSize.m(30),
        borderRadius: getSize.m(30),
        backgroundColor: appColors.blue_matte,
        marginRight: getSize.m(12),
        justifyContent: 'center',
        alignItems: 'center',
    },

    container_img: {
        width: getSize.m(30),
        height: getSize.m(30),
        backgroundColor: appColors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(30),
        elevation: getSize.m(1),
    },
    line: {
        borderColor: appColors.separator,
        borderTopWidth: getSize.m(1),
        marginVertical: getSize.m(16),
    },
    option_menu: {
        elevation: getSize.m(1),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: getSize.m(20),
        paddingHorizontal: getSize.m(17),
        borderRadius: getSize.m(15),
        marginBottom: getSize.m(14),
        backgroundColor: appColors.white,
    },

    text_option_menu: {
        fontSize: getSize.s(14),
        color: appColors.text_dark_blue,
        textAlign: 'center',
        paddingHorizontal: getSize.m(4),
        marginLeft: getSize.m(10),
        fontFamily: AppFonts.bold,
    },
    ic_arrow_left: {
        fontFamily: AppFonts.bold,
    },
});

export default styles;
