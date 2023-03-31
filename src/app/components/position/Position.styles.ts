import { appColors } from '@football/app/utils/constants/appColors';
import { StyleSheet } from 'react-native';

import { getSize } from '@football/app/utils/responsive/scale';

export const styles = StyleSheet.create({
    line: {
        borderColor: appColors.separator,
        borderTopWidth: getSize.m(1),
        width: '100%',
        position: 'absolute',
    },
    container_text: { backgroundColor: appColors.gray, paddingHorizontal: getSize.m(10) },
    text_or: {
        textAlign: 'center',
        color: appColors.light_gray,
    },
});
