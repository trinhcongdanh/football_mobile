/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    guestId: [],
};

export const guestIdSlice = createSlice({
    name: 'guestId',
    initialState,
    reducers: {
        addGuestId: (state, action) => {
            state.guestId.push(action.payload);
        },
        removeGuestId: (state, action) => {
            state.guestId = action.payload;
        },
    },
});

const { actions, reducer } = guestIdSlice;
export const { addGuestId, removeGuestId } = actions;
export default guestIdSlice.reducer;
