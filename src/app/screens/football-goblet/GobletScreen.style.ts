import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet, I18nManager } from 'react-native';

const styles = StyleSheet.create({
    search: {
        backgroundColor: appColors.black,
        borderRadius: getSize.m(10),
        marginTop: getSize.m(14),
        marginBottom: getSize.m(20),
    },
    text_search: {
        flex: 1,
        fontSize: getSize.m(14),
        lineHeight: getSize.m(24),
        fontFamily: AppFonts.regular,
        color: appColors.blue_gray_dark,
        paddingVertical: getSize.m(14),
        paddingHorizontal: getSize.m(25),
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    state_content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: getSize.m(28),
    },
    option_grid: {
        borderColor: appColors.border,
        borderWidth: getSize.m(1),
        alignItems: 'center',
        paddingVertical: getSize.m(23),
        borderRadius: getSize.m(16),
        marginHorizontal: getSize.m(5),
        marginVertical: getSize.m(7),
        width: '30%',
        height: getSize.m(120),
        overflow: 'hidden',
    },

    image_cup: {
        alignItems: 'center',
        justifyContent: 'center',
        width: getSize.m(30),
        height: getSize.m(30),
        borderRadius: getSize.m(30),
        backgroundColor: appColors.blue_matte,
    },
    text_option_grid: {
        fontSize: getSize.m(12),
        marginTop: getSize.m(10),
        color: appColors.text_dark_blue,
        textAlign: 'center',
        paddingHorizontal: getSize.m(4),
        fontFamily: AppFonts.bold,
    },
});

export default styles;
