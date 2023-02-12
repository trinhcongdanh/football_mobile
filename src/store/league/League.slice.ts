/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */

import { LeagueTypeModel } from '@football/core/models/LeagueModelResponse';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LeagueState {
    leagueTypes: LeagueTypeModel[];
}

const initialState: LeagueState = {
    leagueTypes: [],
};
const MAX_LEAGUE_TYPE_NUM = 2;
export const leagueSlice = createSlice({
    name: 'league',
    initialState,
    reducers: {
        setLeagueTypes: (state, action: PayloadAction<LeagueTypeModel[]>) => {
            state.leagueTypes = [...action.payload];
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
    },
});

const { actions, reducer } = leagueSlice;
export const { setLeagueTypes, pushLeagueType, resetLeagueTypes } = actions;
export default reducer;
