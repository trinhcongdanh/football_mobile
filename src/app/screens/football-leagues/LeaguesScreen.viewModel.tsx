import { LeagueItemScreen } from '@football/app/screens/football-leagues/layouts/league-item/LeagueItemScreen';
import { useAppNavigation } from '@football/app/utils/hooks/useAppNavigation';
import { useAppDispatch, useAppSelector } from '@football/app/utils/hooks/useStore';
import { LeagueTypeModel } from '@football/core/models/LeagueModelResponse';
import leagueService, { useLeagueTypes } from '@football/core/services/League.service';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { resetSearchLeagues, setSearchLeagues } from 'src/store/league/League.slice';

type INavigationProps = {
    route: any;
    navigation: any;
};
const useViewState = () => {
    const [searchText, setSearchText] = useState('');

    const searchLeagues = useAppSelector(state => {
        return state.leagues.searchLeagues;
    });
    const { data } = useLeagueTypes();
    let labels: any[] = [];

    let leagueTypes: LeagueTypeModel[] = [];
    if (data) {
        const [error, res] = data;
        if (!error) {
            leagueTypes = res.data.documents;
            labels = leagueTypes.map(e => ({
                id: e.index,
                title: e.name_he,
                name: e.name_en.split(' ').join(''),
                renderComponent: (props: INavigationProps) => (
                    <LeagueItemScreen {...props} typeId={e.index} />
                ),
                component: LeagueItemScreen,
            }));
        }
    }

    return {
        searchText,
        setSearchText,
        searchLeagues,
        leagueTypes,
        labels,
    };
};

const useViewCallback = ({ searchText, setSearchText }: any) => {
    const dispatch = useAppDispatch();

    const onSearchLeague = (text: string) => {
        setSearchText(text);
    };

    const submitSearchLeague = useCallback(async () => {
        if (searchText !== '') {
            dispatch(resetSearchLeagues());
            const [error, res] = await leagueService.searchLeague(searchText);

            if (error) {
                return;
            }

            dispatch(setSearchLeagues(res.data.documents));
        }
    }, [dispatch, searchText]);

    return {
        submitSearchLeague,
        onSearchLeague,
    };
};

export const useViewModel = () => {
    const { t } = useTranslation();
    const { onGoBack } = useAppNavigation();
    const { searchLeagues, leagueTypes, labels, searchText, setSearchText } = useViewState();
    const { submitSearchLeague, onSearchLeague } = useViewCallback({
        searchText,
        setSearchLeagues,
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
