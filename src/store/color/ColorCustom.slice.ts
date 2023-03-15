import { appColors } from '@football/app/utils/constants/appColors';
import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    colorCustom: appColors.blue_light,
};

export const colorCustomSlice = createSlice({
    name: 'colorCustom',
    initialState,
    reducers: {
        changeColor: (state, action) => {
            state.colorCustom = action.payload;
        },
    },
});

const { actions, reducer } = colorCustomSlice;
export const { changeColor } = actions;
export default colorCustomSlice.reducer;
