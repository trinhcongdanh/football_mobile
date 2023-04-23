import React from 'react';
import { View, ImageBackground, StatusBar, SafeAreaView } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { HeaderComposition } from '@football/app/components/header-composition/HeaderComposition';
import { TopTaps } from '@football/app/routes/toptap/TopTap';
import { useViewModel } from './GameCompositionScreen.viewModel';
import { IGameCompositionScreenProps } from './GameCompositionScreen.type';
import { BackGround } from '@football/app/components/background/BackGround';

export const GameCompositionScreen = ({ navigation, route }: IGameCompositionScreenProps) => {
    const { t, onGoBack, labels, handleStadium } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={appStyles.flex}>
            <BackGround>
                <View style={appStyles.container}>
                    <HeaderUser
                        avt={AppImages.img_avt}
                        point="1,325"
                        icon={AppImages.img_angle_right}
                        color_pre={appColors.blue_black}
                        color_after={appColors.blue_black}
                        handlePressFunction={onGoBack}
                    />
                    <HeaderComposition
                        title='ליגת האומות של אופ"א'
                        season="2022/23"
                        avt_away="https://upload.wikimedia.org/wikipedia/he/thumb/5/50/HaifaCarmel.svg/800px-HaifaCarmel.svg.png"
                        avt_home="https://upload.wikimedia.org/wikipedia/he/thumb/5/50/HaifaCarmel.svg/800px-HaifaCarmel.svg.png"
                        name_home="הפועל ירושלים"
                        name_away="הפועל באר שבע"
                        score="2 : 1"
                        stadium="בלומפילד"
                        status="הסתיים"
                        handleStadium={handleStadium}
                    />
                </View>
                <View style={[appStyles.flex, appStyles.main_container]}>
                    <TopTaps labels={labels} />
                </View>
            </BackGround>
        </View>
    );
};
