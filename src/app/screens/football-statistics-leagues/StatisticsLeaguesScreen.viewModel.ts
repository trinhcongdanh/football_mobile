/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useState, useCallback } from 'react';
import { LeagueSeasonStatModel } from '@football/core/models/LeagueSeasonStatModelResponse';
import LeagueSeasonStatsService from '@football/core/services/LeagueSeasonStats.service';
import { useMount } from '@football/app/utils/hooks/useMount';
import { IStatisticsLeaguesScreenProps } from './StatisticsLeaguesScreen.type';

const useViewState = () => {
    const [leagueSeasonStats, setleagueSeasonStats] = useState<LeagueSeasonStatModel>();

    return {
        leagueSeasonStats,
        setleagueSeasonStats,
    };
};

const useViewCallback = (route: any, viewState: any) => {
    const { setleagueSeasonStats } = viewState;

    const getLeagueSeasonStatData = useCallback(async () => {
        const [error, res] = await LeagueSeasonStatsService.findByOId(route?.params?.statisticsId);
        if (error) {
            return;
        }

        if (res.data.documents.length) {
            setleagueSeasonStats(res.data.documents[0]);
        }
    }, []);

    return {
        getLeagueSeasonStatData,
    };
};

export const useViewModel = ({ navigation, route }: IStatisticsLeaguesScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const state = useViewState();

    const { getLeagueSeasonStatData } = useViewCallback(route, state);

    useMount(() => {
        getLeagueSeasonStatData();
    });

    return { t, onGoBack, ...state };
};
