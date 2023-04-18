import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: getSize.m(7),
    },
    fieldContainer: {
        paddingHorizontal: getSize.m(10),
        paddingVertical: getSize.m(12),
        borderRadius: getSize.m(10),
        borderWidth: getSize.m(1),
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 1001,
    },
    title: {
        fontSize: getSize.m(13),
        color: appColors.text_dark_blue,
        lineHeight: getSize.m(20),
        fontFamily: AppFonts.bold,
    },
    chevronDown: {
        fontFamily: AppFonts.bold,
    },
    itemsContainer: {
        position: 'absolute',
        right: 0,
        // top: getSize.m(38),
        top: 0,
        zIndex: 1000,
        backgroundColor: appColors.white,
        borderBottomLeftRadius: getSize.m(20),
        borderBottomRightRadius: getSize.m(20),
        elevation: 1,
        width: '100%',
        // height: getSize.m(110),
        overflow: 'visible',
        paddingHorizontal: getSize.m(10),
        paddingTop: getSize.m(10),
    },
    itemContainer: {
        borderColor: appColors.border,
        borderBottomWidth: 1,
        marginHorizontal: getSize.m(12),
        paddingVertical: getSize.m(15),
    },
    itemTitle: {
        textAlign: 'left',
        fontSize: getSize.m(13),
        fontFamily: AppFonts.bold,
        lineHeight: getSize.m(17),
        color: appColors.text_dark_blue,
    },
});
