/* eslint-disable no-underscore-dangle */
import { TeamModel } from '@football/core/models/TeamModelResponse';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/store/store';

export interface FavTeamState {
    favTeams: TeamModel[];
    selectedTeams: TeamModel[];
    selectedTeamsProfile: TeamModel[];
}

const initialState: FavTeamState = {
    favTeams: [],
    selectedTeams: [],
    selectedTeamsProfile:[],
};

const MAX_TEAM_NUM = 3;

export const favTeamSlice = createSlice({
    name: 'favTeam',
    initialState,
    reducers: {
        setFavTeams: (state, action: PayloadAction<TeamModel[]>) => {
            state.favTeams = [...action.payload];
        },
        resetFavTeam: (state, action) => {
            state.favTeams = [];
        },
        pushFavTeam: (state, action: PayloadAction<TeamModel>) => {
            const team = action.payload;
            if (
                !state.selectedTeams.some(favTeam =>
                    favTeam._id===team._id
                ) && state.selectedTeams.length < MAX_TEAM_NUM
            ) {
                state.selectedTeams = [...state.selectedTeams, team];
            } else {
                state.selectedTeams = state.selectedTeams.filter(item => item._id !== team._id);
            }
        },
        pushFavTeamProfile: (state, action: PayloadAction<TeamModel>) => {
            const team = action.payload;
            if (
                !state.selectedTeamsProfile.some(favTeam =>
                    favTeam._id===team._id
                ) && state.selectedTeamsProfile.length < MAX_TEAM_NUM
            ) {
                state.selectedTeamsProfile = [...state.selectedTeamsProfile, team];
            } else {
                state.selectedTeamsProfile = state.selectedTeamsProfile.filter(item => item._id !== team._id);
            }
        },
        resetSelectedFavTeam:(state,action)=>{
            state.selectedTeams = []
        },

        resetSelectedFavTeamProfile:(state, action)=>{
            state.selectedTeamsProfile=[]
        },
        
    },
});

export function selectedFavTeamsAsMapSelector(state: RootState) {
    return state.favTeams.selectedTeams.reduce((result, team) => {
       result.set(team._id, team)
        return result;
    }, new Map<string, TeamModel>);
}

export function selectedFavTeamsProfileAsMapSelector(state: RootState) {
    return state.favTeams.selectedTeamsProfile.reduce((result, team) => {
       result.set(team._id, team)
        return result;
    }, new Map<string, TeamModel>);
}
const { actions, reducer } = favTeamSlice;
export const { setFavTeams, pushFavTeam, resetFavTeam,resetSelectedFavTeam,resetSelectedFavTeamProfile,pushFavTeamProfile } = actions;
export default favTeamSlice.reducer;
