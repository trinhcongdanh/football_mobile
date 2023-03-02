/* eslint-disable no-underscore-dangle */
import { axiosAuth } from '@football/core/api/auth/axiosAuth';
import { AUTH_URL } from '@football/core/api/auth/config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { isEmpty } from 'lodash';

const initialState: any = {
    setProfile: {},
};

export const setProfileUser = createAsyncThunk('user/setProfile', async (setProfileData: any) => {
    const { data }: any = await axiosAuth.post(
        `${AUTH_URL}`,
        setProfileData,

        {
            headers: {},
        }
    );

    if (!isEmpty(data)) {
        console.log(data);
        return data;
    }
});

export const setProfileSlice = createSlice({
    name: 'setProfile',
    initialState,
    reducers: {
        clearSetProfile: (state, action) => {
            state.setProfile = {};
            state.loading = null;
            state.success = null;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(setProfileUser.pending, (state, action) => {
                state.loading = true;
                state.success = false;
            })
            .addCase(setProfileUser.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.setProfile = action.payload;
            })
            .addCase(setProfileUser.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
            });
    },
});

const { actions, reducer } = setProfileSlice;
export const { clearSetProfile } = actions;
export default setProfileSlice.reducer;
