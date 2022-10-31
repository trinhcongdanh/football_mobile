import React from 'react';
import { View } from 'react-native';
import { appStyles } from '@football/app/utils/constants/appStyles';
import { Favorite } from '@football/app/components/favorite/Favorite';
import { useViewModel } from './FavoritePlayersScreen.viewModel';
import { IFavoritePlayerScreenProps } from './FavoritePlayersScreen.type';

export const FavoritePlayersScreen = ({ navigation, route }: IFavoritePlayerScreenProps) => {
    const {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        playerSelected,
        newPlayers,
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
                newFav={newPlayers}
                favSelected={playerSelected}
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
