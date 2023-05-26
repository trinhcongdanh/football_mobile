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
import { setProfileUser } from 'src/store/user/setProfile.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { serializeParams } from '@football/app/utils/functions/quick-functions';
import { ISideMenuProps } from '@football/app/components/side-menu/SideMenu.type';

/**
 * view settings variables
 * @returns
 */
const useViewState = () => {
    const { navigate, goBack, popToTop, closeDrawer } = useAppNavigator();
    const navigation = useNavigation();
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();
    const login = useSelector((state: any) => state.login);
    const getProfile = useSelector((state: RootState) => state.getProfile);
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
    const isGuest = !userLogin?.success;
    const isGuestWithFavourite =
        isGuest &&
        (selectedFavTeams.length || selectedFavPlayers.length || selectedFavTopTeams.length);

    const [tokenFCM, setTokenFCM] = useState<any>();

    const GetFCMToken = async () => {
        let fcmToken = await AsyncStorage.getItem('fcmToken');
        setTokenFCM(fcmToken);
    };

    const isFocused = useIsFocused();

    const [userName, setUserName] = useState('');
    const [avt, setAvt] = useState();

    return {
        navigate,
        goBack,
        popToTop,
        navigation,
        t,
        dispatch,
        login,
        getProfile,
        userLogin,
        authToken,
        authItem,
        notifications,
        selectedFavTeams,
        selectedFavPlayers,
        selectedFavTopTeams,
        isGuest,
        isGuestWithFavourite,
        tokenFCM,
        GetFCMToken,
        isFocused,
        userName,
        setUserName,
        avt,
        setAvt,
        closeDrawer,
    };
};

/**
 * States use event handler
 * @param state
 * @returns
 */

const useEventHandler = (state: any) => {
    const { navigate, goBack, t, dispatch, getProfile, authToken, isGuestWithFavourite } = state;

    // Go back previous Screen
    const onGoBack = () => {
        goBack();
    };

    // Log out current account
    const onNavigateStartScreen = () => {
        // dispatch(isLogout);
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

    // Handle Account
    const handleAccount = () => {
        if (isEmpty(getProfile.getProfile)) {
            // Navigate to Register Screen if is guest user
            navigate(ScreenName.RegisterPage, { isLogin: true });
        } else {
            // Navigate to Setting Screen if already logged in
            navigate(ScreenName.SettingsPage, {
                scrollBottom: false,
                center: false,
                previousScreen: ScreenName.HomePage,
            });
        }
    };

    // Handle Account
    const handleBottomSettingPage = () => {
        if (isEmpty(getProfile.getProfile)) {
            // Navigate to Register Screen if is guest user
            navigate(ScreenName.RegisterPage, { isLogin: true });
        } else {
            // Navigate to Setting Screen and scroll to notification if already logged in
            navigate(ScreenName.SettingsPage, {
                scrollBottom: true,
                center: false,
                previousScreen: ScreenName.HomePage,
            });
        }
    };

    // Reset notifications
    const resetNotifications = () => {
        dispatch(clearNotifications());
        navigate(ScreenName.NotificationPage);
    };

    return {
        onGoBack,
        onNavigateStartScreen,
        handleAccount,
        handleBottomSettingPage,
        resetNotifications,
    };
};

/**
 * Handle effect to listening variables change here.
 * @param state
 * @param eventHandler
 */

const useEffectHandler = (state: any, eventHandler: any) => {
    const {
        t,
        dispatch,
        login,
        getProfile,
        userLogin,
        authToken,
        authItem,
        tokenFCM,
        GetFCMToken,
        isFocused,
        setUserName,
        setAvt,
    } = state;

    useEffect(() => {
        if (!isFocused) return;
        if (state.login.logoutSuccess === true) {
            state.dispatch(isLogout(null));
            state.dispatch(isLogin(null));
            state.navigate(ScreenName.SplashPage);
            state.navigation.reset({
                index: 0,
                routes: [{ name: ScreenName.SplashPage as never }],
            });
        }
    }, [login.logoutSuccess, isFocused]);

    useEffect(() => {
        GetFCMToken();
        console.log(tokenFCM);
        if (!isFocused) return;
        if (userLogin.success) {
            dispatch(
                getProfileUser(
                    serializeParams({
                        action: ACTION,
                        token: authToken,
                        call: AuthData.GET_PROFILE,
                        item_id: authItem,
                        item: {},
                    })
                )
            );

            dispatch(
                setProfileUser(
                    serializeParams({
                        action: ACTION,
                        token: authToken,
                        call: AuthData.SET_PROFILE,
                        item_id: authItem,
                        item: {
                            notifications_registration_id: tokenFCM ? tokenFCM : '',
                        },
                    })
                )
            );
        }
    }, [userLogin.success, isFocused, tokenFCM]);

    useEffect(() => {
        if (getProfile.success) {
            if (getProfile?.getProfile?.item?.name === '') {
                setUserName(t('side_menu.guest'));
            } else {
                setUserName(getProfile?.getProfile?.item?.name);
            }

            if (getProfile.getProfile.item?.gender === Gender.OTHER) {
                setAvt(AppImages.img_avt_other);
            } else if (getProfile.getProfile.item?.gender === Gender.MALE) {
                setAvt(AppImages.img_avt_man);
            } else if (getProfile.getProfile.item?.gender === Gender.FEMALE) {
                setAvt(AppImages.img_avt_woman);
            }
        }
        if (isEmpty(getProfile.getProfile)) {
            setAvt(AppImages.img_avt_other);
            setUserName(t('side_menu.guest'));
        }
    }, [getProfile.success]);
};

/**
 * Main model
 * @param param0
 * @returns
 */
export const useViewModel = ({ navigation }: ISideMenuProps) => {
    const state = useViewState();
    const eventHandler = useEventHandler(state);
    useEffectHandler(state, eventHandler);

    return {
        ...eventHandler,
        ...state,
    };
};
