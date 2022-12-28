import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet, I18nManager } from 'react-native';

const styles = StyleSheet.create({
    confirmation_reward_text_input: {
        marginBottom: getSize.m(12),
    },
    confirmation_reward_input: {
        backgroundColor: 'rgba(6, 17, 52, 0.5)',
        fontSize: getSize.s(13),
        fontWeight: '500',
        lineHeight: getSize.m(17),
        color: appColors.white,
        paddingHorizontal: getSize.m(15),
        paddingVertical: getSize.m(15),
        height: getSize.m(54),
        borderRadius: getSize.m(15),
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        zIndex: 1,
    },
    confirmation_reward_label_input: {
        paddingHorizontal: getSize.m(15),
        paddingVertical: getSize.m(15),
        fontSize: getSize.s(13),
        lineHeight: getSize.m(17),
        height: getSize.m(54),
        position: 'absolute',
        top: getSize.m(0),
        left: getSize.m(0),
        bottom: getSize.m(0),
    },
    confirmation_reward_label_require: {
        color: 'rgba(255, 43, 94, 1)',
    },
    confirmation_reward_label_text: {
        color: 'rgba(137, 178, 247, 1)',
        marginLeft: getSize.m(4),
    },
});

export default styles;
