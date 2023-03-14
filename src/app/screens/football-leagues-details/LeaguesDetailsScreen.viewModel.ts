/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigation } from '@football/app/utils/hooks/useAppNavigation';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { LeagueModel } from '@football/core/models/LeagueModelResponse';
import {
    Cycle,
    Gallery,
    Highlights,
    LeagueSeasonModel,
    Round,
} from '@football/core/models/LeagueSeasonModelResponse';
import LeagueService from '@football/core/services/League.service';
import LeagueSeasonService, {
    useLeagueSeasons,
} from '@football/core/services/LeagueSeason.service';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setLeagueSeasons } from 'src/store/league/League.slice';
import { ILeaguesDetailsScreenProps } from './LeaguesDetailsScreen.type';

const useViewState = () => {
    const [years, setYears] = useState<any[]>([]);
    const [allLeagueSeasons, setAllLeagueSeasons] = useState<any[]>([]);

    // Game season
    const [openModalYear, setOpenModalYear] = useState(false);

    // Few properties changes when selectedLeagueSeason change
    const [selectedLeagueSeason, setSelectedLeagueSeason] = useState<LeagueSeasonModel>();
    const [selectCycle, setSelectCycle] = useState<Cycle>();
    const [selectRound, setSelectRound] = useState<Round>();
    const [galleries, setGalleries] = useState<Gallery[]>();
    const [highlights, setHightlights] = useState<Highlights>();

    // League
    const [league, setLeague] = useState<LeagueModel>();

    return {
        years,
        setYears,
        allLeagueSeasons,
        setAllLeagueSeasons,
        openModalYear,
        setOpenModalYear,
        selectedLeagueSeason,
        setSelectedLeagueSeason,
        selectCycle,
        setSelectCycle,
        selectRound,
        setSelectRound,
        galleries,
        setGalleries,
        highlights,
        setHightlights,
        league,
        setLeague,
    };
};

const useViewCallback = (route: any, viewState: any) => {
    const dispatch = useDispatch();
    const { leagueId }: any = route.params;

    const { setAllLeagueSeasons, setSelectedLeagueSeason, setLeague } = viewState;
    const getLeagueSeasonsData = useCallback(async () => {
        const [error, res] = await LeagueSeasonService.findByFilter({
            league_id: leagueId,
        });
        if (error) {
            return;
        }

        const leagueSeasons = res.data.documents;

        dispatch(setLeagueSeasons(leagueSeasons));
        setAllLeagueSeasons(leagueSeasons);
        if (leagueSeasons?.length) {
            setSelectedLeagueSeason(leagueSeasons[0]);
        }
    }, []);

    const getLeagueById = useCallback(async () => {
        const [error, res] = await LeagueService.findByOId(leagueId);
        if (error) {
            return;
        }

        if (res.data.documents?.length) {
            setLeague(res.data.documents[0]);
        }
    }, []);

    return {
        getLeagueSeasonsData,
        getLeagueById,
        dispatch,
    };
};

export const useViewModel = ({ navigation, route }: ILeaguesDetailsScreenProps) => {
    const { onGoBack } = useAppNavigation();
    const { t } = useTranslation();
    const { getTranslationText } = useTranslationText();
    const { leagueId }: any = route.params;
    const { data: leagueSeasonData } = useLeagueSeasons(leagueId);
    const viewState = useViewState();
    const { setAllLeagueSeasons, setSelectedLeagueSeason } = viewState;
    const { getLeagueById, dispatch } = useViewCallback(route, viewState);

    const handleSelectedYear = (item: any) => {
        viewState.setSelectedLeagueSeason(
            viewState.allLeagueSeasons.find(season => season.name === item.content)
        );
        viewState.setOpenModalYear(false);
    };

    const handleCloseModal = () => {
        viewState.setOpenModalYear(false);
    };

    useEffect(() => {
        getLeagueById();

        return () => {
            dispatch(setLeagueSeasons([]));
        };
    }, []);

    useEffect(() => {
        viewState.setYears(
            (viewState.allLeagueSeasons?.length ? viewState.allLeagueSeasons : []).map(season => {
                return {
                    // eslint-disable-next-line no-underscore-dangle
                    id: season._id.$oid,
                    content: season.name,
                    isSelected: viewState.selectedLeagueSeason?.name === season.name,
                };
            })
        );
        const cycles: Cycle[] = viewState.selectedLeagueSeason?.cycles || [];
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        cycles[0] ? viewState.setSelectCycle(cycles[0]) : null;

        const currentGalleries = viewState.selectedLeagueSeason?.gallery || [];
        if (currentGalleries.length) {
            viewState.setGalleries(currentGalleries);
        }

        if (viewState.selectedLeagueSeason?.highlights) {
            viewState.setHightlights(viewState.selectedLeagueSeason.highlights);
        }
    }, [
        viewState.selectedLeagueSeason,
        viewState.allLeagueSeasons,
        viewState.setAllLeagueSeasons,
        viewState.setYears,
        viewState.setSelectCycle,
        viewState.setGalleries,
        viewState.setHightlights,
    ]);

    useEffect(() => {
        const rounds = viewState.selectCycle?.rounds || [];
        const firstRound = rounds[0] ? rounds[0] : null;
        if (firstRound) {
            viewState.setSelectRound(firstRound);
        }
    }, [viewState.selectCycle, viewState.setSelectCycle, viewState.setSelectRound]);

    useEffect(() => {
        if (!leagueSeasonData) {
            return;
        }
        const [error, res] = leagueSeasonData;
        if (error) {
            return;
        }

        const leagueSeasons = res.data.documents;

        dispatch(setLeagueSeasons(leagueSeasons));
        setAllLeagueSeasons(leagueSeasons);
        if (leagueSeasons?.length) {
            setSelectedLeagueSeason(leagueSeasons[0]);
        }
    }, [leagueSeasonData]);

    return {
        t,
        onGoBack,
        handleSelectedYear,
        handleCloseModal,
        getTranslationText,
        ...viewState,
    };
};
