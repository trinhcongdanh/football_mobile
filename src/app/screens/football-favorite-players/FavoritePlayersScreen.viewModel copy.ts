// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable no-underscore-dangle */
// import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
// import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
// import { serializeParams } from '@football/app/utils/functions/quick-functions';
// import { useMount } from '@football/app/utils/hooks/useMount';
// import { ACTION, TOKEN } from '@football/core/api/auth/config';
// import { axiosClient } from '@football/core/api/configs/axiosClient';
// import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
// import { PlayerModel, PlayersModelResponse } from '@football/core/models/PlayerModelResponse';
// import { TeamModel } from '@football/core/models/TeamModelResponse';
// import {
//     Players,
//     TeamPersonnelModel,
//     TeamPersonnelModelResponse,
// } from '@football/core/models/TeamPersonnelResponse';
// import PlayerService from '@football/core/services/Player.service';
// import TeamPersonnelService from '@football/core/services/TeamPersonnel.service';
// import { useIsFocused, useRoute } from '@react-navigation/native';
// import { isEmpty, isNil } from 'lodash';
// import { useCallback, useEffect, useMemo, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { Alert, Keyboard } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//     pushAllFavPlayers,
//     pushAllFavPlayersProfile,
//     pushGroupFavPlayer,
//     resetAllFavPlayers,
//     resetGroupFavPlayer,
//     resetSearchFavPlayer,
//     searchFavPlayers,
//     selectedFavPlayersAsMapSelector,
//     selectedFavPlayersProfileAsMapSelector,
//     setAllFavPlayers,
//     setGroupFavPlayer,
// } from 'src/store/FavPlayer.slice';
// import { setSettingFavPlayer } from 'src/store/SettingSelected.slice';
// import { RootState } from 'src/store/store';
// import { createProfileUser } from 'src/store/user/CreateProfile.slice';
// import { loginUser } from 'src/store/user/Login.slice';
// import { IFavoritePlayerScreenProps } from './FavoritePlayersScreen.type';

// const useViewState = () => {
//     const [isLoading, setIsLoading] = useState<boolean>(false);
//     const [searchText, setSearchText] = useState<string>('');
//     const [favSelectedPlayer, setFavSelectedPlayer] = useState<PlayerModel[]>([]);
//     const [focusSearch, setFocusSearch] = useState(false);

//     const getProfile = useSelector((state: RootState) => state.getProfile);
//     const selectedFavTeams = useSelector((state: RootState) => state.favTeams.selectedTeams);
//     const selectedFavPlayers = useSelector((state: RootState) => state.favPlayers.selectedPlayers);
//     const login = useSelector((state: RootState) => state.login);
//     const profile = useSelector((state: RootState) => state.createProfile);
//     const guestId = useSelector((state: RootState) => state.guestId.guestId);
//     const selectedPlayersProfile = useSelector(
//         (state: RootState) => state.favPlayers.selectedPlayersProfile
//     );

//     const selectedFavPlayersMap = useSelector(
//         getProfile.success
//             ? selectedFavPlayersProfileAsMapSelector
//             : selectedFavPlayersAsMapSelector
//     );

//     const favPlayers = useSelector((state: RootState) =>
//         !isEmpty(selectedFavTeams) ? state.favPlayers.groupPlayers : state.favPlayers.favPlayers
//     );

//     const favSearchPlayers = useSelector((state: RootState) => {
//         return state.favPlayers.searchPlayers;
//     });

//     const formattedSearchFavPlayers = useMemo(() => {
//         return favSearchPlayers.map(favSearchPlayer => {
//             return {
//                 id: 'a',
//                 label: '',
//                 listFavPlayers: favSearchPlayer.listFavPlayers.map(player => ({
//                     ...player,
//                     isSelected: selectedFavPlayersMap.has(player._id),
//                 })),
//             };
//         });
//     }, [favSearchPlayers, selectedFavPlayersMap]);

