import { View, ScrollView } from 'react-native';
import React from 'react';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { Position } from '@football/app/components/position/Position';
import { getSize } from '@football/app/utils/responsive/scale';
import { ListPlayer } from '@football/app/components/list-player/ListPlayer';
import { ICompositionScreenProps } from './CompositionScreen.type';
import { useViewModel } from './CompositionScreen.viewModel';

// type Props = {};

export const CompositionScreen = ({ navigation, route }: ICompositionScreenProps) => {
    const { t, defenders } = useViewModel({
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
                <View style={{ marginTop: getSize.m(30) }}>
                    <Position position={t('match.composition.main_lineup')} />
                    {defenders.map(item => {
                        return <ListPlayer key={item.id} name={item.name} number={item.number} />;
                    })}
                </View>
                <View style={{ marginTop: getSize.m(30) }}>
                    <Position position={t('match.composition.replace')} />
                    {defenders.map(item => {
                        return <ListPlayer key={item.id} name={item.name} number={item.number} />;
                    })}
                </View>
                <View style={{ marginTop: getSize.m(30) }}>
                    <Position position={t('match.composition.not_partner')} />
                    {defenders.map(item => {
                        return <ListPlayer key={item.id} name={item.name} number={item.number} />;
                    })}
                </View>
                <View style={{ marginTop: getSize.m(30) }}>
                    <Position position={t('match.composition.coach')} />
                    {defenders.map(item => {
                        return <ListPlayer key={item.id} name={item.name} number={item.number} />;
                    })}
                </View>
            </ScrollView>
        </View>
    );
};
