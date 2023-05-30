/* eslint-disable no-underscore-dangle */
import { useCallback, useEffect, useState } from 'react';
/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { serializeParams } from '@football/app/utils/functions/quick-functions';

import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { ACTION } from '@football/core/api/auth/config';
import { useTranslation } from 'react-i18next';
import { Asset, launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';

import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { PlayerModel, PlayersModelResponse } from '@football/core/models/PlayerModelResponse';
import { TeamModel, TeamModelResponse } from '@football/core/models/TeamModelResponse';
import { TopTeamModel, TopTeamModelResponse } from '@football/core/models/TopTeamModelResponse';
import PlayerService from '@football/core/services/Player.service';
import TeamService from '@football/core/services/Team.service';
import TopTeamService from '@football/core/services/TopTeam.service';
import { isEmpty } from 'lodash';
import { BackHandler, Platform } from 'react-native';
import { addSelectedFavPlayer, resetFavPlayer } from 'src/store/FavPlayer.slice';
import { addSelectedFavTeam, resetFavTeam } from 'src/store/FavTeam.slice';
import { addSelectedFavTopTeams, resetTopTeams } from 'src/store/FavTopTeam.slice';
import { RootState } from 'src/store/store';
import { setProfileUser, statusSetProfile } from 'src/store/user/setProfile.slice';
import {
    MAX_FAVORITES_PLAYER,
    MAX_FAVORITES_TEAM,
    MAX_FAVORITES_TOPTEAM,
} from '../../../core/api/configs/config';
import { ISettingsScreenProps } from './SettingsScreen.type';
import { deleteAccount } from 'src/store/user/deleteAccount.slice';
import { avatarUser } from 'src/store/user/avatarUser.slice';
import { clearAllData } from '@football/app/utils/functions/clearAllData';
import FormData from 'form-data';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';

interface SettingProps {
    userName: string;
    email: string;
}

enum Gender {
    MALE = 'FAN_GENDER_MALE',
    FEMALE = 'FAN_GENDER_FEMALE',
    OTHER = 'FAN_GENDER_NOT_AVAILABLE',
}

enum Notification {
    FAN_NOTIFICATION_GENERAL = 'FAN_NOTIFICATION_GENERAL',
    FAN_NOTIFICATION_FAVORITE_PLAYERS = 'FAN_NOTIFICATION_FAVORITE_PLAYERS',
    FAN_NOTIFICATION_FAVORITE_ISRAEL_TEAMS = 'FAN_NOTIFICATION_FAVORITE_ISRAEL_TEAMS',
    FAN_NOTIFICATION_FAVORITE_PLAYERS_LEAGUES = 'FAN_NOTIFICATION_FAVORITE_PLAYERS_LEAGUES',
    FAN_NOTIFICATION_FAVORITE_ISRAEL_TEAMS_LEAGUES = 'FAN_NOTIFICATION_FAVORITE_ISRAEL_TEAMS_LEAGUES',
    FAN_NOTIFICATION_FAVORITE_PLAYERS_NATIONAL_TEAMS = 'FAN_NOTIFICATION_FAVORITE_PLAYERS_NATIONAL_TEAMS',
}

interface NotificationSetting {
    id?: number;
    text: string;
    tutorial: string;
    beforeGame: string;
    value: Notification;
    isOn: boolean;
}

interface Option {
    email: string;
    favorite_israel_teams: TeamModel[];
    favorite_players: PlayerModel[];
    favorite_national_teams: TopTeamModel[];
    approved_notifications: Notification[];
}

/**
 * view settings variables
 * @returns
 */
const useViewState = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();

    const setProfile = useSelector((state: RootState) => state.setProfile);
    const getProfile = useSelector((state: RootState) => state.getProfile);
    const createProfile = useSelector((state: RootState) => state.createProfile);
    const numberPhone = useSelector((state: RootState) => state.numberPhoneUser);
    const userLogin = useSelector((state: RootState) => state.otpUser);
    const login = useSelector((state: RootState) => state.login);
    const deleteAccount = useSelector((state: RootState) => state.deleteAccount);
    const avatarUser = useSelector((state: RootState) => state.avatarUser.avatarUser.item);

    const genders = [
        {
            text: t('settings.male'),
            value: Gender.MALE,
        },
        {
            text: t('settings.female'),
            value: Gender.FEMALE,
        },
        {
            text: t('settings.other_gender'),
            value: Gender.OTHER,
        },
    ];

    // Props fields in the form
    const [image, setImage] = useState<any>(null);
    const [imageUpload, setImageUpload] = useState<string>('');
    const [isImage, setIsImage] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [birthDate, setBirthDate] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [editSetting, setEditSetting] = useState<boolean>(false);
    const [errors, setErrors] = useState<SettingProps>({
        userName: '',
        email: '',
    });

    const [changeSetting, setChangeSetting] = useState<boolean>(false);

    const [defaultOptions, setDefaultOptions] = useState<Option>({
        email: '',
        favorite_israel_teams: [],
        favorite_players: [],
        favorite_national_teams: [],
        approved_notifications: [],
    });
    const [newOptions, setNewOptions] = useState<Option>({
        email: '',
        favorite_israel_teams: [],
        favorite_players: [],
        favorite_national_teams: [],
        approved_notifications: [],
    });

    // Props checking edit fields in the form
    const [editUserName, setEditUserName] = useState(false);
    const [editEmail, setEditEmail] = useState(false);
    const [editGender, setEditGender] = useState(false);
    const [editBirthday, setEditBirthday] = useState(false);

    const [selectedTeams, setSelectedTeams] = useState<TeamModel[]>(
        Array(MAX_FAVORITES_TEAM).fill(null)
    );

    const [selectedPlayers, setSelectedPlayers] = useState<PlayerModel[]>(
        Array(MAX_FAVORITES_PLAYER).fill(null)
    );

    const [selectedTopTeams, setSelectedTopTeams] = useState<TopTeamModel[]>(
        Array(MAX_FAVORITES_TOPTEAM).fill(null)
    );

    const notificationSettings = [
        {
            id: 1,
            text: t('settings.notify_1'),
            value: 'FAN_NOTIFICATION_GENERAL',
            isOn: false,
        },

        {
            id: 2,
            text: t('settings.notify_2'),
            value: 'FAN_NOTIFICATION_FAVORITE_PLAYERS',
            isOn: false,
        },

        {
            id: 3,
            text: t('settings.notify_3'),
            value: 'FAN_NOTIFICATION_FAVORITE_ISRAEL_TEAMS',
            isOn: false,
        },

        {
            id: 4,
            text: t('settings.notify_4'),
            value: 'FAN_NOTIFICATION_FAVORITE_PLAYERS_LEAGUES',
            isOn: false,
        },

        {
            id: 5,
            text: t('settings.notify_5'),
            value: 'FAN_NOTIFICATION_FAVORITE_ISRAEL_TEAMS_LEAGUES',
            isOn: false,
        },

        {
            id: 6,
            text: t('settings.notify_6'),
            value: 'FAN_NOTIFICATION_FAVORITE_PLAYERS_NATIONAL_TEAMS',
            isOn: false,
        },
    ] as NotificationSetting[];
    const [notifications, setNotifications] = useState<NotificationSetting[]>(notificationSettings);

    return {
        setProfile,
        getProfile,
        image,
        setImage,
        userName,
        setUserName,
        errors,
        setErrors,
        email,
        setEmail,
        birthDate,
        setBirthDate,
        gender,
        setGender,
        genders,
        editUserName,
        setEditUserName,
        editEmail,
        setEditEmail,
        editGender,
        setEditGender,
        editBirthday,
        setEditBirthday,
        notifications,
        setNotifications,
        numberPhone,
        userLogin,
        login,
        createProfile,
        selectedTeams,
        setSelectedTeams,
        selectedPlayers,
        setSelectedPlayers,
        selectedTopTeams,
        setSelectedTopTeams,
        t,
        setEditSetting,
        editSetting,
        setDefaultOptions,
        defaultOptions,
        setNewOptions,
        newOptions,
        deleteAccount,
        isImage,
        setIsImage,
        changeSetting,
        setChangeSetting,
        dispatch,
        avatarUser,
        imageUpload,
        setImageUpload,
    };
};

