import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { TeamModel, TeamModelResponse } from '@football/core/models/TeamModelResponse';
import { TopTeamModel, TopTeamModelResponse } from '@football/core/models/TopTeamModelResponse';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import {
    pushAllFavPlayers,
    pushGroupFavPlayer,
    resetSearchFavPlayer,
    resetSelectedFavPlayer,
    SelectedPlayer,
} from 'src/store/FavPlayer.slice';
import { pushFavTeam, resetSelectedFavTeam, resetFavTeam } from 'src/store/FavTeam.slice';
import qs from 'qs';
import { resetTopTeams } from 'src/store/FavTopTeam.slice';
import { RootState } from 'src/store/store';
import { ISettingsScreenProps } from './SettingsScreen.type';
import { ACTION } from '@football/core/api/auth/config';
import { getProfileUser } from 'src/store/user/getProfile.slice';
import TeamService from '@football/core/services/Team.service';
import PlayerService from '@football/core/services/Player.service';
import { PlayerModel, PlayersModelResponse } from '@football/core/models/PlayerModelResponse';
import { isEmpty } from 'lodash';
import {
    resetSettingFavPlayer,
    resetSettingFavTeam,
    resetSettingFavTopTeam,
    setSettingFavPlayer,
} from 'src/store/SettingSelected.slice';
import { setProfileUser, statusSetProfile } from 'src/store/user/setProfile.slice';

