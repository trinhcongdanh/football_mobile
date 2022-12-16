import { View, ScrollView } from 'react-native';
import React from 'react';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { ListGame } from '@football/app/components/list-game/ListGame';
import { useViewModel } from './ScheduleScreen.viewModel';
import { IScheduleScreenProps } from './ScheduleScreen.type';

// type Props = {};

export const ScheduleScreen = ({ navigation, route }: IScheduleScreenProps) => {
    const { t, games } = useViewModel({
        navigation,
        route,
    });
    if (games.isLoading == true) {
        return <></>;
    }
    if (games.success == false) {
        return <></>;
    }
    return (
        <View
            style={[
                appStyles.flex,
                { backgroundColor: appColors.gray, paddingHorizontal: getSize.m(16) },
            ]}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                {games.data.map(item => {
                    return (
                        <ListGame
                            key={item.game_id}
                            logo_home={item.team1.logo_url}
                            logo_away={item.team2.logo_url}
                            nameHome={item.team1.name_he}
                            nameAway={item.team2.name_he}
                            location={item.stadium_he}
                            date={item.date}
                            result={item.score}
                            color={appColors.gray}
                            schedule={item.time}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
};
