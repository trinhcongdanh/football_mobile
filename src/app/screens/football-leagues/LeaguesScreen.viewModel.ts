import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { LeagueItemScreen } from '@football/app/screens/football-leagues/layouts/league-item/LeagueItemScreen';
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
import { ILeaguesScreenProps } from './LeaguesScreen.type';

export const useViewModel = ({ navigation }: ILeaguesScreenProps) => {
    const { goBack } = useAppNavigator();
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

    const onShowSideMenu = () => {
        navigation.openDrawer();
    };

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
        onShowSideMenu,
        leagueTypes,
        searchLeagues,
        onSearchLeague,
        submitSearchLeague,
    };
};
