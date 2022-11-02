import React from 'react';
import { View } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { Favorite } from '@football/app/components/favorite/Favorite';
import { useViewModel } from './FavoriteTopTeamsScreen.viewModel';
import { IFavoriteTopTeamsScreenProps } from './FavoriteTopTeamsScreen.type';

export const FavoriteTopTeamsScreen = ({ navigation, route }: IFavoriteTopTeamsScreenProps) => {
    const {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        topTeamSelected,
        newTopTeams,
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
                handleSelected={(item: any) => {
                    handleSelected(item);
                }}
                newFav={newTopTeams}
                favSelected={topTeamSelected}
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