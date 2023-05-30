import { appStyles } from '@football/app/utils/constants/appStyles';
import { getSize } from '@football/app/utils/responsive/scale';
import { MAX_FAVORITES_TEAM } from '@football/core/api/configs/config';
import { TeamModel } from '@football/core/models/TeamModelResponse';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { FavoriteTeam } from './components/FavoriteTeam';
import { IFavoriteTeamsScreenProps } from './FavoriteTeamsScreen.type';
import { useViewModel } from './FavoriteTeamsScreen.viewModel';

export const FavoriteTeamsScreen = ({ navigation, route }: IFavoriteTeamsScreenProps) => {
    const {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        // searchFavTeam,
        profile,
        selectedFavTeams,
        // formattedFavTeams,
        searchTextRef,
        getProfile,
        submitSearchFavTeam,
        // formattedFavTeamsProfile,
        isLoading,
        // selectedTeamsProfile,
        onSearchFavTeam,
        teams,
    } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={[appStyles.flex]}>
            {profile?.success === false && (
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
                submitSearchFavTeam={(text: string) => submitSearchFavTeam(text)}
                searchFavTeam={onSearchFavTeam}
                // searchFavTeam={(text: string) => {
                //     // setSearchText(text);
                //     // searchFavTeam(text);
                //     onSearchFavTeam(text);
                // }}
                onGoSkip={onGoSkip}
                onGoBack={onGoBack}
                handleContinue={handleContinue}
                handleSelected={(item: TeamModel) => {
                    handleSelected(item);
                }}
                isLoading={isLoading}
                // newFav={getProfile?.success ? formattedFavTeamsProfile : formattedFavTeams}
                favSelected={selectedFavTeams}
                teams={teams}
                title={t('favorite_team.title')}
                placeholder={t('favorite_team.place_holder')}
                chosen={t('favorite_team.chosen')}
                button={t('favorite_team.button')}
                number={MAX_FAVORITES_TEAM}
                onIndex={0}
            />
        </View>
    );
};
