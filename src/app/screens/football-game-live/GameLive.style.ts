import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ic_back: { alignItems: I18nManager.isRTL ? 'flex-start' : 'flex-end' },
    terms_container: {
        backgroundColor: appColors.white,
        minHeight: getSize.m(900),
        paddingHorizontal: getSize.m(20),
        paddingVertical: getSize.m(20),
        paddingBottom: getSize.m(200),
    },
    terms_container_content: {
        fontSize: getSize.m(14),
        lineHeight: getSize.m(18.2),
        fontFamily: AppFonts.regular,
        textAlign: 'left',
        color: appColors.blue_black,
    },
    text_link: {
        color: 'blue',
        borderBottomWidth: getSize.m(1),
        borderBottomColor: 'blue',
    },
});

export default styles;