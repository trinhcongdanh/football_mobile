import {
    AvgGameGoalsKicked,
    LeagueSeasonStatModel,
} from '@football/core/models/LeagueSeasonStatModelResponse';

export type IAverageScoresProps = {
    avgGoalKicker: AvgGameGoalsKicked[];
    leagueSeasonStats: LeagueSeasonStatModel;
};
