import React from 'react';
import { View, ImageBackground, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { ButtonOption } from '@football/app/components/button_option';
import { getSize } from '@football/app/utils/responsive/scale';
import { ListPlayer } from '@football/app/components/list-player/ListPlayer';
import styles from './TeamStaffScreen.style';
import { useViewModel } from './TeamStaffScreen.viewModel';
import { ITeamStaffScreenProps } from './TeamStaffScreen.type';

export const TeamStaffScreen = ({ navigation, route }: ITeamStaffScreenProps) => {
    const { t, onGoBack, setOnSelect, onSelect, teamStaffs, onNavigateDataCoach } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={appStyles.flex}>
            <ImageBackground source={AppImages.img_background} style={appStyles.flex}>
                <StatusBar translucent backgroundColor="transparent" />
                <SafeAreaView style={appStyles.safe_area}>
                    <View style={appStyles.container}>
                        <CardGoBack
                            iconName={appIcons.ic_right_ios}
                            iconStyle={styles.ic_back}
                            goBack={onGoBack}
                            title={t('team_staff.title')}
                        />
                    </View>
                    <View style={[appStyles.flex, appStyles.main_container]}>
                        <ButtonOption
                            option_one={t('team_staff.option.cast')}
                            option_two={t('team_staff.option.official')}
                            onSelect={setOnSelect}
                        />
                        <View style={{ paddingHorizontal: getSize.m(26) }}>
                            {onSelect === 0 ? (
                                <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
                            ) : (
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <View style={{ marginTop: getSize.m(30) }}>
                                        {teamStaffs.map(item => {
                                            return (
                                                <ListPlayer
                                                    key={item.id}
                                                    avt={item.avt}
                                                    name={item.name}
                                                    position={item.position}
                                                    handleDataPlayer={onNavigateDataCoach}
                                                />
                                            );
                                        })}
                                    </View>
                                </ScrollView>
                            )}
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
