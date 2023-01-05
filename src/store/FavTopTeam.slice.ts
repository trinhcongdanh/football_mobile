/* eslint-disable no-underscore-dangle */
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import { createSlice } from '@reduxjs/toolkit';

export interface FavTopTeamState {
    favTopTeams: TopTeamModel[];
}

const initialState: FavTopTeamState = {
    favTopTeams: [],
};
const MAX_TEAM_NUM = 2;
export const favTopTeamSlice = createSlice({
    name: 'favTopTeam',
    initialState,
    reducers: {
        setFavTopTeams: (state, action) => {
            state.favTopTeams.push(
                ...action.payload.map((v: TopTeamModel) => ({ ...v, isSelected: false }))
            );
        },
        pushFavTopTeam: (state, action) => {
            const topTeam: TopTeamModel = action.payload;

            const selectedTopTeam = state.favTopTeams.find(e => e._id === topTeam._id)!;
            const listSelectedTopTeam = state.favTopTeams.filter(e => e.isSelected);

            if (!selectedTopTeam.isSelected && listSelectedTopTeam.length === MAX_TEAM_NUM) {
                return;
            }

            selectedTopTeam.isSelected = !selectedTopTeam.isSelected;
            state.favTopTeams = [...state.favTopTeams];
        },
    },
});

const { actions, reducer } = favTopTeamSlice;
export const { setFavTopTeams, pushFavTopTeam } = actions;
export default favTopTeamSlice.reducer;
