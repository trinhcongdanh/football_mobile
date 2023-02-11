import { AppFonts } from '@football/app/assets/fonts';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img_background: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    text_header: {
        fontSize: getSize.m(20),
        color: 'white',
        lineHeight: getSize.m(21.6),
        fontFamily: AppFonts.bold,
    },
    image: { width: getSize.m(89), height: getSize.m(98) },
    text_desc: {
        color: '#B3B6C8',
        fontSize: getSize.m(15),
        lineHeight: getSize.m(21),
        textAlign: 'center',
        fontFamily: AppFonts.medium,
    },
    button_start: {
        borderRadius: getSize.m(15),
        marginTop: getSize.m(18),
    },
    text_question: {
        color: 'white',
        fontSize: getSize.m(13),
        fontFamily: AppFonts.semibold,
        lineHeight: getSize.m(24),
    },
    button_sign_up: {
        backgroundColor: 'transparent',
        borderRadius: getSize.m(15),
        marginTop: getSize.m(18),
        borderColor: '#2CC4FF',
        borderWidth: getSize.m(1),
        width: '100%',
        paddingVertical: getSize.m(16),
    },
    text_button_sign_up: {
        fontSize: getSize.m(16),
        color: '#2CC4FF',
        fontFamily: AppFonts.bold,
        textAlign: 'center',
        lineHeight: getSize.m(20.8),
    },
});

export default styles;
