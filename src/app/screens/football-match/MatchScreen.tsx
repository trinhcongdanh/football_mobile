import { AppImages } from '@football/app/assets/images';
import { HeaderComposition } from '@football/app/components/header-composition/HeaderComposition';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { TopTaps } from '@football/app/routes/toptap/TopTap';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import React from 'react';
import { ImageBackground, SafeAreaView, StatusBar, View } from 'react-native';
import { IMatchScreenProps } from './MatchScreen.type';
import { useViewModel } from './MatchScreen.viewModel';
import { BackGround } from '@football/app/components/background/BackGround';

// type Props = {};

export const MatchScreen = ({ navigation, route }: IMatchScreenProps) => {
    const { t, onGoBack, labels, game, handleStadium, defaultTab } = useViewModel({
        navigation,
        route,
    });

    // if (gamesData.isLoading == true) {
    //     return <></>;
    // }
    // if (gamesData.success == false) {
    //     return <></>;
    // }
    const { getTranslationText } = useTranslationText();

    return (
        <View style={appStyles.flex}>
            <BackGround>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <HeaderUser
                            avt={AppImages.img_avt}
                            point="1,325"
                            icon={AppImages.img_angle_arrow}
                            color_pre={appColors.text_dark_blue}
                            color_after={appColors.text_dark_blue}
                            handlePressFunction={onGoBack}
                        />
                        {game && (
                            <HeaderComposition
                                title={getTranslationText({
                                    textHe: game.context_name_he,
                                    textEn: game.context_name_en,
                                })}
                                season={game.season}
                                avt_away={game.team2.logo_url}
                                avt_home={game.team1.logo_url}
                                name_home={getTranslationText({
                                    textHe: game.team1.name_he,
                                    textEn: game.team1.name_en,
                                })}
                                name_away={getTranslationText({
                                    textHe: game.team2.name_he,
                                    textEn: game.team2.name_en,
                                })}
                                score={game.score}
                                stadium={getTranslationText({
                                    textHe: game.stadium_he,
                                    textEn: game.stadium_en,
                                })}
                                status={t('match.status')}
                                handleStadium={() => handleStadium(game.stadium_id)}
                            />
                        )}
                    </View>
                    <View style={[appStyles.flex, appStyles.main_container]}>
                        {game && labels ? (
                            <TopTaps labels={labels} data={game} defaultTab={defaultTab} />
                        ) : null}
                    </View>
                </SafeAreaView>
            </BackGround>
        </View>
    );
};
