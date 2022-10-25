import { View, ScrollView } from 'react-native';
import React from 'react';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { ListGame } from '@football/app/components/list-game/ListGame';
import { IScheduleScreenProps } from './ScheduleScreen.type';
import { useViewModel } from './ScheduleScreen.viewModel';

// type Props = {};

export const ScheduleScreen = ({ navigation, route }: IScheduleScreenProps) => {
    const { t, listGames } = useViewModel({
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
                {listGames.map(item => {
                    return (
                        <ListGame
                            key={item.id}
                            logoHome={item.logoHome}
                            logoAway={item.logoAway}
                            nameHome={item.nameHome}
                            nameAway={item.nameAway}
                            location={item.location}
                            date={item.date}
                            result={item.result}
                            schedule={item.schedule}
                            completed={item.completed}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
};
