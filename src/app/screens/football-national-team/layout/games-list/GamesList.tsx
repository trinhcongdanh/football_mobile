import { AppFonts } from '@football/app/assets/fonts';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { ListGame_Test } from '@football/app/components/list-game/ListGame_test';
import { Position } from '@football/app/components/position/Position';
import { IGamesListProps } from '@football/app/screens/football-national-team/layout/games-list/GamesList.type';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { MAX_TOPTEAM_LASTCAMPAIGN_GAMES } from '@football/core/api/configs/config';
import moment from 'moment';
import React from 'react';
import { I18nManager, Text, TouchableOpacity, View } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import styles from './GamesList.style';
import { useViewModel } from './GamesList.viewModel';

export const GamesList = ({ topTeam }: IGamesListProps) => {
    const {
        getTranslationText,
        t,
        handleDetailMatch,
        handleStadium,
        navigateToDetailsGame,
        options,
        selectOption,
        select,
        onNavigateGameLive,
    } = useViewModel({
        topTeam,
    });
    return (
        <View>
            <View style={appStyles.flex_row_space_center}>
                <Text style={appStyles.statistics_title}>{t('national_team.list_game.title')}</Text>
                <TouchableOpacity
                    style={[appStyles.flex_row_center, { flex: 0 }]}
                    onPress={() => navigateToDetailsGame(topTeam)}
                >
                    <Text style={styles.details}>{t('national_team.ranking_table.details')}</Text>
                    <IconFeather
                        name={appIcons.ic_left_ios}
                        size={getSize.m(10)}
                        color={appColors.button_dark_blue}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: getSize.m(26) }}>
                <Position
                    position={getTranslationText({
                        textHe: topTeam?.last_campaign?.group_name_he,
                        textEn: topTeam?.last_campaign?.group_name_en,
                    })}
                    color={appColors.text_dark_blue}
                    fontFamily={AppFonts.bold}
                    fontSize={getSize.m(11)}
                    width={getSize.m(130)}
                />
                <View style={[appStyles.flex_row_space_center, styles.option]}>
                    {options.map((option: string, index: number) => {
                        return (
                            <TouchableOpacity
                                style={[
                                    styles.button_option_dark,
                                    {
                                        backgroundColor:
                                            index === select
                                                ? appColors.button_dark_blue
                                                : appColors.separator,
                                        width: I18nManager.isRTL ? getSize.m(100) : getSize.m(120),
                                    },
                                ]}
                                key={index.toString()}
                                onPress={() => selectOption(index)}
                            >
                                <Text
                                    style={[
                                        styles.text_option,
                                        {
                                            color:
                                                index === select
                                                    ? appColors.white
                                                    : appColors.text_option_unselect,
                                            fontFamily:
                                                index === select ? AppFonts.bold : AppFonts.medium,
                                        },
                                    ]}
                                >
                                    {option}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
                <View
                    style={{
                        marginTop: getSize.m(8),
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {topTeam?.last_campaign.games
                        .slice(0, MAX_TOPTEAM_LASTCAMPAIGN_GAMES)
                        .filter(game => {
                            switch (select) {
                                case 0:
                                    return true;
                                case 1:
                                    return game.is_home_game;

                                case 2:
                                    return !game.is_home_game;

                                default:
                                    return true;
                            }
                        })
                        .map(item => {
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
                                    // completed={item.completed}
                                    icon={appIcons.ic_left_ios}
                                    color={appColors.gray}
                                    details={item.game_id}
                                    handleDetailMatch={() => handleDetailMatch(item.game_id, true)}
                                    handleStadium={() => handleStadium(item.stadium_id)}
                                    handleGameLive={() => onNavigateGameLive()}
                                    isLive={moment().isBetween(
                                        moment(`${item.date} ${item.time}`),
                                        moment(`${item.date} ${item.time}`).add(2, 'hours')
                                    )}
                                    isFuture={
                                        moment().diff(moment(`${item?.date} ${item?.time}`)) < 0
                                    }
                                    style={{
                                        marginTop: getSize.m(12),
                                        height: getSize.m(157),
                                        width: getSize.m(335),
                                    }}
                                    gameDetail={t('list_game.detail')}
                                />
                            );
                        })}
                </View>
            </View>
        </View>
    );
};
