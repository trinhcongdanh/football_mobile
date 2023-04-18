import { Card, LeagueSeasonStatModel } from '@football/core/models/LeagueSeasonStatModelResponse';

export type IAccumulationYellowsProps = {
    yellowCards: Card[];
    leagueSeasonStats: LeagueSeasonStatModel;
};
