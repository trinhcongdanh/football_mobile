import { AppFonts } from '@football/app/assets/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img_background: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    text_header: {
        fontSize: 40,
        color: 'white',
        marginTop: 20,
        fontFamily: AppFonts.bold,
    },
    image: { width: 150, height: 150 },
});

export default styles;
