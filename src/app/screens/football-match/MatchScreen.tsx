import { AppImages } from '@football/app/assets/images';
import { HeaderComposition } from '@football/app/components/header-composition/HeaderComposition';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { TopTaps } from '@football/app/routes/toptap/TopTap';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import React from 'react';
import { ImageBackground, SafeAreaView, StatusBar, View } from 'react-native';
import { IMatchScreenProps } from './MatchScreen.type';
import { useViewModel } from './MatchScreen.viewModel';

// type Props = {};

export const MatchScreen = ({ navigation, route }: IMatchScreenProps) => {
    const { t, onGoBack, labels, game, handleStadium } = useViewModel({
        navigation,
        route,
    });

    // if (gamesData.isLoading == true) {
    //     return <></>;
    // }
    // if (gamesData.success == false) {
    //     return <></>;
    // }

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
                            title={game?.context_name_he}
                            season={game?.season}
                            avt_away={game?.team2.logo_url}
                            avt_home={game?.team1.logo_url}
                            name_home={game?.team1.name_he}
                            name_away={game?.team2.name_he}
                            score={game?.score}
                            stadium={game?.stadium_he}
                            status={t('match.status')}
                            handleStadium={handleStadium}
                        />
                    </View>
                    <View style={[appStyles.flex, appStyles.main_container]}>
                        <TopTaps labels={labels} data={route?.params?.gameId} />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
