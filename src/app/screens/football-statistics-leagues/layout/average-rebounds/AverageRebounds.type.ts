import {
    AvgGameGoalsKicked,
    LeagueSeasonStatModel,
} from '@football/core/models/LeagueSeasonStatModelResponse';

export type IAverageReboundsProps = {
    avgRebounds: AvgGameGoalsKicked[];
    leagueSeasonStats: LeagueSeasonStatModel;
};
