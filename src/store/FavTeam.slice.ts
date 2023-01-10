/* eslint-disable no-underscore-dangle */
import { TeamModel } from '@football/core/models/TeamModelResponse';
import { createSlice } from '@reduxjs/toolkit';
import { isEmpty } from 'lodash';

export interface FavTeamState {
    favTeams: TeamModel[];
    selectedTeams: TeamModel[];
}

const initialState: FavTeamState = {
    favTeams: [],
    selectedTeams: [],
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
        resetFavTeam: (state, action) => {
            state.favTeams = [];
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

            // state.favTeams.map(team => {
            //     if (team.isSelected && isEmpty(state.selectedTeams)) {
            //         state.selectedTeams = [...state.selectedTeams, team];
            //     } else if (team.isSelected && !isEmpty(state.selectedTeams)) {
            //         state.selectedTeams.map(e => {
            //             if (team._id !== e._id) {
            //                 state.selectedTeams = [...state.selectedTeams, team];
            //             }
            //         });
            //     } else if (!team.isSelected) {
            //         state.selectedTeams = state.selectedTeams.filter(item => item._id !== team._id);
            //     }
            // });
        },
        // pushSelectedFavTeam: (state, action) => {
        //     const team: TeamModel = action.payload;
        //     const selectedTeam = state.favTeams.find(e => e._id === team._id)!
        //     if (team.isSelected === false) {
        //         team.isSelected = true;
        //         state.selectedTeams.push(team);
        //     } else {
        //         team.isSelected = false;
        //         state.selectedTeams = state.selectedTeams.filter(item => item._id !== team._id);
        //     }
        // },
    },
});

const { actions, reducer } = favTeamSlice;
export const { setFavTeams, pushFavTeam, resetFavTeam } = actions;
export default favTeamSlice.reducer;
