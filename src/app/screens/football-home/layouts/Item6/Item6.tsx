import { AppFonts } from '@football/app/assets/fonts';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { ListGame } from '@football/app/components/list-game/ListGame';
import { Position } from '@football/app/components/position/Position';
import styles from '@football/app/screens/football-home/layouts/Item6/Item6.style';
import { useViewModel } from '@football/app/screens/football-home/layouts/Item6/Item6.viewModel';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { MAX_TOPTEAM_LASTCAMPAIGN_GAMES } from '@football/core/api/configs/config';
import moment from 'moment';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { IItem6Props } from './Item6.type';

export const Item6 = ({ topTeam }: IItem6Props) => {
    const {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        data,
        options,
        select,
        setSelect,
        selectOption,
        handleStadium,
        handleDetailMatch,
    } = useViewModel();
    // return (
    //     <View style={styles.container}>
    //         <View
    //             style={[
    //                 appStyles.flex_row_space_center,
    //                 {
    //                     paddingHorizontal: getSize.m(18),
    //                 },
    //             ]}
    //         >
    //             <Text style={styles.header}>{t('home_page.list_of_game')}</Text>
    //             <TouchableOpacity style={appStyles.flex_row_align}>
    //                 <Text style={styles.see_all}>{t('home_page.all_game')}</Text>
    //                 <IconEntypo
    //                     name={appIcons.ic_arrow_left}
    //                     size={getSize.m(14)}
    //                     style={{ marginTop: getSize.m(3) }}
    //                     color={appColors.button_dark_blue}
    //                 />
    //             </TouchableOpacity>
    //         </View>
    //         <View style={{ marginTop: getSize.m(16) }}>
    //             {data.map((item, index) => {
    //                 return (
    //                     <GameTable3
    //                         key={item.id}
    //                         name_away={item.name_away}
    //                         name_home={item.name_home}
    //                         avt_away={item.avt_away}
    //                         avt_home={item.avt_home}
    //                         result={item.result}
    //                         schedule={item.schedule}
    //                         tournaments={item.tournaments}
    //                         location={item.location}
    //                         isLive={item.isLive}
    //                         date={item.date}
    //                         minute={item.minute}
    //                     />
    //                 );
    //             })}
    //         </View>
    //     </View>
    // );
    return (
        <View style={{ paddingTop: getSize.m(26), backgroundColor: appColors.gray2 }}>
            <View
                style={[
                    appStyles.flex_row_space_center,
                    {
                        paddingHorizontal: getSize.m(18),
                    },
                ]}
            >
                <Text style={styles.header}>{t('home_page.list_of_game')}</Text>
                <TouchableOpacity style={appStyles.flex_row_align}>
                    <Text style={styles.see_all}>{t('home_page.all_game')}</Text>
                    <Icon
                        name={appIcons.ic_arrow_left}
                        size={getSize.m(13)}
                        color={appColors.text_dark_blue}
                    />
                </TouchableOpacity>
            </View>
            <Position
                position={topTeam?.last_campaign?.group_name_he}
                color={appColors.text_dark_blue}
                fontFamily={AppFonts.bold}
                fontSize={getSize.m(11)}
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
            <View style={{ paddingHorizontal: getSize.m(20) }}>
                {topTeam?.homepage_info.games
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
                                color={appColors.gray2}
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
                                style={{ marginVertical: getSize.m(12) }}
                            />
                        );
                    })}
            </View>
        </View>
    );
};
