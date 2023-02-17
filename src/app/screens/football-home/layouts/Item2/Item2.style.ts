import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    logo_team: {
        width: getSize.m(63),
        height: getSize.m(63),
        borderRadius: getSize.m(63),
        backgroundColor: appColors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: getSize.m(-30),
        elevation: 10,
    },

    icon_arrow_left: {
        width: getSize.m(24),
        height: getSize.m(24),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(24),
        marginLeft: getSize.m(10),
    },

    text_details: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(20),
        lineHeight: getSize.m(26),
        color: appColors.white,
    },
});

export default styles;
