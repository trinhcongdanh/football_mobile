import { axiosAuth } from '@football/core/api/auth/axiosAuth';
import { AUTH_URL } from '@football/core/api/auth/config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { isEmpty } from 'lodash';

const initialState: any = {
    registerNumberPhone: {},
    loginNumberPhone: {},
};

export const registerNumberPhoneUser = createAsyncThunk(
    'user/registerNumberPhoneUser',
    async (phoneNumberData: any) => {
        const { data }: any = await axiosAuth.post(
            `${AUTH_URL}`,
            phoneNumberData,

            {
                headers: {},
            }
        );
        console.log(data);

        if (!isEmpty(data)) {
            console.log(data);
            return data;
        }
    }
);

export const loginNumberPhoneUser = createAsyncThunk(
    'user/loginNumberPhoneUser',
    async (phoneNumberData: any) => {
        const { data }: any = await axiosAuth.post(
            `${AUTH_URL}`,
            phoneNumberData,

            {
                headers: {},
            }
        );
        console.log(data);

        if (!isEmpty(data)) {
            console.log(data);
            return data;
        }
    }
);

export const numberPhoneUserSlice = createSlice({
    name: 'numberPhoneUser',
    initialState,
    reducers: {
        clearPhoneNumber: (state, action) => {
            state.registerNumberPhone = {};
            state.loginNumberPhone = {};
            state.loadingRegister = null;
            state.successRegister = null;
            state.loadingLogin = null;
            state.successLogin = null;
        },
    },

    extraReducers: builder => {
        builder
            .addCase(registerNumberPhoneUser.pending, (state, action) => {
                state.loadingRegister = true;
                state.successRegister = false;
            })
            .addCase(registerNumberPhoneUser.fulfilled, (state, action) => {
                state.loadingRegister = false;
                state.successRegister = true;
                state.registerNumberPhone = action.payload;
            })
            .addCase(registerNumberPhoneUser.rejected, (state, action) => {
                state.loadingRegister = false;
                state.successRegister = false;
            })
            .addCase(loginNumberPhoneUser.pending, (state, action) => {
                state.loadingLogin = true;
                state.successLogin = false;
            })
            .addCase(loginNumberPhoneUser.fulfilled, (state, action) => {
                state.loadingLogin = false;
                state.successLogin = true;
                state.loginNumberPhone = action.payload;
            })
            .addCase(loginNumberPhoneUser.rejected, (state, action) => {
                state.loadingLogin = false;
                state.successLogin = false;
            });
    },
});

const { actions, reducer } = numberPhoneUserSlice;
export const { clearPhoneNumber } = actions;
export default numberPhoneUserSlice.reducer;
