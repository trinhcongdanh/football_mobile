import { View, Image, Text, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import { AppImages } from '@football/app/assets/images';
import { useTranslation } from 'react-i18next';
import { ScreenName } from '@football/app/utils/constants/enum';
import { appStyles } from '@football/app/utils/constants/appStyles';
import styles from './WelcomeScreen.styles';
import { IWelcomeScreenProps } from './WelcomeScreen.type';

export const WelcomeScreen = ({ navigation, route }: IWelcomeScreenProps) => {
    const { t } = useTranslation();

    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex_center}>
                <StatusBar translucent backgroundColor="transparent" />
                <Image resizeMode="contain" source={AppImages.img_logo} style={styles.image} />
                <Text style={styles.text_header}>{t('title')}</Text>
                <Text style={styles.text_desc}>{t('info')}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        navigation.navigate(ScreenName.RegisterPage, {
                            isReset: true,
                        })
                    }
                >
                    <Text style={styles.text_button}>{t('start')}</Text>
                </TouchableOpacity>
                <Text style={styles.text_question}>{t('account')}</Text>
                <TouchableOpacity style={styles.button_signup}>
                    <Text style={styles.text_button_signup}>{t('create')}</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
};
