import { AppFonts } from '@football/app/assets/fonts';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: getSize.m(7),
        flex: 1,
        // position: 'absolute',
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
        textAlign: 'left',
    },
    chevronDown: {
        fontFamily: AppFonts.bold,
    },
    itemsContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        // bottom: 0,
        backgroundColor: appColors.white,
        borderBottomLeftRadius: getSize.m(20),
        borderBottomRightRadius: getSize.m(20),
        elevation: 1,
        width: '100%',

        // maxHeight: '50%',
        overflow: 'visible',
        paddingHorizontal: getSize.m(10),
        paddingTop: getSize.m(10),
        zIndex: 100,
    },
    itemContainer: {
        borderColor: appColors.border,
        borderBottomWidth: 1,
        marginHorizontal: getSize.m(11),
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
