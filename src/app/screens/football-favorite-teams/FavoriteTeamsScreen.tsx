import React from 'react';
import { View } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { FavoriteTeam } from './components/FavoriteTeam';
import { TeamModel } from '@football/core/models/TeamModelResponse';
import { useViewModel } from './FavoriteTeamsScreen.viewModel';
import { IFavoriteTeamsScreenProps } from './FavoriteTeamsScreen.type';

export const FavoriteTeamsScreen = ({ navigation, route }: IFavoriteTeamsScreenProps) => {
    const {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        teamSelected,
        searchText,
        searchFavTeam,
        setSearchText,
        filterSearchTeam,
    } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={[appStyles.flex]}>
            <FavoriteTeam
                searchText={searchText}
                searchFavTeam={(text: string) => {
                    setSearchText(text);
                    searchFavTeam(text);
                }}
                onGoSkip={onGoSkip}
                onGoBack={onGoBack}
                handleContinue={handleContinue}
                handleSelected={(item: TeamModel) => {
                    handleSelected(item);
                }}
                newFav={filterSearchTeam()}
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
