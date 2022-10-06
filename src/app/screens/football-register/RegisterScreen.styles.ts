import { getSize } from '@football/app/utils/responsive/scale';
import { I18nManager, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    logo: { width: getSize.s(60), height: getSize.s(60) },
    ic_back: { alignItems: I18nManager.isRTL ? 'flex-start' : 'flex-end' },
});
