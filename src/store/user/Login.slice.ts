/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    login: [],
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        addLogin: (state, action) => {
            state.login.push(action.payload);
        },
        removeLogin: (state, action) => {
            state.login.splice(action.payload, 1);
        },
    },
});

const { actions, reducer } = loginSlice;
export const { addLogin, removeLogin } = actions;
export default loginSlice.reducer;
