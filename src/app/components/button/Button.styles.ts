import { AppFonts } from '@football/app/assets/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2CC4FF',
        borderRadius: 60,
        marginTop: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text_button: {
        fontSize: 16,
        color: 'white',
        fontFamily: AppFonts.bold,
        paddingVertical: 16,
    },
});

export default styles;
