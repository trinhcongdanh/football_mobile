import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ic_football: {
        width: getSize.m(12),
        height: getSize.m(12),
    },
    item_about: {
        borderColor: appColors.separator,
        borderWidth: getSize.m(1),
        borderRadius: getSize.m(15),
        paddingVertical: getSize.m(27),
        marginHorizontal: getSize.m(14),
    },
    icon_about: {
        backgroundColor: appColors.blue_matte_light,
        width: getSize.m(30),
        height: getSize.m(30),
        borderRadius: getSize.m(30),
        marginHorizontal: getSize.m(44),
        justifyContent: 'center',
        alignItems: 'center',
    },
    title_about: {
        fontSize: getSize.m(13),
        fontWeight: '500',
        color: appColors.light_gray,
        lineHeight: getSize.m(17),
        fontFamily: AppFonts.regular,
        marginTop: getSize.m(6),
        marginBottom: getSize.m(14),
    },
    content_about: {
        fontSize: getSize.m(15),
        color: appColors.blue_black,
        fontWeight: '700',
        lineHeight: getSize.m(22),
        fontFamily: AppFonts.regular,
    },

    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    normalDots: {
        width: getSize.m(5),
        height: getSize.m(5),
        borderRadius: getSize.m(5),
        marginTop: getSize.m(20),
        backgroundColor: appColors.separator,
        marginHorizontal: getSize.m(5),
    },
});

export default styles;
