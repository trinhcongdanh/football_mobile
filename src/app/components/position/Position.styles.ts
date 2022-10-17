import { appColors } from '@football/app/utils/constants/appColors';
import { StyleSheet } from 'react-native';

import { getSize } from '@football/app/utils/responsive/scale';

export const styles = StyleSheet.create({
    line: {
        borderColor: appColors.separator,
        borderTopWidth: getSize.m(1),
        width: getSize.m(130),
    },

    text_or: {
        textAlign: 'center',
        color: appColors.light_gray,
    },
});
