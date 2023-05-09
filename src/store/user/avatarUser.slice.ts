/* eslint-disable no-underscore-dangle */
import { axiosAuth } from '@football/core/api/auth/axiosAuth';
import { AUTH_URL } from '@football/core/api/auth/config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { isEmpty } from 'lodash';

const initialState: any = {
    avatarUser: {},
};

export const avatarUser = createAsyncThunk('user/avatarUser', async (avatarUserData: any) => {
    const { data }: any = await axiosAuth.post(
        `${AUTH_URL}`,
        avatarUserData,

        {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }
    );

    if (!isEmpty(data)) {
        console.log('get profile response', data);
        return data;
    }
});

export const avatarUserSlice = createSlice({
    name: 'avatarUser',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(avatarUser.pending, (state, action) => {
                state.loading = true;
                state.success = false;
            })
            .addCase(avatarUser.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.avatarUser = action.payload;
            })
            .addCase(avatarUser.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
            });
    },
});

const { actions, reducer } = avatarUserSlice;
export const {} = actions;
export default avatarUserSlice.reducer;
