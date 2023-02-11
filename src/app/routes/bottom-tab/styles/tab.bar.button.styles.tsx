import { AppFonts } from '@football/app/assets/fonts';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        zIndex: 1,
        // elevation: 12,
        // width: getSize.m(60),
    },
    squareFocusedButton: {
        borderRadius: 16,
    },
    tabBarLabelWrapper: { zIndex: 12, alignItems: 'center' },
    focusedButton: {
        position: 'absolute',
        zIndex: -1,
        borderRadius: 1000,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    unfocusedButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        elevation: 12,
        zIndex: 12,
    },
    txt_tabbar: {
        marginTop: getSize.m(5),
        fontFamily: AppFonts.regular,
        fontSize: getSize.m(13),
        lineHeight: getSize.m(17),
    },
    txt_tabbar_focus: {
        marginTop: getSize.m(5),
        fontFamily: AppFonts.bold,
        fontSize: getSize.m(13),
        lineHeight: getSize.m(17),
    },
});
