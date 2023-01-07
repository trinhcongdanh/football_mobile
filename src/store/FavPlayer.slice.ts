/* eslint-disable no-underscore-dangle */
import { PlayerModel } from '@football/core/models/PlayerModelResponse';
import { Position, TeamPersonnelModel } from '@football/core/models/TeamPersonnelResponse';
import { createSlice } from '@reduxjs/toolkit';

export interface FavPlayerState {
    favPlayers: PlayerModel[];
    groupsPlayer: Position[];
}

const initialState: FavPlayerState = {
    favPlayers: [],
    groupsPlayer: [],
};

const MAX_TEAM_NUM = 3;

export const favPlayerSlice = createSlice({
    name: 'favPlayer',
    initialState,
    reducers: {
        setGroupFavPlayer: (state, action) => {
            state.groupsPlayer.push(
                ...action.payload.map((v: Position) => ({ ...v, isSelected: false }))
            );
        },
        pushGroupFavPlayer: (state, action) => {
            const player: Position = action.payload;

            const selectedPlayer = state.groupsPlayer.find(e => e.player_id === player.player_id)!;
            const listSelectedPlayer = state.groupsPlayer.filter(e => e.isSelected);

            if (!selectedPlayer.isSelected && listSelectedPlayer.length === MAX_TEAM_NUM) {
                return;
            }

            selectedPlayer.isSelected = !selectedPlayer.isSelected;
            state.groupsPlayer = [...state.groupsPlayer];
        },
        setAllFavPlayers: (state, action) => {
            state.favPlayers.push(
                ...action.payload.map((v: PlayerModel) => ({ ...v, isSelected: false }))
            );
        },
        pushAllFavPlayers: (state, action) => {
            const player: PlayerModel = action.payload;

            const selectedPlayer = state.favPlayers.find(e => e._id === player._id)!;
            const listSelectedPlayer = state.favPlayers.filter(e => e.isSelected);

            if (!selectedPlayer.isSelected && listSelectedPlayer.length === MAX_TEAM_NUM) {
                return;
            }

            selectedPlayer.isSelected = !selectedPlayer.isSelected;
            state.favPlayers = [...state.favPlayers];
        },
        resetAllFavPlayers: (state, action) => {
            state.favPlayers = [];
        },
        resetGroupFavPlayer: (state, action) => {
            state.groupsPlayer = [];
        },
    },
});

const { actions, reducer } = favPlayerSlice;
export const {
    setAllFavPlayers,
    pushAllFavPlayers,
    setGroupFavPlayer,
    pushGroupFavPlayer,
    resetAllFavPlayers,
    resetGroupFavPlayer,
} = actions;
export default favPlayerSlice.reducer;
