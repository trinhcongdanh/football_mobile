import { View, Image, Text, ImageBackground } from 'react-native';
import React from 'react';
import { AppImages } from '@football/app/assets/images';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import styles from './SplashScreen.styles';
// import { ISplashScreenProps } from './SplashScreen.type';

export const SplashPage = (props: any) => {
    const { t, i18n } = useTranslation();
    const navigation = useNavigation();
    setTimeout(() => {
        navigation.navigate('WelcomeScreen' as never);
    }, 3000);
    return (
        <View style={styles.container}>
            <ImageBackground source={AppImages.img_background} style={styles.img_background}>
                <Image resizeMode="contain" source={AppImages.img_logo} style={styles.image} />
                <Text style={styles.text_header}>{t('splash')}</Text>
            </ImageBackground>
        </View>
    );
};