//     const formattedFavPlayers = useMemo(() => {
//         return favPlayers.map(favPlayer => {
//             return {
//                 label: favPlayer.label,
//                 listFavPlayers: favPlayer.listFavPlayers.map(player => ({
//                     ...player,
//                     isSelected: selectedFavPlayersMap.has(player._id),
//                 })) as PlayerModel[] | Players[],
//             };
//         });
//     }, [favPlayers, selectedFavPlayersMap]);

//     const favSelectedSearchPlayers = useSelector((state: RootState) =>
//         state.favPlayers.searchPlayers
//             .map(e => {
//                 return e.listFavPlayers.filter(v => v.isSelected);
//             })
//             .flat()
//     );

//     const favSelectedPlayers = useSelector((state: RootState) =>
//         (!isEmpty(selectedFavTeams) ? state.favPlayers.groupPlayers : state.favPlayers.favPlayers)
//             .map(e => e.listFavPlayers.filter(v => v.isSelected))
//             .flat()
//     );
//     return {
//         isLoading,
//         setIsLoading,
//         searchText,
//         setSearchText,
//         favSelectedPlayer,
//         setFavSelectedPlayer,
//         focusSearch,
//         setFocusSearch,
//         getProfile,
//         selectedFavTeams,
//         selectedFavPlayers,
//         selectedPlayersProfile,
//         selectedFavPlayersMap,
//         favPlayers,
//         favSearchPlayers,
//         formattedSearchFavPlayers,
//         formattedFavPlayers,
//         favSelectedSearchPlayers,
//         favSelectedPlayers,
//         login,
//         profile,
//         guestId,
//     };
// };

// const useViewCallback = (route: any, viewState: any) => {
//     const {
//         setFavSelectedPlayer,
//         favPlayers,
//         setIsLoading,
//         selectedFavTeams,
//         searchText,
//     } = viewState;
//     const dispatch = useDispatch();
//     // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
//     const uuid = require('uuid');
//     const generateId = uuid.v4();
//     const { t } = useTranslation();

//     const getPlayerByIds = async (inputIds: Array<string>) => {
//         if (inputIds.length) {
//             return;
//         }
//         const ids = inputIds.map((id: string) => {
//             return { _id: { $oid: id } };
//         });
//         console.log('player ids', ids);

//         const [error, res] = await PlayerService.findByFilter({
//             $or: ids,
//         });
//         if (error) {
//             return;
//         }

//         // eslint-disable-next-line consistent-return
//         return res.data.documents;
//     };

//     const getFavoritePlayers = useCallback(async (favoritePlayers: Array<string>) => {
//         return getPlayerByIds(favoritePlayers);
//     }, []);

//     const getPlayersData = useCallback(async () => {
//         if (isEmpty(favPlayers) || isNil(favPlayers)) {
//             setIsLoading(true);

//             try {
//                 const [error, res] = await PlayerService.findAll();
//                 if (error) {
//                     return;
//                 }

//                 if (!isEmpty(res.data.documents)) {
//                     dispatch(
//                         setAllFavPlayers({
//                             id: generateId,
//                             label: t('favorite_player.group'),
//                             listFavPlayers: res.data.documents,
//                         })
//                     );
//                 }
//             } catch (error: any) {
//                 Alert.alert(error);
//             } finally {
//                 setIsLoading(false);
//             }
//         }
//     }, []);

//     const getTeamPersonnel = useCallback(async () => {
//         if (isEmpty(favPlayers) || isNil(favPlayers)) {
//             setIsLoading(true);

//             try {
//                 const [error, res] = await TeamPersonnelService.findAll();
//                 if (error) {
//                     return;
//                 }

