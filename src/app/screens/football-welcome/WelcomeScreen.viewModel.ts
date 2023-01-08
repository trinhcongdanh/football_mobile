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

    const onNavigateFavTeam = () => {
        navigate(ScreenName.FavTeamPage);
    };

    return {
        t,
        onNavigateFavTeam,
    };
};
