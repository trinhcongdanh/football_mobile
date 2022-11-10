import { favTeamSlice } from '@football/app/screens/football-favorite-teams/redux/FavTeam.slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        favTeams: favTeamSlice.reducer,
    },
});
