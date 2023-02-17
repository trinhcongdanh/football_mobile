import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: appColors.white,
    },
    header: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(16),
        lineHeight: getSize.m(20.8),
        color: appColors.text_dark_blue,
    },
    button: {
        backgroundColor: appColors.blue_light,
        width: getSize.m(88),
        height: getSize.m(36),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getSize.m(21),
    },
    instagram: {
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(13),
        lineHeight: getSize.m(22),
        color: appColors.white,
        marginRight: getSize.m(6),
    },
    container_image: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: getSize.m(14),
    },
    item_image: {
        marginBottom: getSize.m(16),
        marginHorizontal: getSize.m(4),
    },
});

export default styles;
