import { LeagueSeasonModel } from './../../core/models/LeagueSeasonModelResponse';
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */

import { LeagueModel, LeagueTypeModel } from '@football/core/models/LeagueModelResponse';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LeagueState {
    leagueTypes: LeagueTypeModel[];
    searchLeagues: LeagueModel[];
    leagueSeasons: LeagueSeasonModel[];
}

const initialState: LeagueState = {
    leagueTypes: [],
    searchLeagues: [],
    leagueSeasons: [],
};
const MAX_LEAGUE_TYPE_NUM = 2;
export const leagueSlice = createSlice({
    name: 'league',
    initialState,
    reducers: {
        setLeagueTypes: (state, action: PayloadAction<LeagueTypeModel[]>) => {
            state.leagueTypes = [...action.payload];
        },
        setLeagueSeasons: (state, action: PayloadAction<LeagueSeasonModel[]>) => {
            state.leagueSeasons = [...action.payload];
        },
        setSearchLeagues: (state, action: PayloadAction<LeagueModel[]>) => {
            state.searchLeagues = [...action.payload];
        },
        pushLeagueType: (state, action: PayloadAction<LeagueTypeModel>) => {
            const leagueType = action.payload;

            if (
                !state.leagueTypes.some(e => e._id === leagueType._id) &&
                state.leagueTypes.length < MAX_LEAGUE_TYPE_NUM
            ) {
                state.leagueTypes = [...state.leagueTypes, leagueType];
            } else {
                state.leagueTypes = state.leagueTypes.filter(item => item._id !== leagueType._id);
            }
        },
        resetLeagueTypes: state => {
            state.leagueTypes = [];
        },
        resetSearchLeagues: state => {
            state.searchLeagues = [];
        },
    },
});

const { actions, reducer } = leagueSlice;
export const {
    setLeagueTypes,
    setLeagueSeasons,
    pushLeagueType,
    resetLeagueTypes,
    resetSearchLeagues,
    setSearchLeagues,
} = actions;
export default reducer;
