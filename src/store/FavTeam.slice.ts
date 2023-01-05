/* eslint-disable no-underscore-dangle */
import { TeamModel } from '@football/core/models/TeamModelResponse';
import { createSlice } from '@reduxjs/toolkit';

export interface FavTeamState {
    favTeams: TeamModel[];
}

const initialState: FavTeamState = {
    favTeams: [],
};

const MAX_TEAM_NUM = 3;

export const favTeamSlice = createSlice({
    name: 'favTeam',
    initialState,
    reducers: {
        setFavTeams: (state, action) => {
            state.favTeams.push(
                ...action.payload.map((v: TeamModel) => ({ ...v, isSelected: false }))
            );
        },
        pushFavTeam: (state, action) => {
            const team: TeamModel = action.payload;

            const selectedTeam = state.favTeams.find(e => e._id === team._id)!;
            const listSelectedTeam = state.favTeams.filter(e => e.isSelected);
            if (!selectedTeam.isSelected && listSelectedTeam.length === MAX_TEAM_NUM) {
                return;
            }

            selectedTeam.isSelected = !selectedTeam.isSelected;
            state.favTeams = [...state.favTeams];
        },
    },
});

const { actions, reducer } = favTeamSlice;
export const { setFavTeams, pushFavTeam } = actions;
export default favTeamSlice.reducer;
