import { AppFonts } from '@football/app/assets/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img_background: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    text_header: {
        fontSize: 20,
        color: 'white',
        marginTop: 20,
        marginBottom: 62,
        fontFamily: AppFonts.bold,
    },
    image: { width: 89, height: 98 },
    text_desc: {
        color: '#B3B6C8',
        fontSize: 15,
        textAlign: 'center',
        marginHorizontal: 45,
    },
    button: {
        backgroundColor: '#2CC4FF',
        borderRadius: 60,
        marginTop: 18,
    },
    text_button: {
        fontSize: 16,
        color: 'white',
        fontFamily: AppFonts.bold,
        paddingHorizontal: 136,
        paddingVertical: 16,
    },
    text_question: {
        color: 'white',
        marginTop: 24,
        fontSize: 13,
        fontFamily: AppFonts.regular,
        fontWeight: '600',
    },
    button_sign_up: {
        backgroundColor: 'transparent',
        borderRadius: 60,
        marginTop: 18,
        borderColor: '#2CC4FF',
        borderWidth: 1,
    },
    text_button_sign_up: {
        fontSize: 16,
        color: '#2CC4FF',
        fontFamily: AppFonts.bold,
        paddingHorizontal: 136,
        paddingVertical: 16,
    },
});

export default styles;
