import { axiosAuth } from '@football/core/api/auth/axiosAuth';
import { AUTH_URL } from '@football/core/api/auth/config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { isEmpty } from 'lodash';

const initialState: any = {
    otp: {},
};

export const otpUser = createAsyncThunk('user/otpUser', async (optData: any) => {
    const { data }: any = await axiosAuth.post(
        `${AUTH_URL}`,
        optData,

        {
            headers: {},
        }
    );
    console.log(data);

    if (!isEmpty(data)) {
        console.log(data);
        return data;
    }
});

export const otpUserSlice = createSlice({
    name: 'otpUser',
    initialState,
    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(otpUser.pending, (state, action) => {
                state.loading = true;
                state.success = false;
            })
            .addCase(otpUser.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.otp = action.payload;
            })
            .addCase(otpUser.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
            });
    },
});

const { actions, reducer } = otpUserSlice;
export const {} = actions;
export default otpUserSlice.reducer;