/**
 * States use event handler
 * @param state
 * @returns
 */
const useEventHandler = (state: any, route: any) => {
    const { goBack, navigate, replace, popToTop } = useAppNavigator();
    const {
        numberPhone,
        login,
        userLogin,
        createProfile,
        userName,
        email,
        gender,
        birthDate,
        notifications,
        selectedTeams,
        selectedPlayers,
        selectedTopTeams,
        setEditSetting,
        setNewOptions,
        newOptions,
        t,
        isImage,
        image,
        setIsImage,
        setImage,
        changeSetting,
        setChangeSetting,
        dispatch,
        setImageUpload,
    } = state;

    const onGoBack = () => {
        const previousScreen = route?.params?.previousScreen;
        if (previousScreen && previousScreen === ScreenName.HomePage) {
            if (changeSetting) {
                console.log('Go Back 1');
                popToTop();
                replace(ScreenName.SideBar);
            } else {
                goBack();
            }
        } else {
            console.log('Go Back 2');
            goBack();
        }
        return true;
    };

    /**
     * Handle event click on the profile picture
     */
    const onImagePicker = async () => {
        // const result = await launchImageLibrary({ mediaType: 'photo', includeBase64: true });
        // console.log('result', result);
        // // eslint-disable-next-line array-callback-return
        // result.assets?.map(item => {
        //     // const form = new FormData();
        //     // form.append('file', item.base64);
        //     // const convertImage = item;
        //     // const RNFS = require('react-native-fs');
        //     // RNFS.readFile(item.uri?.replace('file://', ''), 'base64').then((data: any) => {
        //     //     console.log(data);
        //     // });
        //     setImage(item);
        //     setIsImage(true);
        //     // console.log('form', form);
        //     console.log('item.uri', item);
        // });

        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker?.types?.images],
            });
            setImage(res[0]);
            setIsImage(true);
            const base64Data = await RNFS.readFile(res[0].uri, 'base64');
            setImageUpload(`data:image/jpeg;base64,${base64Data}`);
            console.log('image picker', res);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }
        }
    };

    /**
     *  Handle save button click
     */
    const handleSaveChange = async () => {
        setIsImage(false);
        setChangeSetting(true);
        dispatch(statusSetProfile([]));

        if (!isEmpty(image)) {
            const formDataImage = new FormData();
            formDataImage.append('action', ACTION);
            formDataImage.append(
                'token',
                numberPhone.successLogin ? userLogin.otp.token : login.login.token
            );

            formDataImage.append('call', AuthData.UPLOAD_PROFILE_IMAGE);
            formDataImage.append('field', AuthData.AVATAR_IMAGE);
            formDataImage.append('file', image);

            dispatch(avatarUser(formDataImage));
        }

        dispatch(
            setProfileUser(
                serializeParams({
                    action: ACTION,
                    token: numberPhone.successLogin ? userLogin.otp.token : login.login.token,
                    call: AuthData.SET_PROFILE,
                    item_id: numberPhone.successLogin
                        ? userLogin.otp.user.item_id
                        : createProfile.profile.item_id,
                    item: {
                        email: newOptions.email,
                        favorite_israel_teams: newOptions.favorite_israel_teams,
                        favorite_players: newOptions.favorite_players,
                        favorite_national_teams: newOptions.favorite_national_teams,
                        approved_notifications: newOptions.approved_notifications,
                    },
                })
            )
        );

        state.setDefaultOptions((pre: Option) => ({
            email: newOptions.email,
            favorite_israel_teams: newOptions.favorite_israel_teams,
            favorite_players: newOptions.favorite_players,
            favorite_national_teams: newOptions.favorite_national_teams,
            approved_notifications: newOptions.approved_notifications,
        }));
    };

    const handleNotSaveChange = () => {
        global.props.showAlert({
            title: t('delete_account.title'),
            subTitle: t('delete_account.text'),
            option1: t('delete_account.yes'),
            option2: t('delete_account.no'),
            // exit: false,
            onOption1: () => {
                global.props.closeAlert();
                handleDeleteAccount();
            },
            onOption2: () => {
                global.props.closeAlert();
            },
        });
    };

    const handleDeleteAccount = () => {
        dispatch(
            deleteAccount(
                serializeParams({
                    action: ACTION,
                    token: numberPhone.successLogin ? userLogin.otp.token : login.login.token,
                    call: AuthData.DELETE_FAN,
                })
            )
        );
    };

    /**
     * Handle errors when typing input
     * @param errorMessage
     * @param input
     */
    const handleError = (errorMessage: string, input: string) => {
        state.setErrors((prevState: SettingProps) => ({ ...prevState, [input]: errorMessage }));
    };

    // /**
    //  * Handle changing gender
    //  * @param value
    //  */
    // const handleOnSelectGender = (value: string) => {
    //     state.setEditGender(true);
    //     state.setGender(value);
    // };

    /**
     * Handle changing birthdate
     * @param newDate
     */
    const onChangeEmail = (text: string) => {
        state.setEmail(text);
        setNewOptions((pre: any) => ({
            ...pre,
            email: text,
        }));
    };

    /**
     * Handle changing notification
     * @param notification
     */
    const handleChangeNotification = (notification: NotificationSetting) => {
        const originNotifications = Object.assign([], state.notifications);

        const originNotification = originNotifications.find(
            (n: NotificationSetting) => n.value === notification.value
        );
        if (originNotification) {
            originNotification.isOn = !originNotification.isOn;
        }
        state.setNotifications((pre: any) => originNotifications);

        console.log('notifications', notifications);

        const notificationIds = notifications
            .filter((notification: NotificationSetting) => notification.isOn)
            .map((notification: NotificationSetting) => notification.value);

        setNewOptions((pre: Option) => ({
            ...pre,
            approved_notifications: notificationIds,
        }));
    };

    /**
     * Handle team selected after changing from FavoriteTeam screen
     * @param newSelectedFavTeams
     */
    const handleAfterSelectTeam = (newSelectedFavTeams: TeamModel[]) => {
        const newSelectedTeam = Array(MAX_FAVORITES_TEAM).fill(null);

        newSelectedFavTeams.forEach((team: TeamModel, index: number) => {
            newSelectedTeam[index] = team;
        });

        state.setSelectedTeams((pre: TeamModel[]) => newSelectedTeam);
        console.log('newSelectedTeam', selectedTeams);
    };

    /**
     * Handle player selected after changing from FavoritePlayer screen
     * @param newSelectedFavPlayers
     */
    const handleAfterSelectPlayers = (newSelectedFavPlayers: PlayerModel[]) => {
        const newSelectedPlayers = Array(MAX_FAVORITES_PLAYER).fill(null);

        newSelectedFavPlayers.forEach((player: PlayerModel, index: number) => {
            newSelectedPlayers[index] = player;
        });

        state.setSelectedPlayers(newSelectedPlayers);
    };

    /**
     * Handle topTeam selected after changing from FavoriteTopTeam screen
     * @param newSelectedFavTopTeams
     */
    const handleAfterSelectTopTeams = (newSelectedFavTopTeams: TopTeamModel[]) => {
        const newSelectedTopTeams = Array(MAX_FAVORITES_TOPTEAM).fill(null);

        newSelectedFavTopTeams.forEach((topTeam: TopTeamModel, index: number) => {
            newSelectedTopTeams[index] = topTeam;
        });

        state.setSelectedTopTeams(newSelectedTopTeams);
    };

    /**
     * Navigate to FavoriteTeam screen
     */
    const backFavTeam = () => {
        dispatch(
            addSelectedFavTeam(selectedTeams.filter((selectedTeam: TopTeamModel) => selectedTeam))
        );
        navigate(ScreenName.FavTeamPage, {
            previous_screen: ScreenName.SettingsPage,
            changeTeams: true,
            handleAfterSelectTeam: (newSelectedFavTeams: TeamModel[]) =>
                handleAfterSelectTeam(newSelectedFavTeams),
        });
    };

    /**
     *  Navigate to FavoritePlayer screen
     */
    const backFavPlayer = () => {
        dispatch(addSelectedFavPlayer(selectedPlayers.filter((player: PlayerModel) => player)));
        navigate(ScreenName.FavPlayerPage, {
            previous_screen: ScreenName.SettingsPage,
            changePlayers: true,
            handleAfterSelectPlayers: (newSelectedFavPlayers: PlayerModel[]) =>
                handleAfterSelectPlayers(newSelectedFavPlayers),
        });
    };

    /**
     * Navigate to FavoriteTopTeam screen
     */
    const backFavTopTeam = () => {
        dispatch(
            addSelectedFavTopTeams(
                selectedTopTeams.filter((selectedTeam: TeamModel) => selectedTeam)
            )
        );
        navigate(ScreenName.FavTopTeamPage, {
            previous_screen: ScreenName.SettingsPage,
            changeTopTeams: true,
            handleAfterSelectTopTeams: (newSelectedFavTopTeams: TopTeamModel[]) =>
                handleAfterSelectTopTeams(newSelectedFavTopTeams),
        });
    };

    return {
        onGoBack,
        handleSaveChange,
        handleNotSaveChange,
        onImagePicker,
        handleError,
        // handleOnSelectGender,
        // handleChangeBirthDate,
        handleChangeNotification,
        backFavTeam,
        backFavPlayer,
        backFavTopTeam,
        onChangeEmail,
    };
};

