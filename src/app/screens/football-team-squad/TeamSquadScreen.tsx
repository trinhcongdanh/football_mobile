import { View, ImageBackground, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { AppImages } from '@football/app/assets/images';
import { CardGoBack } from '@football/app/components/go-back/CardGoBack';
import { ITeamGroupScreenProps } from './TeamSquadScreen.type';
import { appIcons } from '@football/app/assets/icons/appIcons';
import styles from './TeamSquadScreen.style';
import { useViewModel } from './TeamSquadScreen.viewModel';
import { ButtonOption } from '@football/app/components/button_option';
import { getSize } from '@football/app/utils/responsive/scale';
import { ListPlayer } from '@football/app/components/list-player/ListPlayer';
import { Position } from '@football/app/components/position/Position';

// type Props = {};

export const TeamSquadScreen = ({ navigation, route }: ITeamGroupScreenProps) => {
    const { onGoBack, t, goalkeepers, defenders } = useViewModel({
        navigation,
        route,
    });
    const [onSelect, setOnSelect] = useState(0);

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
                            title={t('team_squad.title')}
                        />
                    </View>
                    <View style={[appStyles.flex, appStyles.main_container]}>
                        <ButtonOption
                            option_one={t('team_squad.option.players')}
                            option_two={t('team_squad.option.officials')}
                            onSelect={setOnSelect}
                        />

                        <View style={{ paddingHorizontal: getSize.m(26) }}>
                            {onSelect === 0 && (
                                <ScrollView>
                                    <View style={{ marginTop: getSize.m(30) }}>
                                        <Position position={t('team_squad.gk')} />
                                        {goalkeepers.map(item => {
                                            return (
                                                <ListPlayer
                                                    key={item.id}
                                                    name={item.name}
                                                    number={item.number}
                                                ></ListPlayer>
                                            );
                                        })}
                                    </View>
                                    <View style={{ marginTop: getSize.m(30) }}>
                                        <Position position={t('team_squad.df')} />
                                        {defenders.map(item => {
                                            return (
                                                <ListPlayer
                                                    key={item.id}
                                                    name={item.name}
                                                    number={item.number}
                                                ></ListPlayer>
                                            );
                                        })}
                                    </View>
                                    <View style={{ marginTop: getSize.m(30) }}>
                                        <Position position={t('team_squad.mf')} />
                                        {goalkeepers.map(item => {
                                            return (
                                                <ListPlayer
                                                    key={item.id}
                                                    name={item.name}
                                                    number={item.number}
                                                ></ListPlayer>
                                            );
                                        })}
                                    </View>
                                    <View style={{ marginTop: getSize.m(30) }}>
                                        <Position position={t('team_squad.st')} />
                                        {goalkeepers.map(item => {
                                            return (
                                                <ListPlayer
                                                    key={item.id}
                                                    name={item.name}
                                                    number={item.number}
                                                ></ListPlayer>
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
