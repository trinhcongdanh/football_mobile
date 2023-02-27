import { axiosAuth } from '@football/core/api/auth/axiosAuth';
import { AUTH_URL } from '@football/core/api/auth/config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { isEmpty } from 'lodash';

const initialState: any = {
    numberPhone: {},
};

export const numberPhoneUser = createAsyncThunk(
    'user/numberPhoneUser',
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
    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(numberPhoneUser.pending, (state, action) => {
                state.loading = true;
                state.success = false;
            })
            .addCase(numberPhoneUser.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.numberPhone = action.payload;
            })
            .addCase(numberPhoneUser.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
            });
    },
});

const { actions, reducer } = numberPhoneUserSlice;
export const {} = actions;
export default numberPhoneUserSlice.reducer;