//                 if (!isEmpty(res.data.documents)) {
//                     selectedFavTeams
//                         .map((favTeam: TeamModel) => ({
//                             favTeam,
//                             team_personnel: res.data.documents.find(
//                                 (v: TeamPersonnelModel) => v._id === favTeam.team_personnel_id
//                             ),
//                         }))
//                         .forEach(async ({ favTeam, team_personnel }) => {
//                             // const fetchedPlayers = await Promise.all(
//                             //     team_personnel.players.map(async (player_personnel: Players) => {
//                             //         const [err, res] = await PlayerService.findByOId<
//                             //             PlayersModelResponse
//                             //         >(player_personnel.player_id);
//                             //         if (err) return;
//                             //         return res.data.documents[0];
//                             //     })
//                             // );
//                             const listFavPlayers = getPlayerByIds(team_personnel.players);
//                             dispatch(
//                                 setGroupFavPlayer({
//                                     id: team_personnel._id,
//                                     label: favTeam.name_he,
//                                     listFavPlayers,
//                                 })
//                             );
//                         });
//                 }
//             } catch (error: any) {
//                 Alert.alert(error);
//             } finally {
//                 setIsLoading(false);
//             }
//         }
//     }, []);
//     const submitSearchFavPlayer = async () => {
//         Keyboard.dismiss();
//         setIsLoading(true);
//         if (searchText !== '') {
//             try {
//                 dispatch(
//                     resetSearchFavPlayer({
//                         id: '',
//                         label: '',
//                         listFavPlayers: [],
//                     })
//                 );
//                 dispatch(
//                     resetAllFavPlayers({
//                         id: '',
//                         label: '',
//                         listFavPlayers: [],
//                     })
//                 );
//                 dispatch(
//                     resetGroupFavPlayer({
//                         id: '',
//                         label: '',
//                         listFavPlayers: [],
//                     })
//                 );
//                 const { data }: PlayersModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
//                     dataSource: DATA_SOURCE,
//                     database: DB,
//                     collection: 'player',
//                     projection: {
//                         search_terms: true,
//                         name_en: true,
//                         image_url: true,
//                         image_width: true,
//                         image_height: true,
//                         name_he: true,
//                         team: true,
//                         top_team: true,
//                         date_of_birth: true,
//                         citizenship_he: true,
//                         citizenship_en: true,
//                         citizenship_image_url: true,
//                         num_of_games: true,
//                         homepage_info: true,
//                     },
//                     filter: {
//                         search_terms: { $regex: `.*${searchText}.*`, $options: 'i' },
//                     },
//                     limit: 100,
//                 });

//                 if (!isEmpty(data.documents)) {
//                     dispatch(
//                         resetSearchFavPlayer({
//                             id: '',
//                             label: '',
//                             listFavPlayers: [],
//                         })
//                     );

//                     dispatch(
//                         searchFavPlayers({
//                             id: generateId,
//                             label: '',
//                             listFavPlayers: data.documents,
//                         })
//                     );
//                 }
//                 setIsLoading(false);
//             } catch (error: any) {
//                 Alert.alert(error);
//             } finally {
//                 setIsLoading(false);
//             }
//         } else {
//             dispatch(
//                 resetSearchFavPlayer({
//                     id: '',
//                     label: '',
//                     listFavPlayers: [],
//                 })
//             );
//             dispatch(
//                 resetAllFavPlayers({
//                     id: '',
//                     label: '',
//                     listFavPlayers: [],
//                 })
//             );
//             dispatch(
//                 resetGroupFavPlayer({
//                     id: '',
//                     label: '',
//                     listFavPlayers: [],
//                 })
//             );
//             if (!isEmpty(selectedFavTeams)) {
//                 if (isEmpty(favPlayers) || isNil(favPlayers)) {
//                     try {
//                         const { data }: TeamPersonnelModelResponse = await axiosClient.post(
//                             `${BASE_URL}/find`,
//                             {
//                                 dataSource: DATA_SOURCE,
//                                 database: DB,
//                                 collection: 'team_personnel',
//                             }
//                         );

