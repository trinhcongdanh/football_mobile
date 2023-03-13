import { View, ScrollView } from 'react-native';
import React from 'react';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { ListGame } from '@football/app/components/list-game/ListGame';
import { Game } from '@football/core/models/GameModelResponse';
import moment from 'moment';
import { useViewModel } from './ScheduleScreen.viewModel';
import { IScheduleScreenProps } from './ScheduleScreen.type';
// type Props = {};

export const ScheduleScreen = ({ navigation, route }: IScheduleScreenProps) => {
    const { t, handleStadium, handleDetailMatch } = useViewModel({
        navigation,
        route,
    });
    const game = route?.params?.data;

    // if (games.isLoading == true) {
    //     return <></>;
    // }
    // if (games.success == false) {
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
                {game?.games.map((item: Game) => {
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
                            schedule={item.time}
                            details={item.game_id}
                            handleDetailMatch={() => handleDetailMatch(item.game_id)}
                            handleStadium={() => handleStadium(item.stadium_id)}
                            isLive={moment().isBetween(
                                moment(`${item.date} ${item.time}`, 'DD.M.YY HH:mm'),
                                moment(`${item.date} ${item.time}`, 'DD.M.YY HH:mm').add(2, 'hours')
                            )}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
};
