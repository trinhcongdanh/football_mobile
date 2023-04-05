import { View, Text } from 'react-native';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { ListGame } from '@football/app/components/list-game/ListGame';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { appColors } from '@football/app/utils/constants/appColors';
import moment from 'moment';
import { useViewModel } from './ListOfGames.viewModel';
import { IListOfGamesProps } from './ListOfGames.type';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { ListGame_Test } from '@football/app/components/list-game/ListGame_test';
// import { IListOfGamesProps } from './ListOfGames.type';

export const ListOfGames = ({ games }: IListOfGamesProps) => {
    const { t, listGames, onNavigateGamePersonnel, onNavigateStadium } = useViewModel({ games });
    const { getTranslationText } = useTranslationText();

    return (
        <View>
            <Text style={[appStyles.text_topic, { marginLeft: getSize.m(6) }]}>
                {t('leagues_details.list_games.title')}
            </Text>
            <View>
                {listGames.map(item => {
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
                            color={appColors.gray}
                            icon={appIcons.ic_left_ios}
                            details={item.game_id}
                            isLive={moment().isBetween(
                                moment(`${item.date} ${item.time}`, 'DD.M.YY HH:mm'),
                                moment(`${item.date} ${item.time}`, 'DD.M.YY HH:mm').add(2, 'hours')
                            )}
                            handleDetailMatch={() => onNavigateGamePersonnel(item.game_id)}
                            handleStadium={() => onNavigateStadium(item.stadium_id)}
                            personnel={t('list_game.composition')}
                        />
                    );
                })}
            </View>
        </View>
    );
};
