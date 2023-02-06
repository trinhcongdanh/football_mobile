import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    drop_down_filter: {
        width: '100%',
        marginTop: getSize.m(20),
        marginBottom: getSize.m(14),
        borderRadius: getSize.m(15),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cycle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: getSize.m(10),
        paddingVertical: getSize.m(12),
        borderRadius: getSize.m(10),
        borderColor: appColors.separator,
        borderWidth: getSize.m(1),
    },
    text_cycle: {
        fontSize: getSize.m(13),
        fontWeight: '700',
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(20),
    },
    chevron_down: {
        fontWeight: '900',
    },
});

export default styles;
