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
        marginTop: getSize.m(40),
        backgroundColor: appColors.white,
        borderRadius: getSize.m(15),
    },
    first_block_container: { padding: getSize.m(16) },
    input_container: {
        marginTop: getSize.m(14),
    },
    txt_gender: {
        marginTop: getSize.m(10),
        textAlign: 'left',
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(13),
        fontWeight: '500',
        color: appColors.text_dark_blue,
    },
    check_box_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: getSize.m(10),
    },
    txt_dob: {
        marginTop: getSize.m(14),
        color: appColors.light_gray,
        fontSize: getSize.m(13),
        fontFamily: AppFonts.regular,
        fontWeight: '500',
        textAlign: 'left',
    },
    date_box_container: {
        marginHorizontal: getSize.m(30),
        borderRadius: getSize.m(15),
        alignItems: 'center',
    },
    txt_title_block: {
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(16),
        fontWeight: '700',
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
    },
    btn_add: {
        flex: 0.2,
        padding: getSize.m(14),
        borderRadius: getSize.m(30),
        borderWidth: getSize.m(1),
        borderColor: appColors.blue_light,
        borderStyle: 'dashed',
    },
    txt_add_group: {
        marginTop: getSize.m(11),
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(12),
        lineHeight: getSize.m(15),
        fontWeight: '700',
        color: appColors.text_dark_blue,
    },
    txt_tutorial: {
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(14),
        lineHeight: getSize.m(18),
        fontWeight: '700',
        color: appColors.text_dark_blue,
        textAlign: 'left',
        marginVertical: getSize.m(20),
    },
});
