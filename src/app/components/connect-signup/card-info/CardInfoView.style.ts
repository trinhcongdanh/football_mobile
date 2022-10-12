import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    select_gender: {
        borderWidth: getSize.m(1),
        borderColor: appColors.border,
        paddingHorizontal: getSize.m(24),
        paddingVertical: getSize.m(12),
        borderRadius: getSize.m(28),
    },

    date_picker: {
        marginTop: getSize.m(14),
        justifyContent: 'center',
        flexDirection: 'row-reverse',
        borderRadius: getSize.m(15),
        overflow: 'hidden',
        shadowColor: appColors.shadow,
        elevation: getSize.m(2),
        paddingHorizontal: getSize.m(14),
        paddingVertical: getSize.m(12),
    },
});

export default styles;
