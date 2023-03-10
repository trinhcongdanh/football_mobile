import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    colorCustom: '#F2CE08',
};

export const colorCustomSlice = createSlice({
    name: 'colorCustom',
    initialState,
    reducers: {},
});

const { actions, reducer } = colorCustomSlice;
export const {} = actions;
export default colorCustomSlice.reducer;
