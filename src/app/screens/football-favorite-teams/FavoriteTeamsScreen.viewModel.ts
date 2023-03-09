import { useEffect } from 'react';
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import { useRef, useCallback, useState } from 'react';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { TeamModel } from '@football/core/models/TeamModelResponse';
import { Alert, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from '@football/app/utils/hooks/useMount';
import { RootState } from 'src/store/store';
import TeamService from '@football/core/services/Team.service';
import { IFavoriteTeamsScreenProps } from './FavoriteTeamsScreen.type';
import _, { isEmpty, isNil } from 'lodash';
import { createProfileUser } from 'src/store/user/CreateProfile.slice';
import { serializeParams } from '@football/app/utils/functions/quick-functions';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { ACTION, TOKEN } from '@football/core/api/auth/config';
import { resetFavTeam } from 'src/store/FavTeam.slice';
import { setSettingFavTeam } from 'src/store/SettingSelected.slice';
import { MAX_FAVORITES_TEAM } from '@football/core/api/configs/config';

const useViewState = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const searchTextRef = useRef<any>(null);
    const [teams, setTeams] = useState<TeamModel[]>();
    const [selectedFavTeams, setSelectedFavTeams] = useState<TeamModel[]>([]);

    const formattedFavTeams = [];
    const formattedFavTeamsProfile = [];
    const selectedTeamsProfile = [];
    const getProfile = useSelector((state: RootState) => state.getProfile);
    const profile = useSelector((state: any) => state.createProfile);

    return {
        isLoading,
        setIsLoading,
        searchTextRef,
        formattedFavTeams,
        selectedFavTeams,
        setSelectedFavTeams,
        formattedFavTeamsProfile,
        selectedTeamsProfile,
        getProfile,
        profile,
        teams,
        setTeams,
    };
};
/**
 * Routes use view callback
 * @param route
 * @param viewState
 * @returns
 */
const useViewCallback = (route: any, viewState: any) => {
    const {
        setTeams,
        setIsLoading,
        getProfile,
        selectedFavTeams,
        setSelectedFavTeams,
        profile,
    } = viewState;

    const dispatch = useDispatch();
    const { navigate, goBack, pop } = useAppNavigator();

    const onGoBack = (): void => {
        dispatch(resetFavTeam([]));
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
        } else {
            navigate(ScreenName.SideBar);
        }
    };

    const handleContinue = () => {
        const { params } = route;
        if (!isEmpty(params)) {
            if (params.previous_screen === ScreenName.FavSummaryPage) {
                navigate(ScreenName.FavSummaryPage);
            } else if (params.previous_screen === ScreenName.SettingsPage) {
                navigate(ScreenName.SettingsPage, {
                    previous_screen: ScreenName.FavTeamPage,
                    center: true,
                    scrollBottom: false,
                    // selectedPlayers: true,
                    selectedTeams: true,
                    // selectedTopTeams: true,
                });
                dispatch(setSettingFavTeam(viewState.selectedTeamsProfile));
                // pop(ScreenName.FavTeamPage);
            } else {
                navigate(ScreenName.FavPlayerPage);
            }
        } else {
            navigate(ScreenName.FavPlayerPage);
        }
    };

    /**
     *  Handle clicking event in the team
     * @param team
     */
    const handleSelected = (team: TeamModel) => {
        let newSelectedFavTeams = [...selectedFavTeams];
        const a = newSelectedFavTeams.find((t: TeamModel) => t._id === team._id);
        if (a) {
            newSelectedFavTeams = newSelectedFavTeams.filter(
                (selectedFavTeam: TeamModel) => selectedFavTeam._id !== team._id
            );
        } else if (newSelectedFavTeams.length < MAX_FAVORITES_TEAM) {
            newSelectedFavTeams.push(team);
        }
        setSelectedFavTeams(newSelectedFavTeams);
    };

    const searchTeams = useCallback(async (searchText: string) => {
        console.log('search teams', searchText);
        
        setIsLoading(true);

        try {
            const [error, res] = await TeamService.search(searchText);
            if (error) {
                return;
            }

            setTeams(res.data.documents);
        } catch (error: any) {
            Alert.alert(error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const getTeamsData = useCallback(async () => {
        setIsLoading(true);
        try {
            const [error, res] = await TeamService.findAll();
            if (error) {
                return;
            }

            const allTeams = res.data.documents.map((team: TeamModel) => ({
                ...team,
                isSelected: getProfile?.getProfile?.item?.favorite_players
                    ? getProfile.getProfile.item.favorite_players.includes(allTeams._id)
                    : false,
            }));
            setTeams(allTeams);
        } catch (error: any) {
            Alert.alert(error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const submitSearchFavTeam = (text: string) => {
        Keyboard.dismiss();
        searchTeams(text);
    };

    // const searchLiveFavTeam = (text: string) => {
    //     setSearchText(text);
    //     searchTeams(text);
    // };

    const onSearchFavTeam = _.debounce(searchTeams, 500);

    return {
        submitSearchFavTeam,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        getTeamsData,
        onSearchFavTeam,
    };
};

export const useViewModel = ({ navigation, route }: IFavoriteTeamsScreenProps) => {
    const { t } = useTranslation();

    const state = useViewState();
    const callBack = useViewCallback(route, state);

    useMount(() => {
        callBack.getTeamsData();
    });

    return {
        t,
        ...state,
        ...callBack,
    };
};
