import { configureStore } from '@reduxjs/toolkit';
import { favPlayerSlice } from './FavPlayer.slice';
import { favTeamSlice } from './FavTeam.slice';

export const store = configureStore({
    reducer: {
        favTeams: favTeamSlice.reducer,
        favPlayers: favPlayerSlice.reducer,
    },
});
