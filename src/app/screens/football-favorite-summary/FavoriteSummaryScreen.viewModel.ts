import { useEffect, useState } from 'react';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useSelector, useDispatch } from 'react-redux';
import { TeamModel } from '@football/core/models/TeamModelResponse';
import { PlayerModel } from '@football/core/models/PlayerModelResponse';
import { TopTeamModel } from '@football/core/models/TopTeamModelResponse';
import { useTranslation } from 'react-i18next';
import { axiosAuth } from '@football/core/api/auth/axiosAuth';
import { ACTION, AUTH_URL, TOKEN } from '@football/core/api/auth/config';
import { addLogin } from 'src/store/user/Login.slice';
import { Alert } from 'react-native';
import { isEmpty, isNil } from 'lodash';
import { addProfile } from 'src/store/user/CreateProfile.slice';
import { Position } from '@football/core/models/TeamPersonnelResponse';
import { IFavoriteSummaryScreenProps } from './FavoriteSummaryScreen.type';
import { RootState } from 'src/store/store';

export const useViewModel = ({ navigation, route }: IFavoriteSummaryScreenProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { navigate, goBack } = useAppNavigator();
    const [onCheck, setonCheck] = useState(false);
    // team
    const [firstTeams, setFirstTeams] = useState<TeamModel>();
    const [secondTeams, setSecondTeams] = useState<TeamModel>();
    const [thirdTeams, setThirdTeams] = useState<TeamModel>();
    const teams = [firstTeams, secondTeams, thirdTeams];
    useEffect(() => {
        if (favSelectedTeams.length === 3) {
            setFirstTeams(favSelectedTeams[0]);
            setSecondTeams(favSelectedTeams[1]);
            setThirdTeams(favSelectedTeams[2]);
        } else if (favSelectedTeams.length === 2) {
            setFirstTeams(favSelectedTeams[0]);
            setSecondTeams(favSelectedTeams[1]);
        } else if (favSelectedTeams.length === 1) {
            setFirstTeams(favSelectedTeams[0]);
        }
    }, []);

    // player
    const [firstPlayers, setFirstPlayers] = useState<PlayerModel | Position>();
    const [secondPlayers, setSecondPlayers] = useState<PlayerModel | Position>();
    const [thirdPlayers, setThirdPlayers] = useState<PlayerModel | Position>();
    const players = [firstPlayers, secondPlayers, thirdPlayers];
    useEffect(() => {
        if (favSelectedPlayers.length === 3) {
            setFirstPlayers(favSelectedPlayers[0]);
            setSecondPlayers(favSelectedPlayers[1]);
            setThirdPlayers(favSelectedPlayers[2]);
        } else if (favSelectedPlayers.length === 2) {
            setFirstPlayers(favSelectedPlayers[0]);
            setSecondPlayers(favSelectedPlayers[1]);
        } else if (favSelectedPlayers.length === 1) {
            setFirstPlayers(favSelectedPlayers[0]);
        }
    }, []);

    // top team
    const [firstTopTeams, setFirstTopTeams] = useState<TopTeamModel>();
    const [secondTopTeams, setSecondTopTeams] = useState<TopTeamModel>();
    const topTeams = [firstTopTeams, secondTopTeams];
    useEffect(() => {
        if (favSelectedTopTeams.length === 2) {
            setFirstTopTeams(favSelectedTopTeams[0]);
            setSecondTopTeams(favSelectedTopTeams[1]);
        } else if (favSelectedTopTeams.length === 1) {
            setFirstTopTeams(favSelectedTopTeams[0]);
        }
    }, []);

    const favSelectedTeams = useSelector(
        (state: any) =>
            state.favTeams.favTeams.filter((v: TeamModel) => v.isSelected) as TeamModel[]
    );
    const favSelectedPlayers = useSelector((state: RootState) =>
        !isEmpty(favSelectedTeams)
            ? state.favPlayers.groupPlayers
                  .map(e => {
                      return e.listFavPlayers.filter(v => v.isSelected);
                  })
                  .flat()
            : state.favPlayers.favPlayers
                  .map(e => {
                      return e.listFavPlayers.filter(v => v.isSelected);
                  })
                  .flat()
    );
    const favSelectedTopTeams = useSelector(
        (state: any) =>
            state.favTopTeams.favTopTeams.filter(
                (v: TopTeamModel) => v.isSelected
            ) as TopTeamModel[]
    );

    const login = useSelector((state: any) => state.login.login);
    const profile = useSelector((state: any) => state.createProfile.profile);
    const guestId = useSelector((state: any) => state.guestId.guestId);

    function serializeParams(obj: any) {
        let str = [];
        for (let p in obj) {
            if (obj.hasOwnProperty(p)) {
                str.push(p + '=' + encodeURIComponent(obj[p]));
            }
        }
        return str.join('&');
    }

    const onGoBack = (): void => {
        goBack();
    };
    const onGoSkip = (): void => {
        navigate(ScreenName.BottomTab);
    };

    const addFavTeam = (index: number) => {
        navigate(ScreenName.FavTeamPage);
    };

    const changeFavTeam = (index: string) => {
        navigate(ScreenName.FavTeamPage);
    };

    const addFavPlayer = (index: number) => {
        navigate(ScreenName.FavPlayerPage);
    };

    const changeFavPlayer = (index: number) => {
        navigate(ScreenName.FavPlayerPage);
    };

    const addFavTopTeam = (index: number) => {
        navigate(ScreenName.FavTopTeamPage);
    };

    const changeFavTopTeam = (index: string) => {
        navigate(ScreenName.FavTopTeamPage);
    };

    const backFavTeam = () => {
        navigate(ScreenName.FavTeamPage);
    };
    const backFavPlayer = () => {
        navigate(ScreenName.FavPlayerPage);
    };
    const backFavTopTeam = () => {
        navigate(ScreenName.FavTopTeamPage);
    };

    const navigationHomePage = async () => {
        if (isEmpty(profile) || isNil(profile)) {
            try {
                const { data }: any = await axiosAuth.post(
                    `${AUTH_URL}`,
                    serializeParams({
                        action: ACTION,
                        token: TOKEN,
                        call: AuthData.CREATE_PROFILE,
                        'item[guest_guid]': guestId[0],
                    }),

                    {
                        headers: {},
                    }
                );

                if (!isEmpty(data)) {
                    let data1 = data;
                    const action = addProfile(data1.item);
                    dispatch(action);
                    try {
                        if (!isEmpty(login) && !isNil(login)) {
                            navigate(ScreenName.BottomTab);
                        } else {
                            const { data }: any = await axiosAuth.post(
                                `${AUTH_URL}`,
                                serializeParams({
                                    action: ACTION,
                                    token: TOKEN,
                                    call: AuthData.LOGIN,
                                    guest_id: data1.item.tc_user,
                                    guest_guid: guestId[0],
                                }),
                                {
                                    headers: {},
                                }
                            );
                            if (!isEmpty(data)) {
                                const action = addLogin(data);
                                dispatch(action);
                                navigate(ScreenName.BottomTab);
                            }
                        }
                    } catch (error: any) {
                        Alert.alert(error);
                    }
                }

                // }
            } catch (error: any) {
                Alert.alert(error);
            }
        }
    };

    const toggleOnCheck = () => {
        setonCheck(!onCheck);
    };

    const navigationMethodRegister = async () => {
        if (isEmpty(profile) || isNil(profile)) {
            try {
                const { data }: any = await axiosAuth.post(
                    `${AUTH_URL}`,
                    serializeParams({
                        action: ACTION,
                        token: TOKEN,
                        call: AuthData.CREATE_PROFILE,
                        'item[guest_guid]': guestId[0],
                    }),

                    {
                        headers: {},
                    }
                );

                if (!isEmpty(data)) {
                    let data1 = data;
                    const action = addProfile(data1.item);
                    dispatch(action);
                    try {
                        if (!isEmpty(login) && !isNil(login)) {
                            navigate(ScreenName.RegisterPage);
                        } else {
                            const { data }: any = await axiosAuth.post(
                                `${AUTH_URL}`,
                                serializeParams({
                                    action: ACTION,
                                    token: TOKEN,
                                    call: AuthData.LOGIN,
                                    guest_id: data1.item.tc_user,
                                    guest_guid: guestId[0],
                                }),
                                {
                                    headers: {},
                                }
                            );
                            if (!isEmpty(data)) {
                                const action = addLogin(data);
                                dispatch(action);
                                navigate(ScreenName.RegisterPage);
                            }
                        }
                    } catch (error: any) {
                        Alert.alert(error);
                    }
                }

                // }
            } catch (error: any) {
                Alert.alert(error);
            }
        }
    };

    return {
        t,
        onGoBack,
        onGoSkip,
        toggleOnCheck,
        onCheck,
        addFavTeam,
        changeFavTeam,
        addFavPlayer,
        changeFavPlayer,
        addFavTopTeam,
        changeFavTopTeam,
        backFavTeam,
        backFavPlayer,
        backFavTopTeam,
        navigationHomePage,
        teams,
        players,
        topTeams,
        navigationMethodRegister,
    };
};
