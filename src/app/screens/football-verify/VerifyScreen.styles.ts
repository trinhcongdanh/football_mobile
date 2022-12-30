import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    connect_container: {
        backgroundColor: appColors.white,
        paddingHorizontal: getSize.m(28),
        paddingTop: getSize.m(40),
        paddingBottom: getSize.m(25),
        borderRadius: getSize.m(15),
    },

    ic_back: { alignItems: 'flex-start' },

    otp_Container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row-reverse',
        marginTop: getSize.m(36),
    },
    otp_Box: {
        borderRadius: getSize.m(15),
        borderColor: appColors.medium_gray,
        borderWidth: 1,
        justifyContent: 'center',
        width: getSize.m(45),
        height: getSize.m(45),
    },

    otp_Text: {
        fontSize: getSize.s(20),
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
    underlineStyleBase: {
        padding: getSize.m(30),
        borderRadius: getSize.m(10),
        color: appColors.text_dark_blue,
        fontSize: getSize.m(36),
    },
});

export default styles;
