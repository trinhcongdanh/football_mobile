import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showVideo: false,
    sourceVideo: null,
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
        addVideo: (state, action) => {
            state.sourceVideo = action.payload;
        },
        resetVideo: (state, action) => {
            state.sourceVideo = action.payload;
        },
    },
});

const { actions, reducer } = videoSlice;
export const { setShowVideo, setHiddenVideo, addVideo, resetVideo } = actions;
export default videoSlice.reducer;
