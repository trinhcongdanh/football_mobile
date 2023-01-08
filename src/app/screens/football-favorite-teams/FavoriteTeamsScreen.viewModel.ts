/* eslint-disable no-underscore-dangle */
import { useCallback, useMemo, useState } from 'react';
import { AuthData, ScreenName } from '@football/app/utils/constants/enum';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslation } from 'react-i18next';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import { TeamModel, TeamModelResponse } from '@football/core/models/TeamModelResponse';
import { Alert } from 'react-native';
import { isEmpty, isNil } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from '@football/app/utils/hooks/useMount';
import { axiosAuth } from '@football/core/api/auth/axiosAuth';
import { ACTION, AUTH_URL, TOKEN } from '@football/core/api/auth/config';
import { addLogin } from 'src/store/user/Login.slice';
import { addProfile } from 'src/store/user/CreateProfile.slice';
import { setFavTeams, pushFavTeam } from 'src/store/FavTeam.slice';
import { IFavoriteTeamsScreenProps } from './FavoriteTeamsScreen.type';

export const useViewModel = ({ navigation, route }: IFavoriteTeamsScreenProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { navigate, goBack } = useAppNavigator();
    const [searchText, setSearchText] = useState('');

    const favTeams = useSelector((state: any) => state.favTeams.favTeams as TeamModel[]);
    const favSelectedTeams = useSelector(
        (state: any) =>
            state.favTeams.favTeams.filter((v: TeamModel) => v.isSelected) as TeamModel[]
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

    const getTeamsData = useCallback(async () => {
        if (isEmpty(favTeams) || isNil(favTeams)) {
            try {
                const { data }: TeamModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
                    dataSource: DATA_SOURCE,
                    database: DB,
                    collection: 'team',
                });
                if (!isEmpty(data.documents)) {
                    dispatch(setFavTeams(data.documents));
                }
            } catch (error: any) {
                Alert.alert(error);
            }
        }
    }, []);

    const handleSelected = (team: TeamModel) => {
        dispatch(pushFavTeam(team));
    };

    const filteredTeams = useMemo(
        () => favTeams.filter(v => v.name_he.includes(searchText)),

        [favTeams, searchText]
    );

    const searchFavTeam = (text: string) => {
        setSearchText(text);
    };

    const onGoBack = (): void => {
        goBack();
    };
    const onGoSkip = async () => {
        if (!isEmpty(login) && !isNil(login)) {
            navigate(ScreenName.BottomTab);
        } else {
            try {
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
            } catch (error: any) {
                Alert.alert(error);
            }
        }
    };

    const handleContinue = () => {
        navigate(ScreenName.FavPlayerPage);
    };

    useMount(() => {
        getTeamsData();
    });

    return {
        t,
        onGoBack,
        onGoSkip,
        handleContinue,
        handleSelected,
        dispatch,
        searchFavTeam,
        setSearchText,
        filteredTeams,
        searchText,
        favSelectedTeams,
    };
};
