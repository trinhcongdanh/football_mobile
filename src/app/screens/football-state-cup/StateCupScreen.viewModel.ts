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
import moment from 'moment';

const useViewState = ({ route }: IStateCupScreenProps) => {
    const [cup, setCup] = useState<CupModel>(route?.params.cup);
    const [cupSeasons, setCupSeasons] = useState<CupSeasonModel[]>([]);
    const [allCupSeasons, setAllCupSeasons] = useState<any[]>([]);
    const [isScroll, setIsScroll] = useState(true);

    const [openModalYear, setOpenModalYear] = useState(false);

    const [selectedCupSeason, setSelectedCupSeason] = useState<CupSeasonModel>();
    const [selectCycle, setSelectCycle] = useState<Cycle | null>();
    const [cycles, setCycles] = useState<any[]>([]);
    const [selectRound, setSelectRound] = useState<Round | null>();
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
        selectedCupSeason,
        selectCycle,
        setSelectCycle,
        setSelectRound,
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
        if (route?.params?.cup) {
            console.log('route?.params?.cupId', route?.params?.cup);
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
        if (cycles[0]) {
            // setSelectCycle(() => cycles[0]);
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
    }, [selectedCupSeason]);

    useEffect(() => {
        const rounds = selectCycle?.rounds || [];

        if (rounds[0]) {
            // setSelectRound(() => rounds[0]);
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

    return {
        t,
        onGoBack,
        getTranslationText,
        ...viewState,
        handleCloseModal,
        handleSelectedYear,
    };
};
