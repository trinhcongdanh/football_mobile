/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useTranslationText } from '@football/app/utils/hooks/useLanguage';
import { CupSeasonModel } from '@football/core/models/CupSeasonModelResponse';
import { Cycle, Round } from '@football/core/models/LeagueSeasonModelResponse';
import { useCupSeasons } from '@football/core/services/CupSeason.service';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IStateCupScreenProps } from './StateCupScreen.type';

const useViewState = ({ route }: IStateCupScreenProps) => {
    const { cup } = route?.params;
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
const useViewCallback = () => {
    const { goBack } = useAppNavigator();
    const onGoBack = (): void => {
        goBack();
    };
    return {
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
    const { onGoBack } = useViewCallback();

    const { data: cupSeasonsData } = useCupSeasons(cup._id);

    useEffect(() => {
        let cycles: any[] = selectedCupSeason?.cycles || [];

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        cycles[0] ? setSelectCycle(cycles[0]) : null;
    }, [setSelectedCupSeason, selectedCupSeason, cupSeasons]);

    useEffect(() => {
        const rounds = selectCycle?.rounds || [];
        const firstRound = rounds[0] ? rounds[0] : null;
        if (firstRound) {
            setSelectRound(firstRound);
        }
    }, [selectCycle, setSelectCycle, setSelectRound]);

    useEffect(() => {
        if (!cupSeasonsData) {
            return;
        }
        const [error, res] = cupSeasonsData;
        if (!error) {
            const seasons = res.data.documents;
            setCupSeasons(seasons);

            if (seasons?.length) {
                setSelectedCupSeason(seasons[0]);
            }
        }
    }, [cupSeasonsData]);

    const handleSelectedYear = (item: any) => {
        // viewState.setSelectedCupSeason(
        //     viewState.team?.seasons.find(season => season.team_season_name === item.content)
        // );
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
