import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ic_back: { alignItems: I18nManager.isRTL ? 'flex-start' : 'flex-end' },
    block_add_group: {
        backgroundColor: appColors.white,
        marginTop: getSize.m(31),
        paddingVertical: getSize.m(16),
        paddingHorizontal: getSize.m(15),
        borderRadius: getSize.m(15),
    },
    item_render: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: getSize.m(21),
    },
    item_container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    btn_add: {
        flex: 0.2,
        width: getSize.m(38),
        height: getSize.m(38),
        borderRadius: getSize.m(30),
        borderWidth: getSize.m(1),
        borderColor: appColors.blue_light,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
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
    block_add_actress: {
        backgroundColor: appColors.white,
        marginTop: getSize.m(14),
        paddingVertical: getSize.m(16),
        paddingHorizontal: getSize.m(15),
        borderRadius: getSize.m(15),
    },
    provision: {
        color: appColors.white,
        fontSize: getSize.m(13),
        fontFamily: AppFonts.bold,
    },
    agree: {
        color: appColors.white,
        fontSize: getSize.m(13),
        fontFamily: AppFonts.regular,
    },
    checkBox: {
        width: getSize.m(15),
        height: getSize.m(15),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: getSize.m(1),
        marginRight: getSize.m(8),
        borderRadius: getSize.m(3),
    },
    btn_complete: {
        marginTop: getSize.m(14),
        backgroundColor: appColors.blue_light,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: getSize.m(16.5),
        borderRadius: getSize.m(15),
        marginHorizontal: getSize.m(16),
    },
    txt_complete: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(16),
        lineHeight: getSize.m(20),
        color: appColors.white,
    },
    bottom_text: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(14),
        lineHeight: getSize.m(18),
        color: appColors.text_grey,
        textAlign: 'center',
    },
    btn_complete_disable: {
        marginTop: getSize.m(14),
        backgroundColor: appColors.button_disable,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: getSize.m(16.5),
        borderRadius: getSize.m(15),
        marginHorizontal: getSize.m(16),
    },
    txt_complete_disable: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(16),
        lineHeight: getSize.m(20),
        color: appColors.text_disable,
    },
});

export default styles;
