import React from 'react';
import { View, ImageBackground, StatusBar, SafeAreaView } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { appColors } from '@football/app/utils/constants/appColors';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { TopTaps } from '@football/app/routes/toptap/TopTap';
import { HeaderComposition } from '@football/app/components/header-composition/HeaderComposition';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { useViewModel } from './MatchScreen.viewModel';
import { IMatchScreenProps } from './MatchScreen.type';

// type Props = {};

export const MatchScreen = ({ navigation, route }: IMatchScreenProps) => {
    const { t, onGoBack, labels, gamesData, handleStadium } = useViewModel({
        navigation,
        route,
    });

    if (gamesData.isLoading == true) {
        return <></>;
    }
    if (gamesData.success == false) {
        return <></>;
    }

    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <HeaderUser
                            avt={AppImages.img_avt}
                            point="1,325"
                            icon={AppImages.img_angle_right}
                            color_pre={appColors.text_dark_blue}
                            color_after={appColors.text_dark_blue}
                            handlePressFunction={onGoBack}
                        />
                        <HeaderComposition
                            title="ליגת האומות של אופ״א"
                            season="2022/23"
                            avt_away="https://cdn0.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality-/283/iceland-512.png"
                            avt_home="https://cdn0.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality-/283/israel-512.png"
                            name_home="ישראל"
                            name_away="איסלנד"
                            score="3 : 6"
                            stadium="בלומפילד"
                            status={t('match.status')}
                            handleStadium={handleStadium}
                        />
                    </View>
                    <View style={[appStyles.flex, appStyles.main_container]}>
                        <TopTaps labels={labels} />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
