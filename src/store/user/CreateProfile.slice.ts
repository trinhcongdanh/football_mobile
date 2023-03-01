/* eslint-disable no-underscore-dangle */

import { axiosAuth } from '@football/core/api/auth/axiosAuth';
import { AUTH_URL } from '@football/core/api/auth/config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { isEmpty } from 'lodash';

const initialState: any = {
    profile: {},
};

export const createProfileUser = createAsyncThunk(
    'user/createProfileUser',
    async (profileData: any) => {
        const { data }: any = await axiosAuth.post(
            `${AUTH_URL}`,
            profileData,

            {
                headers: {},
            }
        );

        if (!isEmpty(data)) {
            return data;
        }
    }
);

export const createProfileSlice = createSlice({
    name: 'createProfile',
    initialState,
    reducers: {
        clearCreateProfile: (state, action) => {
            state.profile = action.payload;
            state.loading = null;
            state.success = null;
        },
    },

    extraReducers: builder => {
        builder
            .addCase(createProfileUser.pending, (state, action) => {
                state.loading = true;
                state.success = false;
            })
            .addCase(createProfileUser.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.profile = action.payload.item;
            })
            .addCase(createProfileUser.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
            });
    },
});

const { actions, reducer } = createProfileSlice;
export const { clearCreateProfile } = actions;
export default createProfileSlice.reducer;
