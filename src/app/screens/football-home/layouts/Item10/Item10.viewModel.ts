/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { IItem10Props } from '@football/app/screens/football-home/layouts/Item10/Item10.type';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useMount } from '@football/app/utils/hooks/useMount';
import { LeagueModel, Season } from '@football/core/models/LeagueModelResponse';
import { Cycle, LeagueSeasonModel, Round } from '@football/core/models/LeagueSeasonModelResponse';
import leagueSeasonService from '@football/core/services/LeagueSeason.service';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const useViewState = (league: LeagueModel) => {
    const [selectSeason, setSelectSeason] = useState<Season>();
    const [leagueSeason, setLeagueSeason] = useState<LeagueSeasonModel>();
    const [selectCycle, setSelectCycle] = useState<Cycle>();
    const [selectRound, setSelectRound] = useState<Round>();

    return {
        selectSeason,
        setSelectSeason,
        leagueSeason,
        setLeagueSeason,
        selectCycle,
        setSelectCycle,
        selectRound,
        setSelectRound,
    };
};

const useViewCallback = (viewState: any) => {
    const { setLeagueSeason, selectSeason } = viewState;

    const getHomeLayoutData = useCallback(async (id: string) => {
        const [error, res] = await leagueSeasonService.findByOId(id);
        if (error) {
            return;
        }

        if (res.data.documents?.length) {
            setLeagueSeason(res.data.documents[0]);
        }
    }, []);

    return {
        getHomeLayoutData,
    };
};

export const useViewModel = ({ league }: IItem10Props) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    const pages = Array(2).fill('');

    const state = useViewState(league);
    const { getHomeLayoutData } = useViewCallback(state);

    useEffect(() => {
        if (state.selectSeason) {
            getHomeLayoutData(state.selectSeason?.league_season_id);
        }
    }, [state.selectSeason]);

    useEffect(() => {
        if (state.leagueSeason?.cycles?.length) {
            const defaultCycle = state.leagueSeason?.cycles[0];
            state.setSelectCycle(defaultCycle);
            if (defaultCycle?.rounds?.length) {
                state.setSelectRound(defaultCycle.rounds[0]);
            }
        }
    }, [state.leagueSeason]);

    const [activeIndexNumber, setActiveIndexNumber] = useState(Number);

    const onClickAllLeagues = (leagueId: string) => {
        navigate(ScreenName.LeaguesDetailsPage, { leagueId });
    };

    useMount(() => {
        const defaultLeagueSeason = league?.seasons.length ? league.seasons[0] : null;
        if (defaultLeagueSeason) {
            state.setSelectSeason(defaultLeagueSeason);
        }
    });

    return {
        t,
        pages,
        activeIndexNumber,
        setActiveIndexNumber,
        ...state,
        onClickAllLeagues,
    };
};
