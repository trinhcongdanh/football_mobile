/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { useMount } from '@football/app/utils/hooks/useMount';
import { CupModel } from '@football/core/models/CupModelResponse';
import { CupSeasonModel } from '@football/core/models/CupSeasonModelResponse';
import { Cycle, Round } from '@football/core/models/LeagueSeasonModelResponse';
import cupsService from '@football/core/services/Cups.service';
import { useCupSeasons } from '@football/core/services/CupSeason.service';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IStateCupScreenProps } from './StateCupScreen.type';

const useViewState = ({ route }: IStateCupScreenProps) => {
    const [cup, setCup] = useState<CupModel>(route?.params.cup);
    const [cupSeasons, setCupSeasons] = useState<CupSeasonModel[]>([]);

    const [isScroll, setIsScroll] = useState(true);

    const [openModalYear, setOpenModalYear] = useState(false);
    const [openModalCycle, setOpenModalCycle] = useState(false);
    const [openModalRound, setOpenModalRound] = useState(false);

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
        openModalCycle,
        setOpenModalCycle,
        isScroll,
        setIsScroll,
        selectCycle,
        setSelectCycle,
        setSelectRound,
        selectRound,
        openModalRound,
        setOpenModalRound,
        cycles,
        setCycles,
        years,
        setYears,
    };
};
const useViewCallback = (route, viewState: any) => {
    const { goBack } = useAppNavigator();
    const onGoBack = (): void => {
        goBack();
    };

    const { setCup } = viewState;

    const getCupData = useCallback(async () => {
        const [error, res] = await cupsService.findByOId(route?.params?.cupId);
        if (error) {
            return;
        }

        if (res.data.documents?.length) {
            setCup(res.data.documents[0]);
        }
    }, []);

    return {
        getCupData,
        onGoBack,
    };
};

export const useViewModel = ({ route }: IStateCupScreenProps) => {
    const { t } = useTranslation();
    const { getTranslationText } = useTranslationText();
    const viewState = useViewState({ route });
    const {
        cup,
        cupSeasons,
        setCupSeasons,
        selectedCupSeason,
        setSelectedCupSeason,
        selectCycle,
        setSelectCycle,
        setSelectRound,
    } = viewState;
    const { onGoBack, getCupData } = useViewCallback(route, viewState);

    useMount(() => {
        if (route?.params?.cupId) {
            console.log('route?.params?.cupId', route?.params?.cupId)
            getCupData();
        }
    });

    const { data: cupSeasonsData } = useCupSeasons(cup?._id);

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

    useEffect(() => {
        if (!cupSeasonsData) {
            return;
        }
        const [error, res] = cupSeasonsData;
        if (!error) {
            const seasons = res.data.documents;
            setCupSeasons(seasons);

            viewState.setYears(
                (seasons?.length ? seasons : []).map(season => {
                    return {
                        // eslint-disable-next-line no-underscore-dangle
                        id: season._id,
                        content: season.name,
                        isSelected: viewState.selectedCupSeason?.name === season.name,
                    };
                })
            );

            if (seasons?.length) {
                setSelectedCupSeason(seasons[0]);
            }
        }
    }, [cupSeasonsData]);

    const handleSelectedYear = (item: any) => {
        viewState.setSelectedCupSeason(
            viewState.cupSeasons.find(season => season.name === item.content)
        );
        viewState.setOpenModalYear(false);
    };

    const handleCloseModal = () => {
        viewState.setOpenModalYear(false);
    };

    return {
        t,
        onGoBack,
        getTranslationText,
        ...viewState,
        handleCloseModal,
        handleSelectedYear,
    };
};
