/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ILeagueTableProps } from '@football/app/screens/football-group-page/layouts/league-table/LeagueTable.type';
import { LeagueSeasonModel } from '@football/core/models/LeagueSeasonModelResponse';
import { Cycle, Round } from '@football/core/models/TeamSeasonResponse';
import { useLeagueSeasonById } from '@football/core/services/LeagueSeason.service';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const useViewState = () => {
    const [selectCycle, setSelectCycle] = useState<Cycle>();
    const [selectedRound, setSelectedRound] = useState<Round>();
    const [leagueSeason, setLeagueSeason] = useState<LeagueSeasonModel>();
    return {
        selectCycle,
        setSelectCycle,
        selectedRound,
        setSelectedRound,
        leagueSeason,
        setLeagueSeason,
    };
};

export const useViewModel = ({ leagueSeasonId }: ILeagueTableProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();
    // Cycle
    const { data: leagueSeasonData } = useLeagueSeasonById(leagueSeasonId!);
    const state = useViewState();

    useEffect(() => {
        if (state.selectCycle?.rounds?.length) {
            state.setSelectedRound(state.selectCycle?.rounds[0]);
        }
    }, [state.selectCycle]);

    useEffect(() => {
        if (!leagueSeasonData) {
            return;
        }
        const [error, res] = leagueSeasonData;
        if (error || !res) {
            return;
        }

        if (res.data.documents?.length) {
            console.log('res.data.documents', res.data.documents);
            const leagueSeasons = res.data.documents;
            state.setLeagueSeason(leagueSeasons[0]);
            if (leagueSeasons[0]?.cycles?.length) {
                const firstCycle = leagueSeasons[0].cycles[0];
                if (firstCycle) {
                    state.setSelectCycle(firstCycle);
                }
            }
        }
    }, [leagueSeasonData]);

    return {
        t,
        ...state,
        navigate,
        leagueSeasonData,
    };
};
