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
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { ListGame_Test } from '@football/app/components/list-game/ListGame_test';
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
    const { getTranslationText } = useTranslationText();

    return (
        <View
            style={[
                appStyles.flex,
                {
                    backgroundColor: appColors.gray,
                    paddingTop: getSize.m(40),
                    justifyContent: 'center',
                    alignItems: 'center',
                },
            ]}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                {game?.games?.map((item: Game) => {
                    return (
                        <ListGame_Test
                            key={item.game_id}
                            logo_home={item.team1.logo_url}
                            logo_away={item.team2.logo_url}
                            nameHome={getTranslationText({
                                textHe: item.team1.name_he,
                                textEn: item.team1.name_en,
                            })}
                            nameAway={getTranslationText({
                                textHe: item.team2.name_he,
                                textEn: item.team2.name_en,
                            })}
                            location={getTranslationText({
                                textHe: item.stadium_he,
                                textEn: item.stadium_en,
                            })}
                            date={item.date}
                            result={item.score}
                            schedule={item.time}
                            // details={item.game_id}
                            handleDetailMatch={() => handleDetailMatch(item.game_id)}
                            handleStadium={() => handleStadium(item.stadium_id)}
                            isLive={moment().isBetween(
                                moment(`${item.date} ${item.time}`),
                                moment(`${item.date} ${item.time}`).add(2, 'hours')
                            )}
                            isFuture={moment().diff(moment(`${item?.date} ${item?.time}`)) < 0}
                            color={appColors.gray}
                            style={{
                                height: getSize.m(164),
                                width: getSize.m(324),
                            }}
                            marginTopMatch={getSize.m(14)}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
};
