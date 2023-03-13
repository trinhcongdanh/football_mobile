import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { PlayerModel } from '@football/core/models/PlayerModelResponse';
import { useViewModel } from './FavoritePlayersScreen.viewModel';
import { IFavoritePlayerScreenProps } from './FavoritePlayersScreen.type';
import { FavoritePlayer } from './components/FavoritePlayer';
// import { Position } from '@football/core/models/TeamPersonnelResponse';
import { Players } from '@football/core/models/TeamPersonnelResponse';
import { getSize } from '@football/app/utils/responsive/scale';
import { isEmpty } from 'lodash';

export const FavoritePlayersScreen = ({ navigation, route }: IFavoritePlayerScreenProps) => {
    const {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        searchFavPlayer,
        setSearchText,
        searchText,
        favPlayers,
        favSelectedPlayers,
        profile,
        favSearchPlayers,
        favSelectedSearchPlayers,
        formattedSearchFavPlayers,
        selectedFavPlayers,
        formattedFavPlayers,
        submitSearchFavPlayer,
        handleFocusSearch,
        getProfile,
        favSelectedPlayer,
        selectedPlayersProfile,
        setFocusSearch,
        isLoading,
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
            <FavoritePlayer
                searchText={searchText}
                onGoSkip={onGoSkip}
                onGoBack={onGoBack}
                // handleFocusSearch={() => setFocusSearch(true)}
                handleContinue={handleContinue}
                submitSearchFavPlayer={submitSearchFavPlayer}
                searchFavPlayer={(text: string) => {
                    setSearchText(text);
                }}
                handleSelected={(item: PlayerModel | Players) => {
                    handleSelected(item);
                }}
                newFav={
                    !isEmpty(favSearchPlayers) ? formattedSearchFavPlayers : formattedFavPlayers
                }
                isLoading={isLoading}
                favSelected={getProfile.success ? selectedPlayersProfile : selectedFavPlayers}
                title={t('favorite_player.title')}
                placeholder={t('favorite_player.place_holder')}
                chosen={t('favorite_player.chosen')}
                button={t('favorite_player.button')}
                number={3}
                onIndex={1}
            />
        </View>
    );
};
