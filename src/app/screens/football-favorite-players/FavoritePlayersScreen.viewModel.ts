/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-shadow */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { useMount } from '@football/app/utils/hooks/useMount';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { PlayerModel, PlayersModelResponse } from '@football/core/models/PlayerModelResponse';
import { TeamModel } from '@football/core/models/TeamModelResponse';
import { Position, TeamPersonnelModel } from '@football/core/models/TeamPersonnelResponse';
import { isEmpty, isNil } from 'lodash';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
    setAllFavPlayers,
    pushAllFavPlayers,
    setGroupFavPlayer,
    pushGroupFavPlayer,
    searchFavPlayers,
    pushSearchFavPlayers,
    resetAllFavPlayers,
    resetGroupFavPlayer,
    resetSearchFavPlayer,
} from 'src/store/FavPlayer.slice';
import { RootState } from 'src/store/store';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { ACTION, TOKEN } from '@football/core/api/auth/config';
import { loginUser } from 'src/store/user/Login.slice';
import { createProfileUser } from 'src/store/user/CreateProfile.slice';
import { IFavoritePlayerScreenProps } from './FavoritePlayersScreen.type';

export const useViewModel = ({ navigation, route }: IFavoritePlayerScreenProps) => {
    const { t } = useTranslation();
    const { navigate, goBack } = useAppNavigator();
    const dispatch = useDispatch<any>();
    const [searchText, setSearchText] = useState('');
    const routes = useRoute();

    const favSelectedTeams = useSelector(
        (state: any) =>
            state.favTeams.favTeams.filter((v: TeamModel) => v.isSelected) as TeamModel[]
    );

    const favSearchPlayers = useSelector((state: RootState) => {
        return state.favPlayers.searchPlayers;
    });

    const favSelectedSearchPlayers = useSelector((state: RootState) =>
        state.favPlayers.searchPlayers
            .map(e => {
                return e.listFavPlayers.filter(v => v.isSelected);
            })
            .flat()
    );

    const favPlayers = useSelector((state: RootState) =>
        !isEmpty(favSelectedTeams) ? state.favPlayers.groupPlayers : state.favPlayers.favPlayers
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

    const login = useSelector((state: RootState) => state.login);
    const profile = useSelector((state: RootState) => state.createProfile);
    const guestId = useSelector((state: any) => state.guestId.guestId);
    const uuid = require('uuid');
    let id = uuid.v4();

    function serializeParams(obj: any) {
        let str = [];
        for (let p in obj) {
            if (obj.hasOwnProperty(p)) {
                str.push(p + '=' + encodeURIComponent(obj[p]));
            }
        }
        return str.join('&');
    }

    const getPlayersData = useCallback(async () => {
        if (isEmpty(favPlayers) || isNil(favPlayers)) {
            try {
                const { data }: PlayersModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
                    dataSource: DATA_SOURCE,
                    database: DB,
                    collection: 'player',
                });

                if (!isEmpty(data.documents)) {
                    dispatch(
                        setAllFavPlayers({
                            id: id,
                            label: t('favorite_player.group'),
                            listFavPlayers: data.documents,
                        })
                    );
                }
            } catch (error: any) {
                Alert.alert(error);
            }
        }
    }, []);

    const getTeamPersonnel = useCallback(async () => {
        if (isEmpty(favPlayers) || isNil(favPlayers)) {
            try {
                const { data }: any = await axiosClient.post(`${BASE_URL}/find`, {
                    dataSource: DATA_SOURCE,
                    database: DB,
                    collection: 'team_personnel',
                });

                if (!isEmpty(data.documents)) {
                    favSelectedTeams.map((favTeam: TeamModel, index: number) => {
                        data.documents.map((team_personnel: TeamPersonnelModel) => {
                            if (favTeam.team_personnel_id === team_personnel._id) {
                                let temp = [];
                                temp.push(...team_personnel.players.attack);
                                temp.push(...team_personnel.players.midfield);
                                temp.push(...team_personnel.players.defence);
                                temp.push(...team_personnel.players.goalkeepers);

                                dispatch(
                                    setGroupFavPlayer({
                                        id: team_personnel._id,
                                        label: favTeam.name_he,
                                        listFavPlayers: temp,
                                    })
                                );
                            }
                        });
                    });
                }
            } catch (error: any) {
                Alert.alert(error);
            }
        }
    }, []);
    const handleSelected = (player: PlayerModel | Position) => {
        if (!isEmpty(favSearchPlayers)) {
            dispatch(pushSearchFavPlayers(player));
        } else {
            if (!isEmpty(favSelectedTeams)) {
                dispatch(pushGroupFavPlayer(player));
            } else {
                dispatch(pushAllFavPlayers(player));
            }
        }
    };

    const searchFavPlayer = async (text: string) => {
        if (text !== '') {
            try {
                const { data }: PlayersModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
                    dataSource: DATA_SOURCE,
                    database: DB,
                    collection: 'player',
                    projection: {
                        search_terms: true,
                        name_en: true,
                        image_url: true,
                        image_width: true,
                        image_height: true,
                        name_he: true,
                        team: true,
                        top_team: true,
                        date_of_birth: true,
                        citizenship_he: true,
                        citizenship_en: true,
                        citizenship_image_url: true,
                        num_of_games: true,
                        homepage_info: true,
                    },
                    filter: {
                        search_terms: { $regex: `.*${text}.*`, $options: 'i' },
                    },
                    limit: 100,
                });

                if (!isEmpty(data.documents)) {
                    dispatch(
                        resetSearchFavPlayer({
                            id: '',
                            label: '',
                            listFavPlayers: [],
                        })
                    );
                    dispatch(
                        searchFavPlayers({
                            id: id,
                            label: '',
                            listFavPlayers: data.documents,
                        })
                    );
                }
            } catch (error: any) {
                Alert.alert(error);
            }
        } else {
            dispatch(
                resetSearchFavPlayer({
                    id: '',
                    label: '',
                    listFavPlayers: [],
                })
            );
        }
    };

    const onGoBack = (): void => {
        goBack();
    };
    const onGoSkip = () => {
        if (isEmpty(profile.profile) || isNil(profile.profile)) {
            dispatch(
                createProfileUser(
                    serializeParams({
                        action: ACTION,
                        token: TOKEN,
                        call: AuthData.CREATE_PROFILE,
                        'item[guest_guid]': guestId[0],
                    })
                )
            );
        }
    };
    const isFocused = useIsFocused();

    useEffect(() => {
        if (!isFocused) return;
        if (!isEmpty(login.login)) {
            navigate(ScreenName.BottomTab);
            navigation.reset({
                index: 0,
                routes: [{ name: ScreenName.BottomTab as never }],
            });
        } else {
            if (profile.success === true) {
                dispatch(
                    loginUser(
                        serializeParams({
                            action: ACTION,
                            token: TOKEN,
                            call: AuthData.LOGIN,
                            guest_id: profile.profile.tc_user,
                            guest_guid: guestId[0],
                        })
                    )
                );

                navigate(ScreenName.BottomTab);
                navigation.reset({
                    index: 0,
                    routes: [{ name: ScreenName.BottomTab as never }],
                });
            }
        }
    }, [profile.success, isFocused]);

    const handleContinue = () => {
        if (routes.params !== undefined) {
            if (routes.params!.previous_screen === ScreenName.FavSummaryPage) {
                navigate(ScreenName.FavSummaryPage);
            } else {
                navigate(ScreenName.FavTopTeamPage);
            }
        } else {
            navigate(ScreenName.FavTopTeamPage);
        }
    };

    useMount(() => {
        if (!isEmpty(favSelectedTeams)) {
            getTeamPersonnel();
            dispatch(resetAllFavPlayers({ id: '', label: '', listFavPlayers: [] }));
        } else {
            getPlayersData();
            dispatch(resetGroupFavPlayer({ id: '', label: '', listFavPlayers: [] }));
        }
    });

    return {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        searchFavPlayer,
        setSearchText,
        searchText,
        favSelectedPlayers,
        favPlayers,
        profile,
        favSearchPlayers,
        favSelectedSearchPlayers,
    };
};
