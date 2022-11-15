/* eslint-disable no-underscore-dangle */
import { TeamModel } from '@football/core/models/TeamModelResponse';
import { createSlice } from '@reduxjs/toolkit';

export interface FavTeamState {
    favTeams: TeamModel[];
}

const initialState: FavTeamState = {
    favTeams: [],
};

export const favTeamSlice = createSlice({
    name: 'favTeam',
    initialState,
    reducers: {
        addFavTeams: (state, action) => {
            state.favTeams.push(action.payload);
        },
        removeFavTeams: (state, action) => {
            state.favTeams.splice(action.payload, 1);
        },
    },
});

const { actions, reducer } = favTeamSlice;
export const { addFavTeams, removeFavTeams } = actions;
export default reducer;
