import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    data_coach: {
        backgroundColor: appColors.white,
        marginTop: getSize.m(50),
        borderRadius: getSize.m(15),
        elevation: getSize.m(5),
        paddingBottom: getSize.m(16),
    },
    logo: {
        alignItems: 'center',
        marginTop: getSize.m(-25),
    },
    logo_club: {
        borderColor: appColors.white,
        borderWidth: getSize.m(2),
        backgroundColor: appColors.white,
        elevation: getSize.m(5),
    },
    content: {
        marginHorizontal: getSize.m(8),
        marginTop: getSize.m(24),
    },

    content_item: {
        paddingHorizontal: getSize.m(10),
        paddingVertical: getSize.m(6),
        borderRadius: getSize.m(5),
    },

    label: {
        fontWeight: '500',
        fontSize: getSize.m(14),
        fontFamily: AppFonts.regular,
        color: appColors.text_option_unselect,
        lineHeight: getSize.m(22),
    },

    data_content: {
        fontWeight: '700',
        fontFamily: AppFonts.regular,
        color: appColors.text_dark_blue,
        fontSize: getSize.m(14),
        lineHeight: getSize.m(18),
    },
});

export default styles;
