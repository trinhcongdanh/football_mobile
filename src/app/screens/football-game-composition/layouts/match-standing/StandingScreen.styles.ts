import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text_header: {
        fontSize: getSize.m(11),
        color: appColors.button_dark_blue,
        fontWeight: '500',
        lineHeight: getSize.m(14),
        textAlign: 'center',
    },

    text_body: {
        fontSize: getSize.m(13),
        fontWeight: '700',
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(20),
    },

    itemTeam: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: getSize.m(6),
        marginVertical: getSize.m(4),
        borderRadius: getSize.m(5),
    },

    name_team: {
        flexDirection: 'row',
    },
});

export default styles;
