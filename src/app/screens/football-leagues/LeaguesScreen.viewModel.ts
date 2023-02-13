import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { LeagueItemScreen } from '@football/app/screens/football-leagues/layouts/league-item/LeagueItemScreen';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useMount } from '@football/app/utils/hooks/useMount';
import { axiosClient } from '@football/core/api/configs/axiosClient';
import { BASE_URL, DATA_SOURCE, DB } from '@football/core/api/configs/config';
import {
    LeagueModelResponse,
    LeagueTypeModelResponse,
} from '@football/core/models/LeagueModelResponse';
import { isEmpty, isNil } from 'lodash';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
    resetSearchLeagues,
    setLeagueTypes,
    setSearchLeagues,
} from 'src/store/league/League.slice';
import { RootState } from 'src/store/store';
import { ILeaguesScreenProps } from './LeaguesScreen.type';

export const useViewModel = ({ navigation, route }: ILeaguesScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const dispatch = useDispatch<any>();
    const [searchText, setSearchText] = useState('');

    const searchLeagues = useSelector((state: RootState) => {
        return state.leagues.searchLeagues;
    });
    const leagueTypes = useSelector((state: RootState) => state.leagues.leagueTypes);

    const onGoBack = (): void => {
        goBack();
    };

    const onSearchLeague = (text: string) => {
        setSearchText(text);
    };

    const submitSearchLeague = async () => {
        if (searchText !== '') {
            try {
                dispatch(resetSearchLeagues());
                const { data }: LeagueModelResponse = await axiosClient.post(`${BASE_URL}/find`, {
                    dataSource: DATA_SOURCE,
                    database: DB,
                    collection: 'league',
                    filter: {
                        search_terms: { $regex: `.*${searchText}.*`, $options: 'i' },
                    },
                });

                if (!isEmpty(data.documents)) {
                    dispatch(setSearchLeagues(data.documents));
                }
            } catch (error: any) {
                Alert.alert(error);
            }
        }
    };

    const onNavigateSetting = () => {
        navigate(ScreenName.SettingsPage);
    };
    const getLeagueTypesData = useCallback(async () => {
        if (isEmpty(leagueTypes) || isNil(leagueTypes)) {
            try {
                const { data }: LeagueTypeModelResponse = await axiosClient.post(
                    `${BASE_URL}/find`,
                    {
                        dataSource: DATA_SOURCE,
                        database: DB,
                        collection: 'league_type',
                    }
                );

                if (!isEmpty(data.documents)) {
                    dispatch(setLeagueTypes(data.documents));
                }
            } catch (error: any) {
                Alert.alert(error);
            }
        }
    }, []);

    const labels = leagueTypes.map(e => ({
        id: e.index,
        title: e.name_he,
        name: e.name_en.split(' ').join(''),
        component: LeagueItemScreen,
    }));

    useMount(() => {
        getLeagueTypesData();
    });

    return {
        t,
        onGoBack,
        labels,
        onNavigateSetting,
        leagueTypes,
        searchLeagues,
        onSearchLeague,
        submitSearchLeague,
    };
};
