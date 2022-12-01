/* eslint-disable no-underscore-dangle */
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import { createSlice } from '@reduxjs/toolkit';

export interface FavTopTeamState {
    favTopTeams: TopTeamModel[];
}

const initialState: FavTopTeamState = {
    favTopTeams: [],
};

export const favTopTeamSlice = createSlice({
    name: 'favTopTeam',
    initialState,
    reducers: {
        addFavTopTeams: (state, action) => {
            state.favTopTeams.push(action.payload);
        },
        removeFavTopTeams: (state, action) => {
            state.favTopTeams.splice(action.payload, 1);
        },
    },
});

const { actions, reducer } = favTopTeamSlice;
export const { addFavTopTeams, removeFavTopTeams } = actions;
export default reducer;
