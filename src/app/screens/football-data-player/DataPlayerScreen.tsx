import { AppImages } from '@football/app/assets/images';
import { ButtonOption } from '@football/app/components/button_option';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { InfoPerson } from '@football/app/components/info-person/InfoPerson';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import React, { useEffect } from 'react';
import { ImageBackground, SafeAreaView, StatusBar, View } from 'react-native';
import { IDataPlayerScreenProps } from './DataPlayerScreen.type';
import { useViewModel } from './DataPlayerScreen.viewModel';
import { DataPlayerNationalScreen } from './layouts/data-player-national/DataPlayerNationalScreen';
import { DataPlayerTeamScreen } from './layouts/data-player-team';
import { BackGround } from '@football/app/components/background/BackGround';

// type Props = {};

export const DataPlayerScreen = ({ navigation, route }: IDataPlayerScreenProps) => {
    const { onSelect, t, onGoBack, setOnSelect, player } = useViewModel({
        navigation,
        route,
    });

    const player_page = route?.params?.player_page;

    useEffect(() => {
        console.log('log player', player?.top_team, player?.team);
        if (player?.top_team && player?.team) {
            console.log('log 1');
            setOnSelect(pre => 1);
            console.log('onSelect', onSelect);
        }
        if (!player?.top_team || !player?.team) {
            setOnSelect(pre => 0);
            console.log('log 0');
        }
        // if (player_page === 1) {
        //     setOnSelect(1);
        // }
    }, []);

    const { getTranslationText } = useTranslationText();

    return (
        <View style={appStyles.flex}>
            <BackGround>
                {player == null && 
                    <>
                        <View style={appStyles.container}>
                        <HeaderUser
                                avt={AppImages.img_avt}
                                point="1,325"
                                icon={AppImages.img_angle_arrow}
                                color_pre={appColors.blue_black}
                                color_after={appColors.blue_black}
                                handlePressFunction={onGoBack}
                            />
                    </View>
                    </>
                }
                
                {player && (
                    <>
                        <View style={appStyles.container}>
                            <HeaderUser
                                avt={AppImages.img_avt}
                                point="1,325"
                                icon={AppImages.img_angle_arrow}
                                color_pre={appColors.blue_black}
                                color_after={appColors.blue_black}
                                handlePressFunction={onGoBack}
                            />
                            <InfoPerson
                                name={getTranslationText({
                                    textHe: player.name_he,
                                    textEn: player.name_en,
                                })}
                                data_1={player.date_of_birth}
                                data_2={getTranslationText({
                                    textHe: player.citizenship_he,
                                    textEn: player.citizenship_en,
                                })}
                                data_3={player.num_of_games}
                                avt={player.image_url}
                                img_logo={player.citizenship_image_url}
                                title_1={t('data_player.birthday')}
                                title_2={t('data_player.national.title')}
                                title_3={t('data_player.number')}
                            />
                        </View>
                        {!player.team && !player.top_team ? null : (
                            <View style={[appStyles.flex, appStyles.main_container]}>
                                <ButtonOption
                                    option_one={player.team ? t('data_player.option.club') : null}
                                    option_two={
                                        player.top_team ? t('data_player.option.national') : null
                                    }
                                    onSelect={setOnSelect}
                                    defaultValue={onSelect}
                                    data_player={player.team && player.top_team ? false : true}
                                />

                                {onSelect === 0 ? (
                                    <DataPlayerTeamScreen player={player} />
                                ) : (
                                    <DataPlayerNationalScreen player={player} />
                                )}
                            </View>
                        )}
                    </>
                )}
            </BackGround>
        </View>
    );
};
