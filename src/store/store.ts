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
import numberPhoneUserReducer from './user/RegisterNumberPhone';
import guestIdReducer from './user/GuestId.slice';
import loginReducer from './user/Login.slice';
import registerFacebookReducer from './user/RegisterFacebook.slice';
import videoReducer from './video/Video.slice';
import otpUserSlice from 'src/store/user/OTP.slice';
import setProfileSlice from 'src/store/user/setProfile.slice';

const reducer = combineReducers({
    guestId: guestIdReducer,
    createProfile: createProfileReducer,
    login: loginReducer,
    setProfile: setProfileSlice,
    numberPhoneUser: numberPhoneUserReducer,
    otpUser: otpUserSlice,
    favTeams: favTeamReducer,
    favPlayers: favPlayerReducer,
    favTopTeams: favTopTeamReducer,
    registerFacebook: registerFacebookReducer,
    leagues: leagueReducer,
    video: videoReducer,
});
const persistConfig = {
    key: 'root',
    blacklist: ['video'],
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
            immutableCheck: false,
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
