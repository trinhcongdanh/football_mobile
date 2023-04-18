/* eslint-disable no-underscore-dangle */
import TeamSeasonService from '@football/core/services/TeamSeason.service';
import { ScreenName } from '@football/app/utils/constants/enum';
/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from 'react-i18next';
import { useAppNavigator } from '@football/app/routes/AppNavigator.handler';
import { useState, useCallback } from 'react';
import { TeamSeasonStatsModel } from '@football/core/models/TeamSeasonStatsResponse';
import TeamSeasonStatsService from '@football/core/services/TeamSeasonStats.service';
import { useMount } from '@football/app/utils/hooks/useMount';
import { TeamSeasonModel } from '../../../core/models/TeamSeasonResponse';
import { IStatisticsGroupScreenProps, TeamGoalKickersListType } from './StatisticsGroupScreen.type';

const useViewState = () => {
    const [teamSeasonStats, setTeamSeasonStats] = useState<TeamSeasonStatsModel>();
    return {
        teamSeasonStats,
        setTeamSeasonStats,
    };
};

const useViewCallback = (route: any, viewState: any) => {
    const { setTeamSeasonStats } = viewState;

    const getTeamSeasonStatsData = useCallback(async () => {
        const statisticId = route?.params?.statisticId;

        if (statisticId) {
            const [error, res] = await TeamSeasonStatsService.findByOId(statisticId);
            if (error) {
                return;
            }
            if (res?.data?.documents?.length > 0) {
                setTeamSeasonStats(res.data.documents[0]);
            }

            return;
        }

        const teamSeasonId = route?.params?.teamSeasonId;
        const [error, res] = await TeamSeasonService.findByOId(teamSeasonId);
        if (error) {
            return;
        }

        if (res?.data?.documents?.length > 0) {
            const teamSeason = res.data.documents[0] as TeamSeasonModel;

            const [teamSeasonStatError, teamSeasonStatRes] = await TeamSeasonStatsService.findByOId(
                teamSeason._id
            );

            if (teamSeasonStatError) {
                return;
            }

            if (teamSeasonStatRes?.data?.documents?.length > 0) {
                setTeamSeasonStats(teamSeasonStatRes.data.documents[0]);
            }
        }
    }, []);

    return {
        getTeamSeasonStatsData,
    };
};

export const useViewModel = ({ navigation, route }: IStatisticsGroupScreenProps) => {
    const { navigate, goBack } = useAppNavigator();
    const { t } = useTranslation();

    const onGoBack = (): void => {
        goBack();
    };

    const state = useViewState();
    const { getTeamSeasonStatsData } = useViewCallback(route, state);

    const handleTeamGoalKickersList = (listType: TeamGoalKickersListType) => {
        switch (listType) {
            case TeamGoalKickersListType.GoalKickersLeague:
                navigate(ScreenName.GoalKickerListPage, {
                    teamSeasonStats: state.teamSeasonStats,
                    data: state.teamSeasonStats?.goal_kickers_league,
                    props: 'num_of_goals',
                    title: t('statistics.group.scorer_of_goal'),
                    titleLeft: t('statistics.group.player_name'),
                    titleRight: t('statistics.group.number'),
                });
                break;

            case TeamGoalKickersListType.GoalKickersNationalCup:
                navigate(ScreenName.GoalKickerListPage, {
                    teamSeasonStats: state.teamSeasonStats,
                    data: state.teamSeasonStats?.goal_kickers_national_cup,
                    props: 'num_of_goals',
                    title: t('statistics.group.scorer_of_goal_state_cup'),
                    titleLeft: t('statistics.group.player_name'),
                    titleRight: t('statistics.group.number'),
                });
                break;

            case TeamGoalKickersListType.GoalKickersTotoCup:
                navigate(ScreenName.GoalKickerListPage, {
                    teamSeasonStats: state.teamSeasonStats,
                    data: state.teamSeasonStats?.goal_kickers_toto_cup,
                    title: t('statistics.group.top_scorers'),
                    props: 'num_of_goals',
                    titleLeft: t('statistics.group.player_name'),
                    titleRight: t('statistics.group.number'),
                });
                break;
            case TeamGoalKickersListType.YellowCardsTotoCup:
                navigate(ScreenName.GoalKickerListPage, {
                    teamSeasonStats: state.teamSeasonStats,
                    data: state.teamSeasonStats?.yellow_cards_toto_cup,
                    title: t('statistics.group.yellow_cup'),
                    props: 'num_of_cards',
                    titleLeft: t('statistics.group.player_name'),
                    titleRight: t('statistics.group.number_yellow'),
                });
                break;
            case TeamGoalKickersListType.YellowCardsLeague:
                navigate(ScreenName.GoalKickerListPage, {
                    teamSeasonStats: state.teamSeasonStats,
                    data: state.teamSeasonStats?.yellow_cards_league,
                    title: t('statistics.group.yellow_league'),
                    props: 'num_of_cards',
                    titleLeft: t('statistics.group.player_name'),
                    titleRight: t('statistics.group.number_yellow'),
                });
                break;

            case TeamGoalKickersListType.RedCards:
                navigate(ScreenName.GoalKickerListPage, {
                    teamSeasonStats: state.teamSeasonStats,
                    data: state.teamSeasonStats?.red_cards,
                    title: t('statistics.group.red_card'),
                    props: 'num_of_cards',
                    titleLeft: t('statistics.group.player_name'),
                    titleRight: t('statistics.group.number_red'),
                });
                break;

            default:
                break;
        }
    };

    useMount(() => {
        getTeamSeasonStatsData();
    });

    return { t, onGoBack, ...state, handleTeamGoalKickersList };
};
