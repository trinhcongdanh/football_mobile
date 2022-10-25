import { View, Text } from 'react-native';
import React from 'react';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { ListGame } from '@football/app/components/list-game/ListGame';
import { appIcons } from '@football/app/assets/icons/appIcons';
import { useViewModel } from './ListOfGames.viewModel';
// import { IListOfGamesProps } from './ListOfGames.type';

export const ListOfGames = (props: any) => {
    const { t, listGames } = useViewModel({});
    return (
        <View>
            <Text style={[appStyles.text_topic, { marginLeft: getSize.m(6) }]}>
                {t('leagues_details.list_games.title')}
            </Text>
            <View>
                {listGames.map(item => {
                    return (
                        <ListGame
                            key={item.id}
                            logoHome={item.logoHome}
                            logoAway={item.logoAway}
                            nameHome={item.nameHome}
                            nameAway={item.nameAway}
                            location={item.location}
                            date={item.date}
                            result={item.result}
                            schedule={item.schedule}
                            completed={item.completed}
                            icon={appIcons.ic_arrow_left}
                            details={item.details}
                        />
                    );
                })}
            </View>
        </View>
    );
};
