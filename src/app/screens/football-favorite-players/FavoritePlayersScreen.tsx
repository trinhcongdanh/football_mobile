import React from 'react';
import { View } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { PlayerModel } from '@football/core/models/PlayerModelResponse';
import { useViewModel } from './FavoritePlayersScreen.viewModel';
import { IFavoritePlayerScreenProps } from './FavoritePlayersScreen.type';
import { FavoritePlayer } from './components/FavoritePlayer';
import { Position } from '@football/core/models/TeamPersonnelResponse';

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
    } = useViewModel({
        navigation,
        route,
    });

    return (
        <View style={[appStyles.flex]}>
            <FavoritePlayer
                searchText={searchText}
                onGoSkip={onGoSkip}
                onGoBack={onGoBack}
                handleContinue={handleContinue}
                searchFavPlayer={(text: string) => {
                    setSearchText(text);
                    searchFavPlayer(text);
                }}
                handleSelected={(item: PlayerModel | Position) => {
                    handleSelected(item);
                }}
                newFav={favPlayers}
                favSelected={favSelectedPlayers}
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
