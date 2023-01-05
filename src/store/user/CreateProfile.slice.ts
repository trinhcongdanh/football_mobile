/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    profile: [],
};

export const createProfileSlice = createSlice({
    name: 'createProfile',
    initialState,
    reducers: {
        addProfile: (state, action) => {
            state.profile.push(action.payload);
        },
        removeProfile: (state, action) => {
            state.profile.splice(action.payload, 1);
        },
    },
});

const { actions, reducer } = createProfileSlice;
export const { addProfile, removeProfile } = actions;
export default createProfileSlice.reducer;
