import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ic_back: { alignItems: I18nManager.isRTL ? 'flex-start' : 'flex-end' },
    icon_notification: {
        width: getSize.m(58),
        height: getSize.m(58),
        backgroundColor: appColors.white,
        borderRadius: getSize.m(58),
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },
    number_notification_active: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: getSize.m(20),
    },
    number_notification_active_text: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(16),
        lineHeight: getSize.m(22),
        color: 'rgba(2, 0, 71, 0.14)',
    },
    container_notification: {
        paddingHorizontal: getSize.m(15),
        paddingVertical: getSize.m(11),
        borderRadius: getSize.m(15),
        backgroundColor: appColors.white,
        marginBottom: getSize.m(20),
    },
    text_notification: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(14),
        lineHeight: getSize.m(18),
        color: appColors.text_dark_blue,
    },
    date_time: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(10),
        lineHeight: getSize.m(11),
        color: 'rgba(164, 164, 164, 0.65)',
        marginRight: getSize.m(6),
    },
});

export default styles;
