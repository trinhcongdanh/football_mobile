import {
    AvgGameYellowCard,
    LeagueSeasonStatModel,
} from '@football/core/models/LeagueSeasonStatModelResponse';

export type IAverageYellowsProps = {
    avgCards: AvgGameYellowCard[];
    leagueSeasonStats: LeagueSeasonStatModel;
};
