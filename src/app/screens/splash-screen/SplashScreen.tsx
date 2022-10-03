import { View, Image, Text, ImageBackground } from 'react-native';
import React from 'react';
import { AppImages } from '@football/app/assets/images';
import { EnStrings } from '@football/app/i18n/EnStrings';
import styles from './SplashScreen.styles';
// import { ISplashScreenProps } from './SplashScreen.type';

export const SplashScreen = (props: any) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={AppImages.img_background} style={styles.img_background}>
                <Image resizeMode="contain" source={AppImages.img_logo} style={styles.image} />
                <Text style={styles.text_header}>{EnStrings.splash_screen}</Text>
            </ImageBackground>
        </View>
    );
};
