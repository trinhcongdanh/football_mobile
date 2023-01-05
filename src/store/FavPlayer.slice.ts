/* eslint-disable no-underscore-dangle */
import { PlayerModel } from '@football/core/models/PlayerModelResponse';
import { createSlice } from '@reduxjs/toolkit';

export interface FavPlayerState {
    favPlayers: PlayerModel[];
}

const initialState: FavPlayerState = {
    favPlayers: [],
};

const MAX_TEAM_NUM = 3;

export const favPlayerSlice = createSlice({
    name: 'favPlayer',
    initialState,
    reducers: {
        setFavPlayers: (state, action) => {
            state.favPlayers.push(
                ...action.payload.map((v: PlayerModel) => ({ ...v, isSelected: false }))
            );
        },
        pushFavPlayer: (state, action) => {
            const player: PlayerModel = action.payload;

            const selectedPlayer = state.favPlayers.find(e => e._id === player._id)!;
            const listSelectedPlayer = state.favPlayers.filter(e => e.isSelected);

            if (!selectedPlayer.isSelected && listSelectedPlayer.length === MAX_TEAM_NUM) {
                return;
            }

            selectedPlayer.isSelected = !selectedPlayer.isSelected;
            state.favPlayers = [...state.favPlayers];
        },
    },
});

const { actions, reducer } = favPlayerSlice;
export const { setFavPlayers, pushFavPlayer } = actions;
export default favPlayerSlice.reducer;
