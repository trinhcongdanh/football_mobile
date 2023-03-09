import {
    resetAllFavPlayers,
    resetGroupFavPlayer,
    resetSearchFavPlayer,
    resetSelectedFavPlayer,
} from 'src/store/FavPlayer.slice';
import { resetFavTeam, resetSelectedFavTeam } from 'src/store/FavTeam.slice';
import { resetSelectedFavTopTeams, resetTopTeams } from 'src/store/FavTopTeam.slice';

export const clearFavoriteData = (dispatch: any) => {
    dispatch(resetFavTeam([]));
    dispatch(resetSelectedFavTeam([]));
    dispatch(
        resetSearchFavPlayer({
            id: '',
            label: '',
            listFavPlayers: [],
        })
    );
    dispatch(
        resetAllFavPlayers({
            id: '',
            label: '',
            listFavPlayers: [],
        })
    );
    dispatch(
        resetGroupFavPlayer({
            id: '',
            label: '',
            listFavPlayers: [],
        })
    );
    dispatch(resetSelectedFavPlayer([]));
    dispatch(resetTopTeams([]));
    dispatch(resetSelectedFavTopTeams([]));
};
