/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import { useRef, useCallback, useState, useEffect } from 'react';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { TeamModel } from '@football/core/models/TeamModelResponse';
import { Alert, BackHandler, I18nManager, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from '@football/app/utils/hooks/useMount';
import { RootState } from 'src/store/store';
import TeamService from '@football/core/services/Team.service';
import _ from 'lodash';
import { ScreenName } from '@football/app/utils/constants/enum';
import {
    pushFavTeam,
    resetFavTeam,
    resetSelectedFavTeam,
    selectedFavTeamsAsMapSelector,
} from 'src/store/FavTeam.slice';
import { MAX_FAVORITES_TEAM } from '@football/core/api/configs/config';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { resetFavPlayer, resetSelectedFavPlayer } from 'src/store/FavPlayer.slice';
import { clearFavoriteData } from '@football/app/utils/functions/clearFavoriteData';
import sortBy from 'lodash/sortBy';
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
    const getProfile = useSelector((state: RootState) => state.getProfile);
    const profile = useSelector((state: any) => state.createProfile);
    const guestId = useSelector((state: any) => state.guestId.guestId);
    const login = useSelector((state: any) => state.login);

    const selectedFavTeamsMap = useSelector(selectedFavTeamsAsMapSelector);
    const selectedTeams = useSelector((state: RootState) => state.favTeams.selectedTeams);

    const array = selectedFavTeamsMap.size
        ? Array.from(selectedFavTeamsMap, ([name, value]) => ({ ...value }))
        : selectedTeams;

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const searchTextRef = useRef<any>(null);
    const [teams, setTeams] = useState<TeamModel[]>();
    const [selectedFavTeams, setSelectedFavTeams] = useState<TeamModel[]>(array);

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
        guestId,
        login,
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
        guestId,
        login,
    } = viewState;

    // eslint-disable-next-line no-new-object
    const sortByName: any = new Object();
    if (I18nManager.isRTL) {
        sortByName.name_he = 1;
    } else {
        sortByName.name_en = 1;
    }
    const dispatch = useDispatch<any>();
    const { navigate, goBack, pop } = useAppNavigator();

    const onGoBack = () => {
        if (params?.previous_screen === ScreenName.SettingsPage) {
            goBack();
        } else if (params?.previous_screen === ScreenName.FavSummaryPage) {
            navigate(ScreenName.FavSummaryPage);
        } else {
            goBack();
        }
        return true;
    };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onGoBack);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onGoBack);
        };
    }, []);

    const { params } = route;

    const onGoSkip = () => {
        if (params?.previous_screen === ScreenName.SettingsPage) {
            goBack();
        } else if (params?.previous_screen === ScreenName.FavSummaryPage) {
            navigate(ScreenName.FavSummaryPage);
        } else {
            dispatch(resetSelectedFavTeam([]));
            navigate(ScreenName.FavSummaryPage);
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
        }
        setSelectedFavTeams(newSelectedFavTeams);
    };

    const handleContinue = () => {
        if (params?.previous_screen === ScreenName.FavSummaryPage) {
            pop();
            navigate(ScreenName.FavSummaryPage, {
                editFav: true,
            });
            dispatch(resetSelectedFavTeam([]));
            selectedFavTeams.map((team: TeamModel) => {
                dispatch(pushFavTeam(team));
            });
        } else if (params?.previous_screen === ScreenName.SettingsPage) {
            dispatch(resetSelectedFavTeam([]));
            selectedFavTeams.map((team: TeamModel) => {
                dispatch(pushFavTeam(team));
            });
            route.params.handleAfterSelectTeam(selectedFavTeams);
            goBack();
        } else if (params?.previous_screen === ScreenName.HomePage) {
            navigate(ScreenName.FavPlayerPage, {
                previous_screen: ScreenName.HomePage,
            });
        } else {
            navigate(ScreenName.FavPlayerPage);
            dispatch(resetSelectedFavTeam([]));
            selectedFavTeams.map((team: TeamModel) => {
                dispatch(pushFavTeam(team));
            });
            dispatch(resetSelectedFavPlayer([]));
        }
    };

    const searchTeams = useCallback(async (searchText: string) => {
        setIsLoading(true);

        try {
            const [error, res] = await TeamService.searchFavTeam(searchText, { ...sortByName });
            if (error) {
                return;
            }
            // const sortByName = sortBy(res.data.documents, [
            //     I18nManager.isRTL ? 'name_he' : 'name_en',
            // ]);
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
            const [error, res] = await TeamService.findAllFavTeam({ ...sortByName });
            if (error) {
                return;
            }
            // const sortByName = sortBy(res.data.documents, [
            //     I18nManager.isRTL ? 'name_he' : 'name_en',
            // ]);
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
