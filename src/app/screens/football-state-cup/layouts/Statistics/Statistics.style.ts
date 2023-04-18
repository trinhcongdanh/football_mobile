import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        color: appColors.button_dark_blue,
        textAlign: 'center',
        fontSize: getSize.m(11),
        lineHeight: getSize.m(14),
        fontFamily: AppFonts.medium,
    },

    itemTeam: {
        paddingHorizontal: getSize.m(8),
        paddingVertical: getSize.m(10),
        borderRadius: getSize.m(5),
    },

    text_content: {
        textAlign: 'center',
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(11),
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(16),
        overflow: 'hidden',
    },
});

export default styles;
