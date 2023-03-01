import { AppImages } from '@football/app/assets/images';
import { ButtonOption } from '@football/app/components/button_option';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { InfoPerson } from '@football/app/components/info-person/InfoPerson';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { ScreenName } from '@football/app/utils/constants/enum';
import React, { useEffect } from 'react';
import { ImageBackground, SafeAreaView, StatusBar, View } from 'react-native';
import { IDataPlayerScreenProps } from './DataPlayerScreen.type';
import { useViewModel } from './DataPlayerScreen.viewModel';
import { DataPlayerNationalScreen } from './layouts/data-player-national/DataPlayerNationalScreen';
import { DataPlayerTeamScreen } from './layouts/data-player-team';

// type Props = {};

export const DataPlayerScreen = ({ navigation, route }: IDataPlayerScreenProps) => {
    const { onSelect, t, onGoBack, setOnSelect, player } = useViewModel({
        navigation,
        route,
    });

    const previous_screen = route?.params?.previous_screen;

    useEffect(() => {
        if (previous_screen === ScreenName.GroupPagePage) {
            setOnSelect(1);
        }
    }, []);

    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                {player && (
                    <>
                        <StatusBar translucent backgroundColor="transparent" />
                        <SafeAreaView style={appStyles.safe_area}>
                            <View style={appStyles.container}>
                                <HeaderUser
                                    avt={AppImages.img_avt}
                                    point="1,325"
                                    icon={AppImages.img_angle_right}
                                    color_pre={appColors.blue_black}
                                    color_after={appColors.blue_black}
                                    handlePressFunction={onGoBack}
                                />
                                <InfoPerson
                                    name={player.name_he}
                                    data_1={player.date_of_birth}
                                    data_2={player.citizenship_he}
                                    data_3={player.num_of_games}
                                    avt={player.image_url}
                                    img_logo={player.citizenship_image_url}
                                    title_1={t('data_player.birthday')}
                                    title_2={t('data_player.national.title')}
                                    title_3={t('data_player.number')}
                                />
                            </View>
                            <View style={[appStyles.flex, appStyles.main_container]}>
                                <ButtonOption
                                    option_one={t('data_player.option.club')}
                                    option_two={t('data_player.option.national')}
                                    onSelect={setOnSelect}
                                    defaultValue={onSelect}
                                />

                                {onSelect === 0 ? (
                                    <DataPlayerTeamScreen player={player} />
                                ) : (
                                    <DataPlayerNationalScreen player={player} />
                                )}
                            </View>
                        </SafeAreaView>
                    </>
                )}
            </ImageBackground>
        </View>
    );
};
