import { AppImages } from '@football/app/assets/images';
import { IBackGroundComponent } from '@football/app/components/background/BackGround.type';
import { appStyles } from '@football/app/utils/constants/appStyles';
import React from 'react';
import { ImageBackground } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSelector } from 'react-redux';

export const BackGround = ({ children }: IBackGroundComponent) => {
    const colorCustom = useSelector((state: any) => state.colorCustom.colorCustom);
    return (
        <ImageBackground source={AppImages.img_background_black} style={appStyles.flex}>
            <FastImage
                source={AppImages.img_decoration_background_3}
                tintColor={colorCustom}
                resizeMode="contain"
                style={{ height: '60%', width: '100%', position: 'absolute' }}
            />
            {children}
        </ImageBackground>
    );
};
