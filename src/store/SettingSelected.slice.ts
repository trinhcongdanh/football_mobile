/* eslint-disable no-underscore-dangle */
import { PlayerModel } from '@football/core/models/PlayerModelResponse';
import { TeamModel } from '@football/core/models/TeamModelResponse';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';

// const selectedFavTeams = useSelector((state: RootState) => state.favTeams.selectedTeams);

export interface SettingSelectedState {
    settingFavTeams: TeamModel[];
    settingFavPlayers: PlayerModel[];
    settingFavTopTeams: TopTeamModel[];
}

const initialState: SettingSelectedState = {
    settingFavTeams: [],
    settingFavPlayers: [],
    settingFavTopTeams: [],
};

export const settingSelectedSlice = createSlice({
    name: 'settingSelected',
    initialState,
    reducers: {
        setSettingFavTeam: (state, action) => {
            state.settingFavTeams = action.payload;
        },
        resetSettingFavTeam: (state, action) => {
            state.settingFavTeams = action.payload;
        },
        setSettingFavPlayer: (state, action) => {
            state.settingFavPlayers = action.payload;
        },
        resetSettingFavPlayer: (state, action) => {
            state.settingFavPlayers = action.payload;
        },
        setSettingFavTopTeam: (state, action) => {
            state.settingFavTopTeams = action.payload;
        },
        resetSettingFavTopTeam: (state, action) => {
            state.settingFavTopTeams = action.payload;
        },
    },
});

const { actions, reducer } = settingSelectedSlice;
export const {
    setSettingFavTeam,
    resetSettingFavTeam,
    setSettingFavPlayer,
    resetSettingFavPlayer,
    setSettingFavTopTeam,
    resetSettingFavTopTeam,
} = actions;
export default settingSelectedSlice.reducer;
