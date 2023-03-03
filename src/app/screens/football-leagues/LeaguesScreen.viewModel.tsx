/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { LeagueItemScreen } from '@football/app/screens/football-leagues/layouts/league-item/LeagueItemScreen';
import { ScreenName } from '@football/app/utils/constants/enum';
import { LeagueModel, LeagueTypeModel } from '@football/core/models/LeagueModelResponse';
import leaguesService from '@football/core/services/League.service';

import LeagueTypeService, { useLeagueTypes } from '@football/core/services/LeagueType.service';
import _ from 'lodash';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ILeaguesScreenProps } from './LeaguesScreen.type';

// type INavigationProps = {
//     route: any;
//     navigation: any;
// };
// const useViewState = () => {
//     const [searchText, setSearchText] = useState('');

//     const searchLeagues = useAppSelector(state => {
//         return state.leagues.searchLeagues;
//     });
//     const { data } = useLeagueTypes();
//     let labels: any[] = [];

//     let leagueTypes: LeagueTypeModel[] = [];
//     if (data) {
//         const [error, res] = data;
//         if (!error) {
//             leagueTypes = res.data.documents;
// labels = leagueTypes.map(e => ({
//     id: e.index,
//     title: e.name_he,
//     name: e.name_en.split(' ').join(''),
//     renderComponent: (props: INavigationProps) => (
//         <LeagueItemScreen {...props} typeId={e.index} />
//     ),
//     component: LeagueItemScreen,
// }));
//         }
//     }

//     return {
//         searchText,
//         setSearchText,
//         searchLeagues,
//         leagueTypes,
//         labels,
//     };
// };

// const useViewCallback = ({ searchText, setSearchText }: any) => {
//     const dispatch = useAppDispatch();

//     const onSearchLeague = (text: string) => {
//         setSearchText(text);
//     };

//     const submitSearchLeague = useCallback(async () => {
//         if (searchText !== '') {
//             dispatch(resetSearchLeagues());
//             const [error, res] = await leagueService.searchLeague(searchText);

//             if (error) {
//                 return;
//             }

//             dispatch(setSearchLeagues(res.data.documents));
//         }
//     }, [dispatch, searchText]);

//     return {
//         submitSearchLeague,
//         onSearchLeague,
//     };
// };

// export const useViewModel = () => {
//     const { t } = useTranslation();
//     const { onGoBack } = useAppNavigation();
//     const { searchLeagues, leagueTypes, labels, searchText, setSearchText } = useViewState();
//     const { submitSearchLeague, onSearchLeague } = useViewCallback({
//         searchText,
//         setSearchLeagues,
//     });

//     return {
//         t,
//         onGoBack,
//         labels,
//         leagueTypes,
//         searchLeagues,
//         onSearchLeague,
//         submitSearchLeague,
//     };
// };
type INavigationProps = {
    route: any;
    navigation: any;
};
const useViewState = () => {
    const [leagueType, setLeagueType] = useState<LeagueTypeModel[]>([]);
    const [searchLeagueType, setSearchLeagueType] = useState<LeagueModel[]>([]);

    return {
        leagueType,
        setLeagueType,
        searchLeagueType,
        setSearchLeagueType,
    };
};

const useViewCallback = (route: any, viewState: any) => {
    const { setLeagueType, setSearchLeagueType } = viewState;
    let labels: any[] = [];
    const getLeagueTypeData = useCallback(async () => {
        const [error, res] = await LeagueTypeService.findAll();
        if (error) {
            return;
        }

        if (res.data.documents?.length) {
            setLeagueType(res.data.documents);
            // console.log(leagueType);
            labels = res.data.documents.map((e: any) => ({
                id: e.index,
                title: e.name_he,
                name: e.name_en.split(' ').join(''),
                renderComponent: (props: INavigationProps) => (
                    <LeagueItemScreen {...props} typeId={e.index} />
                ),
                component: LeagueItemScreen,
            }));
            // console.log(labels);
        }
    }, []);

    const searchLeagueData = useCallback(async (text: string) => {
        const [error, res] = await leaguesService.search(text);
        if (error) {
            return;
        }

        setSearchLeagueType(res.data.documents);
    }, []);

    return {
        getLeagueTypeData,
        searchLeagueData,
        labels,
    };
};

const useEventHandler = (callback: any, state: any) => {
    const { navigate } = useAppNavigator();

    const onChangeText = (text: string) => {
        if (!text?.length) {
            state.setSearchLeagueType([]);
            return;
        }
        callback.searchLeagueData(text);
    };

    const onSearchLeague = _.debounce(onChangeText, 500);

    const handleLeaguesDetails = (leagueId: string) => {
        navigate(ScreenName.LeaguesDetailsPage, { leagueId });
    };
    return {
        onSearchLeague,
        handleLeaguesDetails,
    };
};

export const useViewModel = ({ navigation, route }: ILeaguesScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const state = useViewState();
    const callback = useViewCallback(route, state);
    const eventHandler = useEventHandler(callback, state);

    const { data: leagueTypesData } = useLeagueTypes();
    let labels: any[] = [];

    let leagueTypes: LeagueTypeModel[] = [];
    if (leagueTypesData) {
        const [error, res] = leagueTypesData;
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
        t,
        onGoBack,
        ...state,
        labels,
        ...eventHandler,
    };
};
