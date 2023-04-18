import { AppImages } from '@football/app/assets/images';
import { ButtonOption } from '@football/app/components/button_option';
import { HeaderUser } from '@football/app/components/header-user/HeaderUser';
import { ListPlayer } from '@football/app/components/list-player/ListPlayer';
import { Position } from '@football/app/components/position/Position';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { getSize } from '@football/app/utils/responsive/scale';
import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import { ITeamGroupScreenProps } from './TeamSquadScreen.type';
import { useViewModel } from './TeamSquadScreen.viewModel';
import { BackGround } from '@football/app/components/background/BackGround';

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
        onNavigateDataPlayer,
    } = useViewModel({
        navigation,
        route,
    });

    const { getTranslationText } = useTranslationText();

    return (
        <View style={appStyles.flex}>
            <BackGround>
                <View style={appStyles.container}>
                    <HeaderUser
                        icon={AppImages.img_angle_arrow}
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
                    <ScrollView>
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
                                                    name={getTranslationText({
                                                        textHe: item.name_he,
                                                        textEn: item.name_en,
                                                    })}
                                                    avt={item.image_url}
                                                    handleDataPlayer={() =>
                                                        onNavigateDataPlayer(item.player_id)
                                                    }
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
                                                    name={getTranslationText({
                                                        textHe: item.name_he,
                                                        textEn: item.name_en,
                                                    })}
                                                    avt={item.image_url}
                                                    handleDataPlayer={() =>
                                                        onNavigateDataPlayer(item.player_id)
                                                    }
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
                                                    name={getTranslationText({
                                                        textHe: item.name_he,
                                                        textEn: item.name_en,
                                                    })}
                                                    avt={item.image_url}
                                                    handleDataPlayer={() =>
                                                        onNavigateDataPlayer(item.player_id)
                                                    }
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
                                                    name={getTranslationText({
                                                        textHe: item.name_he,
                                                        textEn: item.name_en,
                                                    })}
                                                    avt={item.image_url}
                                                    handleDataPlayer={() =>
                                                        onNavigateDataPlayer(item.player_id)
                                                    }
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
                                                name={getTranslationText({
                                                    textHe: item.name_he,
                                                    textEn: item.name_en,
                                                })}
                                                avt={item.image_url}
                                                handleDataPlayer={() =>
                                                    onNavigateDataPlayer(item.player_id)
                                                }
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
                                                name={getTranslationText({
                                                    textHe: item.name_he,
                                                    textEn: item.name_en,
                                                })}
                                                position={getTranslationText({
                                                    textHe: item.title_he,
                                                    textEn: item.title_en,
                                                })}
                                                handleDataPlayer={() =>
                                                    onNavigateDataCoach(item.coach_id)
                                                }
                                                widthText={getSize.m(80)}
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
                                                name={getTranslationText({
                                                    textHe: item.name_he,
                                                    textEn: item.name_en,
                                                })}
                                                position={getTranslationText({
                                                    textHe: item.title_he,
                                                    textEn: item.title_en,
                                                })}
                                                handleDataPlayer={() =>
                                                    onNavigateDataCoach(item.coach_id)
                                                }
                                                widthText={getSize.m(80)}
                                            />
                                        );
                                    })}
                                </View>
                            )}
                        </View>
                    </ScrollView>
                </View>
            </BackGround>
        </View>
    );
};
