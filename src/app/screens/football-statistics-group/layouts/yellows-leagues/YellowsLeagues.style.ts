import i18n from '@football/app/i18n/EnStrings';
import { getSize } from '@football/app/utils/responsive/scale';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ticket: {
        width: getSize.m(14),
        height: getSize.m(20),
        position: 'absolute',
        left: i18n.language === 'heb' ? getSize.m(16.5) : getSize.m(15.5),
        top: getSize.m(-2),
    },
});

export default styles;
