import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { ListGame } from '@football/app/components/list-game/ListGame';
import { Position } from '@football/app/components/position/Position';
import { appColors } from '@football/app/utils/constants/appColors';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import styles from './ListOfGames.style';
import { useViewModel } from './ListOfGames.viewModel';
import { AppFonts } from '@football/app/assets/fonts';

export const ListOfGames = () => {
    const { t, options, select, listGames, selectOption, handleDetailMatch } = useViewModel({});
    return (
        <View>
            <Text style={appStyles.statistics_title}>{t('campaign.list_game.title')}</Text>
            <View style={{ marginTop: getSize.m(26) }}>
                <Position
                    position="בית 9"
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
                {select === 0 && (
                    <View>
                        {listGames.map(item => {
                            return (
                                <ListGame
                                    key={item.id}
                                    logo_home={item.logoHome}
                                    logo_away={item.logoAway}
                                    nameHome={item.nameHome}
                                    nameAway={item.nameAway}
                                    location={item.location}
                                    date={item.date}
                                    result={item.result}
                                    schedule={item.schedule}
                                    // completed={item.completed}
                                    icon={appIcons.ic_arrow_left}
                                    color={appColors.gray}
                                    details={item.details}
                                    handleDetailMatch={handleDetailMatch}
                                />
                            );
                        })}
                    </View>
                )}
            </View>
        </View>
    );
};
