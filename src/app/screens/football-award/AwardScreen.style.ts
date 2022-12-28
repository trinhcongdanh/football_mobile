import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet, I18nManager } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    },
    question_close: {
        padding: getSize.m(10),
        borderRadius: getSize.m(20),
    },
    reward: {
        backgroundColor: 'rgba(32, 134, 255, 0.24)',
        paddingVertical: getSize.m(24),
        paddingHorizontal: getSize.m(20),
        borderRadius: getSize.m(20),
        marginTop: getSize.m(43),
        justifyContent: 'center',
        alignItems: 'center',
    },
    reward_name: {
        fontWeight: '700',
        fontSize: getSize.m(17),
        lineHeight: getSize.m(25),
        color: appColors.white,
        textAlign: 'center',
    },
    reward_desc: {
        fontWeight: '400',
        fontSize: getSize.m(14),
        lineHeight: getSize.m(18),
        color: appColors.white,
        textAlign: 'center',
    },

    reward_coin: {
        fontWeight: '700',
        fontSize: getSize.m(15),
        lineHeight: getSize.m(20),
        color: appColors.white,
        marginRight: getSize.m(4),
    },
    reward_rules: {
        fontWeight: '700',
        fontSize: getSize.m(16),
        lineHeight: getSize.m(20),
        color: appColors.white,
    },
    reward_rules_decoration: {
        width: getSize.m(12),
        height: getSize.m(12),
        backgroundColor: appColors.blue_light,
        borderRadius: getSize.m(12),
    },
    reward_rules_item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: getSize.m(16),
        marginBottom: getSize.m(10),
    },
    reward_rules_guides: {
        fontWeight: '400',
        fontSize: getSize.m(14),
        color: appColors.white,
        lineHeight: getSize.m(18),
        marginLeft: getSize.m(10),
    },
    reward_button: {
        paddingVertical: getSize.m(12),
        paddingHorizontal: getSize.m(60),
        borderRadius: getSize.m(13),
    },
    reward_button_text: {
        color: appColors.white,
        fontWeight: '700',
        fontSize: getSize.m(16),
        textAlign: 'center',
    },
});

export default styles;
