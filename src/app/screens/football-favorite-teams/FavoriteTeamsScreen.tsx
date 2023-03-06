import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { FavoriteTeam } from './components/FavoriteTeam';
import { TeamModel } from '@football/core/models/TeamModelResponse';
import { useViewModel } from './FavoriteTeamsScreen.viewModel';
import { IFavoriteTeamsScreenProps } from './FavoriteTeamsScreen.type';
import { getSize } from '@football/app/utils/responsive/scale';

export const FavoriteTeamsScreen = ({ navigation, route }: IFavoriteTeamsScreenProps) => {
    const {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        searchText,
        // searchFavTeam,
        setSearchText,
        profile,
        selectedFavTeams,
        formattedFavTeams,
        searchTextRef,
        getProfile,
        submitSearchFavTeam,
        favSelectedTeam,
    } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={[appStyles.flex]}>
            {profile.success === false && (
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        top: getSize.m(0),
                        bottom: getSize.m(0),
                        left: getSize.m(0),
                        right: getSize.m(0),
                        zIndex: 10,
                    }}
                >
                    <ActivityIndicator size="large" />
                </View>
            )}
            <FavoriteTeam
                searchTextRef={searchTextRef}
                searchText={searchText}
                submitSearchFavTeam={submitSearchFavTeam}
                searchFavTeam={(text: string) => {
                    setSearchText(text);
                    // searchFavTeam(text);
                }}
                onGoSkip={onGoSkip}
                onGoBack={onGoBack}
                handleContinue={handleContinue}
                handleSelected={(item: TeamModel) => {
                    handleSelected(item);
                }}
                newFav={formattedFavTeams}
                favSelected={getProfile.success ? favSelectedTeam : selectedFavTeams}
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
