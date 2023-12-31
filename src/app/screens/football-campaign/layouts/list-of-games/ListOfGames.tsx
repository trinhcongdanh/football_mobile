import { AppFonts } from '@football/app/assets/fonts';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { ListGame } from '@football/app/components/list-game/ListGame';
import { Position } from '@football/app/components/position/Position';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { MAX_TOPTEAM_LASTCAMPAIGN_GAMES } from '@football/core/api/configs/config';
import moment from 'moment';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import { IListOfGamesProps } from './ListOfGames.type';
import styles from './ListOfGames.style';
import { useViewModel } from './ListOfGames.viewModel';

export const ListOfGames = ({ games, groupName, topTeam }: IListOfGamesProps) => {
    const {
        t,
        options,
        select,
        selectOption,
        handleDetailMatch,
        handleStadium,
        handleSeeAll,
    } = useViewModel(topTeam);
    return (
        <View>
            <View style={appStyles.flex_row_space_center}>
                <Text style={appStyles.statistics_title}>{t('campaign.list_game.title')}</Text>
                <TouchableOpacity
                    style={[appStyles.flex_row_center, { flex: 0, marginTop: getSize.m(12) }]}
                    onPress={handleSeeAll}
                >
                    <Text style={appStyles.statistics_title}>
                        {t('campaign.list_game.see_all_games')}
                    </Text>
                    <IconFeather
                        name={appIcons.ic_arrow_left}
                        size={getSize.m(10)}
                        color={appColors.button_dark_blue}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: getSize.m(26) }}>
                <Position
                    position={groupName}
                    color={appColors.text_dark_blue}
                    fontFamily={AppFonts.bold}
                    fontSize={getSize.m(12)}
                    width={getSize.m(130)}
                />
                <View style={[appStyles.flex_row_space, styles.option]}>
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
                {games
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
                                // completed={item.completed}
                                icon={appIcons.ic_arrow_left}
                                color={appColors.gray}
                                details={item.game_id}
                                handleDetailMatch={() => handleDetailMatch(item.game_id)}
                                handleStadium={() => handleStadium(item.stadium_id)}
                                isLive={moment().isBetween(
                                    moment(`${item.date} ${item.time}`, 'DD.M.YY HH:mm'),
                                    moment(`${item.date} ${item.time}`, 'DD.M.YY HH:mm').add(
                                        2,
                                        'hours'
                                    )
                                )}
                            />
                        );
                    })}
            </View>
        </View>
    );
};
