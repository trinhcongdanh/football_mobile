import React from 'react';
import { View, Text } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { appColors } from '@football/app/utils/constants/appColors';
import { ListGame } from '@football/app/components/list-game/ListGame';
import { appIcons } from '@football/app/assets/icons/appIcons';
import moment from 'moment';
import { useViewModel } from './ListOfGames.viewModel';
import { IListOfGamesProps } from './ListOfGames.type';

export const ListOfGames = ({ listGames }: IListOfGamesProps) => {
    const { t, handleDetailMatch, handleStadium } = useViewModel();
    return (
        <View>
            <Text style={[appStyles.text_topic, { marginLeft: getSize.m(6) }]}>
                {t('group_page.list_games.title')}
            </Text>
            <View>
                {listGames.map(item => {
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
                            color={appColors.gray}
                            icon={appIcons.ic_arrow_left}
                            details={item.game_id}
                            isLive={moment().isBetween(
                                moment(`${item.date} ${item.time}`, 'DD.M.YY HH:mm'),
                                moment(`${item.date} ${item.time}`, 'DD.M.YY HH:mm').add(2, 'hours')
                            )}
                            handleDetailMatch={handleDetailMatch}
                            handleStadium={() => handleStadium(item.stadium_id)}
                        />
                    );
                })}
            </View>
        </View>
    );
};
