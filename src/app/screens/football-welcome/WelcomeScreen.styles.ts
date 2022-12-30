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
        marginTop: getSize.m(20),
        marginBottom: getSize.m(62),
        fontFamily: AppFonts.bold,
    },
    image: { width: getSize.m(89), height: getSize.m(98) },
    text_desc: {
        color: '#B3B6C8',
        fontSize: getSize.m(15),
        textAlign: 'center',
        marginHorizontal: getSize.m(45),
    },
    text_question: {
        color: 'white',
        marginTop: getSize.m(24),
        fontSize: getSize.m(13),
        fontFamily: AppFonts.regular,
        fontWeight: '600',
    },
    button_sign_up: {
        backgroundColor: 'transparent',
        borderRadius: getSize.m(60),
        marginTop: getSize.m(20),
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
    },
});

export default styles;
