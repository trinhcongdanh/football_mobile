import { View, ImageBackground, StatusBar, SafeAreaView } from 'react-native';
import React from 'react';
import { AppImages } from '@football/app/assets/images';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { InfoPerson } from '@football/app/components/info-person/InfoPerson';
import { ButtonOption } from '@football/app/components/button_option';
import { DataPlayerNationalScreen } from './layouts/data-player-national/DataPlayerNationalScreen';
import { DataPlayerTeamScreen } from './layouts/data-player-team';
import { useViewModel } from './DataPlayerScreen.viewModel';
import { IDataPlayerScreenProps } from './DataPlayerScreen.type';

// type Props = {};

export const DataPlayerScreen = ({ navigation, route }: IDataPlayerScreenProps) => {
    const { onSelect, t, onGoBack, setOnSelect } = useViewModel({
        navigation,
        route,
    });

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
                            color_pre={appColors.blue_black}
                            color_after={appColors.blue_black}
                            handlePressFunction={onGoBack}
                        />
                        <InfoPerson
                            name="פיני יואב גראפי"
                            data_1="08/1993"
                            data_2={t('data_player.national.israel')}
                            data_3={13}
                            avt="https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg"
                            img_logo="https://upload.wikimedia.org/wikipedia/he/thumb/0/0e/MaacabiSymbol.svg/1200px-MaacabiSymbol.svg.png"
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
                        />

                        {onSelect === 0 ? <DataPlayerNationalScreen /> : <DataPlayerTeamScreen />}
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
