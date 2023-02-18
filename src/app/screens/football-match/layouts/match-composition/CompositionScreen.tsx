import { View, ScrollView } from 'react-native';
import React from 'react';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { Position } from '@football/app/components/position/Position';
import { getSize } from '@football/app/utils/responsive/scale';
import { ListPlayer } from '@football/app/components/list-player/ListPlayer';
import { useViewModel } from './CompositionScreen.viewModel';
import { ICompositionScreenProps } from './CompositionScreen.type';

// type Props = {};

export const CompositionScreen = ({ navigation, route }: ICompositionScreenProps) => {
    const { t, lineUp, handleDataPlayer } = useViewModel({
        navigation,
        route,
    });
    // if (lineUp.isLoading == true) {
    //     return <></>;
    // }
    // if (lineUp.success == false) {
    //     return <></>;
    // }

    return (
        <View
            style={[
                appStyles.flex,
                { backgroundColor: appColors.gray, paddingHorizontal: getSize.m(16) },
            ]}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: getSize.m(30) }}>
                    <Position
                        width={getSize.m(130)}
                        position={t('match.composition.main_lineup')}
                    />
                    {lineUp.map(item => {
                        return (
                            <ListPlayer
                                key={item.player_id}
                                name={item.name_he}
                                number_before={item.shirt_number}
                                avt={item.image_url}
                                handleDataPlayer={handleDataPlayer}
                            />
                        );
                    })}
                </View>
                <View style={{ marginTop: getSize.m(30) }}>
                    <Position width={getSize.m(130)} position={t('match.composition.replace')} />
                    {lineUp.map(item => {
                        return (
                            <ListPlayer
                                key={item.player_id}
                                name={item.name_he}
                                number_before={item.shirt_number}
                                avt={item.image_url}
                                handleDataPlayer={handleDataPlayer}
                            />
                        );
                    })}
                </View>
                <View style={{ marginTop: getSize.m(30) }}>
                    <Position
                        width={getSize.m(130)}
                        position={t('match.composition.not_partner')}
                    />
                    {lineUp.map(item => {
                        return (
                            <ListPlayer
                                key={item.player_id}
                                name={item.name_he}
                                number_before={item.shirt_number}
                                avt={item.image_url}
                                handleDataPlayer={handleDataPlayer}
                            />
                        );
                    })}
                </View>
                <View style={{ marginTop: getSize.m(30) }}>
                    <Position width={getSize.m(130)} position={t('match.composition.coach')} />
                    {lineUp.map(item => {
                        return (
                            <ListPlayer
                                key={item.player_id}
                                name={item.name_he}
                                avt={item.image_url}
                                handleDataPlayer={handleDataPlayer}
                            />
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
};