/**
 * Handle api calling here
 * @param viewState
 * @returns
 */
const useViewCallback = (viewState: any) => {
    const {
        selectedTeams,
        setSelectedTeams,
        selectedPlayers,
        setSelectedPlayers,
        selectedTopTeams,
        setSelectedTopTeams,
    } = viewState;

    /**
     * Get team api call
     */
    const getTeamsData = useCallback(async (user: any) => {
        if (!user?.favorite_israel_teams?.length) {
            return;
        }
        const favTeamsSelected = await Promise.all(
            user.favorite_israel_teams.map(async (id: string) => {
                const [err, res] = await TeamService.findByOId<TeamModelResponse>(id);
                if (err) return;
                return res.data.documents[0];
            })
        );

        const teamResponse = (favTeamsSelected || []).splice(0, MAX_FAVORITES_TEAM);
        const newSelectedTeam = [...selectedTeams];

        teamResponse.forEach((team: TeamModel, index: number) => {
            newSelectedTeam[index] = team;
        });

        setSelectedTeams(newSelectedTeam);
    }, []);

    /**
     * Get player api call
     */
    const getPlayersData = useCallback(async (user: any) => {
        if (!user?.favorite_players?.length) {
            return;
        }
        const favPlayersSelected = await Promise.all(
            user.favorite_players.map(async (id: string) => {
                const [err, res] = await PlayerService.findByOId<PlayersModelResponse>(id);
                if (err) return;
                return res.data.documents[0];
            })
        );

        const playersResponse = (favPlayersSelected || []).splice(0, MAX_FAVORITES_PLAYER);
        const newSelectedPlayers = [...selectedPlayers];

        playersResponse.forEach((player: PlayerModel, index: number) => {
            newSelectedPlayers[index] = player;
        });

        setSelectedPlayers(newSelectedPlayers);
    }, []);

    /**
     * Get topteam api call
     */
    const getTopTeamsData = useCallback(async (user: any) => {
        if (!user?.favorite_national_teams?.length) {
            return;
        }
        const favTopTeamsSelected = await Promise.all(
            user.favorite_national_teams.map(async (id: string) => {
                const [err, res] = await TopTeamService.findByOId<TopTeamModelResponse>(id);
                if (err) return;
                return res.data.documents[0];
            })
        );

        const topTeamsResponse = (favTopTeamsSelected || []).splice(0, MAX_FAVORITES_TOPTEAM);
        const newSelectedTopTeams = [...selectedTopTeams];

        topTeamsResponse.forEach((topTeam: TopTeamModel, index: number) => {
            newSelectedTopTeams[index] = topTeam;
        });

        setSelectedTopTeams(newSelectedTopTeams);
    }, []);

    return {
        getTeamsData,
        getPlayersData,
        getTopTeamsData,
    };
};

