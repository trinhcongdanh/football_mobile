/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { NotificationModel } from '../../core/models/NotificationModel';

export interface NotificationState {
    notifications: NotificationModel[];
}

const initialState: NotificationState = {
    notifications: [],
};

export const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        addNotification: (state: NotificationState, action) => {
            state.notifications.push(action.payload);
        },

        clearNotifications: (state: NotificationState) => {
            state.notifications = [];
        },
    },
});

const { actions } = notificationSlice;
export const { addNotification, clearNotifications } = actions;
export default notificationSlice.reducer;
