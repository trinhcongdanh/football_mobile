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
    const { t, onGoBack, labels, gamesData } = useViewModel({
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
                            icon={appIcons.ic_right_ios}
                            color_pre={appColors.text_dark_blue}
                            color_after={appColors.text_dark_blue}
                            handlePressFunction={onGoBack}
                        />
                        <HeaderComposition
                            title={gamesData.data.campaign_name_he}
                            season={gamesData.data.season}
                            avt_away={gamesData.data.team2.logo_url}
                            avt_home={gamesData.data.team1.logo_url}
                            name_home={gamesData.data.team1.name_he}
                            name_away={gamesData.data.team2.name_he}
                            score={gamesData.data.score}
                            stadium={gamesData.data.stadium_he}
                            status={t('match.status')}
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
