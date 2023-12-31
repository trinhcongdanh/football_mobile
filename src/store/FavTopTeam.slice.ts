/* eslint-disable no-underscore-dangle */
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/store/store';

export interface FavTopTeamState {
    favTopTeams: TopTeamModel[];
    selectedTopTeams: TopTeamModel[];
}

const initialState: FavTopTeamState = {
    favTopTeams: [],
    selectedTopTeams: [],
};
const MAX_TEAM_NUM = 2;
export const favTopTeamSlice = createSlice({
    name: 'favTopTeam',
    initialState,
    reducers: {
        setFavTopTeams: (state, action: PayloadAction<TopTeamModel[]>) => {
            state.favTopTeams = [...action.payload];
        },
        pushFavTopTeam: (state, action: PayloadAction<TopTeamModel>) => {
            const topTeam = action.payload;

            if (
                !state.selectedTopTeams.some(favTopTeam => favTopTeam._id === topTeam._id) &&
                state.selectedTopTeams.length < MAX_TEAM_NUM
            ) {
                state.selectedTopTeams = [...state.selectedTopTeams, topTeam];
            } else {
                state.selectedTopTeams = state.selectedTopTeams.filter(
                    item => item._id !== topTeam._id
                );
            }
        },
        resetTopTeams: (state, action) => {
            state.favTopTeams = [];
        },
    },
});

export function selectedFavTopTeamsAsMapSelector(state: RootState) {
    return state.favTopTeams.selectedTopTeams.reduce((result, topTeam) => {
       result.set(topTeam._id, topTeam)
        return result;
    }, new Map<string, TopTeamModel>);
}

const { actions, reducer } = favTopTeamSlice;
export const { setFavTopTeams, pushFavTopTeam, resetTopTeams } = actions;
export default favTopTeamSlice.reducer;
