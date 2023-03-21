import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { isLogin, isLogout, logoutUser } from 'src/store/user/Login.slice';
import { ACTION } from '@football/core/api/auth/config';
import { AuthData, Gender, ScreenName } from '@football/app/utils/constants/enum';
import { useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { getProfileUser } from 'src/store/user/getProfile.slice';
import { RootState } from 'src/store/store';
import { AppImages } from '@football/app/assets/images';
import { isEmpty } from 'lodash';
import { clearAllData } from '@football/app/utils/functions/clearAllData';
import { clearNotifications } from 'src/store/notification/Notification.slice';

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
    const profile = useSelector((state: RootState) => state.createProfile);
    const profileUser = useSelector((state: RootState) => state.setProfile);
    const numberPhone = useSelector((state: any) => state.numberPhoneUser);
    const userLogin = useSelector((state: RootState) => state.otpUser);
    const authToken = userLogin?.otp?.token ? userLogin?.otp?.token : login?.login?.token;
    const authItem = userLogin?.otp?.user?.item_id
        ? userLogin.otp.user.item_id
        : login?.login?.user?.item_id;

    const notifications = useSelector((state: RootState) => state.notifications.notifications);
    const selectedFavTeams = useSelector((state: RootState) => state.favTeams.selectedTeams);
    const selectedFavPlayers = useSelector((state: RootState) => state.favPlayers.selectedPlayers);
    const selectedFavTopTeams = useSelector(
        (state: RootState) => state.favTopTeams.selectedTopTeams
    );

    function serializeParams(obj: any) {
        const a = qs.stringify(obj, { encode: false, arrayFormat: 'brackets' });
        return a;
    }

    const onNavigateStartScreen = () => {
        // dispatch(isLogout);
        const isGuest = !userLogin?.success;
        const isGuestWithFavourite =
            isGuest &&
            (selectedFavTeams.length || selectedFavPlayers.length || selectedFavTopTeams.length);
        global.props.showAlert({
            title: t('side_menu.logout'),
            subTitle: isGuestWithFavourite
                ? t('side_menu.logout_with_guest')
                : t('side_menu.are_you_want_logout'),
            option1: t('side_menu.yes'),
            option2: t('side_menu.no'),
            onOption1: () => {
                global.props.closeAlert();
                dispatch(
                    logoutUser(
                        serializeParams({
                            action: ACTION,
                            token: authToken,
                            call: AuthData.LOGOUT,
                        })
                    )
                );
                clearAllData(dispatch);
            },
            onOption2: () => {
                global.props.closeAlert();
            },
        });
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
        if (userLogin.success) {
            dispatch(
                getProfileUser(
                    serializeParams({
                        action: ACTION,
                        token: authToken,
                        call: AuthData.GET_PROFILE,
                        item: authItem,
                    })
                )
            );
        }
    }, [userLogin.success]);

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
            navigate(ScreenName.RegisterPage, { isLogin: true });
        } else {
            navigate(ScreenName.SettingsPage, { scrollBottom: false, center: false });
        }
    };

    const handleBottomSettingPage = () => {
        if (isEmpty(getProfile.getProfile)) {
            navigate(ScreenName.RegisterPage, { isLogin: true });
        } else {
            navigate(ScreenName.SettingsPage, { scrollBottom: true, center: false });
        }
    };

    const resetNotifications = () => {
        dispatch(clearNotifications());
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
        resetNotifications,
        notifications,
    };
};
