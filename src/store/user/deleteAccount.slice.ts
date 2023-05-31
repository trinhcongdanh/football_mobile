/* eslint-disable no-underscore-dangle */
import { axiosAuth } from '@football/core/api/auth/axiosAuth';
import { AUTH_URL } from '@football/core/api/auth/config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { isEmpty } from 'lodash';

const initialState: any = {
    deleteAccount: {},
};

export const deleteAccount = createAsyncThunk(
    'user/deleteAccount',
    async (deleteAccountData: any) => {
        const { data }: any = await axiosAuth.post(
            `${AUTH_URL}`,
            deleteAccountData,

            {
                headers: {},
            }
        );

        if (!isEmpty(data)) {
            console.log('get profile response', data);
            return data;
        }
    }
);

export const deleteAccountSlice = createSlice({
    name: 'deleteAccount',
    initialState,
    reducers: {
        clearDelete: (state, action) => {
            state.deleteAccount = {};
            state.loading = null;
            state.success = null;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(deleteAccount.pending, (state, action) => {
                state.loading = true;
                state.success = false;
            })
            .addCase(deleteAccount.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.deleteAccount = action.payload;
            })
            .addCase(deleteAccount.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
            });
    },
});

const { actions, reducer } = deleteAccountSlice;
export const { clearDelete } = actions;
export default deleteAccountSlice.reducer;
