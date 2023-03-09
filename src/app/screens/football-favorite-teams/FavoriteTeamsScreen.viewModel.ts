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
import _, { isEmpty, isNil } from 'lodash';
import { createProfileUser } from 'src/store/user/CreateProfile.slice';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { ACTION, TOKEN } from '@football/core/api/auth/config';
import {
    pushFavTeam,
    pushFavTeamProfile,
    resetFavTeam,
    selectedFavTeamsAsMapSelector,
} from 'src/store/FavTeam.slice';
import { setSettingFavTeam } from 'src/store/SettingSelected.slice';
import { MAX_FAVORITES_TEAM } from '@football/core/api/configs/config';
import { IFavoriteTeamsScreenProps } from './FavoriteTeamsScreen.type';

function serializeParams(obj: any) {
    const str = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const p in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(p)) {
            str.push(`${p}=${encodeURIComponent(obj[p])}`);
        }
    }
    return str.join('&');
}

const useViewState = () => {
    const selectedFavTeamsMap = useSelector(selectedFavTeamsAsMapSelector);
    const selectedTeamsProfile = useSelector(
        (state: RootState) => state.favTeams.selectedTeamsProfile
    );
    const array = selectedFavTeamsMap.size
        ? Array.from(selectedFavTeamsMap, ([name, value]) => ({ ...value }))
        : selectedTeamsProfile;

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const searchTextRef = useRef<any>(null);
    const [teams, setTeams] = useState<TeamModel[]>();
    const [selectedFavTeams, setSelectedFavTeams] = useState<TeamModel[]>(array);

    const getProfile = useSelector((state: RootState) => state.getProfile);
    const profile = useSelector((state: any) => state.createProfile);

    return {
        isLoading,
        setIsLoading,
        searchTextRef,
        selectedFavTeams,
        setSelectedFavTeams,
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
                dispatch(setSettingFavTeam(selectedFavTeams));
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
        const existFavTeam = newSelectedFavTeams.find((t: TeamModel) => t._id === team._id);
        if (existFavTeam) {
            newSelectedFavTeams = newSelectedFavTeams.filter(
                (selectedFavTeam: TeamModel) => selectedFavTeam._id !== team._id
            );
        } else if (newSelectedFavTeams.length < MAX_FAVORITES_TEAM) {
            newSelectedFavTeams.push(team);
            if (!getProfile?.success) {
                dispatch(pushFavTeam(team));
            } else {
                dispatch(pushFavTeamProfile(team));
            }
        }
        setSelectedFavTeams(newSelectedFavTeams);
    };

    const searchTeams = useCallback(async (searchText: string) => {
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

        const favoriteTeamIds = getProfile.getProfile?.item?.favorite_israel_teams || [];

        try {
            const [error, res] = await TeamService.findAll();
            if (error) {
                return;
            }
            // const favoriteTeams = res.data.documents.filter((team: TeamModel) =>
            //     favoriteTeamIds.includes(team._id)
            // );
            // setSelectedFavTeams(favoriteTeams);
            setTeams(res.data.documents);
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
