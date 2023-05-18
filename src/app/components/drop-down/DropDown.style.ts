import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    background_opacity: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 0,
        zIndex: 1,
        bottom: 0,
        left: 0,
        right: 0,
    },

    drop_down: {
        position: 'absolute',
        zIndex: 2,
        top: 100,
        left: 0,
        right: 0,
        bottom: 0,
    },
    close_drop_down: {
        borderColor: appColors.soft_grey,
        borderTopWidth: getSize.m(4),
        marginHorizontal: getSize.m(152),
        borderRadius: getSize.m(10),
    },

    title_drop_down: {
        color: appColors.text_dark_blue,
        fontSize: getSize.m(18),
        fontFamily: AppFonts.bold,
        lineHeight: getSize.m(23),
        textAlign: 'center',
    },
    line_dashed: {
        paddingBottom: getSize.m(20),
        borderBottomWidth: getSize.m(1),
        borderColor: appColors.soft_grey,
        borderStyle: 'dashed',
    },
    label_drop_down: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(13),
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(17),
        marginTop: getSize.m(20),
        textAlign: 'left',
    },

    item_select: {
        paddingVertical: getSize.m(14),
        borderBottomWidth: getSize.m(1),
        borderColor: appColors.separator,
    },

    btn: {
        borderRadius: getSize.m(20),
        width: getSize.m(20),
        height: getSize.m(20),
        justifyContent: 'center',
        alignItems: 'center',
    },

    btn_select: {
        width: getSize.m(11),
        height: getSize.m(11),
        borderRadius: getSize.m(11),
    },

    content_select: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(15),
        lineHeight: getSize.m(15),
        color: appColors.text_dark_blue,
        marginLeft: getSize.m(19),
    },
});
