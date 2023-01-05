/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    registerFacebook: [],
};

export const removeRegisterFacebookSlice = createSlice({
    name: 'registerFacebook',
    initialState,
    reducers: {
        addRegisterFacebook: (state, action) => {
            state.registerFacebook.push(action.payload);
        },
        removeRegisterFacebook: (state, action) => {
            state.registerFacebook.splice(action.payload, 1);
        },
    },
});

const { actions, reducer } = removeRegisterFacebookSlice;
export const { addRegisterFacebook, removeRegisterFacebook } = actions;
export default removeRegisterFacebookSlice.reducer;
