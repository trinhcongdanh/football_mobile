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
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { ListGame_Test } from '@football/app/components/list-game/ListGame_test';
import { MAX_GAME_IN_FAVORITES_TEAM } from '@football/core/api/configs/config';

export const ListOfGames = ({ listGames }: IListOfGamesProps) => {
    const { t, handleDetailMatch, handleStadium } = useViewModel();
    const { getTranslationText } = useTranslationText();

    return (
        <View>
            <Text style={[appStyles.text_topic, { marginLeft: getSize.m(6) }]}>
                {t('group_page.list_games.title')}
            </Text>
            <View>
                {listGames?.slice(0, MAX_GAME_IN_FAVORITES_TEAM).map(item => {
                    return (
                        <ListGame_Test
                            key={item?.game_id}
                            logo_home={item?.team1?.logo_url}
                            logo_away={item?.team2?.logo_url}
                            nameHome={getTranslationText({
                                textHe: item?.team1?.name_he,
                                textEn: item?.team1?.name_en,
                            })}
                            nameAway={getTranslationText({
                                textHe: item?.team2?.name_he,
                                textEn: item?.team2?.name_en,
                            })}
                            location={getTranslationText({
                                textHe: item?.stadium_he,
                                textEn: item?.stadium_en,
                            })}
                            date={item?.date}
                            result={item?.score}
                            schedule={item?.time}
                            color={appColors.gray}
                            icon={appIcons.ic_left_ios}
                            details={item?.game_id}
                            isLive={moment().isBetween(
                                moment(`${item?.date} ${item?.time}`),
                                moment(`${item?.date} ${item?.time}`).add(2, 'hours')
                            )}
                            isFuture={moment().diff(moment(`${item?.date} ${item?.time}`)) < 0}
                            handleDetailMatch={() => handleDetailMatch(item?.game_id)}
                            handleStadium={() => handleStadium(item?.stadium_id)}
                            gameDetail={t('list_game.detail')}
                        />
                    );
                })}
            </View>
        </View>
    );
};
