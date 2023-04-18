import {
    GoalKicker,
    LeagueSeasonStatModel,
} from '@football/core/models/LeagueSeasonStatModelResponse';

export type IScoresGoalsProps = {
    goalKickers: GoalKicker[];
    leagueSeasonStats: LeagueSeasonStatModel;
};
