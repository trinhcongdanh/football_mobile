import { resetFavPlayer, resetSelectedFavPlayer } from 'src/store/FavPlayer.slice';
import { resetFavTeam, resetSelectedFavTeam } from 'src/store/FavTeam.slice';
import { resetSelectedFavTopTeams, resetTopTeams } from 'src/store/FavTopTeam.slice';

export const clearFavoriteData = (dispatch: any) => {
    dispatch(resetFavTeam([]));
    dispatch(resetSelectedFavTeam([]));
    dispatch(resetFavPlayer([]));
    dispatch(resetSelectedFavPlayer([]));
    dispatch(resetTopTeams([]));
    dispatch(resetSelectedFavTopTeams([]));
};
