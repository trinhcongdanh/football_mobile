import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet, I18nManager } from 'react-native';

const styles = StyleSheet.create({
    ic_back: { alignItems: I18nManager.isRTL ? 'flex-start' : 'flex-end' },
    provision: {
        color: appColors.white,
        fontSize: getSize.s(13),
        fontWeight: '700',
    },
    agree: {
        color: appColors.white,
        fontSize: getSize.s(13),
        fontWeight: '400',
    },

    checkBox: {
        width: getSize.s(15),
        height: getSize.s(15),
        borderWidth: getSize.m(1),
        borderColor: appColors.blue_light,
        marginRight: getSize.m(8),
        borderRadius: getSize.m(3),
    },
});

export default styles;
