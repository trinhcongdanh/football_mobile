/* eslint-disable no-underscore-dangle */
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/store/store';

export interface FavTopTeamState {
    favTopTeams: TopTeamModel[];
    selectedTopTeams: TopTeamModel[];
    selectedTopTeamsProfile: TopTeamModel[];
}

const initialState: FavTopTeamState = {
    favTopTeams: [],
    selectedTopTeams: [],
    selectedTopTeamsProfile:[]
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
        resetSelectedFavTopTeams:(state,action)=>{
            state.selectedTopTeams=[]
        },

        pushFavTopTeamProfile: (state, action: PayloadAction<TopTeamModel>) => {
            const topTeam = action.payload;
            if (
                !state.selectedTopTeamsProfile.some(favTopTeam => favTopTeam._id === topTeam._id) &&
                state.selectedTopTeamsProfile.length < MAX_TEAM_NUM
            ) {
                state.selectedTopTeamsProfile = [...state.selectedTopTeamsProfile, topTeam];
            } else {
                state.selectedTopTeamsProfile = state.selectedTopTeamsProfile.filter(
                    item => item._id !== topTeam._id
                );
            }
        },
        resetSelectedFavTopTeamsProfile:(state,action)=>{
            state.selectedTopTeamsProfile= []
        }
    },
});

export function selectedFavTopTeamsAsMapSelector(state: RootState) {
    return state.favTopTeams.selectedTopTeams.reduce((result, topTeam) => {
       result.set(topTeam._id, topTeam)
        return result;
    }, new Map<string, TopTeamModel>);
}

export function selectedFavTopTeamsProfileAsMapSelector(state: RootState) {
    return state.favTopTeams.selectedTopTeamsProfile.reduce((result, topTeam) => {
       result.set(topTeam._id, topTeam)
        return result;
    }, new Map<string, TopTeamModel>);
}


const { actions, reducer } = favTopTeamSlice;
export const { setFavTopTeams, pushFavTopTeam, resetTopTeams,resetSelectedFavTopTeams,resetSelectedFavTopTeamsProfile, pushFavTopTeamProfile } = actions;
export default favTopTeamSlice.reducer;
