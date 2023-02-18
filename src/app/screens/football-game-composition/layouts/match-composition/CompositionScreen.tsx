import { View, ScrollView } from 'react-native';
import React from 'react';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { Position } from '@football/app/components/position/Position';
import { getSize } from '@football/app/utils/responsive/scale';
import { ButtonOption } from '@football/app/components/button_option';
import { ListPlayer } from '@football/app/components/list-player/ListPlayer';
import { AppImages } from '@football/app/assets/images';
import { useViewModel } from './CompositionScreen.viewModel';
import { ICompositionScreenProps } from './CompositionScreen.type';

// type Props = {};

export const CompositionScreen = ({ navigation, route }: ICompositionScreenProps) => {
    const { t, defenders, setOnSelect, onSelect, handleDataPlayer } = useViewModel({
        navigation,
        route,
    });

    return (
        <View
            style={[
                appStyles.flex,
                { backgroundColor: appColors.gray, paddingHorizontal: getSize.m(16) },
            ]}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: getSize.m(33) }}>
                    <ButtonOption
                        option_one={t('composition.domestic')}
                        option_two={t('composition.guest')}
                        onSelect={setOnSelect}
                    />
                </View>
                <View style={{ marginTop: getSize.m(30) }}>
                    <Position
                        position={t('match.composition.main_lineup')}
                        width={getSize.m(130)}
                    />
                    {defenders.map(item => {
                        return (
                            <ListPlayer
                                key={item.id}
                                name={item.name}
                                number_before={item.number}
                                avt="https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg"
                                handleDataPlayer={handleDataPlayer}
                            />
                        );
                    })}
                </View>
                <View style={{ marginTop: getSize.m(30) }}>
                    <Position position={t('match.composition.replace')} width={getSize.m(130)} />
                    {defenders.map(item => {
                        return (
                            <ListPlayer
                                key={item.id}
                                name={item.name}
                                number_before={item.number}
                                avt="https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg"
                                handleDataPlayer={handleDataPlayer}
                            />
                        );
                    })}
                </View>
                <View style={{ marginTop: getSize.m(30) }}>
                    <Position
                        position={t('match.composition.not_partner')}
                        width={getSize.m(130)}
                    />
                    {defenders.map(item => {
                        return (
                            <ListPlayer
                                key={item.id}
                                name={item.name}
                                number_before={item.number}
                                avt="https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg"
                                handleDataPlayer={handleDataPlayer}
                            />
                        );
                    })}
                </View>
                <View style={{ marginTop: getSize.m(30) }}>
                    <Position position={t('match.composition.coach')} width={getSize.m(130)} />
                    {defenders.map(item => {
                        return (
                            <ListPlayer
                                key={item.id}
                                name={item.name}
                                number_before={item.number}
                                avt="https://upload.wikimedia.org/wikipedia/commons/5/55/EranZeahviCelebrating.jpg"
                                handleDataPlayer={handleDataPlayer}
                            />
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
};
