/* eslint-disable no-underscore-dangle */
import { PlayerModel } from '@football/core/models/PlayerModelResponse';
import { createSlice } from '@reduxjs/toolkit';

export interface FavPlayerState {
    favPlayers: PlayerModel[];
}

const initialState: FavPlayerState = {
    favPlayers: [],
};

export const favPlayerSlice = createSlice({
    name: 'favTeam',
    initialState,
    reducers: {
        addPlayerTeams: (state, action) => {
            state.favPlayers.push(action.payload);
        },
        removePlayerTeams: (state, action) => {
            state.favPlayers.splice(action.payload, 1);
        },
    },
});

const { actions, reducer } = favPlayerSlice;
export const { addPlayerTeams, removePlayerTeams } = actions;
export default reducer;
