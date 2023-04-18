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

export const logoutUser = createAsyncThunk('user/logoutUser', async (logoutData: any) => {
    const { data }: any = await axiosAuth.post(`${AUTH_URL}`, logoutData, {
        headers: {},
    });
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
        clearLogin: (state, action) => {
            state.login = {};
            state.loading = null;
            state.success = null;
        },
        isLogout: (state, action) => {
            state.logoutLoading = action.payload;
            state.logoutSuccess = action.payload;
        },
        isLogin: (state, action) => {
            state.loading = action.payload;
            state.success = action.payload;
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
            })
            .addCase(logoutUser.pending, (state, action) => {
                state.logoutLoading = true;
                state.logoutSuccess = false;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.logoutLoading = false;
                state.logoutSuccess = true;
                state.login = {};
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.logoutLoading = false;
                state.logoutSuccess = false;
            });
    },
});

const { actions, reducer } = loginSlice;
export const { isVerify, isLogout, isLogin, clearLogin } = actions;
export default loginSlice.reducer;
