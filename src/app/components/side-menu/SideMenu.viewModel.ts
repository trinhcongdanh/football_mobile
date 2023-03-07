import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { isLogin, isLogout, loginUser, logoutUser } from 'src/store/user/Login.slice';
import { clearCreateProfile } from 'src/store/user/CreateProfile.slice';
import { ACTION } from '@football/core/api/auth/config';
import { AuthData, Gender, ScreenName } from '@football/app/utils/constants/enum';
import { useEffect, useState } from 'react';
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
import { clearPhoneNumber } from 'src/store/user/RegisterNumberPhone.slice';
import { clearGetProfile, getProfileUser } from 'src/store/user/getProfile.slice';
import { RootState } from 'src/store/store';
import { AppImages } from '@football/app/assets/images';
import { isEmpty } from 'lodash';

export const useViewModel = () => {
    const { navigate, goBack, popToTop } = useAppNavigator();
    const navigation = useNavigation();
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();

    const onGoBack = (): void => {
        goBack();
    };

    const login = useSelector((state: any) => state.login);
    const getProfile = useSelector((state: RootState) => state.getProfile);
    const profileUser = useSelector((state: RootState) => state.setProfile);
    const numberPhone = useSelector((state: any) => state.numberPhoneUser);
    const userLogin = useSelector((state: RootState) => state.otpUser);

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
                    token: numberPhone.successRegister ? login.login.token : userLogin.otp.token,
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
        // Clear getProfile
        dispatch(clearGetProfile([]));
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

    const [userName, setUserName] = useState('');
    const [avt, setAvt] = useState();

    useEffect(() => {
        if (!isFocused) return;
        if (
            login.success === true &&
            profileUser.success === true &&
            numberPhone.successRegister === true
        ) {
            dispatch(
                getProfileUser(
                    serializeParams({
                        action: ACTION,
                        token: login.login.token,
                        call: AuthData.GET_PROFILE,
                        item: login.login.user.item_id,
                    })
                )
            );
        }
    }, [login.success, profileUser.success, numberPhone.successRegister]);
    useEffect(() => {
        if (!isFocused) return;
        if (userLogin.success === true && numberPhone.successLogin === true) {
            dispatch(
                getProfileUser(
                    serializeParams({
                        action: ACTION,
                        token: userLogin.otp.token,
                        call: AuthData.GET_PROFILE,
                        item: userLogin.otp.user.item_id,
                    })
                )
            );
        }
    }, [userLogin.success, numberPhone.successLogin, isFocused]);

    useEffect(() => {
        if (getProfile.success) {
            if (getProfile.getProfile.item.name === '') {
                setUserName(t('side_menu.guest'));
            } else {
                setUserName(getProfile.getProfile.item.name);
            }

            if (getProfile.getProfile.item.gender === Gender.OTHER) {
                setAvt(AppImages.img_avt_other);
            } else if (getProfile.getProfile.item.gender === Gender.MALE) {
                setAvt(AppImages.img_avt_man);
            } else if (getProfile.getProfile.item.gender === Gender.FEMALE) {
                setAvt(AppImages.img_avt_woman);
            }
        }
        if (isEmpty(getProfile.getProfile)) {
            setAvt(AppImages.img_avt_other);
            setUserName(t('side_menu.guest'));
        }
    }, [getProfile.success]);

    const handleAccount = () => {
        if (isEmpty(getProfile.getProfile)) {
            navigate(ScreenName.RegisterPage);
        } else {
            navigate(ScreenName.SettingsPage, { scrollBottom: false, center: false });
        }
    };

    const handleBottomSettingPage = () => {
        if (isEmpty(getProfile.getProfile)) {
            navigate(ScreenName.RegisterPage);
        } else {
            navigate(ScreenName.SettingsPage, { scrollBottom: true, center: false });
        }
    };

    return {
        t,
        onGoBack,
        navigate,
        onNavigateStartScreen,
        userName,
        avt,
        handleAccount,
        handleBottomSettingPage,
    };
};
