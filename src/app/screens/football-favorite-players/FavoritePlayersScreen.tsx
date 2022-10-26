import React from 'react';
import { AppImages } from '@football/app/assets/images';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { View, ImageBackground, StatusBar, SafeAreaView } from 'react-native';
import { HeaderFav } from '@football/app/components/header-fav/HeaderFav';
import { IFavoritePlayerScreenProps } from './FavoritePlayersScreen.type';
import { useViewModel } from './FavoritePlayersScreen.viewModel';

export const FavoritePlayersScreen = ({ navigation, route }: IFavoritePlayerScreenProps) => {
    const { t, onGoBack, onGoSkip } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={[appStyles.flex]}>
            <ImageBackground source={AppImages.img_bg_register} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <HeaderFav goSkip={onGoSkip} goBack={onGoBack} />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
