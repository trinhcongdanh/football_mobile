import React from 'react';
import { View } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { Favorite } from '@football/app/components/favorite/Favorite';
import { TeamModel } from '@football/core/models/TeamModelResponse';
import { useViewModel } from './FavoriteTeamsScreen.viewModel';
import { IFavoriteTeamsScreenProps } from './FavoriteTeamsScreen.type';
import { removeFavTeams } from './redux/FavTeam.slice';

export const FavoriteTeamsScreen = ({ navigation, route }: IFavoriteTeamsScreenProps) => {
    const {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        teamSelected,
        newTeams,
        favTeamList,
        dispatch,
    } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={[appStyles.flex]}>
            <Favorite
                onGoSkip={onGoSkip}
                onGoBack={onGoBack}
                handleContinue={handleContinue}
                handleSelected={(item: TeamModel, index: number) => {
                    const action = removeFavTeams(index);
                    dispatch(action);
                    handleSelected(item, index);
                }}
                newFav={newTeams}
                favSelected={teamSelected}
                title={t('favorite_team.title')}
                placeholder={t('favorite_team.place_holder')}
                chosen={t('favorite_team.chosen')}
                button={t('favorite_team.button')}
                number={3}
                onIndex={0}
            />
        </View>
    );
};
