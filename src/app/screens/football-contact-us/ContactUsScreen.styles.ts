import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ic_back: { alignItems: I18nManager.isRTL ? 'flex-start' : 'flex-end' },
    contact_us_conatiner: {
        backgroundColor: appColors.white,
        minHeight: getSize.m(900),
        marginTop: getSize.m(34),
        paddingHorizontal: getSize.m(20),
        paddingTop: getSize.m(30),
    },
    text_input_content: {
        fontSize: getSize.m(13),
        lineHeight: getSize.m(17),
        color: appColors.light_gray,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        borderColor: '#E9F1F4',
        borderWidth: 1,
        borderRadius: getSize.m(15),
        paddingHorizontal: getSize.m(24),
        fontFamily: AppFonts.medium,
        height: getSize.m(153),
        textAlignVertical: 'top',
    },
    title: {
        paddingHorizontal: getSize.m(15),
        paddingVertical: getSize.m(17),
        borderColor: '#E9F1F4',
        borderWidth: 1,
        borderRadius: getSize.m(15),
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        backgroundColor: appColors.separator,
    },
    title_text: {
        fontSize: getSize.m(13),
        lineHeight: getSize.m(17),
        color: appColors.light_gray,
        fontFamily: AppFonts.medium,
    },
});

export default styles;
