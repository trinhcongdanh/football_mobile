import { useCallback, useMemo, useState } from 'react';
import { AuthData, OfflineData, ScreenName } from '@football/app/utils/constants/enum';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { TopTeamModel, TopTeamModelResponse } from '@football/core/models/TopTeamModelResponse';
import { Alert } from 'react-native';
import { isEmpty, isNil } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from '@football/app/utils/hooks/useMount';
import { axiosAuth } from '@football/core/api/auth/axiosAuth';
import { ACTION, AUTH_URL, TOKEN } from '@football/core/api/auth/config';
import { addLogin } from 'src/store/user/Login.slice';
import { setFavTopTeams, pushFavTopTeam } from 'src/store/FavTopTeam.slice';
import { IFavoriteTopTeamsScreenProps } from './FavoriteTopTeamsScreen.type';

export const useViewModel = ({ navigation, route }: IFavoriteTopTeamsScreenProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { navigate, goBack } = useAppNavigator();

    const favTopTeams = useSelector(
        (state: any) => state.favTopTeams.favTopTeams as TopTeamModel[]
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
    const onGoSkip = async () => {
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
                        guest_id: profile[0].tc_user,
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
    };

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
        favSelectedTopTeams,
    };
};