//                         if (!isEmpty(data.documents)) {
//                             dispatch(
//                                 resetGroupFavPlayer({
//                                     id: '',
//                                     label: '',
//                                     listFavPlayers: [],
//                                 })
//                             );
//                             selectedFavTeams
//                                 .map((favTeam: TeamModel) => ({
//                                     favTeam,
//                                     team_personnel: data.documents.find(
//                                         v => v._id === favTeam.team_personnel_id
//                                     ) as TeamPersonnelModel,
//                                 }))
//                                 .forEach(async ({ favTeam, team_personnel }) => {
//                                     const fetchedPlayers = await Promise.all(
//                                         team_personnel.players.map(
//                                             async (player_personnel: Players) => {
//                                                 const [err, res] = await PlayerService.findByOId<
//                                                     PlayersModelResponse
//                                                 >(player_personnel.player_id);
//                                                 if (err) return;
//                                                 return res.data.documents[0];
//                                             }
//                                         )
//                                     );

//                                     dispatch(
//                                         setGroupFavPlayer({
//                                             id: team_personnel._id,
//                                             label: favTeam.name_he,
//                                             listFavPlayers: fetchedPlayers.filter(Boolean),
//                                         })
//                                     );
//                                 });
//                         }
//                     } catch (error: any) {
//                         Alert.alert(error);
//                     } finally {
//                         setIsLoading(false);
//                     }
//                 }
//             } else if (isEmpty(favPlayers) || isNil(favPlayers)) {
//                 try {
//                     const { data }: PlayersModelResponse = await axiosClient.post(
//                         `${BASE_URL}/find`,
//                         {
//                             dataSource: DATA_SOURCE,
//                             database: DB,
//                             collection: 'player',
//                         }
//                     );

//                     if (!isEmpty(data.documents)) {
//                         dispatch(
//                             setAllFavPlayers({
//                                 id: generateId,
//                                 label: t('favorite_player.group'),
//                                 listFavPlayers: data.documents,
//                             })
//                         );
//                     }
//                 } catch (error: any) {
//                     Alert.alert(error);
//                 } finally {
//                     setIsLoading(false);
//                 }
//             }
//             setIsLoading(false);
//         }
//     };

//     return {
//         getFavoritePlayers,
//         getPlayersData,
//         getTeamPersonnel,
//         submitSearchFavPlayer,
//     };
// };
// export const useViewModel = ({ navigation, route }: IFavoritePlayerScreenProps) => {
//     const { t } = useTranslation();
//     const { navigate, goBack } = useAppNavigator();
//     const dispatch = useDispatch();
//     const routes = useRoute();

//     const viewState = useViewState();

//     const changePlayers = route.params?.changePlayers;

//     const {
//         getFavoritePlayers,
//         submitSearchFavPlayer,
//         getTeamPersonnel,
//         getPlayersData,
//     } = useViewCallback(route, viewState);

//     useEffect(() => {
//         if (viewState.getProfile.success === true) {
//             console.log('sdasdas');

//             if (changePlayers) {
//                 viewState.setFavSelectedPlayer(viewState.selectedPlayersProfile);
//             } else {
//                 getFavoritePlayers(viewState.getProfile.getProfile.item.favorite_players);
//             }
//         }
//     }, [viewState.getProfile.success]);

//     const handleSelected = (player: PlayerModel) => {
//         if (!viewState.getProfile.success) {
//             if (!isEmpty(viewState.favSearchPlayers)) {
//                 dispatch(pushAllFavPlayers(player));
//             } else if (!isEmpty(viewState.selectedFavTeams)) {
//                 dispatch(pushGroupFavPlayer(player));
//             } else {
//                 dispatch(pushAllFavPlayers(player));
//             }
//         }
//         dispatch(pushAllFavPlayersProfile(player));
//     };

//     useEffect(() => {
//         if (isEmpty(viewState.selectedPlayersProfile)) {
//             viewState.favSelectedPlayer.map((item: PlayerModel) => {
//                 dispatch(pushAllFavPlayersProfile(item));
//                 return null;
//             });
//         }
//     }, [viewState.favSelectedPlayer]);

