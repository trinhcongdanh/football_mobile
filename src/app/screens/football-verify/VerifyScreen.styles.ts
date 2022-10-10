import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    connect_container: {
        backgroundColor: appColors.white,
        paddingHorizontal: getSize.m(28),
        paddingTop: getSize.m(40),
        paddingBottom: getSize.m(25),
        marginHorizontal: getSize.m(16),
        borderRadius: 15,
    },

    otp_Container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row-reverse',
        marginTop: getSize.m(36),
    },
    otp_Box: {
        borderRadius: 15,
        borderColor: appColors.medium_gray,
        borderWidth: 1,
        width: getSize.m(63),
        height: getSize.m(63),
    },

    otp_Text: {
        fontSize: getSize.s(36),
        fontWeight: '700',
        color: appColors.text_dark_blue,
        textAlign: 'center',
    },

    footer_opt: {
        flexDirection: 'row',
        marginTop: getSize.m(38),
        justifyContent: 'center',
    },

    text_link: {
        fontSize: getSize.m(14),
        fontWeight: '700',
        color: appColors.blue_light,
    },
    text_not_reach: {
        fontSize: getSize.m(14),
        fontWeight: '700',
        color: appColors.text_dark_blue,
    },
    error: {
        color: 'red',
        fontSize: getSize.s(12),
        marginTop: getSize.m(15),
        textAlign: 'center',
    },
});

export default styles;
