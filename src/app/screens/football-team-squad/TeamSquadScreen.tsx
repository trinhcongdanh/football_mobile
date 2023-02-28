import { AppImages } from '@football/app/assets/images';
import { ButtonOption } from '@football/app/components/button_option';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { ListPlayer } from '@football/app/components/list-player/ListPlayer';
import { Position } from '@football/app/components/position/Position';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import { ITeamGroupScreenProps } from './TeamSquadScreen.type';
import { useViewModel } from './TeamSquadScreen.viewModel';

export enum TeamSquadScreenType {
    Personnel = 0,
    Staff = 1,
}
// type Props = {};

export const TeamSquadScreen = ({ navigation, route }: ITeamGroupScreenProps) => {
    const {
        onGoBack,
        t,
        topTeamPersonnel,
        onNavigateDataCoach,
        onSelect,
        setOnSelect,
        fromTopTeam,
        teamPersonnel,
    } = useViewModel({
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
                            icon={AppImages.img_angle_right}
                            color_pre={appColors.black}
                            color_after={appColors.black}
                            title={
                                fromTopTeam
                                    ? t('team_squad.top_team_personnel')
                                    : t('team_squad.team_personnel')
                            }
                            handlePressFunction={onGoBack}
                        />
                    </View>
                    <View style={[appStyles.flex, appStyles.main_container]}>
                        <ButtonOption
                            option_one={t('team_squad.option.players')}
                            option_two={t('team_squad.option.officials')}
                            onSelect={setOnSelect}
                            defaultValue={onSelect}
                        />

                        <View
                            style={{
                                paddingHorizontal: getSize.m(26),
                                marginBottom: getSize.m(30),
                            }}
                        >
                            {onSelect === TeamSquadScreenType.Personnel && fromTopTeam && (
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <View style={{ marginTop: getSize.m(30) }}>
                                        <Position
                                            width={getSize.m(130)}
                                            position={t('team_squad.gk')}
                                        />
                                        {topTeamPersonnel?.players?.goalkeepers.map(item => {
                                            return (
                                                <ListPlayer
                                                    key={item.player_id}
                                                    name={item.name_he}
                                                    avt={item.image_url}
                                                />
                                            );
                                        })}
                                    </View>
                                    <View style={{ marginTop: getSize.m(30) }}>
                                        <Position
                                            width={getSize.m(130)}
                                            position={t('team_squad.df')}
                                        />
                                        {topTeamPersonnel?.players?.defence.map(item => {
                                            return (
                                                <ListPlayer
                                                    key={item.player_id}
                                                    name={item.name_he}
                                                    avt={item.image_url}
                                                />
                                            );
                                        })}
                                    </View>
                                    <View style={{ marginTop: getSize.m(30) }}>
                                        <Position
                                            width={getSize.m(130)}
                                            position={t('team_squad.mf')}
                                        />
                                        {topTeamPersonnel?.players?.midfield.map(item => {
                                            return (
                                                <ListPlayer
                                                    key={item.player_id}
                                                    name={item.name_he}
                                                    avt={item.image_url}
                                                />
                                            );
                                        })}
                                    </View>
                                    <View style={{ marginTop: getSize.m(30) }}>
                                        <Position
                                            width={getSize.m(130)}
                                            position={t('team_squad.st')}
                                        />
                                        {topTeamPersonnel?.players?.attack.map(item => {
                                            return (
                                                <ListPlayer
                                                    key={item.player_id}
                                                    name={item.name_he}
                                                    avt={item.image_url}
                                                />
                                            );
                                        })}
                                    </View>
                                </ScrollView>
                            )}
                            {onSelect === TeamSquadScreenType.Personnel && !fromTopTeam && (
                                <View style={{ marginTop: getSize.m(30) }}>
                                    {teamPersonnel?.players.map(item => {
                                        return (
                                            <ListPlayer
                                                key={item.player_id}
                                                name={item.name_he}
                                                avt={item.image_url}
                                            />
                                        );
                                    })}
                                </View>
                            )}
                            {onSelect === TeamSquadScreenType.Staff && fromTopTeam && (
                                <View style={{ marginTop: getSize.m(30) }}>
                                    {topTeamPersonnel?.staff.map(item => {
                                        return (
                                            <ListPlayer
                                                key={item.coach_id}
                                                avt={item.image_url}
                                                name={item.name_he}
                                                position={item.title_he}
                                                handleDataPlayer={() =>
                                                    onNavigateDataCoach(item.coach_id)
                                                }
                                            />
                                        );
                                    })}
                                </View>
                            )}
                            {onSelect === TeamSquadScreenType.Staff && !fromTopTeam && (
                                <View style={{ marginTop: getSize.m(30) }}>
                                    {teamPersonnel?.staff.map(item => {
                                        return (
                                            <ListPlayer
                                                key={item.coach_id}
                                                avt={item.image_url}
                                                name={item.name_he}
                                                position={item.title_he}
                                                handleDataPlayer={() =>
                                                    onNavigateDataCoach(item.coach_id)
                                                }
                                            />
                                        );
                                    })}
                                </View>
                            )}
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};
