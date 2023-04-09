import { axiosAuth } from '@football/core/api/auth/axiosAuth';
import { AUTH_URL } from '@football/core/api/auth/config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { isEmpty } from 'lodash';
import { Alert } from 'react-native';

const initialState: any = {
    otp: {},
    isVerifyOtp: false,
    infoSocial: {},
};

export const otpUser = createAsyncThunk('user/otpUser', async (optData: any) => {
    try {
        const { data }: any = await axiosAuth.post(
            `${AUTH_URL}`,
            optData,

            {
                headers: {},
            }
        );

        if (!isEmpty(data)) {
            return data;
        }
    } catch (err: any) {
        Alert.alert(`Calling api login failed`);
        // Alert.alert('Show error', err);
    }
});

export const otpUserSlice = createSlice({
    name: 'otpUser',
    initialState,
    reducers: {
        isVerifyOtp: (state, action) => {
            state.isVerifyOtp = action.payload;
        },
        resetOtpUser: (state, action) => {
            state.otp = {};
            state.loading = null;
            state.success = null;
        },
        setInfoSocial: (state, action) => {
            state.infoSocial = action.payload;
        },
    },

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
export const { isVerifyOtp, resetOtpUser, setInfoSocial } = actions;
export default otpUserSlice.reducer;
