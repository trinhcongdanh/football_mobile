import { AppImages } from '@football/app/assets/images';
import { IBackGroundComponent } from '@football/app/components/background/BackGround.type';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { I18nManager, ImageBackground } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSelector } from 'react-redux';

export const BackGround = ({ children }: IBackGroundComponent) => {
    const colorCustom = useSelector((state: any) => state.colorCustom.colorCustom);
    return (
        <ImageBackground source={AppImages.img_background_black} style={[appStyles.flex]}>
            <ImageBackground
                source={AppImages.img_background_arrow_screen}
                style={[appStyles.flex]}
            >
                {/* <FastImage
                source={AppImages.img_background_arrow_screen}
                tintColor="red"
                // resizeMode="contain"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: getSize.m(0),
                    bottom: 0,
                    right: getSize.m(0),
                    width: '100%',
                    transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
                }}
            /> */}
                {children}
            </ImageBackground>
        </ImageBackground>
    );
};
