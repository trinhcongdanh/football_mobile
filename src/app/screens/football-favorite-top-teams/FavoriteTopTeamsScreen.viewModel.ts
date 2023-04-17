import { useCallback, useEffect, useMemo, useState } from 'react';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { TopTeamModel, TopTeamModelResponse } from '@football/core/models/TopTeamModelResponse';
import { Alert, BackHandler } from 'react-native';
import { isEmpty, isNil } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from '@football/app/utils/hooks/useMount';
import { ACTION, TOKEN } from '@football/core/api/auth/config';
import { useIsFocused } from '@react-navigation/native';
import { loginUser } from 'src/store/user/Login.slice';
import { createProfileUser } from 'src/store/user/CreateProfile.slice';
import {
    setFavTopTeams,
    pushFavTopTeam,
    selectedFavTopTeamsAsMapSelector,
    resetTopTeams,
    resetSelectedFavTopTeams,
} from 'src/store/FavTopTeam.slice';
import { IFavoriteTopTeamsScreenProps } from './FavoriteTopTeamsScreen.type';
import { RootState } from 'src/store/store';
import { setSettingFavTopTeam } from 'src/store/SettingSelected.slice';
import { clearFavoriteData } from '@football/app/utils/functions/clearFavoriteData';
import TopTeamService from '@football/core/services/TopTeam.service';
import sortBy from 'lodash/sortBy';
import { resetFavPlayer } from 'src/store/FavPlayer.slice';

export const useViewModel = ({ navigation, route }: IFavoriteTopTeamsScreenProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();
    const { navigate, goBack, popToTop } = useAppNavigator();
    const getProfile = useSelector((state: RootState) => state.getProfile);

    const selectedFavTopTeamsMap = useSelector(selectedFavTopTeamsAsMapSelector);

    const favTopTeams = useSelector((state: RootState) => state.favTopTeams.favTopTeams);

    const formattedFavTopTeams = useMemo(() => {
        return favTopTeams.map(topTeam => ({
            ...topTeam,
            isSelected: selectedFavTopTeamsMap.has(topTeam._id),
        }));
    }, [favTopTeams, selectedFavTopTeamsMap]);

    const selectedFavTopTeams = useSelector(
        (state: RootState) => state.favTopTeams.selectedTopTeams
    );

    const [favSelectedTopTeam, setFavSelectedTopTeam] = useState<TopTeamModel[]>([]);

    const login = useSelector((state: RootState) => state.login);
    const profile = useSelector((state: RootState) => state.createProfile);
    const guestId = useSelector((state: RootState) => state.guestId.guestId);

    function serializeParams(obj: any) {
        let str = [];
        for (let p in obj) {
            if (obj.hasOwnProperty(p)) {
                str.push(p + '=' + encodeURIComponent(obj[p]));
            }
        }
        return str.join('&');
    }

    const getTopTeamsData = useCallback(async () => {
        if (isEmpty(favTopTeams) || isNil(favTopTeams)) {
            try {
                const [error, res] = await TopTeamService.findAllFavTopTeam();
                if (error) {
                    return;
                }
                // const sortByName = sortBy(res.data.documents, ['name_he']);

                dispatch(setFavTopTeams(res.data.documents));
            } catch (error: any) {
                Alert.alert(error);
            }
        }
    }, []);

    const handleSelected = (topTeam: TopTeamModel) => {
        dispatch(pushFavTopTeam(topTeam));
    };

    useEffect(() => {
        if (isEmpty(selectedFavTopTeams)) {
            favSelectedTopTeam.map((item: TopTeamModel) => {
                dispatch(pushFavTopTeam(item));
            });
        }
    }, [favSelectedTopTeam]);

    const onGoBack = () => {
        goBack();
        return true;
    };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onGoBack);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onGoBack);
        };
    }, []);

    const onGoSkip = () => {
        if (previous_screen === ScreenName.SettingsPage) {
            goBack();
        } else if (previous_screen === ScreenName.FavSummaryPage) {
            goBack();
        } else {
            dispatch(resetSelectedFavTopTeams([]));
            navigate(ScreenName.FavSummaryPage);
        }
    };

    const isFocused = useIsFocused();
    const previous_screen = route?.params?.previous_screen;

    const handleContinue = () => {
        if (previous_screen === ScreenName.SettingsPage) {
            // navigate(ScreenName.SettingsPage, {
            //     previous_screen: ScreenName.FavTopTeamPage,
            //     position: route?.params?.position,
            //     scrollBottom: false,
            //     selectedPlayers: true,
            //     selectedTeams: true,
            //     selectedTopTeams: true,
            // });
            // dispatch(setSettingFavTopTeam(selectedFavTopTeams));
            route.params?.handleAfterSelectTopTeams(selectedFavTopTeams);
            goBack();
            // pop(ScreenName.FavTeamPage);
        } else if (previous_screen === ScreenName.HomePage) {
            // if()
            if (profile.saveFavorite) {
                navigate(ScreenName.SideBar);
                navigation.reset({
                    index: 0,
                    routes: [{ name: ScreenName.SideBar as never }],
                });
            } else {
                navigate(ScreenName.FavSummaryPage, {
                    previous_screen: ScreenName.HomePage,
                });
            }
        } else if (previous_screen === ScreenName.FavSummaryPage) {
            navigate(ScreenName.FavSummaryPage, {
                editFav: true,
            });
        } else {
            navigate(ScreenName.FavSummaryPage);
        }
    };
    useMount(() => {
        getTopTeamsData();
    });

    return {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        favTopTeams,
        formattedFavTopTeams,
        selectedFavTopTeams,
        profile,
        getProfile,
    };
};
