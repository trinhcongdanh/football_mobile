import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    ic_circle: {
        backgroundColor: appColors.blue_light,
        padding: getSize.m(7),
        borderRadius: getSize.m(25),
    },
    card_view_container: {
        marginTop: getSize.m(38),
        backgroundColor: appColors.white,
        borderTopLeftRadius: getSize.m(30),
        borderTopRightRadius: getSize.m(30),
    },
    avatar_block: {
        alignItems: 'center',
        justifyContent: 'center',
        top: getSize.m(-21),
    },
    avatar_container: {
        width: getSize.m(80),
        height: getSize.m(80),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: appColors.white,
        borderRadius: getSize.m(80 / 2),
        elevation: 10,
    },
    txt_container_avatar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: getSize.m(-7),
    },
    ic_football: {
        width: getSize.m(16),
        height: getSize.m(16),
        marginRight: getSize.m(3),
    },
    txt_avatar: {
        fontFamily: AppFonts.bold,
        color: appColors.text_dark_blue,
        fontSize: getSize.m(16),
    },
    first_block_container: { padding: getSize.m(16), marginTop: getSize.m(17) },
    input_container: {
        marginTop: getSize.m(14),
    },
    txt_gender: {
        marginTop: getSize.m(13),
        textAlign: 'left',
        fontFamily: AppFonts.medium,
        fontSize: getSize.m(13),
        color: appColors.text_dark_blue,
    },
    check_box_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: getSize.m(10),
    },
    txt_dob: {
        marginTop: getSize.m(13),
        color: appColors.light_gray,
        fontSize: getSize.m(13),
        fontFamily: AppFonts.medium,
        textAlign: 'left',
    },
    date_box_container: {
        marginHorizontal: getSize.m(30),
        borderRadius: getSize.m(15),
        alignItems: 'center',
    },
    txt_title_block: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(16),
        color: appColors.text_dark_blue,
        textAlign: 'left',
        marginLeft: I18nManager.isRTL ? getSize.m(4) : 0,
        marginRight: I18nManager.isRTL ? 0 : getSize.m(4),
    },
    mr_top: {
        marginTop: getSize.m(20),
    },
    mr_top_component: {
        marginTop: getSize.m(14),
    },
    block_container: {
        marginTop: getSize.m(18),
        paddingHorizontal: getSize.m(16),
        paddingBottom: getSize.m(16),
    },
    btn_add: {
        flex: 0.2,
        padding: getSize.m(14),
        borderRadius: getSize.m(30),
        borderWidth: getSize.m(1),
        borderColor: appColors.blue_light,
        borderStyle: 'dashed',
    },
    txt_tutorial: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(14),
        lineHeight: getSize.m(18),
        color: appColors.text_dark_blue,
        textAlign: 'left',
        marginTop: getSize.m(20),
        marginBottom: getSize.m(6),
    },
    block_notifications: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: getSize.m(14),
    },
    txt_before_game: {
        fontFamily: AppFonts.medium,
        color: appColors.blue_black,
        fontSize: getSize.m(12),
        lineHeight: getSize.m(15),
        width: getSize.m(240),
    },
    btn_bottom_container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: getSize.m(26),
    },
    btn_save_changes: {
        backgroundColor: appColors.blue_light,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: getSize.m(98),
        paddingVertical: getSize.m(14),
        borderRadius: getSize.m(15),
        marginTop: getSize.m(30),
        marginBottom: getSize.m(20),
    },
    txt_save_changes: {
        fontFamily: AppFonts.bold,
        color: appColors.white,
        fontSize: getSize.m(14),
        lineHeight: getSize.m(18),
        textAlign: 'center',
    },
    btn_delete_account: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: getSize.m(35),
        marginTop: getSize.m(20),
    },
    txt_delete_account: {
        fontFamily: AppFonts.regular,
        color: appColors.text_grey,
        fontSize: getSize.m(14),
        lineHeight: getSize.m(24),
        textAlign: 'center',
    },

    btn_switch: {
        width: getSize.m(45),
        height: getSize.m(27),
        borderRadius: getSize.m(100),
        paddingHorizontal: getSize.m(3),
    },

    btn_switch_circle: {
        width: getSize.m(21),
        height: getSize.m(21),
        backgroundColor: appColors.white,
        borderRadius: getSize.m(21),
    },

    item_render: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: getSize.m(21),
        marginBottom: getSize.m(16),
    },
    item_container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    txt_no_group: {
        textAlign: 'center',
        marginTop: getSize.m(12),
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(12),
        lineHeight: getSize.m(15),
        color: appColors.text_dark_blue,
    },
    txt_add_group: {
        textAlign: 'center',
        marginTop: getSize.m(12),
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(12),
        lineHeight: getSize.m(15),
        color: appColors.text_dark_blue,
    },
    btn_img: {
        flex: 0.2,
        width: getSize.m(38),
        height: getSize.m(38),
        alignItems: 'center',
        justifyContent: 'center',
    },
    img_team: {
        width: getSize.m(38),
        height: getSize.m(38),
    },

    img_player: {
        width: getSize.m(38),
        height: getSize.m(38),
        borderRadius: getSize.m(38),
    },
    img_top_team: {
        width: getSize.m(32),
        height: getSize.m(38),
    },
});