//     const handleFocusSearch = () => {
//         // setFocusSearch(true);
//     };

//     useEffect(() => {
//         if (viewState.searchText.length) {
//             viewState.setFocusSearch(() => true);
//         }
//         if (!viewState.searchText.length && viewState.focusSearch) {
//             submitSearchFavPlayer();
//         }
//     }, [viewState.searchText, viewState.focusSearch]);

//     useEffect(() => {
//         return () => {
//             // componentwillunmount in functional component.
//             // Anything in here is fired on component unmount.
//             viewState.setSearchText('');
//         };
//     }, []);

//     const onGoBack = (): void => {
//         goBack();
//     };
//     const onGoSkip = () => {
//         if (isEmpty(viewState.profile.profile) || isNil(viewState.profile.profile)) {
//             dispatch(
//                 createProfileUser(
//                     serializeParams({
//                         action: ACTION,
//                         token: TOKEN,
//                         call: AuthData.CREATE_PROFILE,
//                         'item[guest_guid]': guestId[0],
//                     })
//                 )
//             );
//         } else {
//             navigate(ScreenName.SideBar);
//         }
//     };
//     const isFocused = useIsFocused();
//     const previousScreen = route?.params?.previous_screen;

//     // useEffect(() => {
//     //     if (previousScreen !== ScreenName.SettingsPage) {
//     //         if (!isFocused) return;
//     //         if (!isEmpty(viewState.login.login)) {
//     //             navigate(ScreenName.SideBar);
//     //             navigation.reset({
//     //                 index: 0,
//     //                 routes: [{ name: ScreenName.SideBar as never }],
//     //             });
//     //         } else if (viewState.profile.success === true) {
//     //             dispatch(
//     //                 loginUser(
//     //                     serializeParams({
//     //                         action: ACTION,
//     //                         token: TOKEN,
//     //                         call: AuthData.LOGIN,
//     //                         guest_id: profile.profile.tc_user,
//     //                         guest_guid: guestId[0],
//     //                     })
//     //                 )
//     //             );

//     //             navigate(ScreenName.SideBar);
//     //             navigation.reset({
//     //                 index: 0,
//     //                 routes: [{ name: ScreenName.SideBar as never }],
//     //             });
//     //         }
//     //     }
//     // }, [viewState.profile.success, isFocused]);

//     const handleContinue = () => {
//         const { params } = routes;
//         if (!isEmpty(params)) {
//             if (params.previous_screen === ScreenName.FavSummaryPage) {
//                 navigate(ScreenName.FavSummaryPage);
//             } else if (previousScreen === ScreenName.SettingsPage) {
//                 navigate(ScreenName.SettingsPage, {
//                     previous_screen: ScreenName.FavPlayerPage,
//                     center: true,
//                     scrollBottom: false,
//                     selectedPlayers: true,
//                     // selectedTeams: true,
//                     // selectedTopTeams: true,
//                 });
//                 dispatch(setSettingFavPlayer(viewState.selectedPlayersProfile));
//                 // pop(ScreenName.FavTeamPage);
//             } else {
//                 navigate(ScreenName.FavTopTeamPage);
//             }
//         } else {
//             navigate(ScreenName.FavTopTeamPage);
//         }
//     };

//     useMount(() => {
//         if (!isEmpty(viewState.selectedFavTeams)) {
//             getTeamPersonnel();
//             dispatch(resetAllFavPlayers({ id: '', label: '', listFavPlayers: [] }));
//         } else {
//             getPlayersData();
//             dispatch(resetGroupFavPlayer({ id: '', label: '', listFavPlayers: [] }));
//         }
//     });

//     return {
//         t,
//         onGoBack,
//         onGoSkip,
//         handleContinue,
//         handleSelected,
//         submitSearchFavPlayer,
//         handleFocusSearch,
//         ...viewState,
//     };
// };
