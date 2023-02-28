/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ILeagueTableProps } from '@football/app/screens/football-group-page/layouts/league-table/LeagueTable.type';
import { useMount } from '@football/app/utils/hooks/useMount';
import { Cycle, Round } from '@football/core/models/TeamSeasonResponse';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const useViewState = () => {
    const [openModalCycle, setOpenModalCycle] = useState(false);
    const [selectCycle, setSelectCycle] = useState<Cycle>();
    const [selectedRound, setSelectedRound] = useState<Round>();
    return {
        openModalCycle,
        setOpenModalCycle,
        selectCycle,
        setSelectCycle,
        selectedRound,
        setSelectedRound,
    };
};

export const useViewModel = ({ teamSeason }: ILeagueTableProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    // Cycle

    const state = useViewState();

    useMount(() => {
        if (teamSeason?.cycles?.length) {
            const firstCycle = teamSeason.cycles[0];
            if (firstCycle) {
                state.setSelectCycle(firstCycle);
            }
        }
    });

    useEffect(() => {
        if (state.selectCycle?.rounds?.length) {
            state.setSelectedRound(state.selectCycle?.rounds[0]);
        }
    }, [state.selectCycle]);

    // Top playoff
    const [openModalPlayOff, setOpenModalPlayOff] = useState(false);

    const handleCloseModal = () => {
        state.setOpenModalCycle(false);
        setOpenModalPlayOff(false);
    };

    return {
        t,
        handleCloseModal,
        setOpenModalPlayOff,
        ...state,
        openModalPlayOff,
        navigate,
    };
};
