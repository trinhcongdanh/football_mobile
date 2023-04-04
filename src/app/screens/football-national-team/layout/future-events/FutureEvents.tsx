import { ListGame_Test } from '@football/app/components/list-game/ListGame_test';
import { IFutureEventsProps } from '@football/app/screens/football-national-team/layout/future-events/FutureEvents.type';
import { appColors } from '@football/app/utils/constants/appColors';
import { getSize } from '@football/app/utils/responsive/scale';
import { isEmpty } from 'lodash';
import moment from 'moment';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './FutureEvents.style';
import { useViewModel } from './FutureEvents.viewModel';

export const FutureEvents = ({ topTeam }: IFutureEventsProps) => {
    const { getTranslationText, t, handleDetailMatch, handleStadium } = useViewModel({
        topTeam,
    });
    return (
        <View>
            {!isEmpty(topTeam?.future_events) ? (
                <View
                    style={{
                        marginTop: getSize.m(40),
                    }}
                >
                    <Text style={styles.text_title}>{t('national_team.team_event')}</Text>
                    <View style={{ marginTop: getSize.m(8) }}>
                        {topTeam?.future_events?.slice(0, 3).map((item, index) => {
                            return (
                                <ListGame_Test
                                    // eslint-disable-next-line react/no-array-index-key
                                    key={index}
                                    tournament={getTranslationText({
                                        textHe: item.name_he,
                                        textEn: item.name_en,
                                    })}
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
                                    // completed={item.completed}
                                    color={appColors.text_dark_blue}
                                    handleDetailMatch={() => handleDetailMatch(item.object_id)}
                                    handleStadium={() => handleStadium(item.stadium_id)}
                                    isLive={moment().isBetween(
                                        moment(`${item.date} ${item.time}`, 'DD.M.YY HH:mm'),
                                        moment(`${item.date} ${item.time}`, 'DD.M.YY HH:mm').add(
                                            2,
                                            'hours'
                                        )
                                    )}
                                    style={{ marginTop: getSize.m(12) }}
                                />
                            );
                        })}
                    </View>
                </View>
            ) : null}
        </View>
    );
};
