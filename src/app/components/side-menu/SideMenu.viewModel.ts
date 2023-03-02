import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { isLogin, isLogout, loginUser, logoutUser } from 'src/store/user/Login.slice';
import { clearCreateProfile } from 'src/store/user/CreateProfile.slice';
import { ACTION } from '@football/core/api/auth/config';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { useEffect } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { removeGuestId } from 'src/store/user/GuestId.slice';
import {
    resetAllFavPlayers,
    resetGroupFavPlayer,
    resetSelectedFavPlayer,
} from 'src/store/FavPlayer.slice';
import { resetFavTeam, resetSelectedFavTeam } from 'src/store/FavTeam.slice';
import { resetSelectedFavTopTeams, resetTopTeams } from 'src/store/FavTopTeam.slice';
import { resetOtpUser } from 'src/store/user/OTP.slice';
import { clearSetProfile } from 'src/store/user/setProfile.slice';
import { clearPhoneNumber } from 'src/store/user/RegisterNumberPhone';

export const useViewModel = () => {
    const { navigate, goBack, popToTop } = useAppNavigator();
    const navigation = useNavigation();
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();

    const onGoBack = (): void => {
        goBack();
    };
    const guestId = useSelector((state: any) => state.guestId.guestId);
    const profile = useSelector((state: any) => state.createProfile.profile);
    const login = useSelector((state: any) => state.login);

    function serializeParams(obj: any) {
        const a = qs.stringify(obj, { encode: false, arrayFormat: 'brackets' });
        console.log(a);
        return a;
    }

    const onNavigateStartScreen = () => {
        // dispatch(isLogout);
        dispatch(
            logoutUser(
                serializeParams({
                    action: ACTION,
                    token: login.login.token,
                    call: AuthData.LOGOUT,
                })
            )
        );
        // Clear profile
        dispatch(clearCreateProfile({}));
        dispatch(removeGuestId([]));
        // Clear Fav Team
        dispatch(resetFavTeam([]));
        dispatch(resetSelectedFavTeam([]));
        // Clear Fav Player
        dispatch(
            resetAllFavPlayers({
                id: '',
                label: '',
                listFavPlayers: [],
            })
        );
        dispatch(
            resetGroupFavPlayer({
                id: '',
                label: '',
                listFavPlayers: [],
            })
        );
        dispatch(resetSelectedFavPlayer([]));
        // Clear Fav Top Team
        dispatch(resetTopTeams([]));
        dispatch(resetSelectedFavTopTeams([]));
        // Clear otp
        dispatch(resetOtpUser([]));
        // Clear setProfile
        dispatch(clearSetProfile([]));
        // Clear Phone Number
        dispatch(clearPhoneNumber([]));
    };
    const isFocused = useIsFocused();
    useEffect(() => {
        if (!isFocused) return;
        if (login.logoutSuccess === true) {
            dispatch(isLogout(null));
            dispatch(isLogin(null));
            navigate(ScreenName.SplashPage);
            navigation.reset({
                index: 0,
                routes: [{ name: ScreenName.SplashPage as never }],
            });
        }
    }, [login.logoutSuccess, isFocused]);

    return {
        t,
        onGoBack,
        navigate,
        onNavigateStartScreen,
    };
};
