/* eslint-disable no-underscore-dangle */
import { PlayerModel } from '@football/core/models/PlayerModelResponse';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/store/store';

export interface FavPlayerState {
    favPlayers: PlayerModel[];
    selectedPlayers: PlayerModel[];
}

const initialState: FavPlayerState = {
    favPlayers: [],
    selectedPlayers: [],
};

const MAX_PLAYER_NUM = 3;

export const favPlayerSlice = createSlice({
    name: 'favPlayer',
    initialState,
    reducers: {
        setFavPlayers: (state, action: PayloadAction<PlayerModel[]>) => {
            state.favPlayers = [...action.payload];
        },
        resetFavPlayer: (state, action) => {
            state.favPlayers = [];
        },
        pushFavPlayer: (state, action: PayloadAction<PlayerModel>) => {
            const player = action.payload;
            if (
                !state.selectedPlayers.some(favPlayer =>
                    favPlayer._id===player._id
                ) && state.selectedPlayers.length < MAX_PLAYER_NUM
            ) {
                state.selectedPlayers = [...state.selectedPlayers, player];
            } else {
                state.selectedPlayers = state.selectedPlayers.filter(item => item._id !== player._id);
            }
        },
       

        addSelectedFavPlayer:(state,action)=>{
            state.selectedPlayers=action.payload;
        },

        resetSelectedFavPlayer:(state,action)=>{
            state.selectedPlayers = []
        },

        
    },
});

export function selectedFavPlayersAsMapSelector(state: RootState) {
    return state.favPlayers.selectedPlayers.reduce((result, player) => {
       result.set(player._id, player)
        return result;
    }, new Map<string, PlayerModel>);
}


const { actions, reducer } = favPlayerSlice;
export const { setFavPlayers, resetFavPlayer, pushFavPlayer,addSelectedFavPlayer,resetSelectedFavPlayer } = actions;
export default favPlayerSlice.reducer;
