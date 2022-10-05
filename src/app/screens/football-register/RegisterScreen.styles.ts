import { I18nManager, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    ic_back: { alignItems: I18nManager.isRTL ? 'flex-start' : 'flex-end' },
});
