import { AppFonts } from '@football/app/assets/fonts';
import { StyleSheet } from 'react-native';
import { getSize } from '../responsive/scale';
import { appColors } from './appColors';

export const appStyles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    flex_align_center: {
        flex: 1,
        alignItems: 'center',
    },
    flex_justify_center: {
        flex: 1,
        justifyContent: 'center',
    },
    flex_center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flex_row: {
        flex: 1,
        flexDirection: 'row',
    },
    flex_row_center: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flex_row_space: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        paddingHorizontal: getSize.m(16),
        marginTop: getSize.m(25),
    },
    text_title: {
        fontFamily: AppFonts.regular,
        fontWeight: '700',
        fontSize: getSize.m(20),
        textAlign: 'center',
        color: appColors.white,
        lineHeight: getSize.m(24),
        marginTop: getSize.m(20),
    },
    text_sub_title: {
        fontFamily: AppFonts.regular,
        fontWeight: '500',
        fontSize: getSize.m(15),
        textAlign: 'center',
        color: appColors.text_grey,
        lineHeight: getSize.m(21),
        marginTop: getSize.m(8),
    },
});
