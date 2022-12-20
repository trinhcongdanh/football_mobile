import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    item_award: {
        backgroundColor: 'rgba(32, 134, 255, 0.24)',
        borderRadius: getSize.m(20),
        paddingVertical: getSize.m(20),
        paddingHorizontal: getSize.m(35),
        marginBottom: getSize.m(20),
    },
    item_award_name: {
        fontWeight: '700',
        fontSize: getSize.m(16),
        color: appColors.white,
        lineHeight: getSize.m(24),
        fontFamily: AppFonts.regular,
        width: getSize.m(150),
    },
    item_award_image: {},
    item_award_coin: {
        fontWeight: '700',
        fontSize: getSize.m(16),
        color: appColors.white,
        lineHeight: getSize.m(24),
        fontFamily: AppFonts.regular,
        paddingHorizontal: getSize.m(5),
    },
});

export default styles;
