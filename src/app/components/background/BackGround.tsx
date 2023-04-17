import { AppImages } from '@football/app/assets/images';
import { IBackGroundComponent } from '@football/app/components/background/BackGround.type';
import { appStyles } from '@football/app/utils/constants/appStyles';
import React from 'react';
import { ImageBackground, SafeAreaView, StatusBar } from 'react-native';

export const BackGround = ({ children }: IBackGroundComponent) => {
    return (
        <ImageBackground source={AppImages.img_background_black} style={[appStyles.flex]}>
            <ImageBackground
                source={AppImages.img_background_arrow_screen}
                style={[appStyles.flex]}
            >
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>{children}</SafeAreaView>
            </ImageBackground>
        </ImageBackground>
    );
};
