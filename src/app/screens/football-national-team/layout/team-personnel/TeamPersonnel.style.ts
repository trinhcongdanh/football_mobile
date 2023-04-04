import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content_team_squad: {
        paddingVertical: getSize.m(20),
        paddingHorizontal: getSize.m(13),
        marginTop: getSize.m(12),
        borderRadius: getSize.m(15),
        backgroundColor: appColors.white,
    },
    name_player: {
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(18),
        fontSize: getSize.m(14),
        fontFamily: AppFonts.bold,
        marginLeft: getSize.m(8),
    },
});

export default styles;
