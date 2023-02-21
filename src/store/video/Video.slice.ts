import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showVideo: false,
};

export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        setShowVideo: (state, action) => {
            state.showVideo = action.payload;
        },
        setHiddenVideo: (state, action) => {
            state.showVideo = action.payload;
        },
    },
});

const { actions, reducer } = videoSlice;
export const { setShowVideo, setHiddenVideo } = actions;
export default videoSlice.reducer;
