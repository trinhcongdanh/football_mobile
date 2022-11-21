import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet, I18nManager } from 'react-native';

const styles = StyleSheet.create({
    ic_back: { alignItems: I18nManager.isRTL ? 'flex-start' : 'flex-end' },
    main: {
        backgroundColor: appColors.gray,
        paddingHorizontal: getSize.m(18),
        paddingVertical: getSize.m(26),
        marginTop: getSize.m(23),
    },
    time: {
        flexDirection: 'row',
        justifyContent: I18nManager.isRTL ? 'flex-start' : 'flex-end',
    },
    text_time: {
        fontWeight: '400',
        fontSize: getSize.m(11),
        color: appColors.text_option_unselect,
        lineHeight: getSize.m(20),
        fontFamily: AppFonts.regular,
        paddingHorizontal: getSize.m(8),
        paddingVertical: getSize.m(2),
        backgroundColor: appColors.blue_matte,
    },
    text_title: {
        fontWeight: '700',
        fontSize: getSize.m(18),
        lineHeight: getSize.m(23),
        color: appColors.text_dark_blue,
        fontFamily: AppFonts.regular,
    },
    image: {
        resizeMode: 'contain',
        width: '100%',
        borderRadius: getSize.m(20),
    },
    item_content: {
        fontWeight: '400',
        fontSize: getSize.m(14),
        lineHeight: getSize.m(18),
        color: appColors.blue_black,
        fontFamily: AppFonts.regular,
        marginBottom: getSize.m(20),
    },
});

export default styles;
