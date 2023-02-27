/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ILeagueTableProps } from '@football/app/screens/football-group-page/layouts/league-table/LeagueTable.type';
import { useState, useEffect } from 'react';
import { AppImages } from '@football/app/assets/images';
import { Cycle, Round } from '@football/core/models/TeamSeasonResponse';
import { useMount } from '@football/app/utils/hooks/useMount';

const useViewState = () => {
    const [openModalCycle, setOpenModalCycle] = useState(false);
    const [selectCycle, setSelectCycle] = useState<Cycle>();
    const [cycles, setCycles] = useState<any[]>([]);
    const [rounds, setRounds] = useState<any[]>([]);
    const [selectedRound, setSelectedRound] = useState<Round>();
    return {
        openModalCycle,
        setOpenModalCycle,
        selectCycle,
        setSelectCycle,
        cycles,
        setCycles,
        selectedRound,
        setSelectedRound,
        rounds,
        setRounds,
    };
};

export const useViewModel = ({ teamSeason }: ILeagueTableProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    // Cycle

    const state = useViewState();

    const handleSelectedCycle = (item: any) => {
        state.setSelectCycle(item.content);
        const newCycles = state.cycles.map(e => {
            return { ...e, isSelected: e.id === item.id };
        });
        state.setCycles(newCycles);
        state.setOpenModalCycle(false);
    };

    useMount(() => {
        if (teamSeason?.cycles?.length) {
            state.setCycles(
                teamSeason.cycles.map((cycle, index) => {
                    return {
                        id: index,
                        content: cycle.cycle_name_he,
                        isSelected: index === 0,
                    };
                })
            );
            const firstCycle = teamSeason.cycles[0];
            if (firstCycle) {
                state.setSelectCycle(firstCycle);
            }
        }
    });

    useEffect(() => {
        // state.setCycles(
        //     teamSeason?.cycles.map((cycle, index) => {
        //         return {
        //             id: index,
        //             content: cycle.cycle_name_he,
        //             isSelected: cycle.cycle_name_he === state.selectCycle?.cycle_name_he,
        //         };
        //     })
        // );

        // if (state.selectCycle) {
        //     state.setRounds(
        //         state.selectCycle.rounds.map((round, index) => {
        //             return {
        //                 id: index,
        //                 content: round.round_name_he,
        //                 isSelected: round.round_name_he === state.selectedRound?.round_name_he,
        //             };
        //         })
        //     );
        // }

        if (state.selectCycle?.rounds.length) {
            state.setSelectedRound(state.selectCycle?.rounds[0]);
        }
    }, [state.selectCycle]);

    // Top playoff
    const [openModalPlayOff, setOpenModalPlayOff] = useState(false);
    const [selectPlayoff, setSelectPlayoff] = useState('פלייאוף עליון');
    const [playOffs, setPlayOff] = useState<any[]>([
        { id: 1, content: 'פלייאוף עליון', isSelected: true },
        { id: 2, content: 'פלייאוף עליון', isSelected: false },
        { id: 3, content: 'פלייאוף עליון', isSelected: false },
        { id: 4, content: 'פלייאוף עליון', isSelected: false },
        { id: 5, content: 'פלייאוף עליון', isSelected: false },
    ]);
    const handleSelectedPlayOff = (item: any) => {
        setSelectPlayoff(item.content);
        const newPlayOff = playOffs.map(e => {
            return { ...e, isSelected: e.id === item.id };
        });
        setPlayOff(newPlayOff);
        setOpenModalPlayOff(false);
    };

    const handleCloseModal = () => {
        state.setOpenModalCycle(false);
        setOpenModalPlayOff(false);
    };

    return {
        t,
        handleSelectedCycle,
        handleSelectedPlayOff,
        handleCloseModal,
        setOpenModalPlayOff,
        ...state,
        openModalPlayOff,
        selectPlayoff,
        playOffs,
        navigate,
    };
};
