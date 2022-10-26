import React from 'react';
import { AppImages } from '@football/app/assets/images';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { View, ImageBackground, StatusBar, SafeAreaView, Text } from 'react-native';
import { HeaderFav } from '@football/app/components/header-fav/HeaderFav';
import { useViewModel } from './FavoriteSummaryScreen.viewModel';
import { IFavoriteSummaryScreenProps } from './FavoriteSummaryScreen.type';

export const FavoriteSummaryScreen = ({ navigation, route }: IFavoriteSummaryScreenProps) => {
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
                        <Text style={appStyles.text_title}>{t('favorite_team.title')}</Text>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
