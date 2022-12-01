import { configureStore } from '@reduxjs/toolkit';
import { favPlayerSlice } from './FavPlayer.slice';
import { favTeamSlice } from './FavTeam.slice';
import { favTopTeamSlice } from './FavTopTeam.slice';

export const store = configureStore({
    reducer: {
        favTeams: favTeamSlice.reducer,
        favPlayers: favPlayerSlice.reducer,
        favTopTeams: favTopTeamSlice.reducer,
    },
});
