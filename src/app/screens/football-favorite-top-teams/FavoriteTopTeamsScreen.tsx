import React from 'react';
import { View } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { FavoriteTopTeam } from './components/FavoriteTopTeam';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import { useViewModel } from './FavoriteTopTeamsScreen.viewModel';
import { IFavoriteTopTeamsScreenProps } from './FavoriteTopTeamsScreen.type';

export const FavoriteTopTeamsScreen = ({ navigation, route }: IFavoriteTopTeamsScreenProps) => {
    const {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        favSelectedTopTeams,
        favTopTeams,
    } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={[appStyles.flex]}>
            <FavoriteTopTeam
                onGoSkip={onGoSkip}
                onGoBack={onGoBack}
                handleContinue={handleContinue}
                handleSelected={(item: TopTeamModel) => {
                    handleSelected(item);
                }}
                newFav={favTopTeams}
                favSelected={favSelectedTopTeams}
                title={t('favorite_top_team.title')}
                placeholder={t('favorite_top_team.place_holder')}
                chosen={t('favorite_top_team.chosen')}
                button={t('favorite_top_team.button')}
                number={2}
                onIndex={2}
            />
        </View>
    );
};