/**
 * Handle effect to listening variables change here.
 * @param state
 * @param callback
 * @param navigation
 */
const useEffectHandler = (state: any, callback: any, eventHandler: any, navigation: any) => {
    const { getTeamsData, getPlayersData, getTopTeamsData } = callback;

    // Listening for user profile change
    const {
        getProfile,
        setEmail,
        setUserName,
        setBirthDate,
        setGender,
        setNotifications,
        t,
        setDefaultOptions,
        defaultOptions,
        setNewOptions,
        deleteAccount,
        dispatch,
    } = state;
    const { navigate } = useAppNavigator();
    useEffect(() => {
        if (getProfile.success !== true) {
            return;
        }

        const profile = getProfile?.getProfile?.item;
        if (!profile) {
            return;
        }
        setEmail(profile.email);
        setUserName(profile.name);
        setBirthDate(getProfile.getProfile.item.birthdate);

        switch (profile?.gender) {
            case Gender.MALE:
                setGender(t('settings.male'));
                break;
            case Gender.FEMALE:
                setGender(t('settings.female'));
                break;
            case Gender.OTHER:
                setGender(t('settings.other_gender'));
                break;
            default:
                setGender(t('settings.other_gender'));
        }

        const originNotifications = Object.assign([], state.notifications);
        originNotifications.forEach((notification: NotificationSetting) => {
            // eslint-disable-next-line no-param-reassign
            notification.isOn = getProfile.getProfile.item.approved_notifications.includes(
                notification.value
            );
        });

        setNotifications(originNotifications);

        setDefaultOptions((pre: Option) => ({
            email: profile.email,
            favorite_israel_teams: profile.favorite_israel_teams,
            favorite_players: profile.favorite_players,
            favorite_national_teams: profile.favorite_national_teams,
            approved_notifications: profile.approved_notifications,
        }));

        setNewOptions((pre: Option) => ({
            email: profile.email,
            favorite_israel_teams: profile.favorite_israel_teams,
            favorite_players: profile.favorite_players,
            favorite_national_teams: profile.favorite_national_teams,
            approved_notifications: profile.approved_notifications,
        }));

        // set time out to run in different threads
        setTimeout(() => {
            getTeamsData(profile);
        }, 0);

        // set time out to run in different threads
        setTimeout(() => {
            getPlayersData(profile);
        }, 0);

        // set time out to run in different threads
        setTimeout(() => {
            getTopTeamsData(profile);
        }, 0);
    }, [getProfile.success]);

    useEffect(() => {
        const favTeamIds = state.selectedTeams
            .filter((team: TeamModel) => team)
            .map((selectedTeam: TeamModel) => selectedTeam._id);
        const favPlayersIds = state.selectedPlayers
            .filter((player: PlayerModel) => player)
            .map((selectedPlayer: PlayerModel) => selectedPlayer._id);
        console.log('Change', favPlayersIds);

        const favTopTeamIds = state.selectedTopTeams
            .filter((topTeam: TopTeamModel) => topTeam)
            .map((selectedTopTeam: TopTeamModel) => selectedTopTeam._id);

        setNewOptions((pre: Option) => ({
            ...pre,
            favorite_israel_teams: isEmpty(favTeamIds) ? [] : favTeamIds,
            favorite_players: isEmpty(favPlayersIds) ? [] : favPlayersIds,
            favorite_national_teams: isEmpty(favTopTeamIds) ? [] : favTopTeamIds,
        }));
    }, [state.selectedTeams, state.selectedPlayers, state.selectedTopTeams]);

    useEffect(() => {
        if (deleteAccount.success) {
            clearAllData(dispatch);
            // navigate(ScreenName.SplashPage);
            navigation.reset({
                index: 0,
                routes: [{ name: ScreenName.SplashPage as never }],
            });
        } else {
            console.log('Failed to delete');
        }
    }, [deleteAccount.success]);
};

/**
 * Main model
 * @param param0
 * @returns
 */
export const useViewModel = ({ navigation, route }: ISettingsScreenProps) => {
    const { getTranslationText } = useTranslationText();
    const { goBack, navigate, replace, popToTop } = useAppNavigator();
    const scrollBottom = route.params?.scrollBottom;

    const state = useViewState();
    const callback = useViewCallback(state);
    const eventHandler = useEventHandler(state, route);
    useEffectHandler(state, callback, eventHandler, navigation);

    console.log('new option', state.newOptions);
    console.log('defaultOptions', state.defaultOptions);
    const backAction = () => {
        const previousScreen = route?.params?.previousScreen;
        if (previousScreen && previousScreen === ScreenName.HomePage) {
            popToTop();
            replace(ScreenName.SideBar);
        } else {
            goBack();
        }
        return false;
    };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', eventHandler.onGoBack);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', eventHandler.onGoBack);
        };
    }, []);

    return {
        getTranslationText,
        ...eventHandler,
        ...state,
        scrollBottom,
    };
};
