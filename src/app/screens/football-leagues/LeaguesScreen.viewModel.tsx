/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { LeagueItemScreen } from '@football/app/screens/football-leagues/layouts/league-item/LeagueItemScreen';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { LeagueModel, LeagueTypeModel } from '@football/core/models/LeagueModelResponse';
import leaguesService from '@football/core/services/League.service';

import LeagueTypeService, { useLeagueTypes } from '@football/core/services/LeagueType.service';
import _ from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ILeaguesScreenProps } from './LeaguesScreen.type';

type INavigationProps = {
    route: any;
    navigation: any;
};
const useViewState = () => {
    const [leagueType, setLeagueType] = useState<LeagueTypeModel[]>([]);
    const [searchLeagueType, setSearchLeagueType] = useState<LeagueModel[]>([]);
    const [findLeagueType, setFindLeagueType] = useState(true);

    return {
        leagueType,
        setLeagueType,
        searchLeagueType,
        setSearchLeagueType,
        findLeagueType,
        setFindLeagueType,
    };
};

const useViewCallback = (route: any, viewState: any) => {
    const { setLeagueType, setSearchLeagueType, findLeagueType, setFindLeagueType } = viewState;
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
                id: e._id,
                title: e.name_he,
                name: e.name_en.split(' ').join(''),
                renderComponent: (props: INavigationProps) => (
                    <LeagueItemScreen {...props} typeId={e._id} />
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
        if (!res.data.documents?.length) {
            setFindLeagueType(false);
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
            state.setFindLeagueType(true);
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
    const { getTranslationText } = useTranslationText();

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
                id: e._id,
                title: getTranslationText({
                    textHe: e.name_he,
                    textEn: e.name_en,
                }),
                name: getTranslationText({
                    textHe: e.name_he,
                    textEn: e.name_en,
                })
                    .split(' ')
                    .join(''),
                renderComponent: (props: INavigationProps) => (
                    <LeagueItemScreen {...props} typeId={e._id} />
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
