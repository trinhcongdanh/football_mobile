/* eslint-disable no-underscore-dangle */
import { PlayerModel } from '@football/core/models/PlayerModelResponse';
import { Position } from '@football/core/models/TeamPersonnelResponse';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/store/store';
// import { isEmpty, pick } from 'lodash';
// import { axiosClient } from '@football/core/api/configs/axiosClient';
// import { BASE_URL } from '@football/core/api/configs/config';

export type SelectedPlayer = Pick<PlayerModel, '_id'| "name_en"|"name_he"| "image_url">

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
    searchPlayers: {
        id: string;
        label: string;
        listFavPlayers: PlayerModel[];
    }[];

    selectedPlayers: PlayerModel[];
    // loading: any,
    // success:any
}

const initialState: FavPlayerState = {
    favPlayers: [],
    groupPlayers: [],
    searchPlayers: [],
    selectedPlayers: [],
    // loading:null,
    // success:null,
};


const MAX_TEAM_NUM = 3;

// export const searchFilterPlayers=createAsyncThunk(
//     "fav/searchFilterPlayers",
//     async (dataSearch:any)=>{
//         const {data}:PlayersModelResponse=await axiosClient.post(`${BASE_URL}/find`,
//             dataSearch
//         )
        
//         if (!isEmpty(data)){
//             return data;
//         }
//     }
// )

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
                listFavPlayers: [...action.payload.listFavPlayers],
            });
        },
        pushGroupFavPlayer: (state,  action: PayloadAction< SelectedPlayer >) => {
            const player = action.payload;

            if (
                !state.selectedPlayers.some(
                    (favPlayer) => favPlayer._id === player._id
                ) &&
                state.selectedPlayers.length < MAX_TEAM_NUM
            ) {
                state.selectedPlayers = [...state.selectedPlayers, player];
            } else {
                state.selectedPlayers = state.selectedPlayers.filter(
                    item => item._id !== player._id
                );
            }
        },

        setAllFavPlayers: (
            state,
            action: PayloadAction<{ id: string; label: string; listFavPlayers: PlayerModel[] }>
        ) => {
            state.favPlayers.push({
                id: action.payload.id,
                label: action.payload.label,
                listFavPlayers: [...action.payload.listFavPlayers],
            });
        },
        pushAllFavPlayers: (state, action: PayloadAction<SelectedPlayer>) => {
            const player = action.payload;

            if (
                !state.selectedPlayers.some((favPlayer) => favPlayer._id === player._id) &&
                state.selectedPlayers.length < MAX_TEAM_NUM
            ) {
                state.selectedPlayers = [...state.selectedPlayers, player];
            } else {
                state.selectedPlayers = state.selectedPlayers.filter(
                    item => item._id !== player._id
                );
            }
        },
        searchFavPlayers: (
            state,
            action: PayloadAction<{ id: string; label: string; listFavPlayers: PlayerModel[] }>
        ) => {
            state.searchPlayers.push({
                id: action.payload.id,
                label: action.payload.label,
                listFavPlayers: [...action.payload.listFavPlayers],
            });
        },
        pushSearchFavPlayers: (state, action:PayloadAction<SelectedPlayer>) => {
            const player = action.payload;

            if (
                !state.selectedPlayers.some((favPlayer) => favPlayer._id === player._id) &&
                state.selectedPlayers.length < MAX_TEAM_NUM
            ) {
                state.selectedPlayers = [...state.selectedPlayers, player];
            } else {
                state.selectedPlayers = state.selectedPlayers.filter(
                    item => item._id !== player._id
                );
            }
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
        resetSearchFavPlayer: (
            state,
            action: PayloadAction<{ id: string; label: string; listFavPlayers: Position[] }>
        ) => {
            state.searchPlayers = [];
        },
    },
    // extraReducers:builder=>{
    //     builder
    //     .addCase(searchFilterPlayers.pending, (state, action) => {
    //         state.loading = true;
    //         state.success = false;
    //     })
    //     .addCase(searchFilterPlayers.fulfilled, (state, action) => {
    //         state.loading = false;
    //         state.success = true;
    //         console.log(action.payload);
    //         state.searchPlayers.push({
    //             id: 'a',
    //             label: '',
    //             listFavPlayers: [...action.payload?.documents],
    //         });
    //     })
    //     .addCase(searchFilterPlayers.rejected, (state, action) => {
    //         state.loading = false;
    //         state.success = false;
    //     });
    // }
});

export function selectedFavPlayersAsMapSelector(state: RootState) {
    return state.favPlayers.selectedPlayers.reduce((result, player) => {
       result.set(player._id, player)
        return result;
    }, new Map<string, SelectedPlayer>);
}

const { actions, reducer } = favPlayerSlice;
export const {
    setAllFavPlayers,
    pushAllFavPlayers,
    setGroupFavPlayer,
    pushGroupFavPlayer,
    searchFavPlayers,
    pushSearchFavPlayers,
    resetAllFavPlayers,
    resetGroupFavPlayer,
    resetSearchFavPlayer,
} = actions;
export default favPlayerSlice.reducer;
