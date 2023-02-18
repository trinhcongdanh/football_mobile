import React from 'react';
import { View, Text } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { appColors } from '@football/app/utils/constants/appColors';
import { ListGame } from '@football/app/components/list-game/ListGame';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { useViewModel } from './ListOfGames.viewModel';

export const ListOfGames = () => {
    const { t, listGames, handleDetailMatch, handleStadium } = useViewModel({});
    return (
        <View>
            <Text style={[appStyles.text_topic, { marginLeft: getSize.m(6) }]}>
                {t('group_page.list_games.title')}
            </Text>
            <View>
                {listGames.map(item => {
                    return (
                        <ListGame
                            key={item.id}
                            tournament={item.tournament}
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
                            isLive={item.isLive}
                            handleDetailMatch={handleDetailMatch}
                            handleStadium={handleStadium}
                        />
                    );
                })}
            </View>
        </View>
    );
};
