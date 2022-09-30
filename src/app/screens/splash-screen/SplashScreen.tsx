import { View, Image, Text } from 'react-native';
import React from 'react';
import { AppImages } from '@football/app/assets/images';
import { EnStrings } from '@football/app/i18n/EnStrings';
import styles from './SplashScreen.styles';
import { ISplashScreenProps } from './SplashScreen.type';

export const SplashScreen = (props: ISplashScreenProps) => {
    return (
        <View style={styles.container}>
            <Image source={AppImages.img_logo} style={styles.image} />
            <Text style={{ fontSize: 40, color: 'white' }}>{EnStrings.title_testing}</Text>
        </View>
    );
};
