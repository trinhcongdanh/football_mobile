import { useEffect, useCallback, useState } from 'react';
/* eslint-disable react-hooks/exhaustive-deps */
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { ScreenName } from '@football/app/utils/constants/enum';
import { useMount } from '@football/app/utils/hooks/useMount';
import { Game, Season, TeamModel } from '@football/core/models/TeamModelResponse';
import TeamService from '@football/core/services/Team.service';
import { useTranslation } from 'react-i18next';
import TeamSeasonService from '@football/core/services/TeamSeason.service';
import { TeamSeasonModel } from '@football/core/models/TeamSeasonResponse';
import { TeamSquadScreenType } from '@football/app/screens/football-team-squad';
import { IGroupPageScreenProps } from './GroupPageScreen.type';
import { useGame } from '@football/app/utils/hooks/useGame';

const useViewState = (route: any) => {
    const [selectYear, setSelectYear] = useState();
    const [team, setTeam] = useState<TeamModel>();
    const [selectedSeason, setSelectedSeason] = useState<Season>();
    const [openModalYear, setOpenModalYear] = useState(false);
    const [years, setYears] = useState<any[]>();
    const [teamSeason, setTeamSeason] = useState<TeamSeasonModel>();

    const teamDetail = route?.params?.team;

    return {
        selectYear,
        setSelectYear,
        team,
        setTeam,
        selectedSeason,
        setSelectedSeason,
        openModalYear,
        setOpenModalYear,
        years,
        setYears,
        teamSeason,
        setTeamSeason,
        teamDetail,
    };
};

const useViewCallback = (route: any, viewState: any) => {
    const { setTeam, team, setSelectedSeason, setYears, setTeamSeason, teamDetail } = viewState;

    const getTeamData = useCallback(async () => {
        const [error, res] = await TeamService.findByOId(teamDetail?._id);
        if (error) {
            return;
        }
        if (res.data.documents.length) {
            setTeam(res.data.documents[0]);
        }
    }, []);

    const getTeamSeasonData = useCallback(async (id: string | undefined) => {
        if (!id) return;
        const [error, res] = await TeamSeasonService.findByOId(id);
        if (error) {
            return;
        }
        if (res.data.documents.length) {
            setTeamSeason(res.data.documents[0]);
        }
    }, []);

    return {
        getTeamData,
        getTeamSeasonData,
    };
};

export const useViewModel = ({ navigation, route }: IGroupPageScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const state = useViewState(route);
    const { getTeamData, getTeamSeasonData } = useViewCallback(route, state);

    const handleSelectedYear = (item: any) => {
        state.setSelectedSeason(
            state.team?.seasons.find(season => season.team_season_name === item.content)
        );
        state.setOpenModalYear(false);
    };

    const handleCloseModal = () => {
        state.setOpenModalYear(false);
    };

    const groups = [
        {
            id: 1,
            name: t('group_page.cast'),
            screen: ScreenName.TeamSquadPage,
            selectedTab: TeamSquadScreenType.Personnel,
        },
        {
            id: 2,
            name: t('group_page.official'),
            screen: ScreenName.TeamSquadPage,
            selectedTab: TeamSquadScreenType.Staff,
        },
    ];

    // Show Info Group

    const [showInfo, setShowInfo] = useState(false);
    const showInfoGroup = () => {
        setShowInfo(!showInfo);
    };

    const handleMoreStatistics = (statisticId: string) => {
        navigate(ScreenName.StatisticsGroupPage, { statisticId });
    };

    const onNavigateStadium = (stadiumId: string) => {
        navigate(ScreenName.PitchPage, { stadiumId });
    };

    useMount(() => {
        getTeamData();
    });

    useEffect(() => {
        if (state.team === null) return;
        if (state?.team?.seasons?.length) {
            state.setSelectedSeason(state.team.seasons[0]);
            const customizeSelections = state.team.seasons.map((season: Season, index: number) => {
                return {
                    id: index,
                    content: season.team_season_name,
                    isSelected: index === 0,
                };
            });
            state.setYears(customizeSelections);
        }
    }, [state.team]);

    useEffect(() => {
        const customizeSelections = state?.team?.seasons.map((season: Season, index: number) => {
            return {
                id: index,
                content: season.team_season_name,
                isSelected: season.team_season_id === state.selectedSeason?.team_season_id,
            };
        });
        state.setYears(customizeSelections);

        getTeamSeasonData(state.selectedSeason?.team_season_id);
    }, [state.selectedSeason]);

    return {
        t,
        onGoBack,
        ...state,
        groups,
        handleCloseModal,
        handleSelectedYear,
        showInfoGroup,
        showInfo,
        handleMoreStatistics,
        onNavigateStadium,
        navigate,
    };
};
