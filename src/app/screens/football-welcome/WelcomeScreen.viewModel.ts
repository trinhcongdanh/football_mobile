import React, { useCallback, useEffect, useState } from 'react';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { axiosAuth } from '@football/core/api/auth/axiosAuth';
import { ACTION, AUTH_URL, TOKEN } from '@football/core/api/auth/config';
import { isEmpty, isNil } from 'lodash';
import { Alert } from 'react-native';
import { useMount } from '@football/app/utils/hooks/useMount';
import { AuthData } from '@football/app/utils/constants/enum';
import { IWelcomeScreenProps } from '@football/app/screens/football-welcome/WelcomeScreen.type';
import { ScreenName } from '@football/app/utils/constants/enum';
import { addProfile } from 'src/store/user/CreateProfile.slice';
import { useDispatch, useSelector } from 'react-redux';
import { addLogin } from 'src/store/user/Login.slice';

export const useViewModel = ({ navigation, route }: IWelcomeScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const guestId = useSelector((state: any) => state.guestId.guestId);

    const dispatch = useDispatch();

    const profile = useSelector((state: any) => state.createProfile.profile);

    function serializeParams(obj: any) {
        let str = [];
        for (let p in obj) {
            if (obj.hasOwnProperty(p)) {
                str.push(p + '=' + encodeURIComponent(obj[p]));
            }
        }
        return str.join('&');
    }
    const getCreateProfile = useCallback(async () => {
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
                    const action = addProfile(data.item);
                    dispatch(action);
                }

                // }
            } catch (error: any) {
                Alert.alert(error);
            }
        }
    }, []);
    useMount(() => {
        getCreateProfile();
    });

    const login = useSelector((state: any) => state.login.login);

    const onNavigateFavTeam = async () => {
        try {
            if (!isEmpty(login) && !isNil(login)) {
                navigate(ScreenName.FavTeamPage);
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
                    navigate(ScreenName.FavTeamPage);
                }
            }
        } catch (error: any) {
            Alert.alert(error);
        }
    };

    return {
        t,
        onNavigateFavTeam,
    };
};
