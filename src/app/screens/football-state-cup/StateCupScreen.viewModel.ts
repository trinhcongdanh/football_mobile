/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { useMount } from '@football/app/utils/hooks/useMount';
import { CupModel } from '@football/core/models/CupModelResponse';
import { CupSeasonModel } from '@football/core/models/CupSeasonModelResponse';
import { Cycle, Round } from '@football/core/models/LeagueSeasonModelResponse';
import cupsService from '@football/core/services/Cups.service';
import cupSeasonService, { useCupSeasons } from '@football/core/services/CupSeason.service';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IStateCupScreenProps } from './StateCupScreen.type';

const useViewState = ({ route }: IStateCupScreenProps) => {
    const [cup, setCup] = useState<CupModel>(route?.params.cup);
    const [cupSeasons, setCupSeasons] = useState<CupSeasonModel[]>([]);
    const [allCupSeasons, setAllCupSeasons] = useState<any[]>([]);
    const [isScroll, setIsScroll] = useState(true);

    const [openModalYear, setOpenModalYear] = useState(false);

    const [selectedCupSeason, setSelectedCupSeason] = useState<CupSeasonModel>();
    const [selectCycle, setSelectCycle] = useState<Cycle>();
    const [cycles, setCycles] = useState<any[]>([]);
    const [selectRound, setSelectRound] = useState<Round>();
    const [years, setYears] = useState<any[]>();

    return {
        cup,
        setCup,
        cupSeasons,
        setCupSeasons,
        selectedCupSeason,
        setSelectedCupSeason,
        openModalYear,
        setOpenModalYear,
        isScroll,
        setIsScroll,
        selectCycle,
        setSelectCycle,
        setSelectRound,
        selectRound,
        cycles,
        setCycles,
        years,
        setYears,
        allCupSeasons,
        setAllCupSeasons,
    };
};
const useViewCallback = (route: any, viewState: any) => {
    const { goBack } = useAppNavigator();
    const onGoBack = (): void => {
        goBack();
    };

    const { setCup, setSelectedCupSeason } = viewState;

    const getCupData = useCallback(async () => {
        const [error, res] = await cupsService.findByOId(route?.params?.cupId);
        if (error) {
            return;
        }

        if (res.data.documents?.length) {
            setCup(res.data.documents[0]);
        }
    }, []);

    const cupSeasonsData = useCallback(async (id: string) => {
        const [error, res] = await cupSeasonService.findByOId(id);
        if (error) {
            return;
        }

        const cupSeasons = res.data.documents;

        // dispatch(setLeagueSeasons(leagueSeasons));
        // setAllLeagueSeasons(leagueSeasons);
        if (cupSeasons?.length) {
            setSelectedCupSeason(cupSeasons[0]);
            console.log('setSelectedLeagueSeason', cupSeasons[0]);
        }
    }, []);

    return {
        getCupData,
        onGoBack,
        cupSeasonsData,
    };
};

export const useViewModel = ({ route }: IStateCupScreenProps) => {
    const { t } = useTranslation();
    const { getTranslationText } = useTranslationText();
    const viewState = useViewState({ route });
    const {
        cup,
        setCup,
        cupSeasons,
        setCupSeasons,
        selectedCupSeason,
        setSelectedCupSeason,
        openModalYear,
        setOpenModalYear,
        isScroll,
        setIsScroll,
        selectCycle,
        setSelectCycle,
        setSelectRound,
        selectRound,
        cycles,
        setCycles,
        years,
        setYears,
        allCupSeasons,
        setAllCupSeasons,
    } = viewState;

    const { onGoBack, getCupData, cupSeasonsData } = useViewCallback(route, viewState);

    const handleSelectedYear = (item: any) => {
        cupSeasonsData(item.id);
        viewState.setOpenModalYear(false);
    };

    const handleCloseModal = () => {
        viewState.setOpenModalYear(false);
    };

    useMount(() => {
        if (route?.params?.cupId) {
            console.log('route?.params?.cupId', route?.params?.cupId);
            getCupData();
        }
    });

    useEffect(() => {
        if (!cup) {
            return;
        }

        setAllCupSeasons(cup.seasons);
        cupSeasonsData(cup.seasons[0].cup_season_id);
    }, [cup]);

    useEffect(() => {
        setYears(
            (allCupSeasons?.length ? allCupSeasons : []).map(season => {
                return {
                    id: season.cup_season_id,
                    content: season.cup_season_name,
                    isSelected: selectedCupSeason?.name === season.cup_season_name,
                };
            })
        );
    }, [selectedCupSeason, allCupSeasons, setAllCupSeasons, setYears, setSelectCycle]);

    useEffect(() => {
        const cycles = selectedCupSeason?.cycles || [];

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        cycles[0] ? setSelectCycle(cycles[0]) : null;
    }, [selectedCupSeason]);

    useEffect(() => {
        const rounds = selectCycle?.rounds || [];

        const firstRound = rounds[0] ? rounds[0] : null;
        if (firstRound) {
            setSelectRound(firstRound);
        }
    }, [selectCycle]);

    return {
        t,
        onGoBack,
        getTranslationText,
        ...viewState,
        handleCloseModal,
        handleSelectedYear,
    };
};
