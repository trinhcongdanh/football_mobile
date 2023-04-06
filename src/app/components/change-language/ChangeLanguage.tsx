import React from 'react';
import { I18nManager, Text, TouchableOpacity, View } from 'react-native';
import styles from './ChangeLanguage.style';
import { useTranslation } from 'react-i18next';
import { IChangeLanguageComponent } from '@football/app/components/change-language/ChangeLanguage.type';
import i18n from '@football/app/i18n/EnStrings';
import { Restart } from '@football/app/utils/constants/enum';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ChangeLanguageService from '@football/core/services/ChangeLanguage.service';
import { getSize } from '@football/app/utils/responsive/scale';

export const ChangeLanguage = ({ color, borderBottomColor }: IChangeLanguageComponent) => {
    const { t } = useTranslation();

    const handleChangeLanguage = () => {
        AsyncStorage.setItem(Restart.language, '1');
        i18n.changeLanguage(i18n.language === 'en' ? 'heb' : 'en');
        if (i18n.language === 'heb') {
            I18nManager.forceRTL(true);
            ChangeLanguageService.removeLanguage(Restart.key_restart_for_ltr);
            ChangeLanguageService.changedLanguage(Restart.key_restart_for_rtl, '1');
        } else {
            I18nManager.forceRTL(false);
            ChangeLanguageService.removeLanguage(Restart.key_restart_for_rtl);
            ChangeLanguageService.changedLanguage(Restart.key_restart_for_ltr, '1');
        }
    };

    return (
        <TouchableOpacity onPress={handleChangeLanguage}>
            <View style={{ borderBottomColor: borderBottomColor, borderBottomWidth: getSize.m(1) }}>
                <Text
                    style={[
                        styles.text_button_change,
                        {
                            color: color,
                        },
                    ]}
                >
                    {t('side_menu.language')}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
