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
import LeagueSeasonService from '@football/core/services/LeagueSeason.service';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setLeagueSeasons } from 'src/store/league/League.slice';
import { ILeaguesDetailsScreenProps } from './LeaguesDetailsScreen.type';
import moment from 'moment';

const useViewState = () => {
    const [years, setYears] = useState<any[]>([]);
    const [allLeagueSeasons, setAllLeagueSeasons] = useState<any[]>([]);

    // Game season
    const [openModalYear, setOpenModalYear] = useState(false);

    // Few properties changes when selectedLeagueSeason change
    const [selectedLeagueSeason, setSelectedLeagueSeason] = useState<LeagueSeasonModel>();
    const [selectCycle, setSelectCycle] = useState<Cycle | null>();
    const [selectRound, setSelectRound] = useState<Round | null>();
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

    const { setSelectedLeagueSeason, setLeague } = viewState;
    const getLeagueSeasonsData = useCallback(async (id: string) => {
        const [error, res] = await LeagueSeasonService.findByOId(id);
        if (error) {
            return;
        }

        const leagueSeasons = res.data.documents;
        if (leagueSeasons?.length) {
            setSelectedLeagueSeason(leagueSeasons[0]);
            console.log('setSelectedLeagueSeason', leagueSeasons[0]);
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
    const viewState = useViewState();
    const {
        years,
        setYears,
        allLeagueSeasons,
        setAllLeagueSeasons,
        setOpenModalYear,
        selectedLeagueSeason,

        selectCycle,
        setSelectCycle,
        selectRound,
        setSelectRound,

        setGalleries,

        setHightlights,
        league,
    } = viewState;
    const { getLeagueById, getLeagueSeasonsData, dispatch } = useViewCallback(route, viewState);

    const handleSelectedYear = (item: any) => {
        getLeagueSeasonsData(item.id);
        setOpenModalYear(false);
    };

    const handleCloseModal = () => {
        setOpenModalYear(false);
    };

    useEffect(() => {
        getLeagueById();

        return () => {
            dispatch(setLeagueSeasons([]));
        };
    }, []);

    useEffect(() => {
        if (!league) {
            return;
        }

        setAllLeagueSeasons(league.seasons);
        getLeagueSeasonsData(league.seasons[0].league_season_id);
    }, [league]);

    useEffect(() => {
        setYears(
            (allLeagueSeasons?.length ? allLeagueSeasons : []).map(season => {
                return {
                    id: season.league_season_id,
                    content: season.league_season_name,
                    isSelected: selectedLeagueSeason?.name === season.league_season_name,
                };
            })
        );
        const currentGalleries = selectedLeagueSeason?.gallery || [];
        if (currentGalleries.length) {
            setGalleries(currentGalleries);
        }

        if (selectedLeagueSeason?.highlights) {
            setHightlights(selectedLeagueSeason.highlights);
        }

        console.log('year', years);
    }, [
        selectedLeagueSeason,
        allLeagueSeasons,
        setAllLeagueSeasons,
        setYears,
        setSelectCycle,
        setGalleries,
        setHightlights,
    ]);

    useEffect(() => {
        const cycles = selectedLeagueSeason?.cycles || [];

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        if (cycles[0]) {
            let tempSelectedCycle = cycles[0];
            const checkDate = moment().add(3, 'days');
            let foundCycle = false;
            for (let i = cycles.length - 1; i >= 0 && !foundCycle; i--) {
                let cyclesStartDate = moment('2023-01-01', 'YYYY-MM-DD');
                if (cycles[i].start_date != null && cycles[i].start_date != '') {
                    cyclesStartDate = moment(cycles[i].start_date, 'YYYY-MM-DD');
                }
                if (cyclesStartDate.isBefore(checkDate)) {
                    foundCycle = true;
                    tempSelectedCycle = cycles[i];
                }
            }

            setSelectCycle(() => tempSelectedCycle);
        } else {
            setSelectCycle(null);
        }
    }, [selectedLeagueSeason]);

    console.log('cycles', selectCycle);

    useEffect(() => {
        const rounds = selectCycle?.rounds || [];
        if (rounds[0]) {
            let tempSelectedRound = rounds[0];
            const checkDate = moment().add(3, 'days');
            let foundRound = false;
            for (let i = rounds.length - 1; i >= 0 && !foundRound; i--) {
                let roundStartDate = moment('2023-01-01', 'YYYY-MM-DD');
                if (rounds[i].start_date != null && rounds[i].start_date != '') {
                    roundStartDate = moment(rounds[i].start_date, 'YYYY-MM-DD');
                }
                if (roundStartDate.isBefore(checkDate)) {
                    foundRound = true;
                    tempSelectedRound = rounds[i];
                }
            }

            setSelectRound(() => tempSelectedRound);
        } else {
            setSelectRound(null);
        }
    }, [selectCycle]);
    console.log('rounds', selectRound);

    return {
        t,
        onGoBack,
        handleSelectedYear,
        handleCloseModal,
        getTranslationText,
        ...viewState,
    };
};
