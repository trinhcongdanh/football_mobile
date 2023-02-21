import { LeagueItemScreen } from '@football/app/screens/football-leagues/layouts/league-item/LeagueItemScreen';
import { useAppNavigation } from '@football/app/utils/hooks/useAppNavigation';
import { useMount } from '@football/app/utils/hooks/useMount';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
    resetSearchLeagues,
    setLeagueTypes,
    setSearchLeagues,
} from 'src/store/league/League.slice';
import { RootState } from 'src/store/store';
import leagueService from './LeaguesScreen.service';

const useViewState = () => {
    const [searchText, setSearchText] = useState('');

    const searchLeagues = useSelector((state: RootState) => {
        return state.leagues.searchLeagues;
    });
    const leagueTypes = useSelector((state: RootState) => state.leagues.leagueTypes);

    const labels = leagueTypes.map(e => ({
        id: e.index,
        title: e.name_he,
        name: e.name_en.split(' ').join(''),
        component: LeagueItemScreen,
    }));

    return {
        searchText,
        setSearchText,
        searchLeagues,
        leagueTypes,
        labels,
    };
};

const useViewCallback = () => {
    const { searchText, setSearchText } = useViewState();
    const dispatch = useDispatch<any>();

    const onSearchLeague = (text: string) => {
        setSearchText(text);
    };

    const submitSearchLeague = useCallback(async () => {
        if (searchText !== '') {
            dispatch(resetSearchLeagues());
            const [error, res] = await leagueService.search(searchText);

            if (error) {
                return;
            }

            dispatch(setSearchLeagues(res.data.documents));
        }
    }, [dispatch, searchText]);

    const getLeagueTypesData = useCallback(async () => {
        const [error, res] = await leagueService.getTypes();

        if (error) {
            return;
        }

        dispatch(setLeagueTypes(res.data.documents));
    }, [dispatch]);

    return {
        getLeagueTypesData,
        submitSearchLeague,
        onSearchLeague,
    };
};

export const useViewModel = () => {
    const { t } = useTranslation();
    const { onGoBack } = useAppNavigation();
    const { searchLeagues, leagueTypes, labels } = useViewState();
    const { getLeagueTypesData, submitSearchLeague, onSearchLeague } = useViewCallback();

    useMount(() => {
        getLeagueTypesData();
    });

    return {
        t,
        onGoBack,
        labels,
        leagueTypes,
        searchLeagues,
        onSearchLeague,
        submitSearchLeague,
    };
};
