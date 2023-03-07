import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    drop_down_filter: {
        width: '100%',
        marginTop: getSize.m(20),
        marginBottom: getSize.m(14),
        borderRadius: getSize.m(15),
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 10,
    },
    cycle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: getSize.m(10),
        paddingVertical: getSize.m(12),
        borderRadius: getSize.m(10),
        borderColor: appColors.separator,
        borderWidth: getSize.m(1),
    },
    text_cycle: {
        fontSize: getSize.m(13),
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(20),
        fontFamily: AppFonts.bold,
    },
    chevron_down: {
        fontFamily: AppFonts.bold,
    },

    more_result: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: getSize.m(130),
        marginRight: getSize.m(50),
    },

    text_more_result: {
        fontSize: getSize.m(12),
        lineHeight: getSize.m(15.6),
        fontFamily: AppFonts.bold,
        color: appColors.button_dark_blue,
    },
    ic_more_result: {
        lineHeight: getSize.m(13),
        color: appColors.button_dark_blue,
        fontFamily: AppFonts.bold,
        marginLeft: getSize.m(4),
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
