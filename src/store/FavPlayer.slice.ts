/* eslint-disable no-underscore-dangle */
import { PlayerModel } from '@football/core/models/PlayerModelResponse';
import { Position } from '@football/core/models/TeamPersonnelResponse';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FavPlayerState {
    favPlayers: {
        id: string;
        label: string;
        listFavPlayers: PlayerModel[];
    }[];
    groupPlayers: {
        id: string;
        label: string;
        listFavPlayers: Position[];
    }[];
}

const initialState: FavPlayerState = {
    favPlayers: [],
    groupPlayers: [],
};

const MAX_TEAM_NUM = 3;

export const favPlayerSlice = createSlice({
    name: 'favPlayer',
    initialState,
    reducers: {
        setGroupFavPlayer: (
            state,
            action: PayloadAction<{ id: string; label: string; listFavPlayers: Position[] }>
        ) => {
            state.groupPlayers.push({
                id: action.payload.id,
                label: action.payload.label,
                listFavPlayers: action.payload.listFavPlayers.map((v: Position) => ({
                    ...v,
                    isSelected: false,
                })),
            });
        },
        pushGroupFavPlayer: (state, action) => {
            const player: Position = action.payload;

            state.groupPlayers.map(groupPlayer => {
                const selectedPlayer = groupPlayer.listFavPlayers.find(
                    e => e.player_id === player.player_id
                );

                const listSelectedPlayer = groupPlayer.listFavPlayers.filter(e => e.isSelected);
                if (selectedPlayer?.isSelected !== undefined) {
                    if (!selectedPlayer?.isSelected && listSelectedPlayer.length === MAX_TEAM_NUM) {
                        return;
                    }

                    selectedPlayer!.isSelected = !selectedPlayer?.isSelected;
                }
                groupPlayer.listFavPlayers = [...groupPlayer.listFavPlayers];
            });
        },

        setAllFavPlayers: (
            state,
            action: PayloadAction<{ id: string; label: string; listFavPlayers: PlayerModel[] }>
        ) => {
            state.favPlayers.push({
                id: action.payload.id,
                label: action.payload.label,
                listFavPlayers: action.payload.listFavPlayers.map((v: PlayerModel) => ({
                    ...v,
                    isSelected: false,
                })),
            });
        },
        pushAllFavPlayers: (state, action) => {
            const player: PlayerModel = action.payload;

            state.favPlayers.map(favPlayer => {
                const selectedPlayer = favPlayer.listFavPlayers.find(e => e._id === player._id);
                const listSelectedPlayer = favPlayer.listFavPlayers.filter(e => e.isSelected);
                if (!selectedPlayer!.isSelected && listSelectedPlayer.length === MAX_TEAM_NUM) {
                    return;
                }

                selectedPlayer!.isSelected = !selectedPlayer!.isSelected;
                favPlayer.listFavPlayers = [...favPlayer.listFavPlayers];
            });
        },
        resetAllFavPlayers: (
            state,
            action: PayloadAction<{ id: string; label: string; listFavPlayers: PlayerModel[] }>
        ) => {
            state.favPlayers = [];
        },
        resetGroupFavPlayer: (
            state,
            action: PayloadAction<{ id: string; label: string; listFavPlayers: Position[] }>
        ) => {
            state.groupPlayers = [];
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