export const useViewModel = ({ navigation, route }: ISettingsScreenProps) => {
    const { t } = useTranslation();
    const { goBack, navigate, replace } = useAppNavigator();
    const [image, setImage] = useState<any>();
    const dispatch = useDispatch<any>();

    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
    const selectedFavTeams = useSelector((state: RootState) => state.favTeams.selectedTeams);
    const selectedFavPlayers = useSelector((state: RootState) => state.favPlayers.selectedPlayers);
    const selectedFavTopTeams = useSelector(
        (state: RootState) => state.favTopTeams.selectedTopTeams
    );
    const settingSelected = useSelector((state: RootState) => state.settingSelected);

    const onImagePicker = async () => {
        const result = await launchImageLibrary({ mediaType: 'photo' });
        // eslint-disable-next-line array-callback-return
        result.assets?.map(item => {
            setImage(item.uri);
        });
    };
    const previous_screen = route?.params?.previous_screen;
    const onGoBack = () => {
        if (previous_screen === ScreenName.FavTeamPage) {
            navigate(ScreenName.SideBar);
        } else if (previous_screen === ScreenName.FavPlayerPage) {
            navigate(ScreenName.SideBar);
        } else if (previous_screen === ScreenName.FavTopTeamPage) {
            navigate(ScreenName.SideBar);
        } else {
            goBack();
        }
        dispatch(resetSettingFavTeam([]));
        dispatch(resetSettingFavPlayer([]));
        dispatch(resetSettingFavTopTeam([]));
    };

    const backFavTeam = () => {
        navigate(ScreenName.FavTeamPage, {
            previous_screen: ScreenName.SettingsPage,
        });
    };

    const backFavPlayer = () => {
        navigate(ScreenName.FavPlayerPage, {
            previous_screen: ScreenName.SettingsPage,
        });
    };

    const backFavTopTeam = () => {
        navigate(ScreenName.FavTopTeamPage, {
            previous_screen: ScreenName.SettingsPage,
        });
    };

    const addFavTeam = (index: number) => {
        dispatch(resetFavTeam([]));
        navigate(ScreenName.FavTeamPage, {
            previous_screen: ScreenName.SettingsPage,
        });
    };

    const changeFavTeam = (index: string) => {
        dispatch(resetFavTeam([]));
        navigate(ScreenName.FavTeamPage, {
            previous_screen: ScreenName.SettingsPage,
        });
    };

    const addFavPlayer = (index: number) => {
        dispatch(resetSearchFavPlayer({ id: '', label: '', listFavPlayers: [] }));
        navigate(ScreenName.FavPlayerPage, {
            previous_screen: ScreenName.SettingsPage,
        });
    };

    const changeFavPlayer = (index: number) => {
        dispatch(resetSearchFavPlayer({ id: '', label: '', listFavPlayers: [] }));
        navigate(ScreenName.FavPlayerPage, {
            previous_screen: ScreenName.SettingsPage,
        });
    };

    const addFavTopTeam = (index: number) => {
        dispatch(resetTopTeams([]));
        navigate(ScreenName.FavTopTeamPage, {
            previous_screen: ScreenName.SettingsPage,
        });
    };

    const changeFavTopTeam = (index: string) => {
        dispatch(resetTopTeams([]));
        navigate(ScreenName.FavTopTeamPage, {
            previous_screen: ScreenName.SettingsPage,
        });
    };
    const handleError = (errorMessage: string, input: string) => {
        setErrors(prevState => ({ ...prevState, [input]: errorMessage }));
    };

    const userNameRef = useRef<any>(null);
    const [userName, setUserName] = useState('');
    const [errors, setErrors] = useState({
        userName: '',
        email: '',
    });
    const handleOnChangeName = (e: string) => {
        setUserName(e);
    };
    const getProfile = useSelector((state: RootState) => state.getProfile);

    const emailRef = useRef<any>(null);
    const [email, setEmail] = useState<any>('');

    const handleOnChangeEmail = (e: string) => {
        setUserName(e);
    };

    const login = useSelector((state: RootState) => state.login);

    function serializeParams(obj: any) {
        const a = qs.stringify(obj, { encode: false, arrayFormat: 'brackets' });
        console.log(a);
        return a;
    }

    // Gender
    const handleOnGender = (e: number) => {
        if (e === 0) {
            setGender('FAN_GENDER_MALE');
        } else if (e === 1) {
            setGender('FAN_GENDER_FEMALE');
        } else if (e === 2) {
            setGender('FAN_GENDER_NOT_AVAILABLE');
        }
    };

    const [gender, setGender] = useState('');

    const [indexGender, setIndexGender] = useState(1);

    const genders = [t('settings.male'), t('settings.female'), t('settings.other_gender')];

    const handleGender = (index: number) => {
        setIndexGender(index);
    };

    // Date
    const [formattedDate, setFormattedDate] = useState<any>();
    const [dateTime, setDateTime] = useState<any>(new Date());
    const handleOnDate = (e: Date) => {
        let formattedDate = e.getFullYear() + '-' + (e.getMonth() + 1) + '-' + e.getDate();
        setFormattedDate(formattedDate);
    };

    useEffect(() => {
        if (getProfile.success === true) {
            setEmail(getProfile.getProfile.item.email);
            setDateTime(new Date(getProfile.getProfile.item.birthdate));
        }
    }, [getProfile.success]);

    const [favSelectedTeam, setFavSelectedTeam] = useState<TeamModel[]>([]);

    useEffect(() => {
        if (getProfile.success === true) {
            const fetchFavTeam = async () => {
                const fetchTeam = await Promise.all(
                    getProfile.getProfile.item.favorite_israel_teams.map(async (item: string) => {
                        const [err, res] = await TeamService.findByOId<TeamModelResponse>(item);
                        if (err) return;
                        return res.data.documents[0];
                    })
                );
                // console.log(fetchTeam.filter(Boolean));
                if (!isEmpty(settingSelected.settingFavTeams)) {
                    setFavSelectedTeam(settingSelected.settingFavTeams);
                } else {
                    setFavSelectedTeam(fetchTeam.filter(Boolean));
                }
            };
            fetchFavTeam();
        }
    }, [getProfile.success]);

    // team
    const [firstTeams, setFirstTeams] = useState<TeamModel>();
    const [secondTeams, setSecondTeams] = useState<TeamModel>();
    const [thirdTeams, setThirdTeams] = useState<TeamModel>();
    const teams = [firstTeams, secondTeams, thirdTeams];
    useEffect(() => {
        if (favSelectedTeam?.length === 3) {
            setFirstTeams(favSelectedTeam[0]);
            setSecondTeams(favSelectedTeam[1]);
            setThirdTeams(favSelectedTeam[2]);
        } else if (favSelectedTeam?.length === 2) {
            setFirstTeams(favSelectedTeam[0]);
            setSecondTeams(favSelectedTeam[1]);
        } else if (favSelectedTeam?.length === 1) {
            setFirstTeams(favSelectedTeam[0]);
        }
    }, [favSelectedTeam]);

    const [favSelectedPlayer, setFavSelectedPlayer] = useState<PlayerModel[]>([]);
    useEffect(() => {
        if (getProfile.success === true) {
            const fetchFavPlayer = async () => {
                const fetchPlayer = await Promise.all(
                    getProfile.getProfile.item.favorite_players.map(async (item: string) => {
                        const [err, res] = await PlayerService.findByOId<PlayersModelResponse>(
                            item
                        );
                        if (err) return;
                        return res.data.documents[0];
                    })
                );
                // console.log(fetchTeam.filter(Boolean));
                if (!isEmpty(settingSelected.settingFavPlayers)) {
                    setFavSelectedPlayer(settingSelected.settingFavPlayers);
                } else {
                    setFavSelectedPlayer(fetchPlayer.filter(Boolean));
                }
            };
            fetchFavPlayer();
        }
    }, [getProfile.success]);

    // player
    const [firstPlayers, setFirstPlayers] = useState<SelectedPlayer>();
    const [secondPlayers, setSecondPlayers] = useState<SelectedPlayer>();
    const [thirdPlayers, setThirdPlayers] = useState<SelectedPlayer>();
    const players = [firstPlayers, secondPlayers, thirdPlayers];
    useEffect(() => {
        if (favSelectedPlayer?.length === 3) {
            setFirstPlayers(favSelectedPlayer[0]);
            setSecondPlayers(favSelectedPlayer[1]);
            setThirdPlayers(favSelectedPlayer[2]);
        } else if (favSelectedPlayer?.length === 2) {
            setFirstPlayers(favSelectedPlayer[0]);
            setSecondPlayers(favSelectedPlayer[1]);
        } else if (favSelectedPlayer?.length === 1) {
            setFirstPlayers(favSelectedPlayer[0]);
        }
    }, [favSelectedPlayer]);

    const [favSelectedTopTeam, setFavSelectedTopTeam] = useState<TopTeamModel[]>([]);
    useEffect(() => {
        if (getProfile.success === true) {
            const fetchFavTopTeam = async () => {
                const fetchTopTeam = await Promise.all(
                    getProfile.getProfile.item.favorite_national_teams.map(async (item: string) => {
                        const [err, res] = await TeamService.findByOId<TopTeamModelResponse>(item);
                        if (err) return;
                        return res.data.documents[0];
                    })
                );
                // console.log(fetchTeam.filter(Boolean));
                if (!isEmpty(settingSelected.settingFavTopTeams)) {
                    setFavSelectedTopTeam(settingSelected.settingFavTopTeams);
                } else {
                    setFavSelectedTopTeam(fetchTopTeam.filter(Boolean));
                }
            };
            fetchFavTopTeam();
        }
    }, [getProfile.success]);

    // top team
    const [firstTopTeams, setFirstTopTeams] = useState<TopTeamModel>();
    const [secondTopTeams, setSecondTopTeams] = useState<TopTeamModel>();
    const topTeams = [firstTopTeams, secondTopTeams];
    useEffect(() => {
        if (favSelectedTopTeam?.length === 2) {
            setFirstTopTeams(favSelectedTopTeam[0]);
            setSecondTopTeams(favSelectedTopTeam[1]);
        } else if (favSelectedTopTeam?.length === 1) {
            setFirstTopTeams(favSelectedTopTeam[0]);
        }
    }, []);

    useEffect(() => {
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
    }, []);

    // const login = useSelector((state: RootState) => state.login);
    const profile = useSelector((state: RootState) => state.createProfile);
    const guestId = useSelector((state: any) => state.guestId.guestId);
    const profileUser = useSelector((state: RootState) => state.setProfile);

    const handleSaveChange = () => {
        dispatch(statusSetProfile([]));
        let fav_team: any = [];
        favSelectedTeam.map(item => {
            fav_team.push(item._id);
        });
        let player_team: any = [];
        favSelectedPlayer.map(item => {
            player_team.push(item._id);
        });
        let fav_top_team: any = [];
        favSelectedTopTeam.map(item => {
            fav_top_team.push(item._id);
        });
        dispatch(
            setProfileUser(
                serializeParams({
                    action: ACTION,
                    token: login.login.token,
                    call: AuthData.SET_PROFILE,
                    item_id: profile.profile.item_id,
                    item: {
                        email: userName,
                        gender: gender,
                        birthdate: formattedDate,
                        favorite_israel_teams: fav_team,
                        favorite_players: player_team,
                        favorite_national_teams: fav_top_team,
                    },
                })
            )
        );
    };

    return {
        dateTime,
        image,
        isEnabled1,
        isEnabled2,
        isEnabled3,
        t,
        goBack,
        navigate,
        handleOnDate,
        onImagePicker,
        toggleSwitch1,
        toggleSwitch2,
        toggleSwitch3,
        backFavPlayer,
        backFavTeam,
        backFavTopTeam,
        handleSaveChange,
        teams,
        players,
        topTeams,
        addFavTeam,
        changeFavTeam,
        addFavPlayer,
        changeFavPlayer,
        addFavTopTeam,
        changeFavTopTeam,
        onGoBack,
        userNameRef,
        userName,
        setUserName,
        handleError,
        errors,
        handleOnChangeName,
        handleOnChangeEmail,
        emailRef,
        email,
        setEmail,
        getProfile,
        handleOnGender,
        handleGender,
        genders,
        indexGender,
        setIndexGender,
        favSelectedTeam,
    };
};
