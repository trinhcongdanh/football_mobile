/* eslint-disable no-underscore-dangle */
import { useCallback, useEffect, useState } from 'react';
/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { serializeParams } from '@football/app/utils/functions/quick-functions';
import moment from 'moment';

import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { ACTION } from '@football/core/api/auth/config';
import { useTranslation } from 'react-i18next';
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';

import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { PlayerModel } from '@football/core/models/PlayerModelResponse';
import { TeamModel } from '@football/core/models/TeamModelResponse';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import PlayerService from '@football/core/services/Player.service';
import TeamService from '@football/core/services/Team.service';
import TopTeamService from '@football/core/services/TopTeam.service';
import { isEmpty } from 'lodash';
import { BackHandler } from 'react-native';
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

interface SettingProps {
    userName: string;
    email: string;
}

enum Gender {
    MALE = 'FAN_GENDER_MALE',
    FEMALE = 'FAN_GENDER_FEMALE',
    OTHER = 'FAN_GENDER_NOT_AVAILABLE',
}

interface NotificationSetting {
    id?: number;
    text: string;
    tutorial: string;
    beforeGame: string;
    value: string;
    isOn: boolean;
}

/**
 * view settings variables
 * @returns
 */
const useViewState = () => {
    const { t } = useTranslation();

    const setProfile = useSelector((state: RootState) => state.setProfile);
    const getProfile = useSelector((state: RootState) => state.getProfile);
    const createProfile = useSelector((state: RootState) => state.createProfile);
    const numberPhone = useSelector((state: RootState) => state.numberPhoneUser);
    const userLogin = useSelector((state: RootState) => state.otpUser);
    const login = useSelector((state: RootState) => state.login);

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
    const [image, setImage] = useState<string>();
    const [userName, setUserName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [birthDate, setBirthDate] = useState(new Date());
    const [gender, setGender] = useState(genders[0].value);

    const [errors, setErrors] = useState<SettingProps>({
        userName: '',
        email: '',
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
    } = state;

    const dispatch = useDispatch<any>();

    const onGoBack = () => {
        const previousScreen = route?.params?.previousScreen;
        if (previousScreen && previousScreen === ScreenName.HomePage) {
            popToTop();
            navigate(ScreenName.SideBar);
        } else {
            goBack();
        }
    };

    /**
     *  Handle save button click
     */
    const handleSaveChange = () => {
        dispatch(statusSetProfile([]));

        const favTeamIds = selectedTeams
            .filter((team: TeamModel) => team)
            .map((selectedTeam: TeamModel) => selectedTeam._id);

        const favPlayersIds = selectedPlayers
            .filter((player: PlayerModel) => player)
            .map((selectedPlayer: PlayerModel) => selectedPlayer._id);

        const favTopTeamIds = selectedTopTeams
            .filter((topTeam: TopTeamModel) => topTeam)
            .map((selectedTopTeam: TopTeamModel) => selectedTopTeam._id);

        const notificationIds = notifications
            .filter((notification: NotificationSetting) => notification.isOn)
            .map((notification: NotificationSetting) => notification.value);

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
                        name: userName,
                        email,
                        gender,
                        birthdate: moment(birthDate).format('YYYY-MM-DD'),
                        favorite_israel_teams: isEmpty(favTeamIds) ? '' : favTeamIds,
                        favorite_players: isEmpty(favPlayersIds) ? '' : favPlayersIds,
                        favorite_national_teams: isEmpty(favTopTeamIds) ? '' : favTopTeamIds,
                        approved_notifications: isEmpty(notificationIds) ? '' : notificationIds,
                    },
                })
            )
        );
    };

    const handleNotSaveChange = () => {
        goBack();
    };

    /**
     * Handle event click on the profile picture
     */
    const onImagePicker = async () => {
        const result = await launchImageLibrary({ mediaType: 'photo' });
        // eslint-disable-next-line array-callback-return
        result.assets?.map(item => {
            state.setImage(item.uri);
        });
    };

    /**
     * Handle errors when typing input
     * @param errorMessage
     * @param input
     */
    const handleError = (errorMessage: string, input: string) => {
        state.setErrors((prevState: SettingProps) => ({ ...prevState, [input]: errorMessage }));
    };

    /**
     * Handle changing gender
     * @param value
     */
    const handleOnSelectGender = (value: string) => {
        state.setEditGender(true);
        state.setGender(value);
    };

    /**
     * Handle changing birthdate
     * @param newDate
     */
    const handleChangeBirthDate = (newDate: Date) => {
        state.setEditBirthday(true);
        state.setBirthDate(newDate);
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
        state.setNotifications(originNotifications);
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

        state.setSelectedTeams(newSelectedTeam);
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
        dispatch(resetFavTeam([]));
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
        dispatch(resetFavPlayer([]));
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
        dispatch(resetTopTeams([]));
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
        handleOnSelectGender,
        handleChangeBirthDate,
        handleChangeNotification,
        backFavTeam,
        backFavPlayer,
        backFavTopTeam,
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
        const ids = user.favorite_israel_teams.map((id: string) => {
            return { _id: { $oid: id } };
        });

        const [error, res] = await TeamService.findByFilter({
            $or: ids,
        });

        if (error) {
            return;
        }

        const teamResponse = (res?.data?.documents || []).splice(0, MAX_FAVORITES_TEAM);
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
        const ids = user.favorite_players.map((id: string) => {
            return { _id: { $oid: id } };
        });

        const [error, res] = await PlayerService.findByFilter({
            $or: ids,
        });

        if (error) {
            return;
        }

        const playersResponse = (res?.data?.documents || []).splice(0, MAX_FAVORITES_PLAYER);
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
        const ids = user.favorite_national_teams.map((id: string) => {
            return { _id: { $oid: id } };
        });

        const [error, res] = await TopTeamService.findByFilter({
            $or: ids,
        });

        if (error) {
            return;
        }

        const topTeamsResponse = (res?.data?.documents || []).splice(0, MAX_FAVORITES_TOPTEAM);
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
 */
const useEffectHandler = (state: any, callback: any, eventHandler: any) => {
    const { getTeamsData, getPlayersData, getTopTeamsData } = callback;

    // Listening for user profile change
    const { getProfile, setEmail, setUserName, setBirthDate, setGender, setNotifications } = state;
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
        setBirthDate(moment(getProfile.getProfile.item.birthdate, 'DD/MM/YYYY').toDate());
        setGender(profile.gender);

        const originNotifications = Object.assign([], state.notifications);
        originNotifications.forEach((notification: NotificationSetting) => {
            // eslint-disable-next-line no-param-reassign
            notification.isOn = getProfile.getProfile.item.approved_notifications.includes(
                notification.value
            );
        });

        setNotifications(originNotifications);

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

};

/**
 * Main model
 * @param param0
 * @returns
 */
export const useViewModel = ({ navigation, route }: ISettingsScreenProps) => {
    const { t } = useTranslation();
    const { getTranslationText } = useTranslationText();
    const { goBack, navigate, replace, popToTop } = useAppNavigator();
    const scrollBottom = route.params?.scrollBottom;

    const state = useViewState();
    const callback = useViewCallback(state);
    const eventHandler = useEventHandler(state, route);
    useEffectHandler(state, callback, eventHandler);

    const backAction = () => {
        const previousScreen = route?.params?.previousScreen;
        if (previousScreen && previousScreen === ScreenName.HomePage) {
            popToTop();
            navigate(ScreenName.SideBar);
        } else {
            goBack();
        }
        return false;
    };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backAction);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', backAction);
        };
    }, []);

    return {
        t,
        getTranslationText,
        ...eventHandler,
        ...state,
        scrollBottom,
    };
};
