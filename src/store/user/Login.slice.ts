/* eslint-disable no-underscore-dangle */
import { axiosAuth } from '@football/core/api/auth/axiosAuth';
import { AUTH_URL } from '@football/core/api/auth/config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { isEmpty } from 'lodash';

const initialState: any = {
    login: {},
    isVerify: false,
};

export const loginUser = createAsyncThunk('user/loginUser', async (loginData: any) => {
    const { data }: any = await axiosAuth.post(
        `${AUTH_URL}`,
        loginData,

        {
            headers: {},
        }
    );

    if (!isEmpty(data)) {
        return data;
    }
});

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        isVerify: (state, action) => {
            state.isVerify = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loginUser.pending, (state, action) => {
                state.loading = true;
                state.success = false;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.login = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
            });
    },
});

const { actions, reducer } = loginSlice;
export const { isVerify } = actions;
export default loginSlice.reducer;
