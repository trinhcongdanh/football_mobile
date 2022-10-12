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
        padding: getSize.m(9),
        borderRadius: getSize.m(15),
    },
    input_container: {
        marginTop: getSize.m(14),
    },
    txt_gender: {
        marginTop: getSize.m(10),
        textAlign: I18nManager.isRTL ? 'left' : 'right',
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(13),
        fontWeight: '500',
        color: appColors.text_dark_blue,
    },
    check_box_container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: getSize.m(10),
    },
    txt_dob: {
        marginTop: getSize.m(14),
        color: appColors.light_gray,
        fontSize: getSize.m(13),
        fontFamily: AppFonts.regular,
        fontWeight: '500',
        textAlign: I18nManager.isRTL ? 'left' : 'right',
    },
});
