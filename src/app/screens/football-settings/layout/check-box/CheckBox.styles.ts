import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: getSize.m(10),
    },
    btn_checked: {
        backgroundColor: appColors.check_box,
        paddingHorizontal: getSize.m(25),
        borderRadius: getSize.m(25),
        marginRight: getSize.m(10),
    },
    txt_title: {
        textAlign: 'center',
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(12),
        fontWeight: '700',
        color: appColors.white,
        lineHeight: getSize.v(34),
    },
});
