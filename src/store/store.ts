import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import { Action } from 'typesafe-actions';
import favPlayerReducer from './FavPlayer.slice';
import favTeamReducer from './FavTeam.slice';
import favTopTeamReducer from './FavTopTeam.slice';
import leagueReducer from './league/League.slice';
import createProfileReducer from './user/CreateProfile.slice';
import guestIdReducer from './user/GuestId.slice';
import loginReducer from './user/Login.slice';
import registerFacebookReducer from './user/RegisterFacebook.slice';
import videoReducer from './video/Video.slice';

const reducer = combineReducers({
    guestId: guestIdReducer,
    createProfile: createProfileReducer,
    login: loginReducer,
    favTeams: favTeamReducer,
    favPlayers: favPlayerReducer,
    favTopTeams: favTopTeamReducer,
    registerFacebook: registerFacebookReducer,
    leagues: leagueReducer,
    video: videoReducer,
});
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,

    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export const persistor = persistStore(store);
