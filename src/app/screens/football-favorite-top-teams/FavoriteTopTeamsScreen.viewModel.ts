import { useCallback, useEffect, useMemo } from 'react';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { TopTeamModel, TopTeamModelResponse } from '@football/core/models/TopTeamModelResponse';
import { Alert } from 'react-native';
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
    resetTopTeams,
    selectedFavTopTeamsAsMapSelector,
} from 'src/store/FavTopTeam.slice';
import { IFavoriteTopTeamsScreenProps } from './FavoriteTopTeamsScreen.type';
import { RootState } from 'src/store/store';

export const useViewModel = ({ navigation, route }: IFavoriteTopTeamsScreenProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();
    const { navigate, goBack } = useAppNavigator();

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
                const { data }: TopTeamModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
                    dataSource: DATA_SOURCE,
                    database: DB,
                    collection: 'top_team',
                });
                if (!isEmpty(data.documents)) {
                    dispatch(setFavTopTeams(data.documents));
                }
            } catch (error: any) {
                Alert.alert(error);
            }
        }
    }, []);

    const handleSelected = (topTeam: TopTeamModel) => {
        dispatch(pushFavTopTeam(topTeam));
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
        } else {
            navigate(ScreenName.SideBar);
        }
    };

    const isFocused = useIsFocused();

    useEffect(() => {
        if (!isFocused) return;
        if (!isEmpty(login.login)) {
            navigate(ScreenName.SideBar);
            navigation.reset({
                index: 0,
                routes: [{ name: ScreenName.SideBar as never }],
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

                navigate(ScreenName.SideBar);
                navigation.reset({
                    index: 0,
                    routes: [{ name: ScreenName.SideBar as never }],
                });
            }
        }
    }, [profile.success, isFocused]);

    const handleContinue = () => {
        navigate(ScreenName.FavSummaryPage);
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
    };
};
