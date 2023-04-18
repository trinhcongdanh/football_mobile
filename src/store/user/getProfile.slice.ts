/* eslint-disable no-underscore-dangle */
import { axiosAuth } from '@football/core/api/auth/axiosAuth';
import { AUTH_URL } from '@football/core/api/auth/config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { isEmpty } from 'lodash';

const initialState: any = {
    getProfile: {},
};

export const getProfileUser = createAsyncThunk('user/getProfile', async (getProfileData: any) => {
    const { data }: any = await axiosAuth.post(
        `${AUTH_URL}`,
        getProfileData,

        {
            headers: {},
        }
    );

    if (!isEmpty(data)) {
        console.log('get profile response', data);
        return data;
    }
});

export const getProfileSlice = createSlice({
    name: 'setProfile',
    initialState,
    reducers: {
        clearGetProfile: (state, action) => {
            state.getProfile = {};
            state.loading = null;
            state.success = null;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getProfileUser.pending, (state, action) => {
                state.loading = true;
                state.success = false;
            })
            .addCase(getProfileUser.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.getProfile = action.payload;
            })
            .addCase(getProfileUser.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
            });
    },
});

const { actions, reducer } = getProfileSlice;
export const { clearGetProfile } = actions;
export default getProfileSlice.reducer;
