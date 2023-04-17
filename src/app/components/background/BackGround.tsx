import { AppImages } from '@football/app/assets/images';
import { IBackGroundComponent } from '@football/app/components/background/BackGround.type';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import FastImage from 'react-native-fast-image';

export const BackGround = ({ children }: IBackGroundComponent) => {
    return (
        <ImageBackground source={AppImages.img_background_black} style={[appStyles.flex]}>
            <FastImage
                source={AppImages.img_background_arrow_screen}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: '100%',
                    width: '100%',
                }}
                resizeMode={FastImage.resizeMode.stretch}
            />
            {/* <FastImage
                    source={AppImages.img_arrow_header}
                    style={{
                        position: 'absolute',
                        top: getSize.m(0),
                        left: getSize.m(30),
                        width: '100%',
                        height: getSize.m(50),
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                /> */}
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <SafeAreaView style={appStyles.safe_area}>{children}</SafeAreaView>
        </ImageBackground>
    );
};
